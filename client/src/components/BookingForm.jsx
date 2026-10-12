import React, { useState } from 'react';
import { Calendar, Phone, User, MapPin, Wrench, FileText, CheckCircle2, AlertCircle, Loader2, MessageCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function BookingForm({ selectedService, setSelectedService }) {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    district: '',
    customDistrict: '',
    serviceType: selectedService || '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Sync if selectedService prop changes
  React.useEffect(() => {
    if (selectedService) {
      // Find matching option or set directly
      const matched = serviceOptions.find((opt) => opt.includes(selectedService)) || selectedService;
      setFormData((prev) => ({ ...prev, serviceType: matched }));
    }
  }, [selectedService]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = 'يرجى إدخال الاسم الكامل (حرفان على الأقل)';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s\-]/g, '');
    const saudiPhoneRegex = /^(?:\+?966|0)?5[0-9]{8}$/;
    if (!cleanPhone) {
      newErrors.phoneNumber = 'يرجى إدخال رقم الجوال';
    } else if (!saudiPhoneRegex.test(cleanPhone)) {
      newErrors.phoneNumber = 'يرجى إدخال رقم جوال سعودي صالح يبدأ بـ 05 (مثال: 0543729238)';
    }

    const effectiveDistrict = formData.district === 'أخرى / حي آخر في الرياض' ? formData.customDistrict : formData.district;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const effectiveDistrict =
      formData.district === 'أخرى / حي آخر في الرياض'
        ? formData.customDistrict.trim()
        : formData.district;

    const payload = {
      customerName: formData.customerName.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      serviceType: formData.serviceType,
      district: effectiveDistrict,
      notes: formData.notes.trim(),
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'حدث خطأ أثناء معالجة الحجز.');
      }

      setSubmitSuccess({
        message: data.message,
        booking: data.data,
        customerData: payload,
      });
    } catch (err) {
      console.error('Booking submission error:', err);
      setSubmitError(
        err.message ||
          'تعذر الاتصال بالخادم حالياً. لم يتم حفظ الطلب. يمكنك المتابعة وإرسال تفاصيل الحجز مباشرة عبر واتساب.'
      );
    } finally {
      setLoading(false);
    }
  };

  const buildWhatsAppUrl = (dataToUse) => {
    const targetData = dataToUse || formData;
    const effectiveDistrict =
      targetData.district === 'أخرى / حي آخر في الرياض'
        ? targetData.customDistrict
        : targetData.district;

    const textLines = [
      'السلام عليكم ورحمة الله وبركاته،',
      'أرغب في حجز موعد صيانة من مؤسسة نواز:',
      `• الاسم: ${targetData.customerName || 'غير محدد'}`,
      `• الجوال: ${targetData.phoneNumber || 'غير محدد'}`,
      `• الحي بالرياض: ${effectiveDistrict || 'غير محدد'}`,
      `• الخدمة المطلوبة: ${targetData.serviceType || 'صيانة عامة'}`,
    ];

    if (targetData.notes && targetData.notes.trim()) {
      textLines.push(`• ملاحظات: ${targetData.notes.trim()}`);
    }

    return `https://wa.me/966543729238?text=${encodeURIComponent(textLines.join('\n'))}`;
  };

  const handleResetForm = () => {
    setFormData({
      customerName: '',
      phoneNumber: '',
      district: '',
      customDistrict: '',
      serviceType: '',
      notes: '',
    });
    setErrors({});
    setSubmitSuccess(null);
    setSubmitError(null);
    if (setSelectedService) setSelectedService('');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold">
            <Calendar className="w-4 h-4 text-blue-700" />
            <span>حجز فوري ومباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            احجز موعد الصيانة بكل سهولة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            قم بتعبئة النموذج وسيقوم فريقنا بالتواصل معك لتأكيد الموعد والتفاصيل، أو تواصل فوراً عبر واتساب.
          </p>
        </div>

        {/* Card Frame */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
          
          {/* Success State Screen */}
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">
                  تم استلام طلب الحجز بنجاح!
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                  {submitSuccess.message}
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200 text-right space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">رقم الحجز المرجعي:</span>
                  <span className="font-mono font-bold text-blue-700" dir="ltr">
                    {submitSuccess.booking.id}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">الاسم:</span>
                  <span className="font-bold text-slate-800">{submitSuccess.customerData.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500">الخدمة:</span>
                  <span className="font-bold text-slate-800">{submitSuccess.customerData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">الحي:</span>
                  <span className="font-bold text-slate-800">{submitSuccess.customerData.district}</span>
                </div>
              </div>

              {/* Follow-up CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
                <a
                  href={buildWhatsAppUrl(submitSuccess.customerData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تأكيد الموعد عبر واتساب</span>
                </a>
                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>حجز موعد جديد</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* Booking Form Content */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error Notice */}
              {submitError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold mb-1">تعذر حفظ الحجز عبر الخادم:</p>
                    <p className="text-xs sm:text-sm text-rose-700 mb-2">{submitError}</p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-white px-3 py-1.5 rounded-lg border border-emerald-300 hover:bg-emerald-50 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>إرسال تفاصيل الحجز عبر واتساب كبديل مباشر</span>
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5 text-right">
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
                      className={`w-full py-3 pr-10 pl-4 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:bg-white transition-all ${
                        errors.customerName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                      disabled={loading}
                    />
                    <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs text-rose-600 font-semibold">{errors.customerName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5 text-right">
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
                      className={`w-full py-3 pr-4 pl-10 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:bg-white text-right transition-all ${
                        errors.phoneNumber ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                      disabled={loading}
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-rose-600 font-semibold">{errors.phoneNumber}</p>
                  )}
                </div>

                {/* Service Type Selection */}
                <div className="space-y-1.5 text-right">
                  <label htmlFor="serviceType" className="block text-sm font-bold text-slate-800">
                    الخدمة المطلوبة <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={`w-full py-3 pr-10 pl-4 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:bg-white transition-all appearance-none ${
                        errors.serviceType ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                      disabled={loading}
                    >
                      <option value="">-- اختر نوع الخدمة --</option>
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <Wrench className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.serviceType && (
                    <p className="text-xs text-rose-600 font-semibold">{errors.serviceType}</p>
                  )}
                </div>

                {/* District in Riyadh */}
                <div className="space-y-1.5 text-right">
                  <label htmlFor="district" className="block text-sm font-bold text-slate-800">
                    الحي في الرياض <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`w-full py-3 pr-10 pl-4 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:bg-white transition-all appearance-none ${
                        errors.district ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                      disabled={loading}
                    >
                      <option value="">-- اختر الحي في الرياض --</option>
                      {riyadhDistricts.map((dist, idx) => (
                        <option key={idx} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {formData.district === 'أخرى / حي آخر في الرياض' && (
                    <input
                      type="text"
                      name="customDistrict"
                      value={formData.customDistrict}
                      onChange={handleChange}
                      placeholder="اكتب اسم الحي الخاص بك في الرياض..."
                      className="mt-2 w-full py-2.5 px-3 rounded-lg border border-slate-300 text-sm bg-white"
                      disabled={loading}
                    />
                  )}
                  {errors.district && (
                    <p className="text-xs text-rose-600 font-semibold">{errors.district}</p>
                  )}
                </div>

              </div>

              {/* Additional Notes */}
              <div className="space-y-1.5 text-right">
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
                    className="w-full py-3 pr-10 pl-4 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:border-blue-600 focus:ring-blue-100 focus:bg-white transition-all"
                    disabled={loading}
                  />
                  <FileText className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-black text-base shadow-lg shadow-blue-700/25 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري إرسال الطلب...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>تأكيد إرسال طلب الحجز</span>
                    </>
                  )}
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>حجز فوري عبر واتساب</span>
                </a>
              </div>

              <div className="text-center text-xs text-slate-500 pt-2">
                🔒 بياناتك محفوظة بأمان وسرية تامة ولا يتم مشاركتها مع أي جهة خارجية.
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
