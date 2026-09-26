import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPrograms = async (category = 'All') => {
  try {
    const res = await API.get(`/programs?category=${encodeURIComponent(category)}`);
    return res.data;
  } catch (err) {
    console.warn('[API Warning] Could not fetch programs from Express backend:', err.message);
    return null;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const res = await API.post('/bookings', bookingData);
    return res.data;
  } catch (err) {
    console.error('[API Error] Booking consultation failed:', err.message);
    throw err;
  }
};

export default API;
