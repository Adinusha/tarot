"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
    const router = useRouter();
    async function handleClick(){}
    return <Button onClick={handleClick} size='sm' variant='destructive'>Sign Out</Button>
};
