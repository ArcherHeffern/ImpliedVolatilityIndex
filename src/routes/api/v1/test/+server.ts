import { db } from '../../../fireconfig'
import { json, text } from '@sveltejs/kit';
import { collection, addDoc } from "firebase/firestore";

export async function POST() {
    let count = 14
   // const specialOfTheDay = doc(db, `dailySpecial/2021-09-${count}`)
    const usersRef = collection(db, "users");
    try {
        const docData = {
            doc_id: count,
            description: "a latte",
            price: 3.99,
            milk: "Whole",
            vegan: false
        }
        count++;
    
        // await setDoc(specialOfTheDay, docData)
        const docRef = await addDoc(usersRef, docData);
        return json(docRef, {status: 200})
    } catch (e) {
        console.log(e)
    }
}