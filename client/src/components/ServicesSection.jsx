import React from 'react';
import { Wind, Zap, Droplets, Home, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 'ac',
    title: 'خدمات التكييف',
    subtitle: 'صيانة وإصلاح وتركيب وغسيل لكافة أنواع المكيفات',
    icon: Wind,
    badge: 'الأكثر طلباً',
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
    badge: 'سلامة وأمان',
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
    badge: 'كفاءة وسرعة',
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
    badge: 'شامل ومتكامل',
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
    <section id="services" className="py-24 bg-[#F7F3EC] relative border-t border-[rgba(200,169,106,0.28)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-body font-medium tracking-wide text-[#6B6B63] bg-[#EDE6DA] px-4 py-1.5 rounded-full border border-[rgba(200,169,106,0.28)] inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
            خدمات متكاملة في الرياض
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#0A1118] tracking-tight">
            حلول شاملة للتكييف والكهرباء والسباكة والصيانة
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B63] font-reading leading-relaxed max-w-2xl mx-auto">
            نقدم باقة واسعة من خدمات الصيانة المنزلية المتخصصة بأيدي فنيين محترفين مع خبرة ميدانية تزيد عن 15 عاماً والتزام تام بالجودة والدقة والمواعيد.
          </p>
        </div>

        {/* 4 Service Cards Grid - 20px Radius & Linen Surface */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between rounded-[20px] p-6 sm:p-7 bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A] transition-luxury hover:-translate-y-1 group"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#F7F3EC] text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center group-hover:bg-[#C8A96A] group-hover:text-[#0A1118] transition-luxury">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-body font-medium px-3 py-1 rounded-full bg-[#F7F3EC] text-[#6B6B63] border border-[rgba(200,169,106,0.28)]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0A1118] mb-2 group-hover:text-[#C8A96A] transition-luxury">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B63] font-reading mb-6 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Checklist of Services */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#0A1118]/85 font-body">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button - Pill Shaped */}
                <div className="pt-4 border-t border-[rgba(200,169,106,0.2)]">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] font-body font-semibold text-xs sm:text-sm shadow-none hover:shadow-[0_4px_18px_rgba(200,169,106,0.22)] transition-luxury cursor-pointer active:scale-95"
                  >
                    <span>احجز الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-luxury" />
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
