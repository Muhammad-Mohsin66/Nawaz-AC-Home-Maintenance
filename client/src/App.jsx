import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TrustAndTeam from './components/TrustAndTeam';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080e1a] text-slate-100 flex flex-col font-cairo">
      {/* Sticky Glass Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Video Showcase */}
        <HeroSection onSelectService={handleSelectService} />

        {/* 4 Core Services: AC, Electrical, Plumbing, Home Maintenance */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* About Company & Field Supervisor */}
        <AboutSection />

        {/* Trust, CR, VAT, and National Address */}
        <TrustAndTeam />

        {/* Functional Booking Form connected to MERN backend & WhatsApp */}
        <BookingForm
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Fast-Action Bar (Fixed at bottom for smartphones) */}
      <div className="fixed bottom-0 inset-x-0 sm:hidden z-40 bg-[#081226]/95 backdrop-blur-xl border-t border-cyan-500/30 p-3 flex gap-2.5 shadow-2xl">
        <a
          href="tel:+966543729238"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span>اتصال مباشر</span>
        </a>
        <a
          href="https://wa.me/966543729238"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-sm shadow-md active:scale-95 transition-transform border border-emerald-400/30"
        >
          <MessageCircle className="w-4 h-4" />
          <span>واتساب فوري</span>
        </a>
      </div>
    </div>
  );
}
