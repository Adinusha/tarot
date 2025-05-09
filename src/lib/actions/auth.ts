"use server";
import { signIn, signOut } from "next-auth/react";

export const login = async () => {
    await signIn("github", { callbackUrl: "/" });
};

export const logout = async () => {
    await signOut({ redirect: false, callbackUrl: "/" });
};