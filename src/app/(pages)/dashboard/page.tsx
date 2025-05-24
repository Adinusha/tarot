import { SignOutButton } from "@/app/components/sing-out-button";
import Link from "next/link";
import { useMemo } from "react";

// Removed duplicate and invalid async DashboardPage function.
// If you need user info, implement session fetching in the main component or via props/context.

function getZodiacSign(date = new Date()) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    return "Unknown";
}


function getLuckyNumber(zodiac: string) {
    // Assign a base number for each sign 
    const baseNumbers: Record<string, number> = {
        Aries: 9, Taurus: 6, Gemini: 5, Cancer: 2, Leo: 1, Virgo: 3,
        Libra: 7, Scorpio: 8, Sagittarius: 4, Capricorn: 8, Aquarius: 11, Pisces: 12, Unknown: 5
    };
    const base = baseNumbers[zodiac] || 5;
    // random number between 1 and 99
    const today = new Date().toISOString().slice(0, 10);
    const hash = Array.from(today + zodiac).reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return ((base * hash) % 99) + 1;
}

export default function DashboardPage() {
    const zodiac = useMemo(() => getZodiacSign(), []);
    const luckyNumber = useMemo(() => getLuckyNumber(zodiac), [zodiac]);

    return (
        <div className="bg-gradient-to-tr from-[#2F2235] to-[#000000] h-screen flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                <svg
                    className="w-auto h-auto max-w-full max-h-full scale-[450%] md:scale-[110%] "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1885 880"
                    fill="none"
                >
                    <path d="M1226.5 0H1884.5V880H1226.5L0 415.5L1226.5 0Z" fill="#AFA2B3" />
                </svg>
                <div className="absolute flex flex-col justify-center items-center gap-6">
                    <div className="bg-[#4D3657] w-[360px] h-[118px] rounded-lg shadow relative flex justify-center items-center">
                        <h1 className="text-4xl text-center">Welcome Back 🔮 </h1>
                    </div>
                    <div className="bg-[#4D3657] w-[360px] h-[150px] rounded-lg shadow relative flex justify-center pt-6 ">
                        <h1 className="text-3xl text-center ">
                            Today's Lucky Number<br />
                            <span className="items-center justify-center text-4xl font-bold">{luckyNumber}</span>
                            <div className="text-base mt-2">({zodiac})</div>
                        </h1>
                    </div>
                    <div className="bg-[#4D3657] w-[360px] h-[80px] rounded-lg shadow relative">
                        <Link href={"/draw"}>
                            <button className="w-full h-full rounded-lg shadow relative flex justify-center items-center">
                                <h1 className="text-3xl text-center">Get Lucky</h1>
                            </button>
                        </Link>
                        <SignOutButton />
                    </div>
                </div>
            </div>
        </div>
    );
}