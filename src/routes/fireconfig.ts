import admin from "firebase-admin";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import {deleteApp, getApps, getApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBLVpJJl1idgz7gjuSEBeoKMtMSKndnExo",
  authDomain: "quant-club-spring-2023.firebaseapp.com",
  databaseURL: "https://quant-club-spring-2023-default-rtdb.firebaseio.com",
  projectId: "quant-club-spring-2023",
  storageBucket: "quant-club-spring-2023.appspot.com",
  messagingSenderId: "827359826791",
  appId: "1:827359826791:web:75bb244275369c718095c2",
  measurementId: "G-B1EWEHY3LQ"
};


// initialize firebase admin

try{ admin.initializeApp({
  credential: admin.credential.cert('secrets.json'),
  ...firebaseConfig
});} catch(err){ admin.app() }


// initialize firebase client


let firebaseClientApp;


if(!getApps().length){
  firebaseClientApp = initializeApp(firebaseConfig, "client")
}else{
  firebaseClientApp = getApp("client")
  // deleteApp(firebaseClientApp)
  // firebaseClientApp = initializeApp(firebaseConfig, "client")
}



const auth = getAuth(firebaseClientApp)

// Initialize Firestore
// The firestore object is used for client-side interactions with Firestore, 
// while the firestoreAdmin object is used for server-side administrative interactions 
// with Firestore (such as creating indexes or deleting collections).



const db = getFirestore(firebaseClientApp);
// const db = firebaseClientApp.firestore()


export {db, auth, signInWithEmailAndPassword};
export default admin;


