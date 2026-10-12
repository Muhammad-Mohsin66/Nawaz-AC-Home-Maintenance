import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Wrench, Calendar, Home } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero', icon: Home },
    { name: 'خدماتنا', href: '#services', icon: Wrench },
    { name: 'من نحن', href: '#about', icon: ShieldCheck },
    { name: 'التراخيص والاعتماد', href: '#trust', icon: ShieldCheck },
    { name: 'احجز خدمة', href: '#booking', icon: Calendar },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3'
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
              alt="شعار نواز لصيانة المكيفات والخدمات المنزلية"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover shadow-sm ring-2 ring-blue-600/20 group-hover:ring-blue-600 transition-all"
            />
            <div className="text-right">
              <span className="block text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
                نواز للصيانة المنزلية
              </span>
              <span className="block text-xs font-semibold text-blue-700">
                تكييف • كهرباء • سباكة • صيانة عامة بالرياض
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Contact Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+966543729238"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-slate-50 transition-all text-sm font-semibold shadow-xs"
              title="اتصل الآن"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span dir="ltr">054 372 9238</span>
            </a>
            <a
              href="https://wa.me/966543729238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all text-sm font-bold shadow-sm shadow-emerald-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب مباشر</span>
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white transition-all text-sm font-bold shadow-sm shadow-blue-700/25 active:scale-95"
            >
              <span>احجز الآن</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-hidden"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-800 font-semibold text-base hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <Icon className="w-5 h-5 text-blue-600" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <a
              href="tel:+966543729238"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-300 text-slate-800 font-bold text-sm bg-white"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span dir="ltr">054 372 9238</span>
            </a>
            <a
              href="https://wa.me/966543729238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب فورية</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-700 text-white font-bold text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز خدمتك الآن</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
