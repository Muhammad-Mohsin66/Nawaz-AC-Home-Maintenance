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
          ? 'glass-nav-dark shadow-2xl py-3 border-b border-cyan-500/20'
          : 'bg-[#081226]/90 backdrop-blur-md py-4 border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                alt="شعار نواز لصيانة المكيفات والخدمات المنزلية"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover shadow-lg ring-2 ring-cyan-400/50 group-hover:ring-cyan-300 transition-all"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#081226] rounded-full"></span>
            </div>
            <div className="text-right">
              <span className="block text-lg sm:text-xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                نواز لصيانة المكيفات
              </span>
              <span className="block text-xs font-semibold text-cyan-400">
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
                className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-cyan-500/10 font-semibold text-sm transition-all border border-transparent hover:border-cyan-500/20"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Contact Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+966543729238"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-cyan-500/30 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-cyan-300 transition-all text-sm font-semibold shadow-xs"
              title="اتصل الآن"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span dir="ltr">054 372 9238</span>
            </a>
            
            <a
              href="https://wa.me/966543729238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white transition-all text-sm font-bold shadow-lg shadow-emerald-900/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب مباشر</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition-all text-sm font-black shadow-lg shadow-blue-900/40 active:scale-95 border border-cyan-300/30"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز الآن</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:bg-slate-800 transition-colors focus:outline-hidden"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav-dark border-t border-slate-800 px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-200 font-semibold text-base hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors border border-transparent hover:border-cyan-500/20"
              >
                <Icon className="w-5 h-5 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <a
              href="tel:+966543729238"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-cyan-500/30 text-white font-bold text-sm bg-slate-900"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span dir="ltr">054 372 9238</span>
            </a>
            <a
              href="https://wa.me/966543729238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب فورية</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-sm shadow-md"
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
