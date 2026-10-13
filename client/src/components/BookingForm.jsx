import React, { useState, useEffect } from 'react';
import { Calendar, Phone, User, MapPin, Wrench, FileText, MessageCircle } from 'lucide-react';

const STORAGE_KEY = 'nawaz_booking_form_draft';

const riyadhDistricts = [
  'حي النرجس',
  'حي الملقا',
  'حي الياسمين',
  'حي العارض',
  'حي الندى',
  'حي الصحافة',
  'حي حطين',
  'حي الربيع',
  'حي الغدير',
  'حي العقيق',
  'حي اليرموك',
  'حي المونسية',
  'حي الرمال',
  'حي قرطبة',
  'حي الحمراء',
  'حي الروضة',
  'حي السليمانية',
  'حي العليا',
  'حي المحمدية',
  'حي المعذر',
  'حي الشفاء',
  'حي السويدي',
  'حي لبن',
  'حي ظهرة لبن',
  'حي طويق',
  'حي النسيم',
  'حي الجزيرة',
  'حي الخليج',
  'حي النفل',
  'حي التعاون',
  'حي الازدهار',
  'حي الواحة',
  'أخرى / حي آخر في الرياض',
];

const serviceOptions = [
  'خدمات التكييف (صيانة، إصلاح، فحص فريون)',
  'خدمات التكييف (غسيل وتنظيف فلاتر)',
  'خدمات التكييف (فك ونقل وتركيب سبليت)',
  'خدمات الكهرباء (إصلاح أعطال وشورت)',
  'خدمات الكهرباء (تركيب إنارة وأفياش وقواطع)',
  'خدمات السباكة (كشف وإصلاح تسربات)',
  'خدمات السباكة (تركيب وتغيير خلاطات ومواسير)',
  'خدمات الصيانة المنزلية (صيانة شاملة دورية)',
  'طلب صيانة خاص / معاينة فنية',
];

const getInitialFormData = (selectedService) => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          customerName: parsed.customerName || '',
          phoneNumber: parsed.phoneNumber || '',
          district: parsed.district || '',
          customDistrict: parsed.customDistrict || '',
          serviceType: parsed.serviceType || selectedService || '',
          notes: parsed.notes || '',
        };
      }
    } catch (e) {
      console.warn('Failed to parse form draft from sessionStorage:', e);
    }
  }
  return {
    customerName: '',
    phoneNumber: '',
    district: '',
    customDistrict: '',
    serviceType: selectedService || '',
    notes: '',
  };
};

