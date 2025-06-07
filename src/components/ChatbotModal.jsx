// import React from "react";
// import { FaSearch, FaCheck, FaSave } from "react-icons/fa";

// export default function ChatbotModal({
//   openDialog,
//   userAnswer,
//   aiFeedback,
//   onClose,
//   onSeeMissingPoints,
//   onAskOptimizedAnswer,
//   onSaveAnswer,
// }) {
//   if (!openDialog) return null;

//   const styles = {
//     overlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 9999,
//       fontFamily: "'Segoe UI', sans-serif",
//     },
//     container: {
//       backgroundColor: "#e6f0fb",
//       width: "900px",
//       maxWidth: "90%",
//       height: "600px",
//       borderRadius: "12px",
//       boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
//       display: "flex",
//       flexDirection: "column",
//       position: "relative",
//     },
//     header: {
//       backgroundColor: "#0077cc",
//       color: "white",
//       padding: "1rem",
//       fontSize: "1.1rem",
//       fontWeight: "bold",
//       borderTopLeftRadius: "12px",
//       borderTopRightRadius: "12px",
//     },
//     closeBtn: {
//       position: "absolute",
//       top: "12px",
//       right: "18px",
//       fontSize: "20px",
//       border: "none",
//       background: "none",
//       color: "white",
//       cursor: "pointer",
//     },
//     chatArea: {
//       flex: 1,
//       padding: "1rem",
//       overflowY: "auto",
//       display: "flex",
//       flexDirection: "column",
//       gap: "1rem",
//     },
//     message: {
//       maxWidth: "70%",
//       padding: "0.8rem 1rem",
//       borderRadius: "14px",
//       fontSize: "0.9rem",
//       lineHeight: "1.4",
//     },
//     userMessage: {
//       alignSelf: "flex-end",
//       backgroundColor: "#cce6ff",
//       borderTopRightRadius: "0px",
//     },
//     aiMessage: {
//       alignSelf: "flex-start",
//       backgroundColor: "#ffffff",
//       borderTopLeftRadius: "0px",
//     },
//     label: {
//       fontSize: "0.75rem",
//       fontWeight: "bold",
//       color: "#555",
//       marginBottom: "4px",
//     },
//     footer: {
//       padding: "0.75rem 1rem",
//       backgroundColor: "#f5faff",
//       borderTop: "1px solid #ccc",
//       display: "flex",
//       flexDirection: "column",
//       gap: "0.75rem",
//     },
//     bottomButtons: {
//       display: "flex",
//       justifyContent: "space-between",
//       gap: "10px",
//       flexWrap: "wrap",
//     },
//     buttonBase: {
//       flex: 1,
//       padding: "8px 12px",
//       border: "none",
//       borderRadius: "6px",
//       cursor: "pointer",
//       fontSize: "0.85rem",
//       fontWeight: "500",
//       color: "#fff",
//       boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
//       transition: "all 0.2s ease",
//       display: "flex",
//       alignItems: "center",
//       gap: "6px",
//       justifyContent: "center",
//     },
//     seeBtn: { backgroundColor: "#3399ff" },
//     optBtn: { backgroundColor: "#28a745" },
//     saveBtn: { backgroundColor: "#444" },
//     inputWrapper: {
//       display: "flex",
//       alignItems: "center",
//       backgroundColor: "#fff",
//       borderRadius: "8px",
//       border: "1px solid #0077cc",
//       padding: "6px 10px",
//     },
//     searchIcon: {
//       color: "#0077cc",
//       marginRight: "8px",
//       fontSize: "1rem",
//     },
//     inputBox: {
//       flex: 1,
//       border: "none",
//       outline: "none",
//       fontSize: "1rem",
//     },
//   };

//   return (
//     <div style={styles.overlay}>
//       <div style={styles.container}>
//         <div style={styles.header}>
//           AI Assistant
//           <button style={styles.closeBtn} onClick={onClose}>
//             ×
//           </button>
//         </div>

//         <div style={styles.chatArea}>
//           {userAnswer && (
//             <div style={{ ...styles.message, ...styles.userMessage }}>
//               <div style={styles.label}>You:</div>
//               {userAnswer}
//             </div>
//           )}
//           {aiFeedback && (
//             <div style={{ ...styles.message, ...styles.aiMessage }}>
//               <div style={styles.label}>AI:</div>
//               {aiFeedback}
//             </div>
//           )}
//         </div>

//         <div style={styles.footer}>
//           <div style={styles.bottomButtons}>
//             <button
//               style={{ ...styles.buttonBase, ...styles.seeBtn }}
//               onClick={onSeeMissingPoints}
//             >
//               <FaSearch />
//               See Missing Points
//             </button>
//             <button
//               style={{ ...styles.buttonBase, ...styles.optBtn }}
//               onClick={onAskOptimizedAnswer}
//             >
//               <FaCheck />
//               Optimized Answer
//             </button>
//             <button style={{ ...styles.buttonBase, ...styles.saveBtn }}
//               onClick={() => {  alert("Submitted successfully");  }}
//             >
//               <FaSave />
//               Save Answer
//             </button>
//           </div>

//           <div style={styles.inputWrapper}>
//             <FaSearch style={styles.searchIcon} />
//             <input
//               type="text"
//               placeholder="Enter your question..."
//               style={styles.inputBox}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { FaSearch, FaCheck, FaSave } from "react-icons/fa";
import { postChatMessage } from "../api/openaiApi";

