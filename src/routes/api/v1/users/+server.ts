import { json, text } from '@sveltejs/kit';
import admin from '../../../fireconfig';
const auth = admin.auth()

// Create new user

export const POST = async ({ request }) => {
    let email: string, password: string;
    try {
        ({ email, password } = await request.json());
        if (!email || !password) throw new Error("");
    } catch {
        return text("Invalid Request", { status: 400});
    }
    try {
        let userRecord = await auth.createUser({email, password})
        return json(userRecord.toJSON(), { status: 200 })
    } catch (e: any) {
        return new Response(e, { status: 400 })
    }
    }

// Delete user

export const DELETE = async () => {
    const auth = admin.auth();

}