export default function BookingForm({ selectedService, _setSelectedService }) {
  const [formData, setFormData] = useState(() => getInitialFormData(selectedService));
  const [errors, setErrors] = useState({});

  // Preserve form draft in sessionStorage on every input change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (e) {
        console.warn('Failed to save form draft to sessionStorage:', e);
      }
    }
  }, [formData]);

  // Sync if selectedService prop changes from service cards
  useEffect(() => {
    if (selectedService) {
      const matched = serviceOptions.find((opt) => opt.includes(selectedService)) || selectedService;
      setFormData((prev) => (prev.serviceType === matched ? prev : { ...prev, serviceType: matched }));
    }
  }, [selectedService]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = 'يرجى إدخال الاسم الكامل (حرفان على الأقل)';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    const saudiPhoneRegex = /^(?:\+?966|0)?5[0-9]{8}$/;
    if (!cleanPhone) {
      newErrors.phoneNumber = 'يرجى إدخال رقم الجوال';
    } else if (!saudiPhoneRegex.test(cleanPhone)) {
      newErrors.phoneNumber = 'يرجى إدخال رقم جوال سعودي صالح يبدأ بـ 05 (مثال: 0543729238)';
    }

    const effectiveDistrict =
      formData.district === 'أخرى / حي آخر في الرياض'
        ? formData.customDistrict
        : formData.district;
    if (!effectiveDistrict || effectiveDistrict.trim().length < 2) {
      newErrors.district = 'يرجى تحديد الحي في مدينة الرياض';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'يرجى اختيار الخدمة المطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const buildWhatsAppUrl = (dataToUse) => {
    const targetData = dataToUse || formData;
    const effectiveDistrict =
      targetData.district === 'أخرى / حي آخر في الرياض'
        ? targetData.customDistrict.trim()
        : targetData.district.trim();

    const lines = [
      'السلام عليكم ورحمة الله وبركاته،',
      '',
      'أرغب في حجز خدمة صيانة من مؤسسة نواز.',
      '',
      `• الاسم: ${targetData.customerName.trim()}`,
      `• رقم الجوال: ${targetData.phoneNumber.trim()}`,
      `• الحي بالرياض: ${effectiveDistrict}`,
      `• الخدمة المطلوبة: ${targetData.serviceType.trim()}`,
    ];

    if (targetData.notes && targetData.notes.trim()) {
      lines.push(`• ملاحظات: ${targetData.notes.trim()}`);
    }

    const messageText = lines.join('\n');
    return `https://wa.me/966543729238?text=${encodeURIComponent(messageText)}`;
  };

  const handleWhatsAppSubmit = (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Ensure session storage contains the current validated draft
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (err) {
        console.warn('Failed to save draft to sessionStorage:', err);
      }
    }

    const url = buildWhatsAppUrl(formData);

    // Direct synchronous navigation triggered directly from user gesture prevents popup blockers
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = url;
    }
  };

  return (
    <section id="booking" className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>حجز فوري ومباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            احجز موعد الصيانة بكل سهولة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
            قم بتعبئة النموذج وسيقوم فريقنا بالتواصل معك لتأكيد الموعد والتفاصيل، أو تواصل فوراً عبر واتساب.
          </p>
        </div>

        {/* Card Frame - Crisp White Luxury Finish */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 relative">
          
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2 text-right">
                <label htmlFor="customerName" className="block text-sm font-bold text-slate-800">
                  الاسم الكامل <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="customerName"
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="مثال: عبد الله السعدي"
                    className={`w-full py-3.5 pr-11 pl-4 rounded-xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:bg-white transition-all ${
                      errors.customerName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-4 top-4" />
                </div>
                {errors.customerName && (
                  <p className="text-xs text-rose-600 font-semibold">{errors.customerName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2 text-right">
                <label htmlFor="phoneNumber" className="block text-sm font-bold text-slate-800">
                  رقم الجوال <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="05XXXXXXXX أو +9665XXXXXXXX"
                    dir="ltr"
                    className={`w-full py-3.5 pr-4 pl-11 rounded-xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:bg-white text-right transition-all ${
                      errors.phoneNumber ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-rose-600 font-semibold">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Service Type Selection */}
              <div className="space-y-2 text-right">
                <label htmlFor="serviceType" className="block text-sm font-bold text-slate-800">
                  الخدمة المطلوبة <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full py-3.5 pr-11 pl-4 rounded-xl border bg-slate-50/70 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:bg-white transition-all appearance-none ${
                      errors.serviceType ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  >
                    <option value="">-- اختر نوع الخدمة --</option>
                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <Wrench className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                </div>
                {errors.serviceType && (
                  <p className="text-xs text-rose-600 font-semibold">{errors.serviceType}</p>
                )}
              </div>

              {/* District in Riyadh */}
              <div className="space-y-2 text-right">
                <label htmlFor="district" className="block text-sm font-bold text-slate-800">
                  الحي في الرياض <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={`w-full py-3.5 pr-11 pl-4 rounded-xl border bg-slate-50/70 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:bg-white transition-all appearance-none ${
                      errors.district ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  >
                    <option value="">-- اختر الحي في الرياض --</option>
                    {riyadhDistricts.map((dist, idx) => (
                      <option key={idx} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-slate-400 absolute right-4 top-4 pointer-events-none" />
                </div>
                {formData.district === 'أخرى / حي آخر في الرياض' && (
                  <input
                    type="text"
                    name="customDistrict"
                    value={formData.customDistrict}
                    onChange={handleChange}
                    placeholder="اكتب اسم الحي الخاص بك في الرياض..."
                    className="mt-2.5 w-full py-3 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm"
                  />
                )}
                {errors.district && (
                  <p className="text-xs text-rose-600 font-semibold">{errors.district}</p>
                )}
              </div>

            </div>

            {/* Additional Notes */}
            <div className="space-y-2 text-right">
              <label htmlFor="notes" className="block text-sm font-bold text-slate-800">
                ملاحظات إضافية أو وصف العطل <span className="text-xs text-slate-400 font-normal">(اختياري)</span>
              </label>
              <div className="relative">
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="مثال: المكيف يخرج هواء حار فقط، أو يوجد تسرب تحت حوض المطبخ..."
                  className="w-full py-3.5 pr-11 pl-4 rounded-xl border border-slate-300 bg-slate-50/70 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:border-blue-600 focus:ring-blue-100 focus:bg-white transition-all"
                />
                <FileText className="w-4 h-4 text-slate-400 absolute right-4 top-4" />
              </div>
            </div>

            {/* Action Buttons: Exactly Two Contact/Booking Actions */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
              {/* 1. Primary Action: Book via WhatsApp */}
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base shadow-lg shadow-emerald-900/30 active:scale-95 transition-all cursor-pointer border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5" />
                <span>احجز عبر واتساب</span>
              </button>

              {/* 2. Secondary Action: Direct Phone Call */}
              <a
                href="tel:+966543729238"
                className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl border border-slate-300 hover:border-slate-400 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base transition-all active:scale-95 shadow-xs"
              >
                <Phone className="w-5 h-5 text-cyan-600" />
                <span>اتصل بنا الآن</span>
              </a>
            </div>

            <div className="text-center text-xs text-slate-500 pt-2">
              🔒 بياناتك محفوظة بأمان وسرية تامة ولا يتم مشاركتها مع أي جهة خارجية.
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
