'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { 
    name: 'Discovery Hotels', 
    desc: 'Experience world-class luxury and comfort in the heart of the islands.', 
    src: '/hotels.webp', 
    link: 'https://www.masayatrip.com/hotels' 
  },
  { 
    name: 'Dining', 
    desc: 'Savor the flavors of the Philippines with our curated culinary tours and beachside dinners.', 
    src: '/dining.webp', 
    link: 'https://www.masayatrip.com/dining' 
  },
  { 
    name: 'Transportation', 
    desc: 'Seamless travel between islands with our premium transport services and private transfers.', 
    src: '/transportation.webp', 
    link: 'https://www.masayatrip.com/transportations/' 
  },
  { 
    name: 'Tours', 
    desc: 'Explore hidden gems and iconic landmarks with our professionally guided island excursions.', 
    src: '/tour.webp', 
    link: 'https://www.masayatrip.com/tours' 
  }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const video = videoRef.current;
    if (video) {
      // Compatibility: Explicitly set muted/playsinline for mobile browsers
      video.muted = true;
      video.defaultMuted = true;
      
      const attemptPlay = () => {
        video.play().catch(() => {
          // Fallback: Autoplay is often blocked on mobile Low Power Mode until a user touch
          const forcePlay = () => {
            video.play();
            window.removeEventListener('touchstart', forcePlay);
          };
          window.addEventListener('touchstart', forcePlay);
        });
      };
      attemptPlay();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-black' : 'text-white';
  const navBg = scrolled ? 'bg-white/90 shadow-md' : 'backdrop-blur-xl bg-transparent';

  return (
    <div className="min-h-screen bg-white">
      
      {/* NAVIGATION - Improved mobile layout without changing logic */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${navBg}`}>
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-12 flex justify-between items-center relative">
          <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-28 md:w-32 h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity">
              <Image 
                src="/masayaAsiaLtd-.webp" 
                alt="masayatrip Logo" 
                fill 
                className="object-contain transition-all duration-300" 
                priority 
                unoptimized 
              />
            </div>
          </Link>

          {/* Revised: Allow small screens to see links without the 'hidden' restriction */}
          <div className="flex absolute left-1/2 -translate-x-1/2 items-center gap-3 md:gap-10 z-10 overflow-x-auto no-scrollbar max-w-[40%] md:max-w-none">
            <div className="flex items-center gap-3 md:gap-6">
              <Link href="/about-us" className={`${textColor} text-[10px] md:text-[12px] tracking-wide font-bold md:font-light whitespace-nowrap`}>
                About
              </Link>
              <Link href="https://www.masayatrip.com/privacy-policy" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[10px] md:text-[11px] font-bold md:font-normal`}>Policy</Link>
            </div>
            <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[10px] md:text-[11px] font-bold md:font-normal`}>Explore</Link>
          </div>

          <Link href="https://www.masayatrip.com/contact-us" target="_blank" rel="noopener noreferrer" className="z-10 text-[10px] md:text-[11px] tracking-tight md:tracking-[0.2em] text-white bg-pink-700 px-3 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-[#00C2FF] transition-all whitespace-nowrap">
            Contact
          </Link>
        </div>
      </nav>

      {/* HERO SECTION - Fixed Video Compatibility */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          // @ts-ignore: Required for older iOS devices
          webkit-playsinline="true"
          poster="/herovideo.webp" 
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          {/* Priority: MP4 first for maximum mobile compatibility */}
          <source src="/herovideo.mp4" type="video/mp4" />
          <source src="/herovideo.webm" type="video/webm" />
        </video>
        
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>
        
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tighter uppercase">MASAYA ASIA</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-100 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-md">Find your perfect stay with us today.</p>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="bg-[#f8fafc] min-h-screen flex flex-col justify-between pt-20 pb-6 px-6 snap-start">
        <div className="max-w-7xl mx-auto w-full grow flex flex-col justify-center">
          <div className="mb-8 border-l-4 border-pink-500 pl-6">
            <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tighter leading-none">Premium Services</h3>
            <p className="text-gray-500 font-bold text-[9px] uppercase tracking-[0.4em] mt-2">Curated Excellence for Your Journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.name} className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <Link href={service.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
                  <Image 
                    src={service.src} 
                    alt={service.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">View Details</div>
                  </div>
                </Link>
                <div className="p-8 flex flex-col">
                  <h4 className="text-lg font-black text-blue-950 uppercase tracking-tight mb-3">{service.name}</h4>
                  <p className="text-gray-600 font-medium text-[12px] leading-relaxed line-clamp-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-4 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="w-full flex justify-center">
            <p className="text-white text-[8px] tracking-[0.4em] uppercase font-bold antialiased text-center">
              © 2026 MasayaAsia Portal <span className="mx-2 text-white/50">|</span> All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
