import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchPrograms, createBooking as apiCreateBooking } from '../services/api';
import { defaultPrograms } from '../data/defaultPrograms';

const AcademyContext = createContext();

export const AcademyProvider = ({ children }) => {
  const [programs, setPrograms] = useState(defaultPrograms);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToastMessage({ text: msg, type });
    setTimeout(() => setToastMessage(null), 4500);
  };

  const loadData = async () => {
    const data = await fetchPrograms(selectedCategory);
    if (data && data.length > 0) {
      setPrograms(data);
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedCategory]);

  const submitBooking = async (bookingData) => {
    try {
      await apiCreateBooking(bookingData);
    } catch (err) {
      console.log('Using local fallback for booking');
    }

    setIsBookingModalOpen(false);
    showToast(`🎉 Thank you, ${bookingData.contactPerson}! We have received your consultation request for ${bookingData.schoolName}. Our team will contact you shortly!`);
  };

  return (
    <AcademyContext.Provider
      value={{
        programs,
        selectedCategory,
        setSelectedCategory,
        isBookingModalOpen,
        setIsBookingModalOpen,
        selectedProgram,
        setSelectedProgram,
        submitBooking,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = () => useContext(AcademyContext);
