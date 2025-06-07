import axios from "axios";

export async function getOpenAIFeedback(question, answer) {
  const response = await axios.post("http://localhost:5000/api/feedback", {
    question,
    answer,
  });
  return response.data.feedback;
}

export async function postChatMessage(message) {
  const response = await axios.post("http://localhost:5000/api/chat", {
    message,
  });
  return response.data.reply;
}
