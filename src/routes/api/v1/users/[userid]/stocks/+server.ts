import { db } from "../../../../../fireconfig";
import { collection, doc, addDoc, setDoc, getDocs } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";

// Allows code to access .env values
import * as dotenv from 'dotenv';
dotenv.config();


// Create a new stock for user
export const POST = async ({ request, params }) => {
    const reqJson = await request.json();

    let stock_id, quantity: number;
    let buy_time: string;
    
    ({ stock_id, quantity, buy_time } = reqJson);

    // Assert that the request body has all of the necessary fields
    if (stock_id == undefined || quantity == undefined || buy_time == undefined) {
        return new Response("ERROR: Some body parameters are not present", 
                            { status: 400 });
    }
    // Assert that the stock has a valid ID
    if (!(await stockExists(stock_id))) {
        return new Response("Stock does not exist", { status: 404 });
    }

    let userid: string;
    ({ userid } = params);

    // This is what will be pushed to the db
    const newStockData = { user_id: userid, polygon_id: stock_id.toString(), 
        buy_time: buy_time, quantity: quantity};

    // Push the stock data while saving the Firebase ID
    const docID: string = (await addDoc(collection(db, "stock"), newStockData)).id;

    const responseData = { "user_stocks": [ 
        { ...newStockData, stock_id: docID } // Merges newStockData with the stock_id field
    ] };

    return new Response(JSON.stringify(responseData), { status: 201, 
        headers: { "Content-Type": "application/json" } });
}


/**
 * Checks if a stock exists by seeing if its stock ID is recognized by the Polygon API
 * @param polygon_id The Polygon ID of the stock (e.g. "AAPL" or "ESP")
 * @returns Whether the stock exists (true = yes, false = no or error)
 */
async function stockExists(polygon_id: string) {
    const apiKey = process.env.POLYGON_API_KEY;
    // Make a "Tickers" request to Polygon, which returns a list of stocks
    // that match the given ID
    const reqURL = "https://api.polygon.io/v3/reference/tickers?ticker=" + polygon_id + 
                    "&active=true&apiKey=" + apiKey;
    const tickerResponse = await fetch(reqURL);

    if (tickerResponse == undefined) {
        console.log("\x1b[31mERROR: Failed to communicate with Polygon API. Reason unknown.");
        return false;
    }

    // Get response JSON, including the list of matching stocks
    const tickerJSON = await tickerResponse.json();
    
    // Some error handling. Won't stay like this in the final version, but good for debugging
    if (tickerJSON["status"] == "ERROR") {
        if (tickerJSON["error"] == "Unknown API Key") {
            console.log("\x1b[31mERROR: Bad Polygon API key. Make sure the correct API key is defined in " +
                        "a .env file in the root folder and named POLYGON_API_KEY");
        }
        else {
            console.log("\x1b[31mERROR: Error getting stock data from Polygon API. Reason unknown.");
        }
        return false;
    }

    const results = tickerJSON["results"];
    // Stock is valid as long as at least one stock matched the ID
    return (results.length > 0);
}


// Get all user stocks
export const GET = async ({ request, params }) => {
    let userid: string;
    ({ userid } = params);

    // Gets what is essentially a list of all documents in the 'stock' collection
    const querySnapshot = await getDocs(collection(db, "stock"));

    let stockDocs: DocumentData[] = [];
    // Iterate over all docs, adding each one with matching user ID to the list
    querySnapshot.forEach((doc) => {
        if (doc.get("user_id") == userid) {
            const docData = doc.data();
            stockDocs.push({ "stock_id": doc.id, ...docData })
        }
    });

    const responseData = { "user_stocks": stockDocs }

    return new Response(JSON.stringify(responseData), { status: 200, 
        headers: { "Content-Type": "application/json" } });
}

// Delete all user stocks