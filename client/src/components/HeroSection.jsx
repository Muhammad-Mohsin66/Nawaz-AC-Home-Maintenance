import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, MapPin, Play, Award, CheckCircle2, Sparkles, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection({ onSelectService }) {
  const [videoError, setVideoError] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1118]">
      {/* Subtle warm atmospheric light glow */}
      <div className="absolute top-1/4 right-5 -z-10 w-[550px] h-[550px] bg-[#C8A96A]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-[480px] h-[480px] bg-[#243B53]/25 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle hairline editorial grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(200,169,106,0.12)_1px,transparent_1px)] [background-size:36px_36px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-start space-y-7"
          >
            {/* Top Verified Tag with Hairline Border */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#C8A96A] text-xs sm:text-sm font-body font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-pulse"></span>
              <ShieldCheck className="w-4 h-4 text-[#C8A96A]" />
              <span className="text-[#F7F3EC]/90">{t.brand.licensedBadge}</span>
            </div>

            {/* Headline with Elegant Serif Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-normal text-[#F7F3EC] leading-[1.2] tracking-tight">
              {t.hero.headlinePart1}{' '}
              <span className="champagne-gradient-text italic font-serif">{t.hero.headlinePart2}</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#8BAAC9] font-reading leading-relaxed max-w-2xl font-normal">
              {t.hero.subtext}
            </p>

            {/* Trust Badges - 20px Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-4 rounded-[20px] bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury">
                <div className="w-10 h-10 rounded-full bg-[#243B53]/50 text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center shrink-0 font-display font-semibold text-sm">
                  {t.brand.experienceYears}
                </div>
                <div className="text-start">
                  <span className="text-xs sm:text-sm font-display font-medium text-[#F7F3EC] block">{t.hero.stat1Title}</span>
                  <span className="text-[11px] text-[#C8A96A]/90 font-body">{t.hero.stat1Sub}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-[20px] bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury">
                <div className="w-10 h-10 rounded-full bg-[#243B53]/50 text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="text-xs sm:text-sm font-display font-medium text-[#F7F3EC] block">{t.hero.stat2Title}</span>
                  <span className="text-[11px] text-[#8BAAC9] font-body">{t.hero.stat2Sub}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-[20px] bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury">
                <div className="w-10 h-10 rounded-full bg-[#243B53]/50 text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="text-xs sm:text-sm font-display font-medium text-[#F7F3EC] block">{t.hero.stat3Title}</span>
                  <span className="text-[11px] text-[#8BAAC9] font-body">{t.hero.stat3Sub}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-[20px] bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury">
                <div className="w-10 h-10 rounded-full bg-[#243B53]/50 text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className="text-xs sm:text-sm font-display font-medium text-[#F7F3EC] block">{t.hero.stat4Title}</span>
                  <span className="text-[11px] text-[#8BAAC9] font-body">{t.hero.stat4Sub}</span>
                </div>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] font-body font-semibold text-sm transition-luxury shadow-[0_4px_20px_rgba(200,169,106,0.2)] hover:shadow-[0_6px_28px_rgba(200,169,106,0.32)] hover:-translate-y-0.5 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.hero.ctaBook}</span>
              </a>

              <a
                href="https://wa.me/966543729238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-[rgba(200,169,106,0.28)] bg-transparent hover:bg-[#C8A96A]/10 text-[#C8A96A] hover:text-[#E4D3A8] hover:border-[#C8A96A] font-body font-medium text-sm transition-luxury hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.ctaWhatsapp}</span>
              </a>

              <a
                href="tel:+966543729238"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[rgba(200,169,106,0.28)] bg-[#122336] hover:bg-[#243B53] text-[#F7F3EC] hover:text-[#C8A96A] hover:border-[#C8A96A] font-body font-medium text-sm transition-luxury active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#C8A96A]" />
                <span dir="ltr">054 372 9238</span>
              </a>
            </div>

            {/* Quick Service Interactive Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5 items-center text-xs text-[#8BAAC9] font-body font-normal">
              <span className="text-[#C8A96A] font-medium flex items-center gap-1.5 px-1">
                <Sparkles className="w-3.5 h-3.5" />
                {t.hero.quickTitle}
              </span>
              <button
                onClick={() => onSelectService(t.services.cards[0].title)}
                className="px-3.5 py-1.5 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A] hover:text-[#C8A96A] hover:bg-[#243B53]/40 transition-luxury cursor-pointer"
              >
                {t.hero.quickAc}
              </button>
              <button
                onClick={() => onSelectService(t.services.cards[1].title)}
                className="px-3.5 py-1.5 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A] hover:text-[#C8A96A] hover:bg-[#243B53]/40 transition-luxury cursor-pointer"
              >
                {t.hero.quickElectric}
              </button>
              <button
                onClick={() => onSelectService(t.services.cards[2].title)}
                className="px-3.5 py-1.5 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A] hover:text-[#C8A96A] hover:bg-[#243B53]/40 transition-luxury cursor-pointer"
              >
                {t.hero.quickPlumbing}
              </button>
              <button
                onClick={() => onSelectService(t.services.cards[3].title)}
                className="px-3.5 py-1.5 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A] hover:text-[#C8A96A] hover:bg-[#243B53]/40 transition-luxury cursor-pointer"
              >
                {t.hero.quickMaintenance}
              </button>
            </div>
          </motion.div>

          {/* Left Column: Prominent Media Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* 1. Official Logo Showcase Card */}
            <div className="relative rounded-[20px] p-5 bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury group">
              <div className="flex items-center gap-4">
                <div
                  onClick={() => setLogoModalOpen(true)}
                  className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-[16px] overflow-hidden border border-[rgba(200,169,106,0.28)] shrink-0 cursor-pointer group-hover:scale-105 transition-luxury bg-[#F7F3EC] p-1.5"
                  title={t.brand.viewFullLogo}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                    alt={t.brand.fullName}
                    className="w-full h-full object-contain rounded-[12px]"
                  />
                  <div className="absolute inset-0 bg-[#0A1118]/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-luxury rounded-[12px]">
                    <Maximize2 className="w-5 h-5 text-[#C8A96A]" />
                  </div>
                </div>

                <div className="text-start flex-1">
                  <span className="text-[11px] font-medium px-3 py-0.5 rounded-full bg-[#0A1118] text-[#C8A96A] border border-[rgba(200,169,106,0.28)] inline-block mb-1.5">
                    {t.brand.identityTag}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-medium text-[#F7F3EC] leading-snug">
                    {t.brand.fullName}
                  </h3>
                  <p className="text-xs text-[#8BAAC9] mt-1 font-body">
                    {t.brand.identityDesc}
                  </p>
                  <button
                    onClick={() => setLogoModalOpen(true)}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#C8A96A] hover:text-[#E4D3A8] font-medium transition-luxury cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{t.brand.viewFullLogo}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Promotional Video Frame */}
            <div className="relative rounded-[20px] overflow-hidden border border-[rgba(200,169,106,0.28)] bg-[#0A1118] aspect-[9/16] max-h-[460px] mx-auto max-w-[340px] sm:max-w-[360px] group transition-luxury hover:border-[#C8A96A]/60">
              {!videoError ? (
                <video
                  src={`${import.meta.env.BASE_URL}videos/promo.mp4`}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onError={() => setVideoError(true)}
                >
                  Your browser does not support video playback.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0A1118] text-[#F7F3EC]">
                  <Play className="w-10 h-10 text-[#C8A96A] mb-3" />
                  <p className="text-sm font-display">{t.hero.videoFallbackTitle}</p>
                  <p className="text-xs text-[#8BAAC9] mt-2">{t.hero.videoFallbackSub}</p>
                </div>
              )}

              {/* Overlay Badge */}
              <div className="absolute top-3.5 right-3.5 bg-[#0A1118]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[rgba(200,169,106,0.28)] text-[#F7F3EC] text-xs font-medium flex items-center gap-2 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] animate-pulse"></span>
                <span>{t.hero.videoBadge}</span>
              </div>
            </div>

            {/* Floating Trust Indicator Card */}
            <div className="hidden sm:flex bg-[#122336] p-4 rounded-[20px] border border-[rgba(200,169,106,0.28)] items-center gap-3.5 transition-luxury hover:border-[#C8A96A]/60">
              <div className="w-10 h-10 rounded-full bg-[#243B53] border border-[rgba(200,169,106,0.28)] flex items-center justify-center text-[#C8A96A] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-start">
                <div className="text-xs font-body font-medium text-[#F7F3EC]">{t.brand.supervisorTitle}</div>
                <div className="text-xs text-[#C8A96A] font-body mt-0.5">{t.brand.supervisorName}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* High-Res Logo Modal Lightbox */}
      <AnimatePresence>
        {logoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1118]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-lg w-full bg-[#122336] rounded-[20px] p-7 border border-[rgba(200,169,106,0.35)] shadow-2xl text-center space-y-4"
            >
              <button
                onClick={() => setLogoModalOpen(false)}
                className="absolute top-4 left-4 p-2 text-[#8BAAC9] hover:text-[#F7F3EC] rounded-full bg-[#0A1118] border border-[rgba(200,169,106,0.28)] transition-luxury cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-lg font-display font-medium text-[#F7F3EC]">
                {t.brand.modalLogoTitle}
              </h3>

              <div className="rounded-[16px] overflow-hidden bg-[#F7F3EC] p-4 border border-[rgba(200,169,106,0.28)] max-w-sm mx-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                  alt={t.brand.fullName}
                  className="w-full h-auto object-contain rounded-[12px]"
                />
              </div>

              <p className="text-xs text-[#C8A96A] font-body">
                {t.brand.modalLogoSubtitle}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
