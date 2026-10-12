import React from 'react';
import { Wind, Zap, Droplets, Home, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 'ac',
    title: 'خدمات التكييف',
    subtitle: 'صيانة وإصلاح وتركيب وغسيل لكافة أنواع المكيفات',
    icon: Wind,
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-200 hover:border-blue-500',
    badge: 'الأكثر طلباً',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
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
    color: 'from-amber-500 to-yellow-500',
    borderColor: 'border-amber-200 hover:border-amber-500',
    badge: 'سلامة وأمان',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
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
    color: 'from-cyan-600 to-blue-500',
    borderColor: 'border-cyan-200 hover:border-cyan-500',
    badge: 'كفاءة وسرعة',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
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
    color: 'from-indigo-600 to-blue-600',
    borderColor: 'border-indigo-200 hover:border-indigo-500',
    badge: 'شامل ومتكامل',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block">
            خدمات متكاملة في الرياض
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            حلول متكاملة للتكييف والكهرباء والسباكة والصيانة
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col justify-between rounded-2xl p-6 bg-slate-50/60 border ${service.borderColor} transition-all duration-300 hover:shadow-xl hover:bg-white group`}
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Checklist of Services */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold text-sm group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all shadow-xs cursor-pointer"
                  >
                    <span>احجز الخدمة</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
