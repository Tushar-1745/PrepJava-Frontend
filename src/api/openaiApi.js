import axios from "axios";
const API_BASE = import.meta.env.VITE_FEEDBACK_API_URL;

export async function getOpenAIFeedback(question, answer) {
  const response = await axios.post(`${API_BASE}/api/feedback`, {
    question,
    answer,
  });
  return response.data.feedback;
}

export async function postChatMessage(message) {
  const response = await axios.post(`${API_BASE}/api/chat`, {
    message,
  });
  return response.data.reply;
}
