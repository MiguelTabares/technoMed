import "./firebase"
import { getAuth, signOut } from "firebase/auth"

export const authFirebase = getAuth()

export const logout = async () => {
    signOut(authFirebase)
}