export default function ChatbotModal({
  openDialog,
  userAnswer,
  aiFeedback,
  onClose,
  onSaveAnswer,
}) {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (openDialog) {
      const initialMessages = [];
      if (userAnswer) initialMessages.push({ sender: "user", message: userAnswer });
      if (aiFeedback) initialMessages.push({ sender: "ai", message: aiFeedback });
      setChatHistory(initialMessages);
    }
  }, [openDialog, userAnswer, aiFeedback]);

  const handleUserQuery = async () => {
    if (!inputValue.trim()) return;
    const message = inputValue.trim();

    setChatHistory((prev) => [...prev, { sender: "user", message }]);
    setInputValue("");
    setLoading(true);

    try {

      const aiMessage = await postChatMessage(message);

      setChatHistory((prev) => [...prev, { sender: "ai", message: aiMessage }]);
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        { sender: "ai", message: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = async (action) => {
    if (typeof action !== "function") {
      alert("Action is not a function");
      return;
    }
  
    // Call action() to get the prompt/message string
    const userMessage = action();
  
    // Add user's message to chat
    setChatHistory((prev) => [...prev, { sender: "user", message: userMessage }]);
  
    setLoading(true);
  
    try {
      // Call your API with the user message
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      const aiMessage = data.reply || "AI did not return a valid response.";
  
      // Add AI's response to chat
      setChatHistory((prev) => [...prev, { sender: "ai", message: aiMessage }]);
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        { sender: "ai", message: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };
  
  function onSeeMissingPoints() {
    return "Please list the missing points from my answer.";
  }
  
  function onAskOptimizedAnswer() {
    return "Please provide an optimized version of my answer.";
  }

  if (!openDialog) return null;

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      fontFamily: "'Segoe UI', sans-serif",
    },
    container: {
      backgroundColor: "#e6f0fb",
      width: "900px",
      maxWidth: "90%",
      height: "600px",
      borderRadius: "12px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    header: {
      backgroundColor: "#0077cc",
      color: "white",
      padding: "1rem",
      fontSize: "1.1rem",
      fontWeight: "bold",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    },
    closeBtn: {
      position: "absolute",
      top: "12px",
      right: "18px",
      fontSize: "20px",
      border: "none",
      background: "none",
      color: "white",
      cursor: "pointer",
    },
    chatArea: {
      flex: 1,
      padding: "1rem",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    message: {
      maxWidth: "70%",
      padding: "0.8rem 1rem",
      borderRadius: "14px",
      fontSize: "0.9rem",
      lineHeight: "1.4",
    },
    userMessage: {
      alignSelf: "flex-end",
      backgroundColor: "#cce6ff",
      borderTopRightRadius: "0px",
    },
    aiMessage: {
      alignSelf: "flex-start",
      backgroundColor: "#ffffff",
      borderTopLeftRadius: "0px",
    },
    label: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      color: "#555",
      marginBottom: "4px",
    },
    footer: {
      padding: "0.75rem 1rem",
      backgroundColor: "#f5faff",
      borderTop: "1px solid #ccc",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    bottomButtons: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
      flexWrap: "wrap",
    },
    buttonBase: {
      flex: 1,
      padding: "8px 12px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.85rem",
      fontWeight: "500",
      color: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      justifyContent: "center",
    },
    seeBtn: { backgroundColor: "#3399ff" },
    optBtn: { backgroundColor: "#28a745" },
    saveBtn: { backgroundColor: "#444" },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "8px",
      border: "1px solid #0077cc",
      padding: "6px 10px",
    },
    searchIcon: {
      color: "#0077cc",
      marginRight: "8px",
      fontSize: "1rem",
    },
    inputBox: {
      flex: 1,
      border: "none",
      outline: "none",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <div style={styles.header}>
          AI Assistant
          <button style={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>

        <div style={styles.chatArea}>
          {chatHistory.map((entry, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                ...(entry.sender === "user"
                  ? styles.userMessage
                  : styles.aiMessage),
              }}
            >
              <div style={styles.label}>
                {entry.sender === "user" ? "You" : "AI"}:
              </div>
              {entry.message}
            </div>
          ))}
          {loading && (
            <div style={{ ...styles.message, ...styles.aiMessage }}>
              <div style={styles.label}>AI:</div>
              Typing...
            </div>
          )}
        </div>

        <div style={styles.footer}>
          <div style={styles.bottomButtons}>

          <button
  style={{ ...styles.buttonBase, ...styles.seeBtn }}
  onClick={() => handleButtonClick(onSeeMissingPoints)}
>
  <FaSearch />
  See Missing Points
</button>

<button
  style={{ ...styles.buttonBase, ...styles.optBtn }}
  onClick={() => handleButtonClick(onAskOptimizedAnswer)}
>
  <FaCheck />
  Optimized Answer
</button>

            <button
              style={{ ...styles.buttonBase, ...styles.saveBtn }}
              onClick={() => {
                onSaveAnswer();
                alert("Submitted successfully");
              }}
            >
              <FaSave />
              Save Answer
            </button>
          </div>

          <div style={styles.inputWrapper}>
            <FaSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Enter your question..."
              style={styles.inputBox}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUserQuery()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
