// ChatAssistant.js
import React, { useState } from "react";
import { IconButton, TextField, Button, Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Handle sending user input
  const handleSend = () => {
    if (userInput.trim() !== "") {
      const newMessage = { type: "user", text: userInput };
      const botResponse = { type: "bot", text: "AI response to your question..." };

      // Add user message and bot response to chat history
      setChatHistory([...chatHistory, newMessage, botResponse]);
      setUserInput("");
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {/* Sticky Button */}
      {!isOpen ? (
        <IconButton
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            width: "60px",
            height: "60px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <ChatIcon />
        </IconButton>
      ) : (
        <Box
          sx={{
            width: "350px",
            height: "500px",
            backgroundColor: "#f8f9fa",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px",
            }}
          >
            <h4 style={{ margin: 0 }}>Ask AI</h4>
            <IconButton
              onClick={() => setIsOpen(false)}
              style={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat History */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.type === "user" ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: msg.type === "user" ? "#007bff" : "#ddd",
                    color: msg.type === "user" ? "white" : "black",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </Box>

          {/* Input Section */}
          <Box
            sx={{
              display: "flex",
              borderTop: "1px solid #ddd",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your question..."
              variant="outlined"
              size="small"
            />
            <Button
              onClick={handleSend}
              variant="contained"
              style={{ marginLeft: "10px", backgroundColor: "#007bff" }}
            >
              Send
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default ChatAssistant;
