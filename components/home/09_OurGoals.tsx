"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { Landmark, Lightbulb, Network, Handshake, Leaf } from "lucide-react";

export default function OurGoals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const goalIcons = [
    Landmark,
    Lightbulb,
    Network,
    Handshake,
    Leaf
  ];

  useEffect(() => {
    if (!containerRef.current || !listRef.current) return;

    gsap.fromTo(listRef.current.children,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

  }, []);

  return (
    <section 
      id="goals" 
      ref={containerRef} 
      className={`py-24 md:py-32 w-full bg-[#F7F5F2] relative overflow-hidden ${language === 'ar' ? 'font-ar' : 'font-en'}`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#770705]/5 blur-[100px] rounded-full pointer-events-none" />
      <img src="/assets/pattern/4.png" alt="" aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-96 opacity-[0.03] rotate-45" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#761113] tracking-tight">{t.goals.title}</h2>
        </div>

        <div ref={listRef} className="flex flex-wrap justify-center gap-6">
          {t.goals.list.map((goal, idx) => {
            const Icon = goalIcons[idx] || Landmark;
            return (
            <div 
              key={idx} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] relative overflow-hidden group bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(119,7,5,0.08)] transition-all duration-500 hover:-translate-y-3 flex flex-col justify-center min-h-[220px]"
            >
              {/* Decorative Icon */}
              <div className={`absolute top-8 ${language === 'ar' ? 'left-8' : 'right-8'} text-[#770705] opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-6`}>
                <Icon size={48} strokeWidth={1.5} />
              </div>
              
              {/* Large faded number */}
              <div className={`absolute -bottom-8 ${language === 'ar' ? '-left-4' : '-right-4'} font-en text-[140px] font-black text-[#770705] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none select-none leading-none`}>
                0{idx + 1}
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#2B2B2B] group-hover:text-[#770705] transition-colors duration-300 leading-snug">
                  {goal}
                </h3>
              </div>
              
              {/* Bottom decorative line */}
              <div className={`absolute bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-0 h-1.5 bg-gradient-to-r from-[#770705] to-[#4A0403] group-hover:w-full transition-all duration-700 ease-out`} />
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
