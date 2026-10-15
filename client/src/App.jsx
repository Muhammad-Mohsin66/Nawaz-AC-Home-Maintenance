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
    <div className="min-h-screen bg-[#F7F3EC] text-[#0A1118] flex flex-col font-body">
      {/* Sticky Quiet Luxury Navbar */}
      <Navbar />

      <main className="flex-1 pb-24 sm:pb-0">
        {/* Hero Section with Video Showcase */}
        <HeroSection onSelectService={handleSelectService} />

        {/* 4 Core Services: AC, Electrical, Plumbing, Home Maintenance */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* About Company & Field Supervisor */}
        <AboutSection />

        {/* Trust, CR, VAT, and National Address */}
        <TrustAndTeam />

        {/* Functional Booking Form connected directly to WhatsApp & Phone Call */}
        <BookingForm
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Fast-Action Bar (Fixed at bottom for smartphones) */}
      <div className="fixed bottom-0 inset-x-0 sm:hidden z-40 bg-[#0A1118]/95 backdrop-blur-xl border-t border-[rgba(200,169,106,0.28)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0.75rem))] flex gap-3 shadow-[0_-5px_25px_rgba(10,17,24,0.5)]">
        <a
          href="tel:+966543729238"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#122336] border border-[rgba(200,169,106,0.28)] text-[#F7F3EC] hover:text-[#C8A96A] font-body font-medium text-xs transition-luxury active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
          <span>اتصال مباشر</span>
        </a>
        <a
          href="https://wa.me/966543729238"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#C8A96A] hover:bg-[#E4D3A8] text-[#0A1118] font-body font-semibold text-xs transition-luxury shadow-[0_4px_16px_rgba(200,169,106,0.2)] active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>واتساب فوري</span>
        </a>
      </div>
    </div>
  );
}
