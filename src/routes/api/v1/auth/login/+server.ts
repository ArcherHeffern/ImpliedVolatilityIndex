import { json, text } from '@sveltejs/kit';
import admin, { auth, signInWithEmailAndPassword }from '../../../../fireconfig';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';


// API route = api/v1/auth/login

async function authenticateUser(email: string, password: string) {    // Authenticate user with Firbase authentication
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    return idToken;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
}

function tokenExpirationTime(token: string): string {
  const decodedToken = jwt.decode(token) as JwtPayload | null;
  const expirationTime = decodedToken?.exp;
  let expirationDate;
  if(expirationTime){
    expirationDate = new Date(expirationTime * 1000);
  }else{
    return "invalid token"
  }
  return expirationDate.toLocaleString();
}

// needs to implement user token refresh
export const POST = async ({ request }) => {
  const auth = admin.auth()
  // validate input
  let email: string, password: string;
  try {
    ({ email, password } = await request.json());
    if (!email || !password) throw new Error("");
  } catch {
    return text("Invalid Request", { status: 400});
  }
  // get token or die trying
  try {
    const token = await authenticateUser(email, password)   // Method that gets the token from firebase authentication
    const verifyResponse = await auth.verifyIdToken(token)
    const response = {"token": token,
                      "experiation date":  tokenExpirationTime(token), 
                      "user": {
                        "user_id": verifyResponse.user_id,
                        "email": verifyResponse.email,
                      }}
    return json(response, { status: 201 })   // Verify the token and try to access the database
  } catch {
    return new Response(JSON.stringify("User Not Found"), { status: 404 })
  }

}