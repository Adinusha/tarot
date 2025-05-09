"use client";

import { signIn } from "next-auth/react";

export const login = async (provider: string) => {
    if (typeof window !== "undefined") {
        await signIn(provider, { callbackUrl: "/" });
    }
};