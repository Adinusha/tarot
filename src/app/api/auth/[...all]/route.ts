import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
 
export const { POST, GET } = toNextJsHandler(auth);


// this lives in /api/auth/[...all]

// /api/auth/sing-in
// /api/auth/sign-up
// /api/auth/get-session