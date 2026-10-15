import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, translations } from './translations';

export { languages, translations };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nawaz_selected_language');
      if (saved && translations[saved]) {
        return saved;
      }
    }
    return 'ar';
  });

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLang(langCode);
      if (typeof window !== 'undefined') {
        localStorage.setItem('nawaz_selected_language', langCode);
      }
    }
  };

  const t = translations[currentLang] || translations.ar;
  const isRtl = t.dir === 'rtl';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = t.dir;
    }
  }, [currentLang, t.dir]);

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t, isRtl, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
