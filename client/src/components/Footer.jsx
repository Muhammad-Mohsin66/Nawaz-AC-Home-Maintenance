import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="شعار نواز للصيانة"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/40"
              />
              <div>
                <h3 className="text-xl font-black text-white">
                  نواز لصيانة المكيفات والخدمات المنزلية
                </h3>
                <span className="text-xs text-blue-400 font-semibold block">
                  Nawaz AC & Home Maintenance — الرياض
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              مؤسسة متخصصة في أعمال صيانة وإصلاح وتركيب المكيفات، والتمديدات الكهربائية، والسباكة، والصيانة المنزلية العامة في مدينة الرياض. نحرص على الدقة، الجودة، وسرعة الاستجابة.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                سجل تجاري: 1010469561
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                الرقم الموحد: 7003768764
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                الرقم الضريبي: 310156889300003
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-right">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  خدمات التكييف والكهرباء والسباكة
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  من نحن والإشراف الفني
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-blue-400 transition-colors">
                  التراخيص والعنوان الوطني
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-blue-400 transition-colors">
                  حجز موعد صيانة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3 text-right">
            <h4 className="text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              معلومات التواصل والموقع
            </h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-900/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">اتصال هاتفي مباشر:</span>
                  <a href="tel:+966543729238" className="text-white hover:text-blue-400 font-bold" dir="ltr">
                    +966 54 372 9238
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">محادثة واتساب:</span>
                  <a
                    href="https://wa.me/966543729238"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold"
                    dir="ltr"
                  >
                    +966 54 372 9238
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-900/40 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">العنوان الوطني المعتمد:</span>
                  <span className="text-slate-300 text-xs leading-relaxed block">
                    حي الندى، طريق الثمامة، الرياض 13317 (RADC3169)
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-right">
            © {currentYear} نواز لصيانة المكيفات والخدمات المنزلية. جميع الحقوق محفوظة.
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-800"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
