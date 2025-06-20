import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { submitTestScore } from '../../api/api.js';

const JavaOverviewTest = () => {
  const questions = [
    {
      id: 1,
      type: "mcq",
      question: "What does JVM stand for?",
      options: ["Java Virtual Machine", "Java Variable Manager", "Joint Virtual Method"],
      answer: "Java Virtual Machine",
    },
    {
      id: 2,
      type: "truefalse",
      question: "Java is platform-dependent.",
      answer: "false",
    },
    {
      id: 3,
      type: "text",
      question: "Which keyword is used to define a class in Java?",
      answer: "class",
    },
    {
      id: 4,
      type: "mcq",
      question: "Which company originally developed Java?",
      options: ["Microsoft", "Oracle", "Sun Microsystems"],
      answer: "Sun Microsystems",
    },
    {
      id: 5,
      type: "mcq",
      question: "What is the output of: System.out.println(\"Hello\")?",
      options: ["hello", "Hello", "\"Hello\""],
      answer: "Hello",
    },
    {
      id: 6,
      type: "truefalse",
      question: "Java supports multiple inheritance using classes.",
      answer: "false",
    },
    {
      id: 7,
      type: "text",
      question: "What is the extension of compiled Java files?",
      answer: ".class",
    },
    {
      id: 8,
      type: "mcq",
      question: "Which of the following is NOT a feature of Java?",
      options: ["Object-Oriented", "Platform Dependent", "Secure"],
      answer: "Platform Dependent",
    },
    {
      id: 9,
      type: "truefalse",
      question: "JIT stands for Just-In-Time compiler.",
      answer: "true",
    },
    {
      id: 10,
      type: "text",
      question: "Which method is the entry point of a Java program?",
      answer: "main",
    },
  ];

  const { loggedIn, loggedInUserId } = useContext(AuthContext);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    let newScore = 0;
    questions.forEach((q) => {
      const userAnswer = (answers[q.id] || '').toString().trim().toLowerCase();
      const correctAnswer = q.answer.toString().trim().toLowerCase();
      if (userAnswer === correctAnswer) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);

    if (loggedIn) {
      try {
        await submitTestScore({
          userId: loggedInUserId,
          module: "JavaOverview",
          score: newScore,
          total: questions.length,
        });
      } catch (err) {
        console.error("Error saving score:", err);
      }
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  return (
    <div style={{ backgroundColor: '#ecf7ff', padding: '20px', fontFamily: 'Poppins, sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>Test: Java Overview</h1>

      {!submitted ? (
        questions.map((q) => (
          <div key={q.id} style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>{q.id}. {q.question}</p>
            {q.type === 'mcq' && q.options.map((opt, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={opt}
                  onChange={() => handleChange(q.id, opt)}
                /> {opt}
              </div>
            ))}
            {q.type === 'truefalse' && ["true", "false"].map((opt, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={opt}
                  onChange={() => handleChange(q.id, opt)}
                /> {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </div>
            ))}
            {q.type === 'text' && (
              <input
                type="text"
                value={answers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                style={{ padding: '5px', width: '300px' }}
              />
            )}
          </div>
        ))
      ) : (
        <div>
          <h2 style={{ color: '#2c3e50' }}>Your Score: {score} / {questions.length}</h2>
          {!loggedIn && <p>Please login to save your progress.</p>}
          <button onClick={handleRetake} style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px' }}>
            Retake Test
          </button>
        </div>
      )}

      {!submitted && (
        <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#1abc9c', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      )}
    </div>
  );
};

export default JavaOverviewTest;
