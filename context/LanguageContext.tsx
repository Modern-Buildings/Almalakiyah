"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { ar } from "../locales/ar";

type Language = "ar" | "en";
type Dictionary = typeof ar;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check local storage or browser preference
    const savedLang = localStorage.getItem("app-language") as Language;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
      localStorage.setItem("app-language", language);
    }
  }, [language, isMounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = language === "ar" ? ar : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div style={{ visibility: isMounted ? "visible" : "hidden", width: '100%', height: '100%' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
