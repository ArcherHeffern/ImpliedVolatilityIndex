import { json, text } from '@sveltejs/kit';
import admin from '../../../../fireconfig';
 
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
    return json(await auth.verifyIdToken(), { status: 201 })
  } catch {
    return new Response(JSON.stringify("User Not Found"), { status: 404 })
  }
}