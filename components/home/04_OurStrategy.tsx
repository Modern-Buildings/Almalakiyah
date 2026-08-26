"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { ChartNoAxesCombined, Handshake, SearchCheck } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function OurStrategy() {
  const containerRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const strategyIcons = [SearchCheck, Handshake, ChartNoAxesCombined];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".strategy-heading",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 78%", once: true },
        },
      );

      gsap.fromTo(
        ".strategy-item",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.13,
          ease: "power2.out",
          scrollTrigger: { trigger: ".strategy-list", start: "top 78%", once: true },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      id="strategy"
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#F7F5F2] py-24 md:py-32 ${isAr ? "font-ar" : "font-en"}`}
    >
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <header className="strategy-heading mb-16 flex flex-col items-center gap-5 text-center md:mb-20">
          <h2 className="text-5xl font-bold tracking-tight text-[#770705] md:text-7xl">{t.strategy.title}</h2>
          <div className="h-px w-24 bg-[#C8A97E]" />
        </header>

        <div className="strategy-list flex flex-wrap justify-center gap-6">
          {t.strategy.points.map((point, idx) => {
            const Icon = strategyIcons[idx] || SearchCheck;

            return (
            <article
              key={point.title}
              className={`strategy-item group relative flex min-h-[280px] w-full flex-col justify-center overflow-hidden rounded-[2.5rem] border border-white bg-white/70 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(119,7,5,0.08)] md:w-[calc(50%-12px)] md:p-10 lg:w-[calc(33.333%-16px)] ${isAr ? "text-right" : "text-left"}`}
            >
              <div className={`absolute top-8 text-[#770705] opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:opacity-100 ${isAr ? "left-8" : "right-8"}`}>
                <Icon size={48} strokeWidth={1.5} />
              </div>
              <span className={`pointer-events-none absolute -bottom-8 font-en text-[140px] font-black leading-none text-[#770705] opacity-[0.03] transition-opacity duration-700 group-hover:opacity-[0.08] ${isAr ? "-left-4" : "-right-4"}`}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10 flex flex-col gap-5">
                <h3 className="max-w-xs text-2xl font-bold leading-snug text-[#2B2220] transition-colors duration-300 group-hover:text-[#770705] md:text-3xl">
                  {point.title}
                </h3>
                <p className="max-w-sm text-base leading-relaxed text-[#2B2220]/65 md:text-lg">{point.desc}</p>
              </div>
              <div className={`absolute bottom-0 h-1.5 w-0 bg-gradient-to-r from-[#770705] to-[#4A0403] transition-all duration-700 ease-out group-hover:w-full ${isAr ? "right-0" : "left-0"}`} />
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
