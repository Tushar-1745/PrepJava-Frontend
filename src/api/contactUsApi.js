import axios from 'axios';

// const API_URL = 'http://localhost:8080/api';
const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

export const submitContactMessage = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      return response.data;
    } catch (error) {
      console.error('Failed to submit contact message:', error);
      throw error;
    }
};
  
export const reportBug = async (bugData) => {
  const res = await axios.post(`${API_BASE_URL}/bug/report`, bugData);
  return res.data;
};