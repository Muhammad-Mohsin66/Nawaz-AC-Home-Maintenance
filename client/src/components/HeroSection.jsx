import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, MapPin, Play, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onSelectService }) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Subtle decorative background glow */}
      <div className="absolute top-10 right-10 -z-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-right space-y-6"
          >
            {/* Top Verified Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span>مؤسسة مرخصة رسمياً في الرياض • س.ت: 1010469561</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.25] tracking-tight">
              خدمات التكييف والكهرباء والسباكة والصيانة المنزلية في الرياض
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              نقدم خدمات الصيانة والإصلاح والتركيب للمنازل، مع سهولة الحجز والتواصل المباشر بأعلى معايير الإتقان والدقة في جميع أحياء العاصمة.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">صيانة شاملة وسريعة</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">مواعيد دقيقة ومنتظمة</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">تغطية أحياء الرياض</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-base shadow-lg shadow-blue-700/25 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>احجز خدمتك الآن</span>
              </a>

              <a
                href="https://wa.me/966543729238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>تواصل عبر واتساب</span>
              </a>

              <a
                href="tel:+966543729238"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base transition-all"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span dir="ltr">054 372 9238</span>
              </a>
            </div>

            {/* Quick Service Pills */}
            <div className="pt-2 flex flex-wrap gap-2 items-center text-xs text-slate-500 font-medium">
              <span className="text-slate-700 font-bold">الخدمات السريعة:</span>
              <button
                onClick={() => onSelectService('خدمات التكييف')}
                className="hover:text-blue-700 underline cursor-pointer"
              >
                صيانة مكيفات سبليت
              </button>
              <span>•</span>
              <button
                onClick={() => onSelectService('خدمات الكهرباء')}
                className="hover:text-blue-700 underline cursor-pointer"
              >
                إصلاح أعطال الكهرباء
              </button>
              <span>•</span>
              <button
                onClick={() => onSelectService('خدمات السباكة')}
                className="hover:text-blue-700 underline cursor-pointer"
              >
                معالجة تسربات المياه
              </button>
              <span>•</span>
              <button
                onClick={() => onSelectService('خدمات الصيانة المنزلية')}
                className="hover:text-blue-700 underline cursor-pointer"
              >
                صيانة عامة دورية
              </button>
            </div>
          </motion.div>

          {/* Left Column: Media Showcase (Promotional Video & Highlights) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Video Container Frame */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 aspect-[9/16] max-h-[520px] mx-auto max-w-[340px] sm:max-w-[360px] group">
              {!videoError ? (
                <video
                  src="/videos/promo.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onError={() => setVideoError(true)}
                >
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
                  <Play className="w-12 h-12 text-blue-400 mb-3" />
                  <p className="text-sm font-semibold">فيديو تعريفي بخدمات نواز</p>
                  <p className="text-xs text-slate-400 mt-2">اتصل بنا مباشرة للحصول على الاستشارة الفورية</p>
                </div>
              )}

              {/* Overlay Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>فيديو تعريفي مباشر</span>
              </div>
            </div>

            {/* Floating Trust Indicator Card */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-xl items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900">إشراف فني متخصص</div>
                <div className="text-xs text-slate-500">م. نواز أمين (M. Nawaz Ameen)</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
