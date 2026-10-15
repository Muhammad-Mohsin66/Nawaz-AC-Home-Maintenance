import React, { useState } from 'react';
import { ShieldCheck, FileText, ExternalLink, Download, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const officialDocs = [
  {
    id: 'cr',
    title: 'السجل التجاري',
    entity: 'وزارة التجارة - المملكة العربية السعودية',
    number: '1010469561',
    unifiedNumber: 'الرقم الموحد: 7003768764',
    filePath: `${import.meta.env.BASE_URL}documents/commercial-registration.pdf`,
    type: 'pdf',
    badge: 'ساري وموثق',
    description: 'سجل تجاري نظامي صادر عن وزارة التجارة لمزاولة أعمال صيانة وتصليح أجهزة التكييف والتبريد والأعمال المنزلية.',
  },
  {
    id: 'vat',
    title: 'شهادة تسجيل ضريبة القيمة المضافة',
    entity: 'هيئة الزكاة والضريبة والجمارك (ZATCA)',
    number: '310156889300003',
    unifiedNumber: 'نسبة الضريبة: 15%',
    filePath: `${import.meta.env.BASE_URL}documents/vat-certificate.pdf`,
    type: 'pdf',
    badge: 'مسجل ضريبياً',
    description: 'شهادة تسجيل رسمية في نظام ضريبة القيمة المضافة لضمان إصدار فواتير ضريبية نظامية لكافة المعاملات.',
  },
  {
    id: 'address',
    title: 'إثبات العنوان الوطني الرسمي',
    entity: 'مؤسسة البريد السعودي (سبل SPL)',
    number: 'RAYB7251',
    unifiedNumber: 'الرمز البريدي: 13325',
    filePath: `${import.meta.env.BASE_URL}documents/national-address.jpeg`,
    type: 'image',
    badge: 'عنوان موثق',
    description: '7251 النفل، 4362، حي الياسمين، الرياض 13325، المملكة العربية السعودية.',
  },
];

export default function TrustAndTeam() {
  const [activeModalDoc, setActiveModalDoc] = useState(null);

  return (
    <section id="trust" className="py-24 bg-[#F7F3EC] border-t border-[rgba(200,169,106,0.28)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] text-[#6B6B63] text-xs font-body font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96A]" />
            <span>الشفافية والتراخيص النظامية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#0A1118] tracking-tight">
            بيانات تجارية موثقة ومعتمدة رسمياً
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B63] font-reading leading-relaxed max-w-2xl mx-auto">
            نلتزم بكافة الأنظمة واللوائح المعمول بها في المملكة العربية السعودية. يمكنك الاطلاع على بيانات التراخيص والعناوين الرسمية أدناه.
          </p>
        </div>

        {/* Business Key Numbers Summary Bar - 20px Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-6 rounded-[20px] bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] text-center shadow-none hover:border-[#C8A96A]/60 transition-luxury">
            <span className="text-xs text-[#6B6B63] font-body block mb-1.5">السجل التجاري</span>
            <span className="text-2xl sm:text-3xl font-display font-medium text-[#C8A96A] tracking-wider" dir="ltr">1010469561</span>
          </div>
          <div className="p-6 rounded-[20px] bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] text-center shadow-none hover:border-[#C8A96A]/60 transition-luxury">
            <span className="text-xs text-[#6B6B63] font-body block mb-1.5">الرقم الموحد 700</span>
            <span className="text-2xl sm:text-3xl font-display font-medium text-[#0A1118] tracking-wider" dir="ltr">7003768764</span>
          </div>
          <div className="p-6 rounded-[20px] bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] text-center shadow-none hover:border-[#C8A96A]/60 transition-luxury">
            <span className="text-xs text-[#6B6B63] font-body block mb-1.5">الرقم الضريبي VAT</span>
            <span className="text-base sm:text-lg font-display font-medium text-[#0A1118] tracking-wider" dir="ltr">310156889300003</span>
          </div>
          <div className="p-6 rounded-[20px] bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] text-center shadow-none hover:border-[#C8A96A]/60 transition-luxury">
            <span className="text-xs text-[#6B6B63] font-body block mb-1.5">العنوان الوطني المختصر</span>
            <span className="text-2xl sm:text-3xl font-display font-medium text-[#C8A96A] tracking-wider" dir="ltr">RAYB7251</span>
          </div>
        </div>

        {/* Official Document Cards - 20px Radius */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {officialDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col justify-between rounded-[20px] p-6 sm:p-7 bg-[#EDE6DA] border border-[rgba(200,169,106,0.28)] hover:border-[#C8A96A] transition-luxury shadow-none group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F3EC] text-[#C8A96A] border border-[rgba(200,169,106,0.28)] flex items-center justify-center font-display text-sm group-hover:bg-[#C8A96A] group-hover:text-[#0A1118] transition-luxury">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-body font-medium px-3 py-1 rounded-full bg-[#F7F3EC] text-[#6B6B63] border border-[rgba(200,169,106,0.28)]">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-medium text-[#0A1118] mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs font-body font-medium text-[#C8A96A] mb-4">
                  {doc.entity}
                </p>

                <div className="bg-[#F7F3EC] p-4 rounded-[14px] border border-[rgba(200,169,106,0.28)] mb-4 space-y-1.5">
                  <div className="text-xs font-body text-[#0A1118] flex justify-between">
                    <span className="text-[#6B6B63]">الرقم المعتمد:</span>
                    <span dir="ltr" className="text-[#C8A96A] font-medium">{doc.number}</span>
                  </div>
                  <div className="text-xs font-body text-[#6B6B63] flex justify-between">
                    <span>التفاصيل:</span>
                    <span className="text-[#0A1118]">{doc.unifiedNumber}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#6B6B63] font-reading leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              {/* View / Download Actions - Pill Buttons */}
              <div className="pt-4 border-t border-[rgba(200,169,106,0.2)] flex gap-2.5">
                <button
                  onClick={() => setActiveModalDoc(doc)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] text-xs font-body font-semibold transition-luxury shadow-none hover:shadow-[0_4px_16px_rgba(200,169,106,0.2)] cursor-pointer active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>معاينة المستند</span>
                </button>
                <a
                  href={doc.filePath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-full border border-[rgba(200,169,106,0.28)] bg-[#F7F3EC] hover:bg-[#EDE6DA] text-[#0A1118] hover:text-[#C8A96A] hover:border-[#C8A96A] text-xs transition-luxury active:scale-95"
                  title="تحميل الوثيقة"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Document Preview Modal */}
      <AnimatePresence>
        {activeModalDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1118]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl bg-[#F7F3EC] rounded-[20px] shadow-2xl overflow-hidden border border-[rgba(200,169,106,0.35)] flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4.5 border-b border-[rgba(200,169,106,0.28)] bg-[#EDE6DA]">
                <div className="text-right">
                  <h3 className="font-display font-medium text-[#0A1118] text-base">
                    {activeModalDoc.title}
                  </h3>
                  <p className="text-xs text-[#C8A96A] font-body">{activeModalDoc.entity} — {activeModalDoc.number}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeModalDoc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#6B6B63] hover:text-[#C8A96A] rounded-full hover:bg-[#F7F3EC] transition-luxury"
                    title="فتح في علامة تبويب جديدة"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveModalDoc(null)}
                    className="p-2 text-[#6B6B63] hover:text-[#0A1118] rounded-full hover:bg-[#F7F3EC] transition-luxury cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Viewer */}
              <div className="flex-1 overflow-auto p-4 bg-[#EDE6DA]/50 flex items-center justify-center">
                {activeModalDoc.type === 'pdf' ? (
                  <iframe
                    src={activeModalDoc.filePath}
                    title={activeModalDoc.title}
                    className="w-full h-[65vh] rounded-[14px] border border-[rgba(200,169,106,0.28)] bg-[#F7F3EC]"
                  />
                ) : (
                  <img
                    src={activeModalDoc.filePath}
                    alt={activeModalDoc.title}
                    className="max-h-[65vh] max-w-full rounded-[14px] object-contain border border-[rgba(200,169,106,0.28)]"
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#EDE6DA] border-t border-[rgba(200,169,106,0.28)] flex items-center justify-between">
                <span className="text-xs text-[#6B6B63] font-body">
                  وثيقة رسمية موثقة ومعتمدة لمؤسسة نواز
                </span>
                <a
                  href={activeModalDoc.filePath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] rounded-full text-xs font-body font-semibold transition-luxury shadow-[0_4px_16px_rgba(200,169,106,0.18)]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>تحميل نسخة</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
