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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Styles based on scroll state
  const navClass = scrolled 
    ? 'bg-white/95 shadow-md py-2' 
    : 'bg-transparent backdrop-blur-sm py-4';
  
  const linkClass = scrolled 
    ? 'text-slate-900 hover:text-pink-600' 
    : 'text-white hover:text-pink-300';
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${navClass}`}>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex justify-between items-center relative">
          <Link href="https://www.masayatrip.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-32 h-10 cursor-pointer hover:opacity-80 transition-opacity">
              <Image 
                src="/masayaasialtd-.webp" 
                alt="Masaya Logo" 
                fill 
                className="object-contain" 
                priority 
                unoptimized 
              />
            </div>
          </Link>

          {/* CENTER NAVIGATION ITEMS */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 z-10">
            {[
              { label: 'About us', href: '/about-us', img: '/aboutus.webp' },
              { label: 'Policy', href: 'https://www.masayatrip.com/privacy-policy', img: '/policy.webp' },
              { label: 'Explore', href: 'https://www.masayatrip.com/', img: '/explore.webp' },
              { label: 'Community', href: 'https://www.masayatrip.com/community', img: '/community.webp' },
              { label: 'Membership', href: 'https://www.masayatrip.com/membership', img: '/membership.webp' }
            ].map((item) => (
              <div key={item.label} className="relative group">
                <Link 
                  href={item.href} 
                  className={`${linkClass} text-[11px] font-bold uppercase tracking-widest transition-colors duration-200`}
                >
                  {item.label}
                </Link>
                {/* Hover Preview Card */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 overflow-hidden bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-slate-100">
                  <div className="relative h-32 w-full">
                    <Image src={item.img} alt={item.label} fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link 
            href="https://www.masayatrip.com/contact-us" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="z-10 text-[10px] font-black uppercase tracking-tighter text-white bg-pink-600 hover:bg-sky-500 px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/HeroVideo.webp" 
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60"
        >
          <source src="/HeroVideo.webm" type="video/webm" />
          <source src="/HeroVideo.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-[1]" />

        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase drop-shadow-2xl">
            MASAYA ASIA
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.4em] max-w-2xl mx-auto uppercase opacity-90">
            Explore the Extraordinary
          </p>
          <div className="mt-10 w-12 h-[2px] bg-pink-500 mx-auto rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)]"></div>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16 border-l-4 border-pink-500 pl-6">
            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Premium Services</h3>
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.5em] mt-2">Curated Excellence for Your Journey</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.name} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <Link href={service.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={service.src} 
                    alt={service.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    <div className="px-5 py-2 bg-white text-slate-900 font-black text-[9px] uppercase tracking-widest transition-transform duration-300 translate-y-4 group-hover:translate-y-0 shadow-xl rounded-full">
                      Learn More
                    </div>
                  </div>
                </Link>
                <div className="p-8">
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3">{service.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-8">
            <div className="relative w-24 h-8 opacity-50 hover:opacity-100 transition-opacity">
              <Image src="/masayaasialtd-.webp" alt="Logo" fill className="object-contain brightness-0 invert" unoptimized />
            </div>
          </div>
          <p className="text-[9px] tracking-[0.5em] uppercase font-bold text-slate-500 text-center">
            © 2026 MasayaAsia Limited <span className="mx-3 opacity-20">|</span> Professional Travel Identity
          </p>
        </div>
      </footer>
    </div>
  );
}
