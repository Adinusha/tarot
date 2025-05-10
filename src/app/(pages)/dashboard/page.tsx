

export default function DashboardPage() {
    return (
        <div className="bg-gradient-to-tr from-[#2F2235] to-[#000000] h-screen flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                <svg
                    className="w-auto h-auto max-w-full max-h-full scale-[480%]  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1885 880"
                    fill="none"
                >
                    <path d="M1226.5 0H1884.5V880H1226.5L0 415.5L1226.5 0Z" fill="#AFA2B3" />
                </svg>
                <div className="absolute  bg-[#AFA2B3] text-white font-bold py-2 px-4 rounded-full  transition duration-300 ease-in-out">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    </div>
            </div>
            
          
        </div>
      );
    };

