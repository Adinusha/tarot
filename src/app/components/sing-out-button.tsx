"use client";

import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const SignOutButton = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleClick() {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You’ve logged out. See you soon!");
          router.push("/auth/login");
        },
      },
    });
  }

  return (
 
        <Button
        className="w-full h-full rounded-lg shadow relative bg-[#4D3657] flex justify-center items-center"
        onClick={handleClick}
        size="sm"
        variant="destructive"
        disabled={isPending}
        >
        <h1 className="text-3xl text-center ">Sign Out</h1>
        </Button>

    
  );
};