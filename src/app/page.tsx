"use client";
import { useState, useEffect } from "react";
import SplashEntry from "@/components/SplashEntry";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Countdown from "@/components/Countdown";
import Events from "@/components/Events";
import Family from "@/components/Family";
import VideoHighlights from "@/components/VideoHighlights";
import AudioPlayer from "@/components/AudioPlayer";
import { CornerOrnament } from "@/components/Ornaments";
import Petals from "@/components/Petals";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
      setIsPlaying(true);
    }
  }, [isOpen]);

  return (
    <main className="w-full bg-[#0A2617] relative min-h-screen">

      {/* Universal Floral Texture Background - Opacity dramatically increased so it's super visible! */}
      <div
        className="fixed inset-0 z-0 opacity-[0.35] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/floral-motif.png')" }}
      ></div>

      <SplashEntry onOpen={() => setIsOpen(true)} />

      <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

        {/* Global Corner Floral / Vines */}
        <CornerOrnament className="absolute top-0 left-0 z-0" />
        <CornerOrnament className="absolute top-0 right-0 rotate-90 z-0" />

        {/* Global falling rose petals! */}
        <Petals />

        <div className="relative z-10 bg-transparent">
          <Hero />
          <Couple />
          <VideoHighlights />
          <Countdown />
          <Events />
          <Family />
        </div>

        <footer className="py-12 bg-[#0A2617] border-t border-[#D4AF37]/20 flex justify-center text-center relative z-10 overflow-hidden">
          <CornerOrnament className="absolute bottom-0 left-0 -rotate-90 z-0" />
          <CornerOrnament className="absolute bottom-0 right-0 rotate-180 z-0" />
          <p className="font-sans text-[10px] tracking-widest uppercase text-[#F3E5AB]/50 relative z-10">
            Devika & Akhil • May 10th, 2026
          </p>
        </footer>

        <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </main>
  );
}
