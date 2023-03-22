import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { writable, type Writable } from 'svelte/store'

const firebaseConfig: object = {
    apiKey: "AIzaSyBmb17k36Uhai1Dbw2xAuqWSEHHBQlhIeE",
    authDomain: "fir-test4-78f3e.firebaseapp.com",
    projectId: "fir-test4-78f3e",
    storageBucket: "fir-test4-78f3e.appspot.com",
    messagingSenderId: "147120568362",
    appId: "1:147120568362:web:35758a65a6304dd0bd2b53"
};

const fbapp:FirebaseApp = initializeApp(firebaseConfig);
const fireStoreDB: Firestore = getFirestore(fbapp);
export const DB: Writable<Firestore> = writable(fireStoreDB)