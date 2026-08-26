"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json";

const cities = [
  { id: "muscat", name: "مسقط", nameEn: "Muscat", coordinates: [58.40, 23.58] },
  { id: "sohar", name: "صحار", nameEn: "Sohar", coordinates: [56.73, 24.34] },
  { id: "duqm", name: "الدقم", nameEn: "Duqm", coordinates: [57.69, 19.65] },
  { id: "salalah", name: "صلالة", nameEn: "Salalah", coordinates: [54.09, 17.01] },
  { id: "nizwa", name: "نزوى", nameEn: "Nizwa", coordinates: [57.53, 22.93] },
  { id: "khazaen", name: "خزائن", nameEn: "Khazaen", coordinates: [57.88, 23.68] },
  { id: "khasab", name: "خصب", nameEn: "Khasab", coordinates: [56.24, 26.18] },
];

const connectionPairs = [
  ["khasab", "sohar"], ["sohar", "khazaen"], ["khazaen", "muscat"],
  ["muscat", "nizwa"], ["nizwa", "duqm"], ["duqm", "salalah"],
] as const;

export default function WhyOman() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current || !mapContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Map scale & fade
      gsap.from(".map-image-wrapper", {
        scale: 0.85,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        }
      });

      // Technical circles draw
      gsap.from(".tech-circle", {
        strokeDashoffset: 3000,
        strokeDasharray: 3000,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        }
      });

      // Markers stagger
      gsap.from(".city-marker", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
        }
      });

      // Lines animate
      gsap.fromTo(".connection-line", 
        { strokeDashoffset: 180, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 0.85,
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
          }
        }
      );
      
      // Floating particles and ambient rotation
      gsap.to(".ambient-rotate", {
        rotate: 360,
        duration: 100,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center"
      });

    }, containerRef);

    // Parallax mouse effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!mapContainerRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;
      
      gsap.to(".parallax-layer", {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  return (
    <section 
      id="why-oman" 
      ref={containerRef} 
      className={`w-full bg-[#F7F5F2] relative py-12 md:py-24 overflow-hidden ${language === 'ar' ? 'font-ar' : 'font-en'}`}
    >
      {/* Decorative Pattern */}
      <img 
        src="/assets/pattern/2.png" 
        alt="" 
        className="absolute bottom-10 left-10 w-48 md:w-96 opacity-15 pointer-events-none -rotate-12"
      />

      {/* Main Container: Split Layout */}
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
        
        {/* LEFT SIDE Text Content */}
        <div className="lg:col-span-5 flex flex-col z-20 order-2 lg:order-1 w-full">
          <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-[0_8px_32px_rgba(119,7,5,0.06)] relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#770705]/8 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#2B2B2B] mb-3 tracking-tight leading-tight">
              {t.whyOman.title}
            </h2>
            <div className="w-10 md:w-12 h-[3px] bg-[#770705] mb-4 md:mb-6 rounded-full"></div>
            
            <p className="text-[clamp(1rem,1.5vw,1.125rem)] text-[#2B2B2B]/80 leading-relaxed mb-6 font-medium">
              {t.whyOman.desc}
            </p>
            
            {/* Investment Advantages Cards */}
            <div className="flex flex-col gap-3 mb-2 w-full">
              {t.whyOman.points.slice(0, 5).map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 md:p-4 rounded-2xl bg-white/50 border border-white/50 hover:bg-white/90 hover:border-[#770705]/20 hover:shadow-md transition-all duration-300 group cursor-default w-full">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#770705]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#770705]/10 group-hover:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#770705] ring-4 ring-[#770705]/20 rotate-45 transform"></div>
                  </div>
                  <span className="text-sm md:text-base text-[#2B2B2B] font-semibold leading-snug">{point}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* RIGHT SIDE Map Container */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center order-1 lg:order-2" ref={mapContainerRef}>
          
          {/* Technical Blueprint Circles (Ambient) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none parallax-layer z-0 overflow-hidden">
            <svg className="w-[150%] h-[150%] max-w-[1000px] absolute ambient-rotate opacity-20" viewBox="0 0 1000 1000">
              <circle cx="500" cy="500" r="300" fill="none" stroke="#770705" strokeWidth="1.5" strokeDasharray="4 8" className="tech-circle" />
              <circle cx="500" cy="500" r="400" fill="none" stroke="#770705" strokeWidth="0.5" strokeDasharray="2 12" className="tech-circle" />
              <circle cx="500" cy="500" r="450" fill="none" stroke="#770705" strokeWidth="1" className="tech-circle" />
              <circle cx="500" cy="500" r="200" fill="none" stroke="#770705" strokeWidth="1" strokeDasharray="10 20" className="tech-circle" opacity="0.5" />
            </svg>
          </div>

          <div className="relative w-full max-w-[800px] aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] map-image-wrapper parallax-layer z-10 mx-auto px-0 sm:px-4 flex items-center justify-center">
            
            {isMounted && (
              <ComposableMap
                projection="geoMercator"
              projectionConfig={{
                scale: 3000,
                center: [56, 21.5]
              }}
              style={{ width: "100%", height: "100%", filter: "drop-shadow(0 30px 60px rgba(119,7,5,0.15))" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.filter((geo) => geo.properties.name === "Oman").map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#770705"
                      stroke="#5A0504"
                      strokeWidth={0.8}
                      fillOpacity={0.62}
                      strokeOpacity={0.7}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "#770705" },
                        pressed: { outline: "none" }
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Continuous dashed route between the cities */}
              {connectionPairs.map(([fromId, toId]) => (
                <Line
                  key={`${fromId}-${toId}`}
                  from={cities.find((city) => city.id === fromId)!.coordinates as [number, number]}
                  to={cities.find((city) => city.id === toId)!.coordinates as [number, number]}
                  stroke="#770705"
                  strokeWidth={1.6}
                  strokeDasharray="6 7"
                  strokeLinecap="round"
                  className="connection-line"
                />
              ))}

              {/* Static city markers and labels */}
              {cities.map((city) => (
                <Marker key={city.id} coordinates={city.coordinates as [number, number]}>
                  <g className="city-marker" pointerEvents="none">
                    <circle r={7} fill="#F7F5F2" opacity={0.95} />
                    <circle r={3.5} fill="#770705" />
                  </g>
                  <text
                    y={-16}
                    textAnchor="middle"
                    fill="#F7F5F2"
                    stroke="#770705"
                    strokeWidth={2.5}
                    paintOrder="stroke"
                    style={{ fontSize: 8, fontWeight: 700, pointerEvents: "none" }}
                  >
                    {language === "ar" ? city.name : city.nameEn}
                  </text>
                </Marker>
              ))}
              </ComposableMap>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
