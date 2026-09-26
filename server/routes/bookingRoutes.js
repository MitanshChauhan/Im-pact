import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

let memoryBookings = [];

// POST /api/bookings (Book a meeting / consultation for schools)
router.post('/', async (req, res) => {
  try {
    const { schoolName, contactPerson, email, phone, programOfInterest, studentCount, preferredDate, message } = req.body;
    if (!schoolName || !contactPerson || !email || !phone) {
      return res.status(400).json({ error: 'School name, contact person, email, and phone are required' });
    }

    const bookingData = {
      schoolName,
      contactPerson,
      email,
      phone,
      programOfInterest: programOfInterest || 'General Consultation',
      studentCount: Number(studentCount) || 100,
      preferredDate,
      message,
      status: 'Pending',
      createdAt: new Date()
    };

    if (req.dbConnected) {
      const saved = await Booking.create(bookingData);
      return res.status(201).json({ message: 'Consultation request submitted successfully!', booking: saved });
    } else {
      const memObj = { _id: `booking_${Date.now()}`, ...bookingData };
      memoryBookings.unshift(memObj);
      return res.status(201).json({ message: 'Consultation request registered in memory!', booking: memObj });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/bookings
router.get('/', async (req, res) => {
  try {
    if (req.dbConnected) {
      const bookings = await Booking.find({}).sort({ createdAt: -1 });
      return res.json(bookings);
    } else {
      return res.json(memoryBookings);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
