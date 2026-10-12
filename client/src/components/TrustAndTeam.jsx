import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle, ExternalLink, Download, Eye, X, Building2, Hash, MapPin, ReceiptText, Sparkles } from 'lucide-react';
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
    number: 'RADC3169',
    unifiedNumber: 'الرمز البريدي: 13317',
    filePath: `${import.meta.env.BASE_URL}documents/national-address.jpeg`,
    type: 'image',
    badge: 'عنوان موثق',
    description: 'مبنى 3169، طريق الثمامة، حي الندى، الرياض 13317 - الرقم الإضافي: 8313.',
  },
];

export default function TrustAndTeam() {
  const [activeModalDoc, setActiveModalDoc] = useState(null);

  return (
    <section id="trust" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>الشفافية والتراخيص النظامية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            بيانات تجارية موثقة ومعتمدة رسمياً
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            نلتزم بكافة الأنظمة واللوائح المعمول بها في المملكة العربية السعودية. يمكنك الاطلاع على بيانات التراخيص والعناوين الرسمية أدناه.
          </p>
        </div>

        {/* Business Key Numbers Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block mb-1">السجل التجاري</span>
            <span className="text-xl sm:text-2xl font-black text-blue-700 tracking-wider" dir="ltr">1010469561</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block mb-1">الرقم الموحد 700</span>
            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-wider" dir="ltr">7003768764</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block mb-1">الرقم الضريبي VAT</span>
            <span className="text-sm sm:text-base font-black text-slate-900 tracking-wider" dir="ltr">310156889300003</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block mb-1">العنوان الوطني المختصر</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-700 tracking-wider" dir="ltr">RADC3169</span>
          </div>
        </div>

        {/* Official Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {officialDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col justify-between rounded-3xl p-6 bg-slate-50/70 border border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shadow-xs">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mb-4">
                  {doc.entity}
                </p>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 mb-4 space-y-1.5 shadow-xs">
                  <div className="text-xs font-bold text-slate-900 flex justify-between">
                    <span className="text-slate-500 font-normal">الرقم المعتمد:</span>
                    <span dir="ltr" className="text-blue-700">{doc.number}</span>
                  </div>
                  <div className="text-xs text-slate-600 flex justify-between">
                    <span className="text-slate-500">التفاصيل:</span>
                    <span>{doc.unifiedNumber}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {doc.description}
                </p>
              </div>

              {/* View / Download Actions */}
              <div className="pt-4 border-t border-slate-200 flex gap-2.5">
                <button
                  onClick={() => setActiveModalDoc(doc)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-all border border-blue-200 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>معاينة المستند</span>
                </button>
                <a
                  href={doc.filePath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 text-xs font-bold transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                <div className="text-right">
                  <h3 className="font-bold text-slate-900 text-base">
                    {activeModalDoc.title}
                  </h3>
                  <p className="text-xs text-blue-600">{activeModalDoc.entity} — {activeModalDoc.number}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeModalDoc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-200 transition-colors"
                    title="فتح في علامة تبويب جديدة"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveModalDoc(null)}
                    className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Viewer */}
              <div className="flex-1 overflow-auto p-4 bg-slate-100 flex items-center justify-center">
                {activeModalDoc.type === 'pdf' ? (
                  <iframe
                    src={activeModalDoc.filePath}
                    title={activeModalDoc.title}
                    className="w-full h-[65vh] rounded-xl border border-slate-200 bg-white"
                  />
                ) : (
                  <img
                    src={activeModalDoc.filePath}
                    alt={activeModalDoc.title}
                    className="max-h-[65vh] max-w-full rounded-xl object-contain shadow-md"
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  وثيقة رسمية موثقة ومعتمدة لمؤسسة نواز
                </span>
                <a
                  href={activeModalDoc.filePath}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
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
