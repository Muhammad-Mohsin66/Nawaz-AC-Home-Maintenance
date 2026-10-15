import React, { useState, useEffect } from 'react';
import { Calendar, Phone, User, MapPin, Wrench, FileText, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_KEY = 'nawaz_booking_form_draft';

const riyadhDistricts = [
  'حي النرجس (An Narjis)',
  'حي الملقا (Al Malqa)',
  'حي الياسمين (Al Yasmin)',
  'حي العارض (Al Aarid)',
  'حي الندى (An Nada)',
  'حي الصحافة (As Sahafah)',
  'حي حطين (Hittin)',
  'حي الربيع (Ar Rabi)',
  'حي الغدير (Al Ghadir)',
  'حي العقيق (Al Aqiq)',
  'حي اليرموك (Al Yarmouk)',
  'حي المونسية (Al Munsiyah)',
  'حي الرمال (Ar Rimal)',
  'حي قرطبة (Qurtubah)',
  'حي الحمراء (Al Hamra)',
  'حي الروضة (Ar Rawdah)',
  'حي السليمانية (As Sulaymaniyah)',
  'حي العليا (Al Olaya)',
  'حي المحمدية (Al Mohammadiyyah)',
  'حي المعذر (Al Mathar)',
  'حي الشفاء (Ash Shifa)',
  'حي السويدي (As Suwaidi)',
  'حي لبن (Laban)',
  'حي ظهرة لبن (Dhahrat Laban)',
  'حي طويق (Tuwaiq)',
  'حي النسيم (An Naseem)',
  'حي الجزيرة (Al Jazirah)',
  'حي الخليج (Al Khaleej)',
  'حي النفل (Al Nafl)',
  'حي التعاون (At Taawun)',
  'حي الازدهار (Al Izdihar)',
  'حي الواحة (Al Wahah)',
  'أخرى / حي آخر في الرياض (Other District)',
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
  const { t } = useLanguage();
  const [formData, setFormData] = useState(() => getInitialFormData(selectedService));
  const [errors, setErrors] = useState({});

  const localizedServiceOptions = t.services.cards.map((card) => card.title);

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
      setFormData((prev) => (prev.serviceType === selectedService ? prev : { ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = t.booking.errors.nameRequired;
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    const saudiPhoneRegex = /^(?:\+?966|0)?5[0-9]{8}$/;
    if (!cleanPhone) {
      newErrors.phoneNumber = t.booking.errors.phoneRequired;
    } else if (!saudiPhoneRegex.test(cleanPhone)) {
      newErrors.phoneNumber = t.booking.errors.phoneInvalid;
    }

    const isOtherDistrict = formData.district.includes('أخرى') || formData.district.includes('Other');
    const effectiveDistrict = isOtherDistrict ? formData.customDistrict : formData.district;

    if (!effectiveDistrict || effectiveDistrict.trim().length < 2) {
      newErrors.district = t.booking.errors.districtRequired;
    }

    if (!formData.serviceType) {
      newErrors.serviceType = t.booking.errors.serviceRequired;
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
    const isOtherDistrict = targetData.district.includes('أخرى') || targetData.district.includes('Other');
    const effectiveDistrict = isOtherDistrict
      ? targetData.customDistrict.trim()
      : targetData.district.trim();

    const lines = [
      t.booking.waGreeting,
      '',
      t.booking.waIntro,
      '',
      `${t.booking.waName} ${targetData.customerName.trim()}`,
      `${t.booking.waPhone} ${targetData.phoneNumber.trim()}`,
      `${t.booking.waDistrict} ${effectiveDistrict}`,
      `${t.booking.waService} ${targetData.serviceType.trim()}`,
    ];

    if (targetData.notes && targetData.notes.trim()) {
      lines.push(`${t.booking.waNotes} ${targetData.notes.trim()}`);
    }

    const messageText = lines.join('\n');
    return `https://wa.me/966543729238?text=${encodeURIComponent(messageText)}`;
  };

  const handleWhatsAppSubmit = (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (err) {
        console.warn('Failed to save draft to sessionStorage:', err);
      }
    }

    const url = buildWhatsAppUrl(formData);

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = url;
    }
  };

  const isOtherDistrictSelected =
    formData.district.includes('أخرى') || formData.district.includes('Other');

  return (
    <section id="booking" className="py-24 bg-[#F7F3EC] border-t border-[rgba(200,169,106,0.28)] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] text-[#6B6B63] text-xs font-body font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" />
            <span>{t.booking.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#0A1118] tracking-tight">
            {t.booking.title}
          </h2>
          <p className="text-[#6B6B63] font-reading text-base max-w-xl mx-auto font-normal">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Card Frame */}
        <div className="bg-[#EDE6DA] rounded-[20px] p-6 sm:p-10 border border-[rgba(200,169,106,0.28)] relative shadow-none">
          
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2 text-start">
                <label htmlFor="customerName" className="block text-xs sm:text-sm font-body font-medium text-[#0A1118]">
                  {t.booking.nameLabel} <span className="text-[#9B3D3D]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="customerName"
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder={t.booking.namePlaceholder}
                    className={`w-full py-3.5 px-11 rounded-[14px] border bg-[#F7F3EC] text-[#0A1118] placeholder-[#6B6B63]/60 text-sm focus:outline-none focus:ring-1 transition-luxury ${
                      errors.customerName
                        ? 'border-[#9B3D3D] focus:ring-[#9B3D3D]/30'
                        : 'border-[rgba(200,169,106,0.28)] focus:border-[#C8A96A] focus:ring-[#C8A96A]/30'
                    }`}
                  />
                  <User className="w-4 h-4 text-[#6B6B63] absolute top-4 end-4" />
                </div>
                {errors.customerName && (
                  <p className="text-xs text-[#9B3D3D] font-body mt-1">{errors.customerName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2 text-start">
                <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-body font-medium text-[#0A1118]">
                  {t.booking.phoneLabel} <span className="text-[#9B3D3D]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder={t.booking.phonePlaceholder}
                    dir="ltr"
                    className={`w-full py-3.5 px-11 rounded-[14px] border bg-[#F7F3EC] text-[#0A1118] placeholder-[#6B6B63]/60 text-sm focus:outline-none focus:ring-1 transition-luxury ${
                      errors.phoneNumber
                        ? 'border-[#9B3D3D] focus:ring-[#9B3D3D]/30'
                        : 'border-[rgba(200,169,106,0.28)] focus:border-[#C8A96A] focus:ring-[#C8A96A]/30'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-[#6B6B63] absolute top-4 start-4" />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-[#9B3D3D] font-body mt-1">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Service Type Selection */}
              <div className="space-y-2 text-start">
                <label htmlFor="serviceType" className="block text-xs sm:text-sm font-body font-medium text-[#0A1118]">
                  {t.booking.serviceLabel} <span className="text-[#9B3D3D]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full py-3.5 px-11 rounded-[14px] border bg-[#F7F3EC] text-[#0A1118] text-sm focus:outline-none focus:ring-1 transition-luxury appearance-none ${
                      errors.serviceType
                        ? 'border-[#9B3D3D] focus:ring-[#9B3D3D]/30'
                        : 'border-[rgba(200,169,106,0.28)] focus:border-[#C8A96A] focus:ring-[#C8A96A]/30'
                    }`}
                  >
                    <option value="">{t.booking.serviceDefaultOption}</option>
                    {localizedServiceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <Wrench className="w-4 h-4 text-[#6B6B63] absolute top-4 end-4 pointer-events-none" />
                </div>
                {errors.serviceType && (
                  <p className="text-xs text-[#9B3D3D] font-body mt-1">{errors.serviceType}</p>
                )}
              </div>

              {/* District in Riyadh */}
              <div className="space-y-2 text-start">
                <label htmlFor="district" className="block text-xs sm:text-sm font-body font-medium text-[#0A1118]">
                  {t.booking.districtLabel} <span className="text-[#9B3D3D]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className={`w-full py-3.5 px-11 rounded-[14px] border bg-[#F7F3EC] text-[#0A1118] text-sm focus:outline-none focus:ring-1 transition-luxury appearance-none ${
                      errors.district
                        ? 'border-[#9B3D3D] focus:ring-[#9B3D3D]/30'
                        : 'border-[rgba(200,169,106,0.28)] focus:border-[#C8A96A] focus:ring-[#C8A96A]/30'
                    }`}
                  >
                    <option value="">{t.booking.districtDefaultOption}</option>
                    {riyadhDistricts.map((dist, idx) => (
                      <option key={idx} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-[#6B6B63] absolute top-4 end-4 pointer-events-none" />
                </div>
                {isOtherDistrictSelected && (
                  <input
                    type="text"
                    name="customDistrict"
                    value={formData.customDistrict}
                    onChange={handleChange}
                    placeholder={t.booking.customDistrictPlaceholder}
                    className="mt-2.5 w-full py-3 px-4 rounded-[14px] border border-[rgba(200,169,106,0.28)] bg-[#F7F3EC] text-[#0A1118] text-sm focus:border-[#C8A96A] focus:outline-none transition-luxury"
                  />
                )}
                {errors.district && (
                  <p className="text-xs text-[#9B3D3D] font-body mt-1">{errors.district}</p>
                )}
              </div>

            </div>

            {/* Additional Notes */}
            <div className="space-y-2 text-start">
              <label htmlFor="notes" className="block text-xs sm:text-sm font-body font-medium text-[#0A1118]">
                {t.booking.notesLabel} <span className="text-xs text-[#6B6B63] font-normal">{t.booking.notesOptional}</span>
              </label>
              <div className="relative">
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={t.booking.notesPlaceholder}
                  className="w-full py-3.5 px-11 rounded-[14px] border border-[rgba(200,169,106,0.28)] bg-[#F7F3EC] text-[#0A1118] placeholder-[#6B6B63]/60 text-sm focus:outline-none focus:ring-1 focus:border-[#C8A96A] focus:ring-[#C8A96A]/30 transition-luxury"
                />
                <FileText className="w-4 h-4 text-[#6B6B63] absolute top-4 end-4" />
              </div>
            </div>

            {/* Action Buttons: Pill-Shaped Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] font-body font-semibold text-sm sm:text-base shadow-[0_4px_20px_rgba(200,169,106,0.2)] hover:shadow-[0_6px_26px_rgba(200,169,106,0.32)] active:scale-95 transition-luxury cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.booking.submitWhatsapp}</span>
              </button>

              <a
                href="tel:+966543729238"
                className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A] bg-transparent hover:bg-[#F7F3EC] text-[#0A1118] font-body font-medium text-sm sm:text-base transition-luxury active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#C8A96A]" />
                <span>{t.booking.submitPhone}</span>
              </a>
            </div>

            <div className="text-center text-xs text-[#6B6B63] pt-2 font-body">
              {t.booking.privacyNote}
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
