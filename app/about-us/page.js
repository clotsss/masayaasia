'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  // Logic for the automatic image transition
  const transitionImages = ['/one.webp', '/two.webp', '/three.webp', '/four.webp'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transitionImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [transitionImages.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-100 selection:text-pink-600">
      
      {/* NAVIGATION BAR - ENSURES WHITE LOGO ON DARK NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-900/60 backdrop-blur-md px-6 py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="relative w-32 h-10 cursor-pointer hover:opacity-80 transition-all">
              <Image 
                src="/MasayaAsiaLtd-.webp" 
                alt="Masaya Logo" 
                fill 
                className="object-contain brightness-0 invert" 
                priority 
                unoptimized
              />
            </div>
          </Link>

          <Link href="/" className="group flex items-center">
            <span className="text-white text-[11px] uppercase tracking-[0.3em] hover:text-pink-500 transition-all duration-300 cursor-pointer">
              Close
            </span>
          </Link>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-[40vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/sunset.webp"
            alt="Corporate Sunset"
            fill
            className="object-cover object-bottom opacity-60 scale-105"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-white font-bold uppercase tracking-[0.5em] text-[10px] mb-3">Corporate Profile</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Our Identity <span className="text-white">&</span> Mission
          </h1>
          <div className="w-12 h-1 bg-white mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h3 className="text-2xl text-slate-900 tracking-tighter uppercase border-l-4 border-pink-500 pl-4">About us</h3>
            <p className="text-slate-600 leading-relaxed text-[13px] text-justify">
              Masaya Asia Limited is a premier travel and tour company dedicated to creating unforgettable travel experiences across Asia. With our headquarters strategically located in Hong Kong, we have established a strong and reliable presence throughout the continent, with operational offices in key destinations including Bali, Manila, Shanghai, Beijing, Chengdu, and Taiwan.
            </p>
            <p className="text-black font-bold italic leading-relaxed text-[12px]">
              Our name, <span className="text-pink-500 font-bold underline decoration-2 underline-offset-4">Masaya</span>, which means happy in Filipino, is the core of our philosophy. We believe in delivering joy and satisfaction through seamless travel solutions, expert local knowledge, and a commitment to excellence.
            </p>
          </div>
          
          <div className="relative h-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50">
            {transitionImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image 
                  src={src} 
                  alt={`Masaya Culture ${index + 1}`} 
                  fill 
                  className="object-cover object-bottom" 
                  unoptimized
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* REST OF THE SECTIONS (Mission, Offer, Approach, Footer) */}
      {/* ... (Keep your existing code for these sections as they use standard Tailwind and text) */}
      
      {/* Footer ensures consistency with unoptimized branding if needed */}
      <footer className="bg-slate-950 py-10 px-6 border-t border-white/5">
        {/* ... existing footer content */}
      </footer>
    </div>
  );
}
