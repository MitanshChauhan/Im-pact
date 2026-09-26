import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OfferingsSection from './components/OfferingsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { useAcademy } from './context/AcademyContext';

export default function App() {
  const { toastMessage } = useAcademy();

  return (
    <div className="min-h-screen bg-white text-[#102f56] flex flex-col selection:bg-[#f1a823] selection:text-[#102f56]">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 max-w-md p-4 rounded-2xl bg-[#102f56] text-white border border-[#f1a823] text-xs font-semibold shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="text-xl">✨</span>
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero />
        <OfferingsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking / Consultation Modal */}
      <BookingModal />

    </div>
  );
}
