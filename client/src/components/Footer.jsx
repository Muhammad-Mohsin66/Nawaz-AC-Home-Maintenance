import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1118] text-[#8BAAC9] pt-16 pb-12 border-t border-[rgba(200,169,106,0.28)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[rgba(200,169,106,0.18)]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4 text-start">
            <div className="flex items-center gap-3.5">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                alt={t.brand.fullName}
                className="w-13 h-13 rounded-full object-cover ring-1 ring-[rgba(200,169,106,0.4)]"
              />
              <div>
                <h3 className="text-xl font-display font-medium text-[#F7F3EC]">
                  {t.brand.fullName}
                </h3>
                <span className="text-xs text-[#C8A96A] font-body block mt-0.5">
                  {t.brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8BAAC9] font-reading leading-relaxed max-w-md">
              {t.footer.aboutBrand}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3.5 py-1 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#C8A96A] font-body">
                {t.footer.crLabel}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#F7F3EC]/90 font-body">
                {t.footer.unifiedLabel}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#C8A96A] font-body">
                {t.footer.vatLabel}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-start">
            <h4 className="text-base font-display font-medium text-[#F7F3EC] tracking-wide border-b border-[rgba(200,169,106,0.18)] pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a href="#hero" className="text-[#8BAAC9] hover:text-[#C8A96A] transition-luxury">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#8BAAC9] hover:text-[#C8A96A] transition-luxury">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#8BAAC9] hover:text-[#C8A96A] transition-luxury">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#trust" className="text-[#8BAAC9] hover:text-[#C8A96A] transition-luxury">
                  {t.nav.trust}
                </a>
              </li>
              <li>
                <a href="#booking" className="text-[#8BAAC9] hover:text-[#C8A96A] transition-luxury">
                  {t.nav.booking}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3 text-start">
            <h4 className="text-base font-display font-medium text-[#F7F3EC] tracking-wide border-b border-[rgba(200,169,106,0.18)] pb-2">
              {t.footer.contactInfo}
            </h4>
            
            <ul className="space-y-3.5 text-sm font-body">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#C8A96A] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="text-xs text-[#8BAAC9] block">{t.footer.phoneDirect}</span>
                  <a href="tel:+966543729238" className="text-[#F7F3EC] hover:text-[#C8A96A] font-medium transition-luxury" dir="ltr">
                    +966 54 372 9238
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#C8A96A] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="text-xs text-[#8BAAC9] block">{t.footer.whatsappChat}</span>
                  <a
                    href="https://wa.me/966543729238"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A96A] hover:text-[#E4D3A8] font-medium transition-luxury"
                    dir="ltr"
                  >
                    +966 54 372 9238
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#C8A96A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#8BAAC9] block">{t.footer.nationalAddress}</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=7251+Al+Nafl+Al+Yasmin+Riyadh+13325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F7F3EC]/80 hover:text-[#C8A96A] text-xs leading-relaxed block transition-luxury"
                  >
                    {t.footer.addressText}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BAAC9] font-body">
          <div className="text-start">
            © {currentYear} {t.footer.copyright}
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122336] hover:bg-[#243B53] text-[#F7F3EC] hover:text-[#C8A96A] transition-luxury cursor-pointer border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C8A96A]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
