"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!containerRef.current) return;

    // Just pin the Hero section so the next section slides over it
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false, 
    });
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[100dvh] w-full outline outline-2 outline-[#0F0F0F] flex items-center justify-center overflow-hidden bg-[#0F0F0F]">
      
      {/* Background Image with Slow Zoom Animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.35]"
        >
          <source src="/assets/vid/vid1.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Brand Patterns from /assets/pattern/ */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none flex items-center justify-center mix-blend-screen">
        <motion.img 
          src="/assets/pattern/3.png" 
          alt="Hero Pattern Overlay"
          className="hidden md:block absolute w-[120%] lg:w-[80%] opacity-[0.08] blur-[2px]"
          animate={{ rotate: 3, scale: 1.05 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.img 
          src="/assets/pattern/1.png" 
          alt="Hero Mobile Pattern"
          className="block md:hidden absolute w-[150%] opacity-[0.05] top-[10%]"
          animate={{ rotate: -2, scale: 1.02 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>
      
      {/* Cinematic Text Content */}
      <div className={`relative z-20 text-center px-4 md:px-6 w-full max-w-[1400px] flex flex-col items-center mt-[-40px] md:mt-[-20px] ${language === 'ar' ? 'font-ar' : 'font-en'}`}>
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <span className="text-[#E5C7B7] text-xs md:text-sm font-medium uppercase bg-white/5 px-4 md:px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            {t.hero.subtitle} • {t.hero.highlight} • {t.hero.subtitle2}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6 max-w-5xl"
        >
          {t.hero.title1} <br className="hidden md:block" />
          <span className="text-[#E5C7B7]">{t.hero.title2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-lg lg:text-xl font-light text-white/80 max-w-3xl text-center leading-relaxed mb-10 md:mb-12"
        >
          {t.hero.desc}
        </motion.p>
        
        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-6 sm:px-0"
        >
          <a 
            href="#who-we-are" 
            onClick={(e) => { e.preventDefault(); document.querySelector('#who-we-are')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 md:px-10 py-3 md:py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-[#0F0F0F] transition-all duration-300 w-full sm:w-auto"
          >
            {t.hero.btnContact}
          </a>
        </motion.div>
      </div>



    </section>
  );
}

