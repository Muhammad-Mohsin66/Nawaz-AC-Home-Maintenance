import React from 'react';
import { ShieldCheck, UserCheck, MapPin, Wrench, Sparkles, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#080e1a] to-[#0d1d3a] border-t border-slate-800 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 right-10 -z-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase with Real Technician Photo in Uniform */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Technician Photo Frame with Cyan & Blue border glow */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-400/40 bg-slate-950 relative aspect-[9/16] max-h-[500px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/technician.jpg`}
                  alt="م. نواز أمين - المشرف الفني على أعمال الصيانة"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                
                {/* Overlay Badge at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-white text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <UserCheck className="w-5 h-5 text-cyan-400" />
                    <span className="font-black text-xl text-white">م. نواز أمين (M. Nawaz Ameen)</span>
                  </div>
                  <p className="text-xs text-cyan-300 font-semibold">
                    مشرف ومسؤول العمليات الفنية الميدانية بالرياض
                  </p>
                </div>
              </div>

              {/* Floating Verified Logo Card with Glow */}
              <div className="absolute -top-5 -right-4 sm:-right-6 glass-card-dark rounded-2xl p-3.5 shadow-2xl border border-cyan-400/40 flex items-center gap-3">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                  alt="شعار مؤسسة نواز"
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-cyan-400/50"
                />
                <div className="text-right">
                  <div className="text-xs font-bold text-white">مؤسسة رسمية معتمدة</div>
                  <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>سجل تجاري نظامي</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-right space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>نبذة عن المؤسسة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
              نواز لصيانة المكيفات والخدمات المنزلية —{' '}
              <span className="blue-gradient-text">خبرة وإتقان وثقة</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              تأسست مؤسسة نواز في مدينة الرياض لتقديم خدمات الصيانة والإصلاح والتركيب للمنازل والشقق والمرافق السكنية والتجارية. نضع راحة العميل في مقدمة أولوياتنا من خلال توفير حلول هندسية وفنية متكاملة تغطي التكييف والكهرباء والسباكة والصيانة العامة.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card-dark border border-cyan-500/20">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">احترافية ودقة في التنفيذ</h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    نحرص على تشخيص الأعطال بدقة قبل البدء بالعمل وتوفير قطع الغيار والحلول المناسبة بأمانة وشفافية كاملة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card-dark border border-amber-500/20">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">تغطية شاملة لكافة أحياء الرياض</h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    فريقنا المتنقل جاهز للوصول إليك في شمال وشرق وغرب وجنوب ووسط الرياض، مع مرونة عالية في تحديد المواعيد المناسبة لك.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card-dark border border-emerald-500/20">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">تعامل نظامي وشفاف</h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    مسجلون رسمياً بالسجل التجاري وشهادة العنوان الوطني وضريبة القيمة المضافة لضمان حق العميل وجودة الخدمة.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm shadow-xl shadow-blue-900/40 transition-all border border-cyan-300/30"
              >
                طلب موعد صيانة
              </a>
              <a
                href="#trust"
                className="px-7 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm transition-all"
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
