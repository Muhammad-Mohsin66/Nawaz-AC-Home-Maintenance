import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ isMobile = false }) {
  const { currentLang, changeLanguage, languages, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selected = languages.find((l) => l.code === currentLang) || languages[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="w-full pt-2 pb-1">
        <div className="text-xs text-[#C8A96A] font-body font-medium mb-2 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" />
          <span>اختر اللغة / Select Language</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => {
            const isActive = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-full text-xs font-body transition-luxury ${
                  isActive
                    ? 'bg-[#C8A96A] text-[#0A1118] font-semibold shadow-[0_2px_12px_rgba(200,169,106,0.25)]'
                    : 'bg-[#122336] text-[#F7F3EC]/80 border border-[rgba(200,169,106,0.2)] hover:border-[#C8A96A] hover:text-[#C8A96A]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </span>
                {isActive && <Check className="w-3.5 h-3.5 text-[#0A1118]" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button - Quiet Luxury Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Language Selector"
        aria-expanded={isOpen}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[rgba(200,169,106,0.28)] bg-[#122336]/80 hover:bg-[#243B53] text-[#F7F3EC] hover:text-[#C8A96A] hover:border-[#C8A96A] transition-luxury text-xs font-body font-medium shadow-none cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 text-[#C8A96A]" />
        <span className="text-sm leading-none">{selected.flag}</span>
        <span className="font-semibold">{selected.nativeName}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#8BAAC9] transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#C8A96A]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-full mt-2 z-50 min-w-[190px] rounded-[18px] bg-[#122336]/98 backdrop-blur-2xl border border-[rgba(200,169,106,0.35)] p-1.5 shadow-[0_15px_40px_rgba(10,17,24,0.7)] animate-in fade-in slide-in-from-top-2 duration-300 ${
            isRtl ? 'left-0' : 'right-0'
          }`}
        >
          <div className="px-3 py-1.5 text-[11px] font-body text-[#8BAAC9] border-b border-[rgba(200,169,106,0.18)] mb-1 flex items-center justify-between">
            <span>اللغة / Language</span>
            <span className="text-[#C8A96A] font-mono text-[10px]">6 Languages</span>
          </div>

          <div className="space-y-1">
            {languages.map((lang) => {
              const isActive = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-full text-xs font-body transition-luxury text-start cursor-pointer ${
                    isActive
                      ? 'bg-[#C8A96A] text-[#0A1118] font-bold shadow-[0_2px_10px_rgba(200,169,106,0.25)]'
                      : 'text-[#F7F3EC]/85 hover:bg-[#243B53] hover:text-[#C8A96A]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="flex flex-col">
                      <span className="font-medium">{lang.nativeName}</span>
                      {lang.nativeName !== lang.name && (
                        <span className={`text-[10px] ${isActive ? 'text-[#0A1118]/80' : 'text-[#8BAAC9]'}`}>
                          {lang.name}
                        </span>
                      )}
                    </div>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-[#0A1118]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
