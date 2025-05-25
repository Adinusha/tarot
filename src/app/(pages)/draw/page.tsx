"use client";
import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/navbar";

const images = [
  { src: 'Death.webp', text: 'Transformation and new beginnings.' },
  { src: 'HangedMan.webp', text: 'Letting go and seeing things differently.' },
  { src: 'HighPriestess.webp', text: 'Intuition and hidden knowledge.' },
  { src: 'TheDevil.webp', text: 'Temptation and shadow self.' },
  { src: 'TheFool.webp', text: 'New journeys and innocence.' },
  { src: 'TheHermit.webp', text: 'Solitude and inner guidance.' },
  { src: 'TheMoon.webp', text: 'Illusion and the subconscious.' },
  { src: 'TheSun.webp', text: 'Joy and success.' },
  { src: 'TheTower.png', text: 'Sudden change and upheaval.' },
  { src: 'WheelOfFortune.webp', text: 'Cycles and destiny.' },
];

export default function Login() {
  const selected = useMemo(() => (
    [...images].sort(() => 0.5 - Math.random()).slice(0, 5)
  ), []);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [cardPos, setCardPos] = useState<{ left: number, top: number } | null>(null);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const purpleRef = useRef<HTMLDivElement | null>(null);

  // Card sizes
  const bigWidth = 160, bigHeight = 224;
  const smallWidth = 112, smallHeight = 160;

  // When a card is clicked, get its position and animate to center
  const handleCardClick = (idx: number) => {
    if (isAnimatingOut) return;
    if (activeIdx !== null && flipped) {
      setFlipped(false);
      setIsAnimatingOut(true);
      setTimeout(() => {
        setActiveIdx(null);
        setIsAnimatingOut(false);
        setTimeout(() => {
          const card = cardRefs.current[idx];
          if (card) {
            const rect = card.getBoundingClientRect();
            setCardPos({
              left: rect.left,
              top: rect.top
            });
            setActiveIdx(idx);
            setTimeout(() => setFlipped(true), 350);
          }
        }, 10);
      }, 350);
      return;
    }
    if (!flipped) {
      const card = cardRefs.current[idx];
      if (card) {
        const rect = card.getBoundingClientRect();
        setCardPos({
          left: rect.left,
          top: rect.top
        });
        setActiveIdx(idx);
        setTimeout(() => setFlipped(true), 350);
      }
    }
  };

  // Calculate center of the purple rectangle
  let purpleCenter = { x: 0, y: 0 };
  if (typeof window !== "undefined" && purpleRef.current) {
    const rect = purpleRef.current.getBoundingClientRect();
    purpleCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }

  // Calculate initial and animate positions for the animated card
  let initial = {};
  let animate = {};
  if (activeIdx !== null && cardPos && purpleRef.current) {
    initial = {
      left: cardPos.left,
      top: cardPos.top,
      width: smallWidth,
      height: smallHeight,
      position: "fixed" as const,
      zIndex: 50,
      scale: 1,
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.15)",
    };
    animate = flipped
      ? {
          left: purpleCenter.x - bigWidth / 2 - 120,
          top: purpleCenter.y - bigHeight / 2 - 60,
          width: bigWidth,
          height: bigHeight,
          position: "fixed" as const,
          zIndex: 50,
          scale: 1.08,
          boxShadow: "0 8px 32px 0 rgba(80,0,120,0.25)",
          transition: { type: "spring", stiffness: 260, damping: 22 }
        }
      : {
          left: cardPos.left,
          top: cardPos.top,
          width: smallWidth,
          height: smallHeight,
          position: "fixed" as const,
          zIndex: 50,
          scale: 1,
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.15)",
          transition: { type: "spring", stiffness: 300, damping: 30 }
        };
  }

  return (
    <div className="bg-gradient-to-r from-[#2F2235] to-[#000000] h-screen w-screen flex justify-center items-center relative overflow-hidden">
      <Navbar />
      {/* SVG and background */}
      <svg
        className="scale-[460%] md:w-[100%] md:h-[100%] md:scale-[110%] md:max-w-full md:max-h-full md:inset-0 md:-translate-x-[50px] absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1885 880"
        fill="none"
      >
        <path d="M1226.5 0H1884.5V880H1226.5L0 415.5L1226.5 0Z" fill="#AFA2B3" />
      </svg>
      {/* Purple rectangle */}
      <div
        ref={purpleRef}
        className="absolute bg-[#4D3657] w-78 h-180 md:h-148 md:w-300 flex flex-col justify-end items-center rounded-md shadow-lg"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        {/* Cards at the bottom INSIDE the purple rectangle */}
        <div className="mb-6 flex gap-4 z-10">
          {selected.map((item, idx) => (
            <div
              key={idx}
              ref={(el: HTMLDivElement | null) => { cardRefs.current[idx] = el; }}
              className={`w-28 h-40 rounded flex items-center justify-center cursor-pointer ${activeIdx === idx ? "opacity-0 pointer-events-none" : "hover:scale-105"}`}
              onClick={() => handleCardClick(idx)}
            >
              <img
                src="Cards.webp"
                alt="Card back"
                className="w-full h-full object-contain rounded pointer-events-none select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animated card moving to center of the purple rectangle */}
      <AnimatePresence>
        {activeIdx !== null && cardPos && purpleRef.current && (
          <motion.div
            initial={initial}
            animate={animate}
            exit={initial}
            style={{
              perspective: 1200,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Show text to the LEFT when flipped */}
            {flipped && activeIdx !== null && (
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: -40 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mr-8 px-8 py-6 bg-[#2F2235] rounded text-white text-lg font-medium flex items-center"
                style={{ minHeight: bigHeight, maxWidth: 340 }}
              >
                {selected[activeIdx].text}
              </motion.div>
            )}
            {/* Flipping card */}
            <motion.div
              style={{
                width: bigWidth,
                height: bigHeight,
                position: "relative",
                transformStyle: "preserve-3d",
                flexShrink: 0,
              }}
              animate={{
                rotateY: flipped ? 180 : 0,
              }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => {
                setFlipped(false);
                setTimeout(() => setActiveIdx(null), 350);
              }}
            >
              {/* Card front */}
              <div
                className="absolute inset-0 flex items-center justify-center backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="Cards.webp"
                  alt="Card back"
                  className="w-full h-full object-contain rounded"
                  draggable={false}
                />
              </div>
              {/* Card back */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden"
                }}
              >
                <img
                  src={flipped && activeIdx !== null ? selected[activeIdx].src : "Cards.webp"}
                  alt={flipped && activeIdx !== null ? selected[activeIdx].text : "Card back"}
                  className="w-full h-full object-contain rounded"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}