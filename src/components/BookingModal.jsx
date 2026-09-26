import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext';
import Logo from './Logo';

export default function BookingModal() {
  const { isBookingModalOpen, setIsBookingModalOpen, submitBooking, selectedProgram } = useAcademy();

  const [schoolName, setSchoolName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programOfInterest, setProgramOfInterest] = useState(selectedProgram?.title || '01. New School Setup');
  const [studentCount, setStudentCount] = useState(150);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (selectedProgram) {
      setProgramOfInterest(selectedProgram.title);
    }
  }, [selectedProgram]);

  if (!isBookingModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitBooking({
      schoolName,
      contactPerson,
      email,
      phone,
      programOfInterest,
      studentCount,
      message
    });
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-slate-200 w-full max-w-lg rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] text-[#102f56]">
        
        {/* Close button */}
        <button
          onClick={() => setIsBookingModalOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-200 transition-colors"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-2">
          <Logo size="small" />
          <h3 className="font-display font-extrabold text-2xl text-[#102f56] pt-1">
            Schedule a Consultation
          </h3>
          <p className="text-slate-500 text-xs italic">
            Where every voice matters and Every Word Creates an Impact
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-[11px] font-bold text-[#102f56] uppercase tracking-wider mb-1">
              School / Institution Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. St. Xavier's International School"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#102f56] text-sm focus:outline-none focus:border-[#175475] focus:bg-white transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-[#102f56] uppercase tracking-wider mb-1">
                Contact Person *
              </label>
              <input
                type="text"
                required
                placeholder="Principal / Coordinator"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#102f56] text-sm focus:outline-none focus:border-[#175475] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#102f56] uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#102f56] text-sm focus:outline-none focus:border-[#175475] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#102f56] uppercase tracking-wider mb-1">
              Official Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="principal@school.edu.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#102f56] text-sm focus:outline-none focus:border-[#175475] focus:bg-white transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-[#102f56] uppercase tracking-wider mb-1">
                Program of Interest
              </label>
              <select
                value={programOfInterest}
                onChange={(e) => setProgramOfInterest(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#102f56] text-sm focus:outline-none focus:border-[#175475] focus:bg-white transition-colors"
              >
                <option value="Public Speaking & Oratory">Public Speaking & Oratory</option>
                <option value="Debate & Critical Discussion">Debate & Critical Discussion</option>
                <option value="Leadership & Team Communication">Leadership & Team Communication</option>
                <option value="Career Development & Readiness">Career Development & Readiness</option>
                <option value="Custom Institution Program">Custom Institution Program</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#102f56] uppercase tracking-wider mb-1">
                Est. Students Count
              </label>
              <input
                type="number"
                min="10"
                value={studentCount}
                onChange={(e) => setStudentCount(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#102f56] text-sm focus:outline-none focus:border-[#175475] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#102f56] uppercase tracking-wider mb-1">
              Additional Requirements / Message
            </label>
            <textarea
              rows="3"
              placeholder="Share specific grade levels, goals, or timeline..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#102f56] text-sm focus:outline-none focus:border-[#175475] focus:bg-white transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-[#f1a823] text-[#102f56] font-extrabold text-sm shadow-button-simple hover:bg-[#e29c1b] transition-all"
          >
            {loading ? 'Submitting Request...' : 'Confirm Consultation Request →'}
          </button>

        </form>

      </div>
    </div>
  );
}
