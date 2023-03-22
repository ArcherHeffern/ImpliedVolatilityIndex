import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

initializeApp(firebaseConfig);
export const firestore = getFirestore()