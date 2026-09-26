import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Public Speaking', 'Debate & Discussion', 'Presentation Skills', 'Storytelling', 'Leadership', 'Communication Skills', 'Curriculum Solutions', 'Career Development', 'Business Communication', 'Custom School Program'],
    required: true 
  },
  description: { type: String, required: true },
  icon: { type: String, default: '🎙' },
  targetAudience: { type: String, default: 'Middle & High School Students' },
  duration: { type: String, default: '4 Weeks / 12 Hours' },
  featured: { type: Boolean, default: false },
  highlights: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Program || mongoose.model('Program', programSchema);
