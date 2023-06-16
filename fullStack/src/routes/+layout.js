export const ssr = false;
import { isLoggedIn } from "../utils/auth"; 

export async function load() {
    await isLoggedIn()
}