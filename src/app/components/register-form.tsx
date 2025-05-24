"use client";

import React from "react";


import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { signUp } from "@/lib/auth-client";


 export const RegisterForm = () => {
    async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const formData = new FormData(evt.target as HTMLFormElement);

        const name = String(formData.get("name"));
        if (!name) return toast.error("Name is required");

        const email = String(formData.get("email"));
        if (!email) return toast.error("Email is required");

        const password = String(formData.get("password"));
        if (!password) return toast.error("Password is required");

        await signUp.email(
        {
            name,
            email,
            password,
        },
        {
            onRequest: () => {},
            onResponse: () => {},
            onError: (ctx) => {
                toast.error(ctx.error.message);
            },
            onSuccess: () => {},
        }
    )
        
}
    return(
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
                <div className="absolute">
                    <form onSubmit={handleSubmit}className="flex flex-col space-y-4">
                        <div>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 bg-[#EBE2EF] text-black placeholder-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="email"
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 block w-full px-3 py-2 bg-[#EBE2EF] text-black placeholder-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="username"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full px-3 py-2 bg-[#EBE2EF] text-black placeholder-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="password"
                            />
                        </div>
                        <div className="flex justify-center pt-4">
                            <Button
                            type="submit"
                        className="flex justify-center w-30 bg-[#AFA2B3] text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                submit
                        </Button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}