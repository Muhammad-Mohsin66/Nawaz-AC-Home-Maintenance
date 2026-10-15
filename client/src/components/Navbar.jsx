import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Wrench, Calendar, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero', icon: Home },
    { name: t.nav.services, href: '#services', icon: Wrench },
    { name: t.nav.about, href: '#about', icon: ShieldCheck },
    { name: t.nav.trust, href: '#trust', icon: ShieldCheck },
    { name: t.nav.booking, href: '#booking', icon: Calendar },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled
          ? 'bg-[#0A1118]/95 backdrop-blur-xl py-3 border-b border-[rgba(200,169,106,0.28)] shadow-[0_10px_35px_rgba(10,17,24,0.6)]'
          : 'bg-[#0A1118]/85 backdrop-blur-md py-4 border-b border-[rgba(200,169,106,0.18)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                alt={t.brand.fullName}
                className="h-11 w-11 sm:h-13 sm:w-13 rounded-full object-cover ring-1 ring-[rgba(200,169,106,0.4)] group-hover:ring-[#C8A96A] transition-luxury"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#C8A96A] border-2 border-[#0A1118] rounded-full"></span>
            </div>
            <div className="text-start">
              <span className="block text-lg sm:text-xl font-display font-medium text-[#F7F3EC] group-hover:text-[#E4D3A8] transition-luxury tracking-tight leading-tight">
                {t.brand.name}
              </span>
              <span className="block text-xs font-body font-normal text-[#8BAAC9] mt-0.5">
                {t.brand.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-full text-[#F7F3EC]/80 hover:text-[#C8A96A] hover:bg-[#122336] text-sm font-body font-medium transition-luxury border border-transparent hover:border-[rgba(200,169,106,0.28)]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Contact Buttons + Language Selector Dropdown */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Upper Corner Language Selector Dropdown */}
            <LanguageSelector />

            <a
              href="tel:+966543729238"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[rgba(200,169,106,0.28)] bg-[#122336]/60 hover:bg-[#243B53] text-[#F7F3EC] hover:text-[#C8A96A] hover:border-[#C8A96A] transition-luxury text-sm font-medium font-body"
              title={t.nav.callNow}
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
              <span dir="ltr">054 372 9238</span>
            </a>
            
            <a
              href="https://wa.me/966543729238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(200,169,106,0.28)] bg-transparent hover:bg-[#C8A96A]/10 text-[#C8A96A] hover:text-[#E4D3A8] hover:border-[#C8A96A] transition-luxury text-sm font-medium font-body"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.nav.whatsappDirect}</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] font-body font-semibold text-sm transition-luxury shadow-[0_4px_18px_rgba(200,169,106,0.2)] hover:shadow-[0_6px_24px_rgba(200,169,106,0.32)] hover:-translate-y-0.5 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookNow}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Selector + Menu Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[rgba(200,169,106,0.28)] text-[#F7F3EC] hover:bg-[#122336] hover:text-[#C8A96A] transition-luxury focus:outline-hidden"
              aria-label={t.nav.menuAria}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C8A96A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A1118]/98 backdrop-blur-2xl border-t border-[rgba(200,169,106,0.28)] px-5 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-500">
          {/* Mobile Language Selector Grid */}
          <LanguageSelector isMobile={true} />

          <div className="border-t border-[rgba(200,169,106,0.18)] pt-2 space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full text-[#F7F3EC]/90 font-medium text-sm hover:bg-[#122336] hover:text-[#C8A96A] border border-transparent hover:border-[rgba(200,169,106,0.28)] transition-luxury"
                >
                  <Icon className="w-4 h-4 text-[#C8A96A]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[rgba(200,169,106,0.18)] space-y-2">
            <a
              href="tel:+966543729238"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[rgba(200,169,106,0.28)] text-[#F7F3EC] font-medium text-sm bg-[#122336] hover:border-[#C8A96A] transition-luxury"
            >
              <Phone className="w-4 h-4 text-[#C8A96A]" />
              <span dir="ltr">054 372 9238</span>
            </a>
            <a
              href="https://wa.me/966543729238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[rgba(200,169,106,0.28)] bg-transparent hover:bg-[#C8A96A]/10 text-[#C8A96A] font-medium text-sm transition-luxury"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.whatsappInstant}</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] font-semibold text-sm shadow-[0_4px_18px_rgba(200,169,106,0.2)] transition-luxury"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookNow}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
