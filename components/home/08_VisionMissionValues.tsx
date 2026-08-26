"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

export default function VisionMissionValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    gsap.fromTo(contentRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );

  }, []);

  return (
    <section 
      id="vision-mission" 
      ref={containerRef} 
      className={`py-24 w-full bg-white relative overflow-hidden ${language === 'ar' ? 'font-ar' : 'font-en'}`}
    >
      {/* Decorative Patterns */}
      <img 
        src="/assets/pattern/2.png" 
        alt="" 
        className="absolute top-0 left-0 w-48 md:w-80 lg:w-[400px] opacity-15 pointer-events-none -translate-x-1/4 -translate-y-1/4"
      />
      <img 
        src="/assets/pattern/2.png" 
        alt="" 
        className="absolute bottom-0 right-0 w-48 md:w-80 lg:w-[400px] opacity-15 pointer-events-none translate-x-1/4 translate-y-1/4 rotate-180"
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Vision */}
          <div className="md:col-span-2 bg-[#F7F5F2] p-12 rounded-3xl border border-[#2B2B2B]/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E7D0BC] rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-150 origin-top-right"></div>
            <h3 className="text-3xl font-bold text-[#770705] mb-6 relative z-10">{t.visionMission.visionTitle}</h3>
            <p className="text-xl text-[#2B2B2B]/80 leading-relaxed relative z-10">
              {t.visionMission.visionDesc}
            </p>
          </div>

          {/* Values (Spans full width) */}
          <div className="md:col-span-2 bg-[#770705] p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-3xl font-bold text-white whitespace-nowrap">{t.visionMission.valuesTitle}</h3>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 w-full">
              {t.visionMission.values.map((val, idx) => (
                <div key={idx} className="px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white font-medium backdrop-blur-sm hover:bg-white hover:text-[#770705] transition-colors duration-300">
                  {val}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
