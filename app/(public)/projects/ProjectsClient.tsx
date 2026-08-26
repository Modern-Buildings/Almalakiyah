"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsClient() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  return (
    <main className={`section-dark min-h-screen ${isAr ? 'font-ar' : 'font-en'}`}>
      <section className="pt-48 pb-10 px-6 md:px-12 max-w-[1800px] mx-auto text-center md:text-right border-b border-white/10">
        <div className="text-mask mb-6">
          <h1 className="split-text text-6xl md:text-[8vw] font-light leading-none text-white">
            {t.projectsPage.title1} <br/><span className="text-gold font-bold">{t.projectsPage.title2}</span>
          </h1>
        </div>
        <div className="max-w-xl mx-auto md:mx-0">
          <p className="split-text-lines text-white/60 font-light text-lg mb-10">
            {t.projectsPage.description}
          </p>
        </div>
      </section>

      {/* Masonry / Asymmetrical Grid */}
      <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          
          {/* Large Vertical Image */}
          <Link href="/projects/1" className="md:col-span-6 block group mb-12 project-card">
            <div className="relative w-full h-[80vh] md:h-[110vh] img-parallax-wrap clip-path-reveal mb-8">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt="Project 1" className="transition-transform duration-[2s] group-hover:scale-105 group-hover:brightness-75" />
            </div>
            <div className={`flex justify-between items-start border-t border-white/10 pt-6 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{t.projectsPage.project1.title}</h3>
                <p className="text-white/50 font-en text-sm tracking-widest uppercase">{t.projectsPage.project1.location}</p>
              </div>
              <span className="text-gold font-en text-xs tracking-widest">{t.projectsPage.project1.status}</span>
            </div>
          </Link>

          <div className="md:col-span-6 flex flex-col gap-16 md:gap-32 md:mt-40">
            {/* Square Image Offset */}
            <Link href="/projects/2" className="block group project-card">
              <div className="relative w-full h-[60vh] img-parallax-wrap clip-path-reveal mb-8">
                <img src="https://images.unsplash.com/photo-1613490908592-fd5e48f43fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project 2" className="transition-transform duration-[2s] group-hover:scale-105 group-hover:brightness-75" />
              </div>
              <div className={`flex justify-between items-start border-t border-white/10 pt-6 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.projectsPage.project2.title}</h3>
                  <p className="text-white/50 font-en text-sm tracking-widest uppercase">{t.projectsPage.project2.location}</p>
                </div>
                <span className="text-white/30 font-en text-xs tracking-widest">{t.projectsPage.project2.status}</span>
              </div>
            </Link>

            {/* Wide Image */}
            <Link href="/projects/3" className="block group project-card">
              <div className="relative w-full h-[70vh] img-parallax-wrap clip-path-reveal mb-8">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Project 3" className="transition-transform duration-[2s] group-hover:scale-105 group-hover:brightness-75" />
              </div>
              <div className={`flex justify-between items-start border-t border-white/10 pt-6 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.projectsPage.project3.title}</h3>
                  <p className="text-white/50 font-en text-sm tracking-widest uppercase">{t.projectsPage.project3.location}</p>
                </div>
                <span className="text-gold font-en text-xs tracking-widest">{t.projectsPage.project3.status}</span>
              </div>
            </Link>
          </div>

        </div>
        
        {/* Full Width Project */}
        <div className="mt-32 w-full">
          <Link href="/projects/4" className="block group project-card">
            <div className="relative w-full h-[90vh] img-parallax-wrap clip-path-reveal mb-8">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Project 4" className="transition-transform duration-[2s] group-hover:scale-105 group-hover:brightness-75" />
            </div>
            <div className={`flex justify-between items-start border-t border-white/10 pt-6 max-w-[1800px] mx-auto px-6 md:px-0 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">{t.projectsPage.project4.title}</h3>
                <p className="text-white/50 font-en text-sm tracking-widest uppercase">{t.projectsPage.project4.location}</p>
              </div>
              <span className="text-gold font-en text-xs tracking-widest border border-gold/30 px-4 py-2 rounded-full">{t.projectsPage.project4.status}</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
