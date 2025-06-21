import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL;

export const getAllUsers = async () => {
  const url = `${API_BASE_URL}/admin/users`;
  console.log('Calling:', url); // log the final URL
  try {
    const response = await axios.get(url);
    console.log('Axios response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    throw error;
  }
};
