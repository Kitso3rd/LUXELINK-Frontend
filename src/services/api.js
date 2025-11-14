import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchHotels = async () => {
  const response = await axios.get(`${API_BASE_URL}/hotels`);
  return response.data;
};

export const fetchEvents = async () => {
  const response = await axios.get(`${API_BASE_URL}/events`);
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
  return response.data;
};

export const registerEvent = async (eventData) => {
  const response = await axios.post(`${API_BASE_URL}/events/register`, eventData);
  return response.data;
};
