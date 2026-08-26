"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-fade-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="who-we-are"
      ref={containerRef}
      className={`relative flex min-h-[100dvh] w-full items-center justify-center bg-[#F7F5F2] px-6 py-24 md:px-12 md:py-32 ${language === "ar" ? "font-ar" : "font-en"}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <img 
          src="/assets/pattern/4.png" 
          alt="" 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 -right-48 w-[450px] rotate-180 md:block z-[-1]" 
          style={{ opacity: 1 }}
        />
        <img 
          src="/assets/pattern/4.png" 
          alt="" 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 -left-48 w-[450px] md:block z-[-1]" 
          style={{ opacity: 1 }}
        />
        <img
          src="/assets/pattern/4.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[440px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-180 md:hidden z-[-1]"
          style={{ opacity: 1 }}
        />

        <div className="rounded-[32px] border border-white/80 bg-white/45 p-6 shadow-[0_20px_60px_rgba(119,7,5,0.06)] backdrop-blur-sm md:rounded-[40px] md:p-10 lg:p-12 relative z-10">
          <div className="flex flex-col gap-16 lg:gap-20">
            {/* Who We Are (Top) */}
            <div className="relative group gsap-fade-up" ref={textRef}>
              <div className="flex items-center gap-5 mb-8">
                <div className="text-[#770705] shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#761113] tracking-tight">
                  {t.whoWeAre.title}
                </h2>
              </div>
              <p className="text-2xl md:text-4xl text-[#2B2B2B]/80 leading-snug md:leading-relaxed font-light max-w-5xl">
                {t.whoWeAre.desc}
              </p>
            </div>

            <hr className="border-t border-[#770705]/10 w-full" />

            {/* Vision & Values */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative pt-4">
              
              {/* Vision */}
              <div className="relative group gsap-fade-up">
                <div className="flex items-center gap-5 mb-8">
                  <div className="text-[#770705] shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#761113]">{t.visionMission.visionTitle}</h3>
                </div>
                <p className="text-xl md:text-[22px] text-[#2B2B2B]/75 leading-relaxed font-light">
                  {t.visionMission.visionDesc}
                </p>
              </div>
              
              {/* Divider for Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-[#770705]/20 via-[#770705]/10 to-transparent -translate-x-1/2"></div>
              
              {/* Values */}
              <div className="relative group gsap-fade-up">
                <div className="flex items-center gap-5 mb-8">
                  <div className="text-[#770705] shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#761113]">{t.visionMission.valuesTitle}</h3>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  {t.visionMission.values.map((val: string, idx: number) => (
                    <div key={idx} className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 border border-white/60 shadow-[0_8px_16px_rgba(119,7,5,0.03)] hover:shadow-[0_16px_32px_rgba(119,7,5,0.08)] hover:border-[#770705]/20 hover:-translate-y-1 transition-all duration-500 group/item overflow-hidden cursor-default">
                      <div className="absolute inset-0 bg-[#770705] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                      <div className="w-2 h-2 rounded-full bg-[#770705] group-hover/item:bg-white group-hover/item:scale-150 transition-all duration-500 relative z-10"></div>
                      <span className="relative z-10 text-[#761113] text-[17px] font-bold group-hover/item:text-white transition-colors duration-500">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

