import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, MapPin, Play, Award, CheckCircle2, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onSelectService }) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#061022] via-[#0a1936] to-[#080e1a]">
      {/* Dynamic atmospheric light glows */}
      <div className="absolute top-1/4 right-5 -z-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-5 right-1/3 -z-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle geometric grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-right space-y-6"
          >
            {/* Top Verified Tag with Neon Edge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>مؤسسة مرخصة رسمياً في الرياض • س.ت: 1010469561</span>
            </div>

            {/* Headline with Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.25] tracking-tight">
              خدمات التكييف والكهرباء والسباكة والصيانة المنزلية{' '}
              <span className="blue-gradient-text">في الرياض</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
              نقدم خدمات الصيانة والإصلاح والتركيب للمنازل، مع سهولة الحجز والتواصل المباشر بأعلى معايير الإتقان والدقة في جميع أحياء العاصمة.
            </p>

            {/* Trust Badges - Luxury Dark Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl glass-card-dark border border-cyan-500/20">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-xs sm:text-sm font-bold text-white block">صيانة شاملة</span>
                  <span className="text-[11px] text-slate-400">فحص فوري ودقيق</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl glass-card-dark border border-blue-500/20">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-xs sm:text-sm font-bold text-white block">التزام بالمواعيد</span>
                  <span className="text-[11px] text-slate-400">خدمة سريعة بالرياض</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl glass-card-dark border border-amber-500/20 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-xs sm:text-sm font-bold text-white block">تغطية العاصمة</span>
                  <span className="text-[11px] text-slate-400">كافة أحياء الرياض</span>
                </div>
              </div>
            </div>

            {/* Call To Actions with Neon Glows */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 border border-cyan-300/30"
              >
                <Calendar className="w-5 h-5 text-cyan-200" />
                <span>احجز خدمتك الآن</span>
              </a>

              <a
                href="https://wa.me/966543729238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5" />
                <span>تواصل عبر واتساب</span>
              </a>

              <a
                href="tel:+966543729238"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base transition-all"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span dir="ltr">054 372 9238</span>
              </a>
            </div>

            {/* Quick Service Interactive Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5 items-center text-xs text-slate-400 font-medium">
              <span className="text-cyan-300 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                الخدمات السريعة:
              </span>
              <button
                onClick={() => onSelectService('خدمات التكييف')}
                className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                صيانة مكيفات سبليت
              </button>
              <button
                onClick={() => onSelectService('خدمات الكهرباء')}
                className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 hover:border-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                إصلاح أعطال الكهرباء
              </button>
              <button
                onClick={() => onSelectService('خدمات السباكة')}
                className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                معالجة تسربات المياه
              </button>
              <button
                onClick={() => onSelectService('خدمات الصيانة المنزلية')}
                className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700 hover:border-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                صيانة عامة دورية
              </button>
            </div>
          </motion.div>

          {/* Left Column: Media Showcase (Promotional Video with Neon Edge) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Cyan/Blue Backlight glow for video */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 rounded-3xl blur-2xl transform scale-105" />

            {/* Video Container Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl bg-slate-950 aspect-[9/16] max-h-[520px] mx-auto max-w-[340px] sm:max-w-[360px] group">
              {!videoError ? (
                <video
                  src={`${import.meta.env.BASE_URL}videos/promo.mp4`}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onError={() => setVideoError(true)}
                >
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-950 text-white">
                  <Play className="w-12 h-12 text-cyan-400 mb-3" />
                  <p className="text-sm font-semibold">فيديو تعريفي بخدمات نواز</p>
                  <p className="text-xs text-slate-400 mt-2">اتصل بنا مباشرة للحصول على الاستشارة الفورية</p>
                </div>
              )}

              {/* Overlay Badge */}
              <div className="absolute top-3.5 right-3.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30 text-white text-xs font-semibold flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>فيديو تعريفي مباشر</span>
              </div>
            </div>

            {/* Floating Trust Indicator Card */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 glass-card-dark p-4 rounded-2xl border border-cyan-400/30 shadow-2xl items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">إشراف فني متخصص</div>
                <div className="text-xs text-cyan-400 font-semibold">م. نواز أمين (M. Nawaz Ameen)</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
