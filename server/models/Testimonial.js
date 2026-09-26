import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  quote: { type: String, required: true },
  authorRole: { type: String, required: true }, // e.g. "School Principal", "Grade 8 Student"
  schoolName: { type: String, default: 'Partner School' },
  avatar: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
