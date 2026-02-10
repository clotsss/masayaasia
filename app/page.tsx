'use client';
import React, { useState, useEffect } from 'react';
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
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-slate-900' : 'text-white';
  const navBg = scrolled ? 'bg-white/95 shadow-md py-2' : 'backdrop-blur-md bg-black/10 py-4';
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center ${navBg}`}>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex justify-between items-center relative">
          <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-32 h-10 cursor-pointer hover:opacity-80 transition-all">
              <Image 
                src="/masayaasialtd-.webp" 
                alt="masayatrip Logo" 
                fill 
                className={`object-contain transition-all ${scrolled ? '' : 'brightness-0 invert'}`} 
                priority 
                unoptimized 
              />
            </div>
          </Link>

          {/* CENTER NAVIGATION ITEMS */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 z-10">
            <div className="flex items-center gap-6">
              
              {/* ABOUT US */}
              <div className="relative group py-2">
                <Link href="/about-us" className={`${textColor} text-[11px] font-bold uppercase tracking-widest hover:text-pink-500 transition-colors whitespace-nowrap`}>
                  About us
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/aboutus.webp" alt="About Us" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
              
              {/* POLICY */}
              <div className="relative group py-2">
                <Link href="https://www.masayatrip.com/privacy-policy" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] font-bold uppercase tracking-widest hover:text-pink-500 transition-colors`}>Policy</Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/policy.webp" alt="Policy" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            {/* EXPLORE */}
            <div className="relative group py-2">
              <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] font-bold uppercase tracking-widest hover:text-pink-500 transition-all`}>Explore</Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                <div className="relative h-44 w-full">
                  <Image src="/explore.webp" alt="Explore" fill className="object-cover" unoptimized />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* COMMUNITY */}
              <div className="relative group py-2">
                <Link href="https://www.masayatrip.com/community" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] font-bold uppercase tracking-widest hover:text-pink-500 transition-colors`}>Community</Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/community.webp" alt="Community" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>

              {/* MEMBERSHIP */}
              <div className="relative group py-2">
                <Link href="https://www.masayatrip.com/membership" target="_blank" rel="noopener noreferrer" className={`${textColor} text-[11px] font-bold uppercase tracking-widest hover:text-pink-500 transition-colors`}>Membership</Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300">
                  <div className="relative h-40 w-full">
                    <Image src="/membership.webp" alt="Membership" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="https://www.masayatrip.com/contact-us" target="_blank" rel="noopener noreferrer" className="z-10 text-[10px] font-black uppercase tracking-tighter text-white bg-pink-600 px-6 py-2.5 rounded-full hover:bg-sky-500 transition-all shadow-lg shadow-pink-500/20">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          poster="/HeroVideo.webp" 
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-1000"
        >
          <source src="/HeroVideo.webm" type="video/webm" />
          <source src="/HeroVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-black mb-6 drop-shadow-2xl tracking-tighter uppercase transition-transform duration-700 hover:scale-105">MASAYA ASIA</h1>
          <p className="text-lg md:text-xl mb-10 font-light tracking-[0.3em] max-w-2xl mx-auto uppercase opacity-90">Find your perfect stay with us today.</p>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 border-l-4 border-pink-500 pl-6">
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Premium Services</h3>
            <p className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.4em] mt-2">Curated Excellence for Your Journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.name} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <Link href={service.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
                  <Image 
                    src={service.src} 
                    alt={service.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full shadow-xl">View Details</div>
                  </div>
                </Link>
                <div className="p-8 flex flex-col">
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">{service.name}</h4>
                  <p className="text-slate-500 text-[12px] leading-relaxed line-clamp-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Matched to About Us style */}
      <footer className="bg-slate-950 py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="mb-6 opacity-50 hover:opacity-100 transition-opacity">
             <Image src="/masayaasialtd-.webp" alt="Logo" width={100} height={30} className="object-contain brightness-0 invert" unoptimized />
          </div>
          <p className="text-white/40 text-[9px] tracking-[0.5em] uppercase font-bold text-center">
            © 2026 Masaya Asia Limited <span className="mx-2 text-white/10">|</span> Professional Travel Identity
          </p>
        </div>
      </footer>
    </div>
  );
}
