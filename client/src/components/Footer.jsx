import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050b14] text-slate-300 pt-16 pb-12 border-t border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3.5">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                alt="شعار نواز للصيانة"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-cyan-400/50 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-black text-white">
                  نواز لصيانة المكيفات والخدمات المنزلية
                </h3>
                <span className="text-xs text-cyan-400 font-semibold block">
                  Nawaz AC & Home Maintenance — الرياض
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              مؤسسة متخصصة بخبرة تزيد عن 15 عاماً في أعمال صيانة وإصلاح وتركيب المكيفات، والتمديدات الكهربائية، والسباكة، والصيانة المنزلية العامة في مدينة الرياض. نحرص على الدقة، الجودة، وسرعة الاستجابة.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 font-mono">
                سجل تجاري: 1010469561
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-blue-300 font-mono">
                الرقم الموحد: 7003768764
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-amber-300 font-mono">
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
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  خدمات التكييف والكهرباء والسباكة
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  من نحن والإشراف الفني
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-cyan-400 transition-colors">
                  التراخيص والعنوان الوطني
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-cyan-400 transition-colors">
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
            
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">اتصال هاتفي مباشر:</span>
                  <a href="tel:+966543729238" className="text-white hover:text-cyan-400 font-bold" dir="ltr">
                    +966 54 372 9238
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
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
                <div className="w-9 h-9 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">العنوان الوطني المعتمد:</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=7251+Al+Nafl+Al+Yasmin+Riyadh+13325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-amber-300 text-xs leading-relaxed block transition-colors"
                  >
                    7251 النفل، 4362، حي الياسمين، الرياض 13325 (RAYB7251)
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-right">
            © {currentYear} نواز لصيانة المكيفات والخدمات المنزلية. جميع الحقوق محفوظة.
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
