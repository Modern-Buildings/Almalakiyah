"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HowWeWork() {
  const containerRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const posKey = isAr ? "right" : "left";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const desktopSteps = [
    { x: 12, y: 50 },
    { x: 27, y: 25 },
    { x: 42, y: 50 },
    { x: 57, y: 75 },
    { x: 72, y: 50 },
    { x: 87, y: 25 },
  ];

  const mobileSteps = [
    { x: 50, y: 5 },
    { x: 75, y: 23 },
    { x: 50, y: 41 },
    { x: 25, y: 59 },
    { x: 50, y: 77 },
    { x: 75, y: 95 },
  ];

  const desktopPath = "M 12 50 C 19.5 50, 19.5 25, 27 25 C 34.5 25, 34.5 50, 42 50 C 49.5 50, 49.5 75, 57 75 C 64.5 75, 64.5 50, 72 50 C 79.5 50, 79.5 25, 87 25";
  const mobilePath = "M 50 5 C 50 14, 75 14, 75 23 C 75 32, 50 32, 50 41 C 50 50, 25 50, 25 59 C 25 68, 50 68, 50 77 C 50 86, 75 86, 75 95";

  return (
    <section
      id="workflow"
      ref={containerRef}
      className={`py-24 md:py-32 w-full bg-[#F7F5F2] relative overflow-hidden ${
        isAr ? "font-ar" : "font-en"
      }`}
    >
      {/* Background Ambient Touches */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#C6A24F]/5 blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#770705]/5 blur-[120px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* Editorial Title Area */}
        <div className="text-center mb-16 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#770705] mb-6 leading-tight">
              {t.workflow.title}
            </h2>
          </motion.div>
        </div>

        {/* --- DESKTOP JOURNEY --- */}
        <div className="hidden lg:block relative w-full h-[600px] mt-24">
          
          {/* SVG Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>
            <motion.path
              d={desktopPath}
              fill="none"
              stroke="url(#gradient-desktop)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: scrollYProgress }}
              className="drop-shadow-[0_0_12px_rgba(198,162,79,0.4)]"
            />
            <path
              d={desktopPath}
              fill="none"
              stroke="#E8DFCE"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="opacity-40"
            />
            <defs>
              <linearGradient id="gradient-desktop" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#770705" />
                <stop offset="50%" stopColor="#C6A24F" />
                <stop offset="100%" stopColor="#770705" />
              </linearGradient>
            </defs>
          </svg>

          {/* Nodes */}
          {t.workflow.steps.map((step, idx) => (
            <div
              key={idx}
              className="absolute w-0 h-0 flex items-center justify-center"
              style={{ top: `${desktopSteps[idx].y}%`, [posKey]: `${desktopSteps[idx].x}%` }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.4 }}
                  className="bg-white/50 backdrop-blur-2xl border border-white p-6 rounded-3xl shadow-[0_12px_40px_rgba(119,7,5,0.06)] flex flex-col items-center justify-center w-[220px] xl:w-[260px] text-center hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(198,162,79,0.15)] hover:border-[#C6A24F]/40 hover:-translate-y-2 transition-all duration-500 group cursor-default"
                >
                  <span className="text-[#C6A24F]/10 group-hover:text-[#C6A24F]/20 font-en text-8xl font-bold absolute -top-8 -right-4 transition-colors duration-500 pointer-events-none select-none z-0">
                    0{idx + 1}
                  </span>
                  
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#770705] to-[#C6A24F] p-[2px] mb-6 relative z-10 shadow-lg">
                    <div className="w-full h-full bg-[#F7F5F2] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#770705] group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-[#2B2B2B] font-bold text-lg xl:text-xl z-10 leading-snug">{step}</h3>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* --- MOBILE / TABLET JOURNEY --- */}
        <div className="block lg:hidden relative w-full h-[1200px] sm:h-[1000px] mt-16 max-w-[500px] mx-auto">
          
          {/* SVG Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>
            <motion.path
              d={mobilePath}
              fill="none"
              stroke="url(#gradient-mobile)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: scrollYProgress }}
              className="drop-shadow-[0_0_12px_rgba(198,162,79,0.4)]"
            />
            <path
              d={mobilePath}
              fill="none"
              stroke="#E8DFCE"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="opacity-40"
            />
            <defs>
              <linearGradient id="gradient-mobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#770705" />
                <stop offset="50%" stopColor="#C6A24F" />
                <stop offset="100%" stopColor="#770705" />
              </linearGradient>
            </defs>
          </svg>

          {/* Nodes */}
          {t.workflow.steps.map((step, idx) => (
            <div
              key={idx}
              className="absolute w-0 h-0 flex items-center justify-center"
              style={{ top: `${mobileSteps[idx].y}%`, [posKey]: `${mobileSteps[idx].x}%` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.3 }}
                  className="bg-white/60 backdrop-blur-xl border border-white p-5 sm:p-6 rounded-3xl shadow-[0_12px_30px_rgba(119,7,5,0.06)] flex flex-col items-center justify-center w-[160px] sm:w-[200px] text-center hover:bg-white/90 hover:shadow-[0_20px_40px_rgba(198,162,79,0.15)] transition-all duration-500 group"
                >
                  <span className="text-[#C6A24F]/10 font-en text-6xl sm:text-7xl font-bold absolute -top-4 -right-2 pointer-events-none select-none z-0">
                    0{idx + 1}
                  </span>
                  
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#770705] to-[#C6A24F] p-[2px] mb-4 relative z-10 shadow-md">
                    <div className="w-full h-full bg-[#F7F5F2] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#770705]"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-[#2B2B2B] font-bold text-sm sm:text-base z-10 leading-snug">{step}</h3>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
