import { readable } from "svelte/store";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmb17k36Uhai1Dbw2xAuqWSEHHBQlhIeE",
    authDomain: "fir-test4-78f3e.firebaseapp.com",
    projectId: "fir-test4-78f3e",
    storageBucket: "fir-test4-78f3e.appspot.com",
    messagingSenderId: "147120568362",
    appId: "1:147120568362:web:35758a65a6304dd0bd2b53"
};


const fbapp = initializeApp(firebaseConfig);
const fireStoreDB = getFirestore(fbapp);
export { fireStoreDB as db}; 

// const fbapp = initializeApp(firebaseConfig);
// const app = readable(fbapp);
// const db = readable(getFirestore(fbapp));

// export { db as firestoreDB, app as firebaseApp };

