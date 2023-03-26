import { json, text } from '@sveltejs/kit';
import { auth } from '../../../../db.js';
import { signInWithEmailAndPassword } from 'firebase/auth'
 
/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
  let email, password;
  try {
    ({ email, password } = await request.json());
    if (!email || !password) throw new Error("");
  } catch {
    return text("Invalid Request", { status: 400});
  }
  try {
    return json(await signInWithEmailAndPassword(auth, email, password), { status: 201 })
  } catch {
    return new Response(JSON.stringify("User Not Found"), { status: 404 })
  }
}