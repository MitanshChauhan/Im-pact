import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  schoolName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  programOfInterest: { type: String, default: 'General Consultation' },
  studentCount: { type: Number, default: 100 },
  preferredDate: { type: String },
  message: { type: String },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Completed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
