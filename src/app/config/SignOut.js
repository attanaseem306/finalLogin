import firebase_app from "@/app/config/firebase";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signout() {
    let result = null,
        error = null;
    try {
        result = await signOut(auth);
    } catch (e) {
        error = e;
    }

    return { result, error };
}