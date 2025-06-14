// import axios from "axios";

// export async function getOpenAIFeedback(question, answer) {
//   const response = await axios.post("http://localhost:5000/api/feedback", {
//     question,
//     answer,
//   });
//   return response.data.feedback;
// }

// export async function postChatMessage(message) {
//   const response = await axios.post("http://localhost:5000/api/chat", {
//     message,
//   });
//   return response.data.reply;
// }

import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getOpenAIFeedback(question, answer) {
  const response = await axios.post(`${BASE_URL}/api/feedback`, {
    question,
    answer,
  });
  return response.data.feedback;
}

export async function postChatMessage(message) {
  const response = await axios.post(`${BASE_URL}/api/chat`, {
    message,
  });
  return response.data.reply;
}
