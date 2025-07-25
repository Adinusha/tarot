"use client";

import React from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { signIn } from "@/lib/auth-client";
import { Label } from "./ui/label";
import Link from "next/link";


 export const LoginForm = () => {
    async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const formData = new FormData(evt.target as HTMLFormElement);

        const email = String(formData.get("email"));
        if (!email) return toast.error("Email is required");

        const password = String(formData.get("password"));
        if (!password) return toast.error("Password is required");

        await signIn.email(
            {
                email,
                password,
            },
            {
                onRequest: () => {},
                onResponse: () => {},
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: () => {
                     toast.success("You &apos, ve logged in successfully!");
                    window.location.href = "/dashboard";
                },
            }
        )
    }       

    return (
        <div className="bg-gradient-to-r from-[#2F2235] to-[#000000] h-screen flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                <svg 
                    className="scale-[460%] md:w-[100%] md:h-[100%] md:scale-[110%] md:max-w-full md:max-h-full md:inset-0 md:-translate-x-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1885 880"
                    fill="none"
                >
                    <path d="M1226.5 0H1884.5V880H1226.5L0 415.5L1226.5 0Z" fill="#AFA2B3" />
                </svg>
                <div className="absolute bg-[#4D3657] w-78 h-180 md:h-148 md:w-300 flex justify-center items-center rounded-md shadow-lg"></div>
                <div className="absolute -translate-y-[270px] md:-translate-x-[550px] md:-translate-y-[-240px]">
                    <img src="\image 22.png" alt="" className="md:w-60 md:h-60" />
                </div>

                <div className="absolute -translate-y-[-277px] w-[131px] h-[166px] md:w-[460px] md:h-[585px] md:-translate-y-[-26px] md:translate-x-[380px]">
                    <img src="\tumblr_9967cdfbe402d12f00bf074d21a7d104_dd63b2d3_500.png" />
                </div>

                {/* Form Section */}
                <div className="absolute md:left-90 md:top-67">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:size-[300px]" >
                        <div>
                            <Label htmlFor="email">Enter your Email:</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 bg-[#EBE2EF] text-black placeholder-grey placeholder-[font-family:'Inria Serif'] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-lg"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                             <Label htmlFor="password">Enter your password:</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full px-3 py-2 bg-[#EBE2EF] text-black placeholder-grey placeholder-[font-family:'Inria Serif'] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-lg"
                                placeholder="Password"
                            />
                        </div>

                        {/* Link Section */}
                        <div className="mt-4 text-center">
                            <p className="text-sm text-white">
                                You don't have an account?{" "}
                                <Link href="/auth/register" className="text-[#FFC6C6] hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                        <div className="flex justify-center pt-4">
                            <Button
                                type="submit"
                                className="flex justify-center w-30 bg-[#AFA2B3] text-white py-2 px-4 rounded-md hover:bg-[#2F2235] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Log In
                            </Button>
                              
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );        
}