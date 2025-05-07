import Link from 'next/link';
export default function Mainpage() {
    return (
    <div className="flex flex-col h-screen bg-gradient-to-tr from-[#2F2235] to-[#000000] overflow-hidden">
        <div className="md:shrink-0 md:grid md:grid-cols-2 md:content-around md:items-center md:justify-items-center md:gap-4">
            {/* Header */}
            <div className="md:items-start flex flex-col items-center  ">
                <h1 className="text-[40px] w-full h-full text-center text-white leading-tight">
                    TAKE A LOOK <br /> INTO YOUR LIFE
                </h1>
            </div>

            {/* Cards Section */}
            <div className="relative w-[300px] h-[300px] mx-auto mt-8  md:w-[600px] md:h-[400px]">
                {/* Left Card */}
                <img
                    className="absolute rounded-xl top-4 left-0 w-[153px] h-[286px] transform -rotate-12 md:w-[200px] md:h-[350px] md:top-8 md:left-[50px]"
                    src="/TheTower.png"
                    alt="The Tower Card"
                />
                {/* Center Card */}
                <img
                    className="absolute rounded-xl top-0 left-[75px] w-[153px] h-[286px] transform rotate-0 z-10 md:w-[200px] md:h-[350px] md:top-0 md:left-[200px]"
                    src="/WheelOfFortune.webp"
                    alt="Wheel of Fortune Card"
                />
                {/* Right Card */}
                <img
                    className="absolute rounded-xl top-4 left-[150px] w-[153px] h-[286px] transform rotate-12 md:w-[200px] md:h-[350px] md:top-8 md:left-[350px]"
                    src="/Death.webp"
                    alt="Death Card"
                />
            </div>

            {/* Draw Button */}
            <div className="flex flex-col items-center  mt-12">
                <Link href="/Login">
                    <button className="bg-white text-black text-[24px] font-bold py-2 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow md:text-[28px] md:py-3 md:px-10">
                        DRAW
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
}   