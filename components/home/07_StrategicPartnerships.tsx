"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

export default function StrategicPartnerships() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (!containerRef.current || !badgesRef.current) return;

    gsap.fromTo(badgesRef.current.children,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );

  }, []);

  return (
    <section 
      id="partnerships" 
      ref={containerRef} 
      className={`py-24 w-full bg-[#F7F5F2] relative overflow-hidden ${language === 'ar' ? 'font-ar' : 'font-en'}`}
    >
      {/* Side Decorations */}
      <img 
        src="/assets/pattern/2.png" 
        alt="" 
        className="absolute top-1/4 -left-20 w-64 lg:w-96 opacity-15 pointer-events-none rotate-90"
      />
      <img 
        src="/assets/pattern/2.png" 
        alt="" 
        className="absolute bottom-1/4 -right-20 w-64 lg:w-96 opacity-15 pointer-events-none -rotate-90"
      />

      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#761113] mb-6">{t.partnerships.title}</h2>
          <p className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto">
            {t.partnerships.desc}
          </p>
        </div>

        <div ref={badgesRef} className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
          {t.partnerships.badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-lg shadow-[#770705]/5 border border-[#2B2B2B]/5 hover:border-[#770705]/30 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-[#E7D0BC] opacity-50 flex items-center justify-center">
                {/* Placeholder icon */}
                <span className="text-2xl text-[#770705]">🤝</span>
              </div>
              <span className="font-bold text-[#2B2B2B] text-lg">{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
