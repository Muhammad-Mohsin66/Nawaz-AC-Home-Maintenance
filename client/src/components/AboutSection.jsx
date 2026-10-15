import React from 'react';
import { ShieldCheck, UserCheck, MapPin, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#0A1118] border-t border-[rgba(200,169,106,0.28)] relative overflow-hidden">
      {/* Subtle warm champagne ambient glow */}
      <div className="absolute top-1/2 right-10 -z-10 w-[500px] h-[500px] bg-[#C8A96A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-[400px] h-[400px] bg-[#243B53]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase with Real Technician Photo in Uniform */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Technician Photo Frame */}
              <div className="rounded-[20px] overflow-hidden border border-[rgba(200,169,106,0.28)] bg-[#122336] relative aspect-[9/16] max-h-[500px] shadow-none">
                <img
                  src={`${import.meta.env.BASE_URL}images/technician.jpg`}
                  alt={t.brand.supervisorName}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                
                {/* Overlay Badge at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/85 to-transparent p-5 text-[#F7F3EC] text-start">
                  <div className="flex items-center gap-2 mb-1">
                    <UserCheck className="w-5 h-5 text-[#C8A96A]" />
                    <span className="font-display font-medium text-xl text-[#F7F3EC]">{t.brand.supervisorName}</span>
                  </div>
                  <p className="text-xs text-[#8BAAC9] font-body font-normal">
                    {t.brand.supervisorRole}
                  </p>
                </div>
              </div>

              {/* Floating Verified Logo Card */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-[#122336]/95 backdrop-blur-md rounded-[20px] p-3.5 border border-[rgba(200,169,106,0.28)] flex items-center gap-3 shadow-none">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                  alt={t.brand.fullName}
                  className="w-11 h-11 rounded-full object-cover ring-1 ring-[rgba(200,169,106,0.4)]"
                />
                <div className="text-start">
                  <div className="text-xs font-display font-medium text-[#F7F3EC]">{t.brand.verifiedEst}</div>
                  <div className="text-[11px] text-[#C8A96A] font-body flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{t.brand.commercialValid}</span>
                  </div>
                </div>
              </div>

              {/* Floating 15+ Years Experience Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#122336]/95 backdrop-blur-md rounded-[20px] p-3.5 border border-[rgba(200,169,106,0.28)] flex items-center gap-3 shadow-none">
                <div className="w-11 h-11 rounded-full bg-[#243B53] border border-[rgba(200,169,106,0.28)] flex items-center justify-center text-[#C8A96A] font-display font-semibold text-base">
                  {t.brand.experienceYears}
                </div>
                <div className="text-start">
                  <div className="text-xs sm:text-sm font-display font-medium text-[#F7F3EC]">{t.brand.experienceLong}</div>
                  <div className="text-[11px] text-[#8BAAC9] font-body">{t.brand.experienceCertified}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-start space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#122336] text-[#C8A96A] border border-[rgba(200,169,106,0.28)] text-xs sm:text-sm font-body font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#F7F3EC] tracking-tight leading-snug">
              {t.about.titlePart1}{' '}
              <span className="champagne-gradient-text italic font-serif">{t.about.titleHighlight}</span>
            </h2>

            <p className="text-[#8BAAC9] font-reading leading-relaxed text-base sm:text-lg font-normal">
              {t.about.paragraph}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-4 p-4.5 rounded-[20px] bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury">
                <div className="w-10 h-10 rounded-full bg-[#243B53]/50 text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-[#F7F3EC] text-base">{t.about.f1Title}</h4>
                  <p className="text-xs sm:text-sm text-[#8BAAC9] font-reading mt-1 leading-relaxed">
                    {t.about.f1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-[20px] bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury">
                <div className="w-10 h-10 rounded-full bg-[#243B53]/50 text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-[#F7F3EC] text-base">{t.about.f2Title}</h4>
                  <p className="text-xs sm:text-sm text-[#8BAAC9] font-reading mt-1 leading-relaxed">
                    {t.about.f2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-[20px] bg-[#122336] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A]/60 transition-luxury">
                <div className="w-10 h-10 rounded-full bg-[#243B53]/50 text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-[#F7F3EC] text-base">{t.about.f3Title}</h4>
                  <p className="text-xs sm:text-sm text-[#8BAAC9] font-reading mt-1 leading-relaxed">
                    {t.about.f3Desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-8 py-3.5 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] font-body font-semibold text-sm shadow-[0_4px_20px_rgba(200,169,106,0.2)] hover:shadow-[0_6px_26px_rgba(200,169,106,0.32)] transition-luxury active:scale-95"
              >
                {t.about.ctaBook}
              </a>
              <a
                href="#trust"
                className="px-8 py-3.5 rounded-full border border-[rgba(200,169,106,0.28)] bg-transparent hover:bg-[#C8A96A]/10 text-[#F7F3EC] hover:text-[#C8A96A] hover:border-[#C8A96A] font-body font-medium text-sm transition-luxury active:scale-95"
              >
                {t.about.ctaTrust}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
