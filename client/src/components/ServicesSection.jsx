import React from 'react';
import { Wind, Zap, Droplets, Home, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 'ac',
    title: 'خدمات التكييف',
    subtitle: 'صيانة وإصلاح وتركيب وغسيل لكافة أنواع المكيفات',
    icon: Wind,
    accentColor: 'text-blue-600',
    iconGradient: 'from-blue-600 to-cyan-500',
    cardBorder: 'border-blue-200 hover:border-blue-500',
    cardShadow: 'hover:shadow-xl hover:shadow-blue-500/10',
    badge: 'الأكثر طلباً',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    btnGradient: 'from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700',
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
    accentColor: 'text-amber-600',
    iconGradient: 'from-amber-500 to-yellow-500',
    cardBorder: 'border-amber-200 hover:border-amber-500',
    cardShadow: 'hover:shadow-xl hover:shadow-amber-500/10',
    badge: 'سلامة وأمان',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    btnGradient: 'from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700',
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
    accentColor: 'text-cyan-600',
    iconGradient: 'from-cyan-600 to-blue-500',
    cardBorder: 'border-cyan-200 hover:border-cyan-500',
    cardShadow: 'hover:shadow-xl hover:shadow-cyan-500/10',
    badge: 'كفاءة وسرعة',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    btnGradient: 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700',
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
    accentColor: 'text-emerald-600',
    iconGradient: 'from-emerald-600 to-teal-500',
    cardBorder: 'border-emerald-200 hover:border-emerald-500',
    cardShadow: 'hover:shadow-xl hover:shadow-emerald-500/10',
    badge: 'شامل ومتكامل',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    btnGradient: 'from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
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
    <section id="services" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            خدمات متكاملة في الرياض
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            حلول شاملة للتكييف والكهرباء والسباكة والصيانة
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
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
                className={`flex flex-col justify-between rounded-3xl p-6 bg-slate-50/70 border ${service.cardBorder} transition-all duration-300 ${service.cardShadow} hover:-translate-y-1.5 group hover:bg-white`}
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconGradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Checklist of Services */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 ${service.accentColor} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r ${service.btnGradient} text-white font-bold text-sm shadow-md transition-all cursor-pointer`}
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
