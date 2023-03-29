// potentially make token verification here as an component

import type { FirebaseApp } from "firebase/app"
import admin from "./fireconfig"
export async function verifyUser(token : string){
    const auth = admin.auth()
    try {
        const decodedToken = await auth.verifyIdToken(token)
        return decodedToken
      }catch{
        return Error
    }
}
