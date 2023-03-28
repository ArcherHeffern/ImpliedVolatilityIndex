import { json, text } from '@sveltejs/kit';
import { admin, auth, signInWithEmailAndPassword}from '../../../../fireconfig';




async function authenticateUser(email: string, password: string) {    // Authenticate user with Firbase authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const idToken = userCredential.user.getIdToken();
      return idToken
    })
    .catch((error) => {
      console.error('Error authenticating user:', error);
      throw error
  });
}

export const POST = async ({ request }) => {
  const admin = require('firebase-admin');
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
    const token = authenticateUser(email, password)   // Method that gets the token from firebase authentication
    return json(await auth.verifyIdToken(token), { status: 201 })   // Verify the token and try to access the database
  } catch {
    return new Response(JSON.stringify("User Not Found"), { status: 404 })
  }
}