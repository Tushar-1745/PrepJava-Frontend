import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { submitTestScore } from '../../api/api.js';

const ObjectTest= () => {
  const { loggedInUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is an object in Java?",
      options: [
        "A datatype",
        "A function",
        "An instance of a class",
        "A package"
      ],
      answer: "An instance of a class"
    },
    {
      question: "Which keyword is used to create an object in Java?",
      options: ["object", "create", "new", "class"],
      answer: "new"
    },
    {
      question: "Which of the following is NOT a way to create an object in Java?",
      options: [
        "Using new keyword",
        "Using Class.forName()",
        "Using clone()",
        "Using static block"
      ],
      answer: "Using static block"
    },
    {
      question: "Which method is used to create a copy of an object?",
      options: ["clone()", "copy()", "new()", "replicate()"],
      answer: "clone()"
    },
    {
      question: "Which component of an object refers to its behavior?",
      options: ["Fields", "Methods", "Constructor", "Class"],
      answer: "Methods"
    }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex, option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[qIndex] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    let correct = 0;
    userAnswers.forEach((ans, i) => {
      if (ans === questions[i].answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);

    if (loggedInUserId) {
      try {
        await submitTestScore({
          userId: loggedInUserId,
          module: 'ObjectInJava',
          score: correct,
          total: questions.length
        });
        alert("Test submitted successfully!");
        navigate('/object-in-java');
      } catch (error) {
        console.error("Error submitting score:", error);
        alert("Failed to submit score.");
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
      <h1 style={{ fontSize: '2rem', color: '#2c3e50' }}>🧪 Test: Object in Java</h1>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '20px' }}>
          <p style={{ fontWeight: '600' }}>{i + 1}. {q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j} style={{ display: 'block', marginLeft: '20px' }}>
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                checked={userAnswers[i] === opt}
                onChange={() => handleOptionChange(i, opt)}
                disabled={submitted}
              />
              {' '}{opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#0066ff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Submit Test
        </button>
      ) : (
        <div style={{ marginTop: '20px', fontSize: '1.2rem', color: '#1abc9c' }}>
          ✅ You scored {score}/{questions.length}
        </div>
      )}
    </div>
  );
};

export default ObjectTest;
