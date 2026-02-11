'use client';
import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: 'Discovery Hotels', desc: 'Experience world-class luxury and comfort in the heart of the islands.', src: '/hotels.webp', link: 'https://www.masayatrip.com/hotels' },
  { name: 'Dining', desc: 'Savor the flavors of the Philippines with our curated culinary tours and beachside dinners.', src: '/dining.webp', link: 'https://www.masayatrip.com/dining' },
  { name: 'Transportation', desc: 'Seamless travel between islands with our premium transport services and private transfers.', src: '/transportation.webp', link: 'https://www.masayatrip.com/transportations/' },
  { name: 'Tours', desc: 'Explore hidden gems and iconic landmarks with our professionally guided island excursions.', src: '/tour.webp', link: 'https://www.masayatrip.com/tours' }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  // FIX 1: Explicitly type the ref to prevent the TypeScript "never" error
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // FIX 2: Ensure video plays on live servers
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-black' : 'text-white';
  const navBg = scrolled ? 'bg-white/90 shadow-md' : 'backdrop-blur-xl bg-transparent';
  
  return (
    <div className="min-h-screen bg-white">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${navBg}`}>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex justify-between items-center relative">
          <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-32 h-12 cursor-pointer hover:opacity-80 transition-opacity">
              <Image 
                src="/masayaasialtd-.webp" 
                alt="masayatrip Logo" 
                fill 
                // FIX 3: Added dynamic filter to make logo white on transparent nav
                className={`object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} 
                priority 
                unoptimized 
              />
            </div>
          </Link>

          {/* CENTER NAVIGATION ITEMS */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 z-10">
            <div className="flex items-center gap-6">
              <div className="relative group py-5">
                <Link href="/about-us" className={`${textColor} text-[12px] tracking-wide hover:text-[#ff00e1] transition-colors whitespace-nowrap font-light`}>
                  About us
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/aboutus.webp" alt="About Us" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
              
              <div className="relative group py-5">
                <Link href="https://www.masayatrip.com/privacy-policy" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] tracking-widest hover:text-[#ff00e1] transition-colors`}>Policy</Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/policy.webp" alt="Policy" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group py-5">
              <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] hover:text-[#ff00e1] transition-all tracking-[0.2em]`}>Explore</Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 overflow-hidden bg-white rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                <div className="relative h-44 w-full">
                  <Image src="/Explore.webp" alt="Explore" fill className="object-cover" unoptimized />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative group py-5">
                <Link href="https://www.masayatrip.com/community" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] tracking-widest hover:text-[#ff00e1] transition-colors`}>Community</Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/community.webp" alt="Community" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>

              <div className="relative group py-5">
                <Link href="https://www.masayatrip.com/membership" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] tracking-widest hover:text-[#ff00e1] transition-colors`}>Membership</Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/membership.webp" alt="Membership" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="https://www.masayatrip.com/contact-us" target="_blank" rel="noopener noreferrer" className="z-10 text-[11px] tracking-[0.2em] text-white bg-pink-700 px-6 py-2.5 rounded-full hover:bg-[#00C2FF] transition-all">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* FIX 4: Added ref and background color to header */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/HeroVideo.webp" 
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/HeroVideo.webm" type="video/webm" />
          <source src="/HeroVideo.mp4" type="video/mp4" />
        </video>
        {/* FIX 5: Added an overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tighter uppercase">MASAYA ASIA</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-100 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-md">Find your perfect stay with us today.</p>
        </div>
      </header>

      {/* ... the rest of your code (Services, Footer) stays exactly as it was ... */}
    </div>
  );
}
