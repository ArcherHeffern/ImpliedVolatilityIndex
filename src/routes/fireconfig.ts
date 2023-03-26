import admin from "firebase-admin";
import serviceAccount from "../../secrets.json"

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

// export const firebaseApp = initializeApp(firebaseConfig);

try {
    admin.initializeApp({
      credential: {...admin.credential.cert(`${serviceAccount}`), ...firebaseConfig},
      databaseURL: "https://quant-club-spring-2023-default-rtdb.firebaseio.com"
    });
} catch {
    console.log("error")
}

export default admin;