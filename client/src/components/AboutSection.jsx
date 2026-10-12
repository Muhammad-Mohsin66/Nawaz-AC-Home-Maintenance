import React from 'react';
import { ShieldCheck, UserCheck, MapPin, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase with Real Technician Photo & Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Technician Photo Frame */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 relative aspect-[9/16] max-h-[500px]">
                <img
                  src="/images/technician.jpg"
                  alt="م. نواز أمين - المشرف الفني على أعمال الصيانة"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                
                {/* Overlay Badge at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 text-white text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <UserCheck className="w-5 h-5 text-blue-400" />
                    <span className="font-black text-lg">م. نواز أمين (M. Nawaz Ameen)</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    مشرف ومسؤول العمليات الفنية الميدانية بالرياض
                  </p>
                </div>
              </div>

              {/* Floating Verified Logo Card */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl p-3 shadow-xl border border-slate-200 flex items-center gap-3">
                <img
                  src="/images/logo.jpeg"
                  alt="شعار مؤسسة نواز"
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-500/30"
                />
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-900">مؤسسة رسمية معتمدة</div>
                  <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>سجل تجاري نظامي</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-right space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>نبذة عن المؤسسة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              نواز لصيانة المكيفات والخدمات المنزلية — خبرة وثقة وخدمة يعتمد عليها
            </h2>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              تأسست مؤسسة نواز في مدينة الرياض لتقديم خدمات الصيانة والإصلاح والتركيب للمنازل والشقق والمرافق السكنية والتجارية. نضع راحة العميل في مقدمة أولوياتنا من خلال توفير حلول هندسية وفنية متكاملة تغطي التكييف والكهرباء والسباكة والصيانة العامة.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-1">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">احترافية ودقة في التنفيذ</h4>
                  <p className="text-sm text-slate-600">
                    نحرص على تشخيص الأعطال بدقة قبل البدء بالعمل وتوفير قطع الغيار والحلول المناسبة بأمانة وشفافية كاملة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">تغطية شاملة لكافة أحياء الرياض</h4>
                  <p className="text-sm text-slate-600">
                    فريقنا المتنقل جاهز للوصول إليك في شمال وشرق وغرب وجنوب ووسط الرياض، مع مرونة عالية في تحديد المواعيد المناسبة لك.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">تعامل نظامي وشفاف</h4>
                  <p className="text-sm text-slate-600">
                    مسجلون رسمياً بالسجل التجاري وشهادة العنوان الوطني وضريبة القيمة المضافة لضمان حق العميل وجودة الخدمة.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all"
              >
                طلب موعد صيانة
              </a>
              <a
                href="#trust"
                className="px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all"
              >
                الاطلاع على التراخيص والبيانات النظامية
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
