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

export const fetchContactMessages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/admin/messages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    throw error;
  }
};

export const getUnseenMessageCount = async () => {
  const response = await axios.get(`${API_BASE_URL}/admin/messages/unseenmessages-count`);
  console.log("unseen messages", response)
  return response.data; // ✅ Axios stores response data here
};

export const markMessageAsSeen = async (id) => {
  const res = await axios.put(`${API_BASE_URL}/admin/messages/${id}/seen`);
  return res.data;
};


export const markMessageAsResponded = async (id) => {
  try {
    const res = await axios.put(`${API_BASE_URL}/admin/messages/${id}/responded`);
    return res.data; // e.g., "Message marked as responded."
  } catch (err) {
    throw new Error('Failed to mark message as responded');
  }
};

export const deleteContactMessage = async (id) => {
  try {
    const res = await axios.delete(`${API_BASE_URL}/admin/messages/delete/${id}`);
    return res.data; // this will be the message string from the backend
  } catch (err) {
    throw new Error('Failed to delete message');
  }
};


export const fetchBugReports = async () => {
  const response = await axios.get(`${API_BASE_URL}/admin/bug/allbugs`);
  console.log("bugs are", response)
  return response.data;
};


export const fetchUnsolvedBugCount = async () => {
  const response = await axios.get(`${API_BASE_URL}/admin/bug/unsolvedbugs-count`);
  return response.data;
};



