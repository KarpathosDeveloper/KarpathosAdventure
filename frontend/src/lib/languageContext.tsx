import React, { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Language } from "../data/translations";

type LanguageContextProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("karpathos_language") as Language;
      if (stored === "en" || stored === "el" || stored === "es" || stored === "fr" || stored === "de") {
        return stored;
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("karpathos_language", lang);
    }
  };

  const t = (key: string, fallback?: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
