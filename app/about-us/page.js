'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  // Automatic image transition logic - Ensure these files are lowercase in your public folder
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
      
      {/* NAVIGATION BAR - Fixed background for logo visibility */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-900/90 backdrop-blur-md px-6 py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="relative w-32 h-10 cursor-pointer hover:opacity-80 transition-all">
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

          <Link href="/" className="group flex items-center">
            <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:text-pink-500 transition-all duration-300 cursor-pointer">
              Close
            </span>
          </Link>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-[45vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/sunset.webp"
            alt="Corporate Sunset"
            fill
            className="object-cover object-center opacity-50 scale-105"
            priority
            unoptimized
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-pink-500 font-black uppercase tracking-[0.5em] text-[10px] mb-3">Corporate Profile</p>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Our Identity <span className="text-white/50">&</span> Mission
          </h1>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase border-l-4 border-pink-500 pl-6">About us</h3>
            <p className="text-slate-600 leading-relaxed text-sm text-justify">
              Masaya Asia Limited is a premier travel and tour company dedicated to creating unforgettable travel experiences across Asia. With our headquarters strategically located in Hong Kong, we have established a strong and reliable presence throughout the continent, with operational offices in key destinations including Bali, Manila, Shanghai, Beijing, Chengdu, and Taiwan.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900">
              <p className="text-slate-900 font-medium italic leading-relaxed text-sm">
                Our name, <span className="text-pink-600 font-black underline decoration-2 underline-offset-4">Masaya</span>, which means happy in Filipino, is the core of our philosophy. We believe in delivering joy and satisfaction through seamless travel solutions.
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
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
                  className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[5s]" 
                  unoptimized
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all duration-500">
            <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mb-6 text-pink-500 font-black">M</div>
            <h2 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Our Mission</h2>
            <p className="text-white text-sm font-light leading-relaxed opacity-80">
              To be one of the most trusted travel providers in Asia, distinguished by our robust booking platform that offers a comprehensive and curated selection of hotels, tours, activities, and dining deals.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-pink-500/50 transition-all duration-500">
            <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mb-6 text-pink-500 font-black">V</div>
            <h2 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Our Vision</h2>
            <p className="text-white text-sm font-light leading-relaxed opacity-80">
              To become the leading digital gateway for exploring the rich and diverse cultures of Asia through innovative technology and an extensive network of local experts.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE OFFER */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black tracking-tighter uppercase text-slate-900">What We Offer</h3>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Exclusive Dining", desc: "Unlock special discounts and set menus to savor authentic flavors." },
            { title: "Custom Tours", desc: "Bespoke itineraries catering to your specific travel interests." },
            { title: "Hotel Booking", desc: "Access a vast network of luxury accommodations with real-time rates." },
            { title: "Activities", desc: "Unique local experiences designed to enrich your journey." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-xl hover:-translate-y-2 transition-all duration-300 border border-white/5">
              <h4 className="text-lg font-black uppercase tracking-tighter mb-4 text-pink-500">{item.title}</h4>
              <p className="text-xs leading-relaxed opacity-70 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: METHODOLOGY */}
      <section className="bg-slate-50 py-20 px-6 rounded-[3rem] mx-4 my-10 border border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black mb-10 tracking-tighter uppercase text-slate-900">Our Strategic Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: "Technology", val: "User-friendly and secure state-of-the-art booking platform." },
                { label: "Expertise", val: "On-the-ground teams with intimate regional knowledge." },
                { label: "Service", val: "Client-centric 24/7 support for all global inquiries." },
                { label: "Loyalty", val: "Rewarding membership programs with redeemable points." }
              ].map((point, idx) => (
                <div key={idx} className="flex flex-col border-l-2 border-pink-500 pl-6">
                  <span className="text-slate-900 font-black uppercase text-[10px] tracking-widest mb-2">{point.label}</span>
                  <p className="text-slate-500 text-xs leading-relaxed">{point.val}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl text-white border border-white/10">
            <h3 className="text-sm font-black mb-6 uppercase tracking-tighter text-pink-500">Asia Network</h3>
            <div className="space-y-6 text-[10px] font-bold uppercase tracking-wider">
              <div className="pb-4 border-b border-white/5"><p className="text-pink-500/50 mb-1">Headquarters</p>Hong Kong</div>
              <div className="pb-4 border-b border-white/5"><p className="text-pink-500/50 mb-1">China</p>Shanghai · Beijing · Chengdu</div>
              <div className="pb-4 border-b border-white/5"><p className="text-pink-500/50 mb-1">Southeast Asia</p>Philippines · Indonesia · Bali</div>
              <div><p className="text-pink-500/50 mb-1">East Asia</p>Taiwan</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-[10px] font-black text-pink-500 uppercase tracking-[0.4em] mb-4">Connect with us</h2>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Start Your Journey</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center md:text-left opacity-80">
            <div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email</p>
              <p className="text-white text-xs">booking@masayaasia.com</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone</p>
              <p className="text-white text-xs">+63 976 104 2451</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Location</p>
              <p className="text-white text-xs uppercase">Hong Kong, Sheung Wan</p>
            </div>
          </div>

          <Link 
            href="https://www.masayatrip.com" 
            target="_blank" 
            className="px-10 py-4 bg-white text-slate-950 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-pink-500 hover:text-white transition-all shadow-xl"
          >
            Visit Website
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] text-white/40 font-bold uppercase tracking-[0.4em]">
            © 2026 Masaya Asia Limited · Global Travel Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
