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
      
      {/* NAVIGATION BAR - UPDATED BACKGROUND TO MATCH SUNSET PHOTO */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-800/50 backdrop-blur-md px-6 py-1">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="relative w-32 h-10 cursor-pointer hover:opacity-80 transition-all">
              <Image 
                src="/MasayaAsiaLtd-.webp" 
                alt="Masaya Logo" 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
          </Link>

          {/* CLOSE BUTTON REPLACED X */}
          <Link href="/" className="group flex items-center">
            <span className="text-white text-[11px] uppercase tracking-[0.3em] hover:text-pink-500 transition-all duration-300 cursor-pointer">
              Close
            </span>
          </Link>
        </div>
      </nav>

      {/* SECTION 1: HERO (NOW USING SUNSET.WEBP) */}
      <section className="relative h-[40vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/sunset.webp"
            alt="Corporate Sunset"
            fill
            className="object-cover object-bottom opacity-60 scale-105"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-latient-to-b from-slate-950/60 via-slate-950/20 to-slate-950"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-white font-bold uppercase tracking-[0.5em] text-[10px] mb-3">Corporate Profile</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Our Identity <span className="text-white">&</span> Mission
          </h1>
          <div className="w-12 h-1 bg-white mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY (About Us Text) */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h3 className="text-2xl text-slate-900 tracking-tighter uppercase border-l-4 border-pink-500 pl-4">About us</h3>
            <p className="text-slate-600 leading-relaxed text-[13px] text-justify">
           Masaya Asia Limited is a premier travel and tour company dedicated to creating unforgettable travel experiences across Asia. With our headquarters strategically located in Hong Kong, we have established a strong and reliable presence throughout the continent, with operational offi ces in key destinations including Bali, Manila, Shanghai, Beijing, Chengdu, and Taiwan.
            </p>
            <p className="text-black font-bold italic leading-relaxed text-[12px]">
              Our name, <span className="text-pink-500 font-bold underline decoration-2 underline-offset-4">Masaya</span>, which means happy in Filipino, is the core of our philosophy. We believe in delivering joy and satisfaction through seamless travel solutions, expert local knowledge, and a commitment to excellence. We are a team of passionate travel experts, technologists, and customer service professionals united by a single goal: to make Asian travel accessible, enjoyable, and truly memorable for everyone.
            </p>
          </div>
          
          {/* THE CHANGED PART: Automatic transition with focal point at the bottom */}
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
                  /* 'object-bottom' para focus sa lower part ng image kung nasaan ang boat/subject */
                  className="object-cover object-bottom" 
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-latient-to-t from-slate-950/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-500">
            <h2 className="text-pink-500 text-[9px] font-black uppercase tracking-[0.4em] mb-3">Our Mission</h2>
            <p className="text-white text-[13px] font-light leading-relaxed text-justify opacity-90">
          To be one of the most trusted travel providers in Asia, distinguished by our robust booking platform that offers a comprehensive and curated selection of hotels, tours, activities, and dining deals. We strive to empower travelers with convenience, reliability, and value, ensuring every journey with us is a happy one.
            </p>
          </div>
          <div className="bg-slate-900 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-500">
            <h2 className="text-pink-500 text-[9px] font-black uppercase tracking-[0.4em] mb-3">Our Vision</h2>
            <p className="text-white text-[13px] font-light leading-relaxed text-justify opacity-90">
           To become the leading digital gateway for exploring the rich and diverse cultures of Asia. We envision a future where travelers can effortlessly plan and book their dream vacations through our innovative technology, supported by our extensive network of local experts who provide authentic and unparalleled experiences.
           </p>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE OFFER */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
      
          <h3 className="text-3xl font-black tracking-tighter uppercase text-slate-900 mb-4">What We Offer</h3>
          <p className="text-slate-600 text-[13px] leading-relaxed max-w-3xl">
          Masaya Asia Limited provides a complete suite of travel services designed to cater to the modern traveler. Our offerings are seamlessly integrated into our powerful online booking platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Exclusive Dining Deals",
              desc: "We partner with a wide array of restaurants and culinary experiences to offer our members exclusive access to the best dining deals. From local street food tours to fi ne dining establishments, unlock special discounts and set menus to savor the authentic fl avors of Asia"
            },
            {
              title: "Custom Tour Packages",
              desc: "We design bespoke travel itineraries that cater to a wide range of interests, from cultural immersions and historical explorations to adventure travel and relaxing beach getaways. Our local teams curate unique experiences that go beyond the typical tourist trails."
            },
            {
              title: "Hotel Booking",
              desc: "Through our robust booking website, travelers gain access to a vast network of accommodations. From luxury resorts to charming boutique hotels, we offer competitive rates and real-time availability to suit every budget and preference."
            },
            {
              title: "Activities",
              desc: "one-stop-shop for enriching your travel experience. Discover and book exciting local tours, unique activities, and exclusive dining deals to make the most of your trip."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-gradient-to-br from-slate-900 to-blue-800 rounded-[2rem] text-white shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-lg font black uppercase tracking-tighter mb-4">{item.title}</h4>
              <p className="text-[11px] leading-relaxed opacity-80 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: METHODOLOGY & ASIA NETWORK */}
      <section className="bg-slate-50 py-14 px-6 rounded-[3rem] mx-4 my-6 border border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            
            <h3 className="text-xl font-black mb-8 tracking-tighter uppercase text-slate-900">Our Approach</h3>
            
            <ul className="space-y-4">
              {[
                { label: "Technology DriveN Convinience", val: "State-of-the-art booking website that is user-friendly, secure, and provides instant confirmations." },
                { label: "Local Expertise", val: "With offi ces across Asia, our on-the-ground teams possess intimate knowledge of their respective regions, allowing us to offer authentic advice and support." },
                { label: "Client-Centric", val: "We prioritize our clients' needs, offering personalized service and 24/7 support to handle any inquiries or challenges that may arise during their travels." },
                { label: "Trust & Reliability", val: "We are committed to transparency and dependability in all our dealings, from secure payment systems to vetted travel partners."},
                   { label: "Rewarding and Loyalty", val: "We value our community of travelers through a robust membership program. Our system allows members to Earn points on every booking, Buy points for exclusive advantages, Redeem them for services, Convert them with partner programs, and Share points with friends and family."
                 },
              ].map((point, idx) => (
                <li key={idx} className="flex flex-col border-l-2 border-pink-200 pl-4 hover:border-pink-500 transition-colors">
                  <span className="text-slate-950 font-black uppercase text-[9px] tracking-widest mb-1">{point.label}</span>
                  <p className="text-slate-600 text-[11px] leading-snug text-justify">{point.val}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-900 p-6 rounded-2xl shadow-2xl text-white border border-white/5">
              <h3 className="text-sm font-black mb-4 uppercase tracking-tighter text-pink-500">Asia Network</h3>
              <div className="grid grid-cols-2 gap-4 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                <div><p className="text-white mb-1">Headquarters</p>Hong Kong</div>
                <div><p className="text-white mb-1">China Office</p>Shanghai, Beijing, Chengdu</div>
                <div><p className="text-white mb-1">Southeast Asia</p>Philippines,</div>
                <div><p className="text-white mb-1">Southeast Asia</p>Indonesia,Bali</div>
                <div><p className="text-white mb-1">East Asia</p>Taiwan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-[9px] font-bold text-pink-500 uppercase tracking-[0.4em] mb-2">Connect with us</h2>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">Plan your next adventure</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-white text-[11px]">booking@masayaasia.com</p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-white  text-[11px]">+63 976 104 2451</p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-white  text-[11px] uppercase">Hong Kong, Sheung Wan</p>
            </div>
          </div>

          <Link 
            href="https://www.masayatrip.com" 
            target="_blank" 
            className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-pink-500 hover:text-slate-950 transition-all shadow-lg"
          >
            Visit Website
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-[8px] text-white font-bold uppercase tracking-[0.3em]">
            © 2026 Masaya Asia Limited · Professional Identity
          </p>
        </div>
      </footer>
    </div>
  );
}