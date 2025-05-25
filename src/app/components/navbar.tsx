import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center gap-6 py-2 bg-[#69487a] shadow-md sticky top-0 z-50 overflow-hidden">
      {/* Home Button */}
      <Link href="/dashboard" className="flex flex-col items-center group">
        <img
          src="/home.png"
          alt="Home"
          className="w-6 h-6 mb-0.5 group-hover:scale-110 transition-transform"
        />
        <span className="text-[10px] text-white group-hover:text-[#2F2235]">Home</span>
      </Link>
      {/* Taropedia Button */}
      <a href="http://localhost/page.php" className="flex flex-col items-center group">
        <span className="w-6 h-6 mb-0.5 flex items-center justify-center">
          <img src="/wiki.png" alt="Taropedia" className="w-6 h-6" />
        </span>
        <span className="text-[10px] text-white group-hover:text-[#2F2235]">Taropedia</span>
      </a>
      {/* Draw Button */}
      <Link href="/draw" className="flex flex-col items-center group">
        <img
          src="/cad.png"
          alt="Draw"
          className="w-6 h-6 mb-0.5 group-hover:scale-110 transition-transform"
        />
        <span className="text-[10px] text-white group-hover:text-[#2F2235]">Draw</span>
      </Link>
    </nav>
  );
}