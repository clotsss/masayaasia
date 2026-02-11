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

    if (videoRef.current) {
      // FORCE ATTRIBUTES for mobile compatibility
      videoRef.current.muted = true;
      videoRef.current.setAttribute('playsinline', 'true');
      
      videoRef.current.play().catch(err => {
        // Fallback for Low Power Mode on mobile
        const playOnTouch = () => {
          videoRef.current?.play();
          window.removeEventListener('touchstart', playOnTouch);
        };
        window.addEventListener('touchstart', playOnTouch);
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-black' : 'text-white';
  const navBg = scrolled ? 'bg-white/95 shadow-md' : 'backdrop-blur-md bg-transparent';

  return (
    <div className="min-h-screen bg-white">
      
      {/* NAVIGATION: Added h-16 for better finger-tapping area and mobile link visibility */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${navBg}`}>
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-12 flex justify-between items-center relative">
          <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-28 md:w-32 h-10 cursor-pointer">
              <Image 
                src="/masayaAsiaLtd-.webp" 
                alt="masayatrip Logo" 
                fill 
                className="object-contain" 
                priority 
                unoptimized 
              />
            </div>
          </Link>

          {/* MOBILE & DESKTOP LINKS: Removed 'hidden' to ensure users can see links on mobile */}
          <div className="flex items-center gap-3 md:gap-10">
            <div className="flex items-center gap-3 md:gap-6">
              <Link href="/about-us" className={`${textColor} text-[10px] md:text-[12px] font-bold md:font-light tracking-wide`}>
                About
              </Link>
              <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[10px] md:text-[11px] font-bold md:font-light`}>
                Explore
              </Link>
            </div>
            
            <Link href="https://www.masayatrip.com/contact-us" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-[11px] text-white bg-pink-700 px-4 py-2 rounded-full hover:bg-[#00C2FF] transition-all">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: Fixed 100vh for mobile browser bars */}
      <header className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900">
        <video 
          ref={videoRef}
          autoPlay loop muted playsInline 
          poster="/herovideo.webp" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* Use MP4 first for better Android/iOS compatibility */}
          <source src="/herovideo.mp4" type="video/mp4" />
          <source src="/herovideo.webm" type="video/webm" />
        </video>
        
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-3xl md:text-6xl font-black mb-4 drop-shadow-xl uppercase tracking-tighter">MASAYA ASIA</h1>
          <p className="text-lg md:text-2xl font-medium drop-shadow-md">Find your perfect stay with us today.</p>
        </div>
      </header>

      {/* SERVICES SECTION: Fixed Grid for Mobile (1 column) to Desktop (4 columns) */}
      <section className="bg-[#f8fafc] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 border-l-4 border-pink-500 pl-6">
            <h3 className="text-2xl md:text-3xl font-black text-blue-950 uppercase">Premium Services</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.name} className="group bg-white border border-gray-100 shadow-sm overflow-hidden">
                <Link href={service.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video">
                  <Image 
                    src={service.src} 
                    alt={service.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    unoptimized
                  />
                </Link>
                <div className="p-6">
                  <h4 className="text-lg font-black text-blue-950 uppercase mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm line-clamp-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-6 px-6 text-center">
        <p className="text-[10px] tracking-widest uppercase font-bold opacity-70">
          © 2026 MasayaAsia Portal | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
