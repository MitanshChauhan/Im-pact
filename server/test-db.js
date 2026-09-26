import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import Booking from './models/Booking.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const testMongoConnection = async () => {
  console.log('--------------------------------------------------');
  console.log('🔍 Testing MongoDB Atlas Connection...');
  const uri = process.env.MONGODB_URI || '';
  console.log(`URI: ${uri.replace(/:([^@]+)@/, ':****@')}`);
  console.log('--------------------------------------------------');

  if (!uri || uri.includes('<db_password>')) {
    console.log('⚠️ ATTENTION REQUIRED:');
    console.log('Line 2 of server/.env currently contains the template placeholder "<db_password>".');
    console.log('Please replace "<db_password>" with your actual MongoDB Atlas database password.');
    console.log('--------------------------------------------------');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ SUCCESS! Connected to MongoDB Host: ${conn.connection.host}`);
    console.log(`📁 Database Name: ${conn.connection.name}`);

    // Create a test consultation booking
    const testBooking = await Booking.create({
      schoolName: "Test Excellence Academy",
      contactPerson: "Dr. Test Coordinator",
      email: "test@school.edu.in",
      phone: "+91 98765 00000",
      programOfInterest: "Public Speaking & Oratory",
      studentCount: 120,
      message: "Test consultation submission to verify MongoDB integration.",
      status: "Pending",
      createdAt: new Date()
    });

    console.log('\n🎉 TEST BOOKING CREATED SUCCESSFULLY IN MONGODB:');
    console.log(JSON.stringify(testBooking, null, 2));

    const totalBookings = await Booking.countDocuments();
    console.log(`\n📊 Total Bookings stored in MongoDB: ${totalBookings}`);

  } catch (err) {
    console.log('❌ MONGODB CONNECTION FAILED:');
    console.log(err.message);
  } finally {
    await mongoose.disconnect();
    console.log('--------------------------------------------------');
  }
};

testMongoConnection();
