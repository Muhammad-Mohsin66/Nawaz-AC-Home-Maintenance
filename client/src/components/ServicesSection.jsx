import React from 'react';
import { Wind, Zap, Droplets, Home, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 'ac',
    title: 'خدمات التكييف',
    subtitle: 'صيانة وإصلاح وتركيب وغسيل لكافة أنواع المكيفات',
    icon: Wind,
    accentColor: 'text-cyan-400',
    iconGradient: 'from-cyan-500 to-blue-600',
    cardBorder: 'border-cyan-500/30 hover:border-cyan-400',
    cardGlow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    badge: 'الأكثر طلباً',
    badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
    btnGradient: 'from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500',
    items: [
      'إصلاح وتشخيص أعطال المكيفات بدقة عالية',
      'صيانة وقائية ودورية للمكيفات المنزلية والتجارية',
      'غسيل وتنظيف المكيفات وتنظيف الفلاتر ومجاري الهواء',
      'فحص وتعبئة غاز الفريون الأصلي عند الحاجة',
      'فحص الكمبروسر وتشخيص الأعطال الميكانيكية والكهربائية',
      'تركيب مكيفات السبليت والمكيفات المركزية',
      'فك ونقل وإعادة تركيب المكيفات بعناية واحترافية',
    ],
  },
  {
    id: 'electrical',
    title: 'خدمات الكهرباء',
    subtitle: 'حلول كهربائية آمنة ومعتمدة للمنازل والمنشآت',
    icon: Zap,
    accentColor: 'text-amber-400',
    iconGradient: 'from-amber-500 to-orange-600',
    cardBorder: 'border-amber-500/30 hover:border-amber-400',
    cardGlow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
    badge: 'سلامة وأمان',
    badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    btnGradient: 'from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500',
    items: [
      'تشخيص وإصلاح كافة الأعطال والشورت الكهربائي',
      'تركيب المفاتيح، الأفياش، والإنارة الداخلية والخارجية',
      'صيانة وتمديد الأسلاك والتوصيلات الكهربائية',
      'فحص القواطع ولوحات التوزيع الكهربائية الرئيسية',
      'صيانة وقائية دورية لشبكة الكهرباء المنزلية',
    ],
  },
  {
    id: 'plumbing',
    title: 'خدمات السباكة',
    subtitle: 'معالجة التسربات وتأسيس وصيانة شبكات المياه',
    icon: Droplets,
    accentColor: 'text-blue-400',
    iconGradient: 'from-blue-500 to-indigo-600',
    cardBorder: 'border-blue-500/30 hover:border-blue-400',
    cardGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
    badge: 'كفاءة وسرعة',
    badgeColor: 'bg-blue-950/80 text-blue-300 border-blue-500/40',
    btnGradient: 'from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500',
    items: [
      'كشف ومعالجة تسربات المياه في المطابخ والحمامات',
      'إصلاح واستبدال الأنابيب والمحابس التالفة',
      'تركيب الخلاطات، المغاسل، والأدوات الصحية الحديثة',
      'تسليك الانسدادات في شبكات الصرف الصحي ومعالجة الروائح',
      'صيانة شبكات وأنظمة التغذية المائية والمضخات',
    ],
  },
  {
    id: 'general',
    title: 'خدمات الصيانة المنزلية',
    subtitle: 'صيانة دورية وحلول شاملة للحفاظ على راحة منزلك',
    icon: Home,
    accentColor: 'text-teal-400',
    iconGradient: 'from-teal-500 to-emerald-600',
    cardBorder: 'border-teal-500/30 hover:border-teal-400',
    cardGlow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]',
    badge: 'شامل ومتكامل',
    badgeColor: 'bg-teal-950/80 text-teal-300 border-teal-500/40',
    btnGradient: 'from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500',
    items: [
      'صيانة روتينية شاملة لمرافق العقار والمنزل',
      'زيارات فحص دورية وقائية لتجنب الأعطال المفاجئة',
      'إصلاحات وتعديلات منزلية دقيقة وفورية',
      'دعم مستمر لإدارة وصيانة المرافق السكنية',
      'تنفيذ طلبات الصيانة المخصصة بحسب رغبة العميل',
    ],
  },
];

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-[#0a1428] relative border-t border-slate-800">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-cyan-300 uppercase bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-500/30 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            خدمات متكاملة في الرياض
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            حلول شاملة <span className="blue-gradient-text">للتكييف والكهرباء والسباكة</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            نقدم باقة واسعة من خدمات الصيانة المنزلية المتخصصة بأيدي فنيين محترفين مع التزام تام بالجودة والدقة والمواعيد.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col justify-between rounded-3xl p-6 bg-gradient-to-b from-[#0f2142]/90 to-[#0c1833]/90 border ${service.cardBorder} transition-all duration-300 ${service.cardGlow} hover:-translate-y-1.5 group backdrop-blur-md`}
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconGradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Checklist of Services */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 ${service.accentColor} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-slate-700/60">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r ${service.btnGradient} text-white font-bold text-sm shadow-lg transition-all cursor-pointer`}
                  >
                    <span>احجز الخدمة</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
