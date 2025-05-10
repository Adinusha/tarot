import Link from "next/link";


export default function Login() {
    return (
        <div className="bg-gradient-to-r from-[#2F2235] to-[#000000] h-screen flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                <svg
                    className="w-auto h-auto max-w-full max-h-full scale-[110%]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1885 880"
                    fill="none"
                >
                    <path d="M1226.5 0H1884.5V880H1226.5L0 415.5L1226.5 0Z" fill="#AFA2B3" />
                </svg>

                <button
                    className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#AFA2B3] text-white font-bold py-2 px-4 rounded-full hover:bg-[#8f8a9b] transition duration-300 ease-in-out"
                ><Link href="/dashboard">
                    DASHBOARD
                </Link>


                </button>
                <button 
                    className="top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#AFA2B3] text-white font-bold py-2 px-4 rounded-full hover:bg-[#8f8a9b] transition duration-300 ease-in-out"
                >GITHUB

                
                </button>
            </div>
        </div>
    );
}