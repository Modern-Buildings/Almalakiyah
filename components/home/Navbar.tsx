"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: '#home', label: language === 'ar' ? 'الصفحة الرئيسية' : 'Home' },
    { id: '#who-we-are', label: t.nav.whoWeAre },
    { id: '#sectors', label: language === 'ar' ? 'خدماتنا' : t.nav.services },
    // { id: '#projects', label: t.nav.projects }, // Hidden until projects are ready
    { id: '#contact', label: t.nav.contact }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMobileMenuOpen(false);
    if (id === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id.startsWith('#')) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      ref={headerRef} 
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[96%] max-w-[1600px] z-50 transition-all duration-500 rounded-full"
    >
      {/* Background Layer */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-500 z-0 ${
          isScrolled || isMobileMenuOpen ? "bg-[#E7D0BC]/95" : "bg-transparent"
        }`}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full flex justify-between items-center px-6 md:px-8 py-3">
        {/* Logo */}
        <Link 
          href="#home" 
          className="flex items-center gap-4 group magnetic-wrap nav-logo transition-opacity duration-300" 
          onClick={(e) => handleNavClick(e as any, '#home')}
        >
          <img 
            src={isScrolled || isMobileMenuOpen ? "/assets/img/horizontal.png" : "/assets/img/BW.png"} 
            alt="Al-Malakiyah" 
            className={`h-7 md:h-9 w-auto transition-all duration-300 ${!isScrolled && !isMobileMenuOpen ? 'filter brightness-0 invert' : ''}`} 
          />
        </Link>
        
        {/* Top Menu for fast navigation */}
        <nav className={`hidden lg:flex items-center gap-8 text-[15px] ${language === 'ar' ? 'font-ar' : 'font-en'}`}>
          {navLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.id} 
              onClick={(e) => handleNavClick(e, link.id)}
              className={`relative font-bold transition-colors duration-300 group overflow-hidden ${
                isScrolled ? 'text-[#770705]' : 'text-white'
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className={`absolute bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-full h-[2px] transform ${language === 'ar' ? 'translate-x-[101%] group-hover:translate-x-0' : '-translate-x-[101%] group-hover:translate-x-0'} transition-transform duration-300 ${
                isScrolled ? 'bg-[#770705]' : 'bg-white'
              }`}></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className={`hidden lg:block text-[11px] font-en tracking-widest transition-colors duration-300 relative group overflow-hidden ${isScrolled || isMobileMenuOpen ? 'text-[#770705]' : 'text-white'}`}
          >
            <span className="relative z-10 uppercase">{t.nav.lang}</span>
            <span className={`absolute bottom-0 left-0 w-full h-[1px] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ${
              isScrolled || isMobileMenuOpen ? 'bg-[#770705]' : 'bg-white'
            }`}></span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`menu-toggle lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 ${isScrolled || isMobileMenuOpen ? 'text-[#770705]' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full mt-2 rounded-2xl transition-all duration-300 overflow-hidden bg-transparent ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div 
          className="absolute inset-0 bg-[#E7D0BC]/95 border border-[#770705]/10 z-0"
        ></div>
        <nav className={`relative z-10 flex flex-col items-center gap-4 text-lg py-4 ${language === 'ar' ? 'font-ar' : 'font-en'}`}>
          {navLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.id} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-[#770705] font-bold py-2 w-full text-center hover:bg-[#770705]/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="text-[#770705] font-en font-bold tracking-widest text-sm mt-2 py-2 w-full text-center hover:bg-[#770705]/10 transition-colors"
          >
            {language === 'ar' ? 'ENGLISH' : 'عربي'}
          </button>
        </nav>
      </div>
    </header>
  );
}
