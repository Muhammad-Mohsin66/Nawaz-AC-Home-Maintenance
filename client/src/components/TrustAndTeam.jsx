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
    <section id="trust" className="py-24 bg-[#081020] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>الشفافية والتراخيص النظامية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            بيانات تجارية موثقة <span className="blue-gradient-text">ومعتمدة رسمياً</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            نلتزم بكافة الأنظمة واللوائح المعمول بها في المملكة العربية السعودية. يمكنك الاطلاع على بيانات التراخيص والعناوين الرسمية أدناه.
          </p>
        </div>

        {/* Business Key Numbers Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl glass-card-dark border border-cyan-500/20 text-center">
            <span className="text-xs text-slate-400 font-semibold block mb-1">السجل التجاري</span>
            <span className="text-xl sm:text-2xl font-black text-cyan-300 tracking-wider" dir="ltr">1010469561</span>
          </div>
          <div className="p-5 rounded-2xl glass-card-dark border border-blue-500/20 text-center">
            <span className="text-xs text-slate-400 font-semibold block mb-1">الرقم الموحد 700</span>
            <span className="text-xl sm:text-2xl font-black text-blue-300 tracking-wider" dir="ltr">7003768764</span>
          </div>
          <div className="p-5 rounded-2xl glass-card-dark border border-amber-500/20 text-center">
            <span className="text-xs text-slate-400 font-semibold block mb-1">الرقم الضريبي VAT</span>
            <span className="text-sm sm:text-base font-black text-amber-300 tracking-wider" dir="ltr">310156889300003</span>
          </div>
          <div className="p-5 rounded-2xl glass-card-dark border border-emerald-500/20 text-center">
            <span className="text-xs text-slate-400 font-semibold block mb-1">العنوان الوطني المختصر</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-300 tracking-wider" dir="ltr">RADC3169</span>
          </div>
        </div>

        {/* Official Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {officialDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col justify-between rounded-3xl p-6 bg-gradient-to-b from-[#0f2142]/90 to-[#0c1833]/90 border border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-4">
                  {doc.entity}
                </p>

                <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-700/80 mb-4 space-y-1.5">
                  <div className="text-xs font-bold text-white flex justify-between">
                    <span className="text-slate-400 font-normal">الرقم المعتمد:</span>
                    <span dir="ltr" className="text-cyan-300">{doc.number}</span>
                  </div>
                  <div className="text-xs text-slate-300 flex justify-between">
                    <span className="text-slate-400">التفاصيل:</span>
                    <span>{doc.unifiedNumber}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {doc.description}
                </p>
              </div>

              {/* View / Download Actions */}
              <div className="pt-4 border-t border-slate-700/60 flex gap-2.5">
                <button
                  onClick={() => setActiveModalDoc(doc)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white text-xs font-bold transition-all border border-cyan-500/30 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>معاينة المستند</span>
                </button>
                <a
                  href={doc.filePath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#0d1d3a] rounded-3xl shadow-2xl overflow-hidden border border-cyan-500/30 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-900">
                <div className="text-right">
                  <h3 className="font-bold text-white text-base">
                    {activeModalDoc.title}
                  </h3>
                  <p className="text-xs text-cyan-400">{activeModalDoc.entity} — {activeModalDoc.number}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activeModalDoc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
                    title="فتح في علامة تبويب جديدة"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveModalDoc(null)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Viewer */}
              <div className="flex-1 overflow-auto p-4 bg-slate-950 flex items-center justify-center">
                {activeModalDoc.type === 'pdf' ? (
                  <iframe
                    src={activeModalDoc.filePath}
                    title={activeModalDoc.title}
                    className="w-full h-[65vh] rounded-xl border border-slate-700 bg-white"
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
              <div className="p-4 bg-slate-900 border-t border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  وثيقة رسمية موثقة ومعتمدة لمؤسسة نواز
                </span>
                <a
                  href={activeModalDoc.filePath}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl text-xs font-bold transition-all shadow-md"
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
