import admin from "firebase-admin";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase, {deleteApp, getApps, getApp} from 'firebase/app'



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
  firebaseClientApp = firebase.initializeApp(firebaseConfig, "client")
}else{
  firebaseClientApp = getApp("client")
  deleteApp(firebaseClientApp)
  firebaseClientApp = firebase.initializeApp(firebaseConfig, "client")
}

const auth = getAuth(firebaseClientApp)

export {auth, signInWithEmailAndPassword};
export default admin;


