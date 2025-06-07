import React, { useCallback, useState, useRef, useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { getOpenAIFeedback } from "../../api/openaiApi";
import ChatbotModal from "../ChatbotModal";

function MockInterviewPracticePage() {

  const styles = {
    container: { display: "flex", height: "100vh" },
    sidebar: {
      width: "18%",
      backgroundColor: "#f9f9f9",
      borderRight: "2px solid #ddd",
      padding: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      overflowY: "auto",
    },
    sidebarItem: {
      padding: "10px 15px",
      borderRadius: "8px",
      marginBottom: "8px",
      cursor: "pointer",
      color: "#333",
      fontWeight: "bold",
      background: "#f1f1f1",
      transition: "all 0.3s ease",
    },
    active: {
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0px 4px 8px rgba(0, 123, 255, 0.2)",
    },
    content: { flex: 1, padding: "40px 15px" },
    heading: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#3a5a99',
      textAlign: 'center',
      marginBottom: '20px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
    },
    card: {
      width: "95%",
      margin: 'auto',
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      padding: "10px",
      display: "flex", justifyContent: "center", flexDirection: 'column'
    },
    question: { fontSize: "18px", fontWeight: "bold", marginBottom: "20px", marginLeft: '12px' },
    textarea: {
      width: "95%",
      height: '10rem',
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      resize: "none",
      margin: 'auto'
    },
    micButton: {
      padding: "10px",
      border: "none",
      borderRadius: "50%",
      color: "#fff",
      backgroundColor: "#007bff",
      cursor: "pointer",
      marginBottom: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      width: "50px",
      height: "50px",
      margin: 'auto'
    },
    stopMicButton: { backgroundColor: "#dc3545" },
    buttonGroup: { display: "flex", gap: "10px" },
    btn: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      color: "#fff",
      cursor: "pointer",
    },
    nextBtn: { backgroundColor: "#007bff", marginRight: '2px' },
    submitBtn: { backgroundColor: "#28a745" },
    dialog: {
      position: "fixed",
      top: "30%",
      left: "50%",
      transform: "translate(-50%, -30%)",
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    },

    rightSidebar: {
      width: "18%",
      backgroundColor: "#f9f9f9",
      borderRight: "2px solid #ddd",
      padding: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      overflowY: "auto",
    },
    rightSidebarItem: {
      padding: "10px 15px",
      borderRadius: "8px",
      marginBottom: "8px",
      cursor: "pointer",
      color: "#333",
      fontWeight: "bold",
      background: "#f1f1f1",
      transition: "all 0.3s ease",
    },
  };

  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const recognitionRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState("");  // stores AI evaluation


  const questions = [
    { id: 1, question: "What is Java?" },
    { id: 2, question: "Explain the difference between Abstract Classes and Interfaces." },
    { id: 3, question: "What is a linked list and how does it differ from an array?" },
    { id: 4, question: "Explain Java 8 streams with examples." },
    { id: 5, question: "Can you solve the Fibonacci sequence using recursion?" },
  ];

  const initializeSpeechRecognition = useCallback(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      setUserAnswer((prev) => {
        const prevFinal = prev.split("[INTERIM]")[0].trimEnd();
        const finalTrimmed = finalTranscript.trim();
        const interimTrimmed = interimTranscript.trim();

        const needsSpace = prevFinal && !/[.,!?]$/.test(prevFinal);

        return `${prevFinal}${needsSpace ? " " : ""}${finalTrimmed} [INTERIM] ${interimTrimmed}`;
      });
    };


    recognition.onend = () => {
      if (isRecording) {
        recognition.start();
      }
    };

    recognitionRef.current = recognition;
  }, [isRecording]);

  useEffect(() => {
    initializeSpeechRecognition();
  }, [initializeSpeechRecognition]);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRecording]);

  const handleMicClick = () => {
    if (!recognitionRef.current) return;

    if (!isRecording) {
      setUserAnswer("");
      recognitionRef.current.start();
      setIsRecording(true);
      setTimer(0);
    } else {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setUserAnswer("");
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setUserAnswer("");
    }
  };

  const handleCloseDialog = () => {
    setUserAnswer("");    // Clear the textarea
    setOpenDialog(false); // Close the dialog
  };


  const handleSubmitAnswer = async () => {
    if (userAnswer.trim() === "") {
      alert("Please enter your answer before submitting.");
      return;
    }

    setIsLoading(true); // Show loader

    try {
      const question = questions[questionIndex];
      const feedbackResponse = await getOpenAIFeedback(question, userAnswer);
      console.log("openai feedback is", feedbackResponse);
      setAiFeedback(feedbackResponse);
      setOpenDialog(true);

    } catch (error) {
      console.error("Error during feedback fetch:", error);
      alert("Failed to get feedback. Please try again later.");
    } finally {
      setTimer(0)
      setIsLoading(false); // Hide loader
    }
  };

  const currentQuestion = questions[questionIndex];


  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", color: "#333" }}>
          Topics
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            { category: "Core Java", subitems: questions.slice(0, 2) },
            { category: "Advanced Java", subitems: questions.slice(2, 4) },
            { category: "DSA", subitems: [questions[4]] },
            { category: "DBMS", subitems: [] },
          ].map((group, idx) => (
            <li key={idx} style={{ marginBottom: "10px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                {group.category}
              </div>
              {group.subitems.length > 0 && (
                <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "5px" }}>
                  {group.subitems.map((q) => (
                    <li
                      key={q.id}
                      style={{
                        padding: "8px 12px",
                        marginTop: "5px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        backgroundColor:
                          questionIndex === questions.indexOf(q) ? "#e0e0e0" : "#f1f1f1",
                        color: "#333",
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                      }}
                      onClick={() => setQuestionIndex(questions.indexOf(q))}
                    >
                      {q.question}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}

      {openDialog && (
        <ChatbotModal
          openDialog={openDialog}
          userAnswer={userAnswer}
          aiFeedback={aiFeedback}
          onClose={handleCloseDialog}
          onSeeMissingPoints={() => alert("See missing points clicked")}
          onAskOptimizedAnswer={() => alert("Ask optimized answer clicked")}
        />
      )}

      <div style={styles.content}>
        <h2 style={styles.heading}>Mock Interview Practice</h2>
        <div style={styles.card}>
          <p style={styles.question}>{currentQuestion.question}</p>
          {/* <textarea
            style={styles.textarea}
            rows="5"
            placeholder="Your answer will appear here..."
            value={userAnswer.replace(/\[INTERIM\]/g, "")}
            onChange={(e) => setUserAnswer(e.target.value)}
          /> */}

          <textarea
            style={styles.textarea}
            rows="5"
            placeholder="Your answer will appear here..."
            value={userAnswer.replace(/\[INTERIM\]/g, "")}
            onChange={(e) => setUserAnswer(e.target.value)}
            readOnly={!isRecording}   // readonly when recording is OFF
          />


          {isLoading && (
            <p style={{ fontStyle: "italic", color: "#555", marginTop: "10px" }}>
              Evaluating your answer... Please wait...
            </p>
          )}

          {openDialog && (
            <ChatbotModal
              openDialog={openDialog}
              userAnswer={userAnswer}
              aiFeedback={aiFeedback}
              onClose={handleCloseDialog}
              onSeeMissingPoints={() => alert("See missing points clicked")}
              onAskOptimizedAnswer={() => alert("Ask optimized answer clicked")}
            />
          )}

          <span style={{ fontSize: "18px", color: "#333", fontWeight: "500" }}>
            {String(Math.floor(timer / 60)).padStart(2, "0")}:
            {String(timer % 60).padStart(2, "0")}
          </span>

          <button
            style={{
              ...styles.micButton,
              ...(isRecording ? styles.stopMicButton : {}),
              marginTop: "20px",
            }}
            onClick={handleMicClick}
          >
            {isRecording ? <MicOffIcon /> : <MicIcon />}
          </button>

          <button
            style={{
              ...styles.btn,
              ...styles.submitBtn,
              margin: "5px auto",
              width: "auto",
              opacity: isRecording ? 0.5 : 1,
              cursor: isRecording ? "not-allowed" : "pointer",
            }}
            onClick={handleSubmitAnswer}
            disabled={isRecording}  // disable while recording
            title={isRecording ? "Recording in progress" : "Submit your answer"}
          >
            Submit Answer
          </button>

          <div
            style={{
              ...styles.buttonGroup,
              display: "flex",
              justifyContent: "space-around",
              marginTop: "15px",
            }}
          >
            <button style={{ ...styles.btn, ...styles.nextBtn }} onClick={handlePreviousQuestion}>
              &#8592; Previous Answer
            </button>

            <button style={{ ...styles.btn, ...styles.nextBtn }} onClick={handleNextQuestion}>
              Next Question &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MockInterviewPracticePage;

