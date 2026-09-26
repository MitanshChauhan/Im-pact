import mongoose from 'mongoose';
import Program from './models/Program.js';
import Testimonial from './models/Testimonial.js';
import { defaultPrograms } from './routes/programRoutes.js';

export const initialTestimonials = [
  {
    quote: "The program has brought a remarkable change in our students. They are more confident, articulate and eager to participate in assemblies and debates.",
    authorRole: "Principal",
    schoolName: "Partner School, Delhi NCR",
    featured: true
  },
  {
    quote: "Our students now express their ideas with clarity and confidence. The sessions were well-structured and genuinely impactful.",
    authorRole: "School Principal",
    schoolName: "Leading International School",
    featured: false
  },
  {
    quote: "I used to be shy and afraid of the stage. Now I can speak in front of a crowd and even lead our school's morning assembly!",
    authorRole: "Grade 8 Student",
    schoolName: "St. Xavier's Academy",
    featured: false
  }
];

export const seedDatabase = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/im-pact';
    await mongoose.connect(connStr);
    console.log('[Seed] Connected to MongoDB for SpeakWell Academy');

    await Program.deleteMany({});
    await Testimonial.deleteMany({});

    await Program.insertMany(defaultPrograms.map(({ _id, ...rest }) => rest));
    await Testimonial.insertMany(initialTestimonials);

    console.log('[Seed] SpeakWell Academy database successfully populated!');
  } catch (err) {
    console.error('[Seed Error]', err.message);
  } finally {
    await mongoose.disconnect();
  }
};

if (process.argv[1] && process.argv[1].endsWith('seed.js')) {
  seedDatabase();
}
