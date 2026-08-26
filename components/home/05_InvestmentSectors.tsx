"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building, Briefcase, TrendingUp, Leaf,
  Utensils, Hotel, Landmark, TreePine,
  BrainCircuit, Cloud, Cpu, Lightbulb,
} from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const contentData = {
  en: {
    sectionTitle: "Our Services",
    sec1Title: "REAL ESTATE",
    sec1Desc: "Developing and investing in real estate projects that create sustainable value",
    sec1Cards: ["Property Development", "Real Estate Asset Management", "Real Estate Brokerage", "Sustainable Communities"],
    sec2Title: "TOURISM",
    sec2Desc: "Investing in tourism projects that strengthen Oman's position as a global destination",
    sec2Cards: ["Hospitality", "Resorts", "Heritage", "Eco Tourism"],
    sec3Title: "TECHNOLOGY",
    sec3Desc: "Investing in digital solutions and future technologies",
    sec3Cards: ["Artificial Intelligence", "Cloud Infrastructure", "Digital Innovation", "Smart Solutions"],
  },
  ar: {
    sectionTitle: "خدماتنا",
    sec1Title: "العقارات",
    sec1Desc: "التطوير والاستثمار في المشاريع العقارية لبناء قيمة مستدامة",
    sec1Cards: ["التطوير العقاري", "ادارة الأصول العقارية", "الوساطة عقارية", "مشاريع مستدامة"],
    sec2Title: "السياحة",
    sec2Desc: "الاستثمار في مشاريع سياحية تعزز مكانة عُمان كوجهة عالمية",
    sec2Cards: ["الضيافة", "المنتجعات", "التراث", "السياحة البيئية"],
    sec3Title: "التكنولوجيا",
    sec3Desc: "الاستثمار في الحلول الرقمية وتقنيات المستقبل",
    sec3Cards: ["الذكاء الاصطناعي", "البنية التحتية السحابية", "الابتكار الرقمي", "حلول ذكية"],
  },
};

const sectors = [
  { id: "sec1", img: "/assets/img/real-estate.png", icons: [Building, Briefcase, TrendingUp, Leaf] },
  { id: "sec2", img: "/assets/img/toursim.png", icons: [Utensils, Hotel, Landmark, TreePine] },
  { id: "sec3", img: "/assets/img/technology.jpg", icons: [BrainCircuit, Cloud, Cpu, Lightbulb] },
];

export default function InvestmentSectors() {
  const containerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = contentData[language as keyof typeof contentData] || contentData.en;
  const isAr = language === "ar";

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sector-copy").forEach((copy) => {
        const elements = copy.querySelectorAll(".sector-title, .sector-description, .sector-card");

        gsap.fromTo(
          elements,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: copy,
              start: "top 78%",
              once: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  const sectorContent = [
    { title: t.sec1Title, description: t.sec1Desc, cards: t.sec1Cards },
    { title: t.sec2Title, description: t.sec2Desc, cards: t.sec2Cards },
    { title: t.sec3Title, description: t.sec3Desc, cards: t.sec3Cards },
  ];

  return (
    <section ref={containerRef} id="sectors" className={`bg-[#F6F4F1] py-20 md:py-28 ${isAr ? "font-ar" : "font-en"}`}>
      <div className="mx-auto max-w-[1360px] px-8 md:px-16 lg:px-20">
        {/* Section Title */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-5xl font-bold leading-none tracking-tight text-[#770705] md:text-7xl lg:text-8xl">
            {t.sectionTitle}
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#770705] rounded-full mx-auto" />
        </div>

        {sectors.map((sector, index) => {
          const content = sectorContent[index];
          const imageFirst = (index % 2 === 1) !== isAr;
          // Hide technology sector (index 2) — can be re-enabled by removing this wrapper
          if (index === 2) {
            return (
              <div key={sector.id} style={{ display: 'none' }}>
                <article
                  className={`grid items-center gap-10 py-14 md:gap-16 md:py-20 lg:grid-cols-2 border-t border-black/8`}
                >
                  <div className={`${imageFirst ? "lg:order-1" : "lg:order-2"} aspect-square w-full overflow-hidden rounded-[32px] bg-[#1A1A1A] shadow-[0_24px_60px_rgba(0,0,0,0.12)]`}>
                    <img
                      src={sector.img}
                      alt={content.title}
                      className="h-full w-full object-cover saturate-[1.06] contrast-[1.03]"
                    />
                  </div>
                  <div className={`sector-copy ${imageFirst ? "lg:order-2" : "lg:order-1"} ${isAr ? "text-right" : "text-left"}`}>
                    <h3 className="sector-title text-4xl font-bold leading-none tracking-tight text-[#1F1F1F] md:text-6xl lg:text-7xl">
                      {content.title}
                    </h3>
                    <p className="sector-description mt-6 max-w-xl text-lg font-light leading-relaxed text-[#666666] md:text-xl">
                      {content.description}
                    </p>
                    <div className="mt-9 grid max-w-lg grid-cols-2 gap-4 md:gap-5">
                      {content.cards.map((card, cardIndex) => {
                        const Icon = sector.icons[cardIndex];
                        return (
                          <div key={card} className="sector-card flex items-center gap-3 rounded-2xl border border-white bg-white/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] md:p-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6F4F1] md:h-11 md:w-11">
                              <Icon className="h-5 w-5 text-[#5A2D2D]" strokeWidth={1.5} />
                            </div>
                            <span className={`${isAr ? "text-sm md:text-base" : "text-xs md:text-sm"} font-medium leading-snug text-[#1F1F1F]`}>{card}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </div>
            );
          }

          // Hide border after السياحة (index 1) since التكنولوجيا (index 2) is hidden
          const showBorder = index < sectors.length - 1 && index !== 1;
          return (
            <article
              key={sector.id}
              className={`grid items-center gap-10 py-14 md:gap-16 md:py-20 lg:grid-cols-2 ${showBorder ? "border-b border-black/8" : ""}`}
            >
              <div className={`${imageFirst ? "lg:order-1" : "lg:order-2"} aspect-square w-full overflow-hidden rounded-[32px] bg-[#1A1A1A] shadow-[0_24px_60px_rgba(0,0,0,0.12)]`}>
                <img
                  src={sector.img}
                  alt={content.title}
                  className="h-full w-full object-cover saturate-[1.06] contrast-[1.03]"
                />
              </div>

              <div className={`sector-copy ${imageFirst ? "lg:order-2" : "lg:order-1"} ${isAr ? "text-right" : "text-left"}`}>
                <h3 className="sector-title text-4xl font-bold leading-none tracking-tight text-[#1F1F1F] md:text-6xl lg:text-7xl">
                  {content.title}
                </h3>
                <p className="sector-description mt-6 max-w-xl text-lg font-light leading-relaxed text-[#666666] md:text-xl">
                  {content.description}
                </p>
                <div className="mt-9 grid max-w-lg grid-cols-2 gap-4 md:gap-5">
                  {content.cards.map((card, cardIndex) => {
                    const Icon = sector.icons[cardIndex];
                    return (
                      <div key={card} className="sector-card flex items-center gap-3 rounded-2xl border border-white bg-white/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] md:p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6F4F1] md:h-11 md:w-11">
                          <Icon className="h-5 w-5 text-[#5A2D2D]" strokeWidth={1.5} />
                        </div>
                        <span className={`${isAr ? "text-sm md:text-base" : "text-xs md:text-sm"} font-medium leading-snug text-[#1F1F1F]`}>{card}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
