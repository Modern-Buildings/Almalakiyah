"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* خلفية ثابتة خفيفة السعة */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/real-estate.png"
          alt="Almalakiyah Hero Background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* طبقة تظليل جمالية فوق الصورة */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#090D16]" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          {t?.hero?.title || "الملكية العقارية للاستثمار والتطوير"}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light">
          {t?.hero?.subtitle || "نصنع فرص استثمارية مستدامة برؤية عصرية"}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/#who-we-are"
            className="px-8 py-3 bg-[#C9A050] text-black font-bold rounded-lg hover:bg-[#b08b42] transition-colors duration-300"
          >
            {t?.hero?.btnExplore || t?.nav?.projects || "من نحن"}
          </a>
          <a
            href="/#" 
            className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
          >
            {(t?.hero as Record<string, string>)?.map || "الخريطة التفاعلية"}
          </a>
        </div>
      </div>
    </section>
  );
}