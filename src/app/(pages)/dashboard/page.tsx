 
import { useMemo } from "react";
import Navbar from "@/app/components/navbar";
import { SignOutButton } from "@/app/components/sing-out-button";

const tarotCards = [
    { title: "The Fool", img: "/TheFool.webp", desc: "New beginnings, spontaneity, and a free spirit." },
    { title: "Death", img: "/Death.webp", desc: "Transformation, endings, and new opportunities." },
    { title: "High Priestess", img: "/HighPriestess.webp", desc: "Intuition, wisdom, and hidden knowledge." },
    { title: "Hanged Man", img: "/HangedMan.webp", desc: "Letting go, new perspectives, and surrender." },
    { title: "The Devil", img: "/TheDevil.webp", desc: "Temptation, materialism, and self-imposed limitations." },
    { title: "The Hermit", img: "/TheHermit.webp", desc: "Solitude, inner guidance, and reflection." },
    { title: "The Moon", img: "/TheMoon.webp", desc: "Illusion, intuition, and the subconscious." },
    { title: "The Sun", img: "/TheSun.webp", desc: "Joy, success, and positivity." },
    { title: "The Tower", img: "/TheTower.png", desc: "Sudden change, upheaval, and revelation." },
    { title: "Wheel Of Fortune", img: "/WheelOfFortune.webp", desc: "Cycles, fate, and turning points." },
];

const horoscopes: Record<string, string> = {
    Aries: "Take bold steps today—opportunity is on your side.",
    Taurus: "Patience brings rewards. Trust your instincts.",
    Gemini: "Communication opens new doors for you.",
    Cancer: "Focus on self-care and emotional balance.",
    Leo: "Your confidence will inspire others today.",
    Virgo: "Attention to detail will pay off.",
    Libra: "Seek harmony in your relationships.",
    Scorpio: "Transformation is coming—embrace it.",
    Sagittarius: "Adventure awaits. Be open to new ideas.",
    Capricorn: "Hard work brings recognition.",
    Aquarius: "Innovation leads to progress.",
    Pisces: "Let your intuition guide you.",
    Unknown: "Let the stars surprise you today!"
};

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
    const baseNumbers: Record<string, number> = {
        Aries: 9, Taurus: 6, Gemini: 5, Cancer: 2, Leo: 1, Virgo: 3,
        Libra: 7, Scorpio: 8, Sagittarius: 4, Capricorn: 8, Aquarius: 11, Pisces: 12, Unknown: 5
    };
    const base = baseNumbers[zodiac] || 5;
    const today = new Date().toISOString().slice(0, 10);
    const hash = Array.from(today + zodiac).reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return ((base * hash) % 99) + 1;
}

function getDailyCard() {
    const today = new Date().toISOString().slice(0, 10);
    const hash = Array.from(today).reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return tarotCards[hash % tarotCards.length];
}

export default function DashboardPage() {
    const zodiac = useMemo(() => getZodiacSign(), []);
    const luckyNumber = useMemo(() => getLuckyNumber(zodiac), [zodiac]);
    const dailyCard = useMemo(() => getDailyCard(), []);

    return (
        <div className="min-h-screen w-full flex flex-col font-inter text-gray-900 bg-gradient-to-br from-[#2F2235] via-[#1a1625] to-[#3a2d4d] relative">
            {/* Navbar */}
            <div className="w-full sticky top-0 z-50">
                <Navbar />
            </div>
            <main className="flex-1 flex flex-col items-center justify-center px-2 py-6">
                <div className="w-full max-w-lg space-y-4">
                    {/* Welcome & Lucky Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white/90 rounded-xl shadow p-3 flex flex-col items-center text-center">
                            <h1 className="text-xl font-bold text-[#2F2235] mb-1">Welcome <span role="img" aria-label="crystal ball">🔮</span></h1>
                            <p className="text-[#6B3FA0] text-sm font-light">Your tarot dashboard</p>
                        </div>
                        <div className="bg-white/90 rounded-xl shadow p-3 flex flex-col items-center text-center">
                            <h2 className="text-base font-bold text-[#6B3FA0] mb-1">Lucky Number</h2>
                            <span className="text-2xl font-extrabold text-[#2F2235] mb-1">{luckyNumber}</span>
                            <div className="text-xs text-[#6B3FA0]">for {zodiac}</div>
                        </div>
                    </div>
                    {/* Daily Card & Horoscope */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center text-center">
                            <h2 className="text-sm font-bold text-[#6B3FA0] mb-1">Card of the Day</h2>
                            <img
                                src={dailyCard.img}
                                alt={dailyCard.title}
                                className="w-20 h-32 rounded shadow mb-1 object-cover border-0"
                                style={{ background: "#fff" }}
                            />
                            <div className="text-sm text-[#2F2235] font-semibold">{dailyCard.title}</div>
                            <p className="text-xs text-[#6B3FA0] font-light">{dailyCard.desc}</p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center text-center min-h-0">
                            <h3 className="text-sm font-bold text-[#6B3FA0] mb-1">Horoscope for {zodiac}</h3>
                            <p className="text-[#2F2235] text-xs font-light leading-tight">{horoscopes[zodiac]}</p>
                        </div>
                    </div>
                    {/* Quick Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                        <a
                            href="/draw"
                            className="bg-gradient-to-r from-[#FFC6C6] to-[#FFD6D6] text-[#2F2235] font-bold px-4 py-2 rounded-lg shadow transition-all duration-200 text-sm w-full sm:w-auto text-center"
                        >
                            Draw a Card
                        </a>
                        <SignOutButton/>
                    </div>
                </div>
            </main>
            {/* Subtle blurred gradient accents */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute left-[-10vw] top-[70vh] w-[20vw] h-[20vw] bg-pink-200 opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute right-[-10vw] top-[10vh] w-[20vw] h-[20vw] bg-blue-200 opacity-10 rounded-full blur-2xl"></div>
            </div>
        </div>
    );
}