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

export const verifyEmail = async ({ email }) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/verify-email`, { email });
    return res.data; // e.g., "Email exists"
  } catch (err) {
    if (err.response && err.response.data) {
      return err.response.data; // e.g., "Email not found" or "Error verifying email"
    }
    return 'Error verifying email'; // generic fallback
  }
};


export const resetPassword = async ({ email, newPassword }) => {
  const res = await axios.post(`${API_BASE_URL}/auth/reset-password`, {
    email,
    newPassword,
  });
  console.log("resetpassword is", res);
  return res.data;
};