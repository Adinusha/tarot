"use client";

import { login } from "@/lib/actions/auth";

export default function Login() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-tr from-[#2F2235] to-[#000000] overflow-hidden">
            {/* Header */}
            <div className="flex flex-col items-center pt-[100px]">
                <h1 className="text-[40px] text-center text-white leading-tight">
                    TAKE A LOOK <br /> INTO YOUR LIFE
                </h1>
            </div>

            {/* Login Form */}
            <div className="flex flex-col items-center mt-8">
                <input
                    type="text"
                    placeholder="Username"
                    className="bg-white text-black text-[24px] font-bold py-2 px-4 rounded-lg shadow-md mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-white text-black text-[24px] font-bold py-2 px-4 rounded-lg shadow-md mb-4"
                />
                <button className="bg-white text-black text-[24px] font-bold py-2 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    LOGIN
                </button>
                <button onClick={() => login()}  className="bg-white text-black text-[24px] font-bold py-2 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                   GITHUB
                </button>
            </div>
        </div>
    );
}