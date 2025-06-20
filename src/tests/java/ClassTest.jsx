import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import { submitTestScore } from '../../api/api.js'; // adjust path if needed


const ClassTest = () => {
    const { loggedIn, loggedInUserId } = useContext(AuthContext);
    const navigate = useNavigate();

    const questions = [
        {
            question: "What keyword is used to define a class in Java?",
            type: "mcq",
            options: ["class", "Class", "object", "define"],
            answer: "class",
        },
        {
            question: "A class can have multiple constructors in Java.",
            type: "truefalse",
            answer: "true",
        },
        {
            question: "What is the access level of a class if no modifier is specified?",
            type: "mcq",
            options: ["public", "private", "protected", "default"],
            answer: "default",
        },
        {
            question: "What does the keyword 'final' do when applied to a class?",
            type: "text",
            answer: "It prevents inheritance",
        },
        {
            question: "True or False: Abstract classes can have method implementations.",
            type: "truefalse",
            answer: "true",
        },
        {
            question: "Which of these is a correct syntax for an inner class?",
            type: "mcq",
            options: [
                "class Outer { class Inner {} }",
                "class Inner in Outer {}",
                "Outer.Inner() class {}",
                "class Inner extends Outer {}",
            ],
            answer: "class Outer { class Inner {} }",
        },
        {
            question: "True or False: A static nested class can access non-static members of outer class.",
            type: "truefalse",
            answer: "false",
        },
        {
            question: "Which class type cannot be instantiated?",
            type: "mcq",
            options: ["Normal", "Final", "Static", "Abstract"],
            answer: "Abstract",
        },
        {
            question: "What is an anonymous class primarily used for?",
            type: "text",
            answer: "Implementing interfaces or abstract classes on the fly",
        },
        {
            question: "Can a class be both abstract and final?",
            type: "mcq",
            options: ["Yes", "No", "Only in Java 17+", "Only in interfaces"],
            answer: "No",
        },
    ];

    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleChange = (index, value) => {
        setUserAnswers(prev => ({ ...prev, [index]: value }));
    };

    const calculateScore = () => {
        let count = 0;
        questions.forEach((q, idx) => {
            const userAns = (userAnswers[idx] || "").trim().toLowerCase();
            const correctAns = q.answer.trim().toLowerCase();
            if (userAns === correctAns) count++;
        });
        return count;
    };

    const saveScoreToBackend = async (finalScore) => {
        const payload = {
            userId: loggedInUserId,
            module: "Class",
            score: finalScore,
            total: questions.length,
        };
        try {
            await submitTestScore(payload);
            console.log("Score successfully submitted to backend");
        } catch (err) {
            console.error("Error saving score:", err);
        }
    };
    

    const handleSubmit = () => {
        const finalScore = calculateScore();
        setScore(finalScore);
        setSubmitted(true);

        if (loggedIn) {
            saveScoreToBackend(finalScore);
        } else {
            localStorage.setItem("pendingScore", JSON.stringify({
                score: finalScore,
                total: questions.length,
            }));
        }
    };

    useEffect(() => {
        if (loggedIn && localStorage.getItem("pendingScore")) {
            const pending = JSON.parse(localStorage.getItem("pendingScore"));
            saveScoreToBackend(pending.score);
            localStorage.removeItem("pendingScore");
        }
    }, [loggedIn]);

    const handleRetake = () => {
        setUserAnswers({});
        setSubmitted(false);
        setScore(0);
    };

    const styles = {
        container: {
            backgroundColor: '#ecf0f1',
            minHeight: '100vh',
            padding: '20px',
            fontFamily: "'Poppins', sans-serif",
        },
        questionBox: {
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '12px',
            marginBottom: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
        questionText: {
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: '10px',
        },
        input: {
            margin: '5px 0',
            fontSize: '16px',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        submitBtn: {
            backgroundColor: '#1abc9c',
            color: 'white',
            padding: '10px 25px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
        },
        retakeBtn: {
            backgroundColor: '#3498db',
            color: 'white',
            padding: '8px 20px',
            fontSize: '15px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '15px',
        },
        correct: {
            color: 'green',
            fontWeight: 'bold',
        },
        incorrect: {
            color: 'red',
            fontWeight: 'bold',
        },
        loginReminder: {
            backgroundColor: '#fef9e7',
            padding: '10px',
            marginTop: '15px',
            border: '1px solid #f5cba7',
            borderRadius: '8px',
        },
        loginButton: {
            backgroundColor: '#1abc9c',
            color: 'white',
            padding: '8px 20px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Test on Java Classes</h1>
            {questions.map((q, idx) => (
                <div key={idx} style={styles.questionBox}>
                    <div style={styles.questionText}>
                        Q{idx + 1}. {q.question}
                    </div>

                    {q.type === "mcq" && q.options.map((opt, i) => (
                        <div key={i}>
                            <input
                                type="radio"
                                name={`q${idx}`}
                                value={opt}
                                checked={userAnswers[idx] === opt}
                                onChange={() => handleChange(idx, opt)}
                            />
                            {" "}
                            {opt}
                        </div>
                    ))}

                    {q.type === "truefalse" && ["true", "false"].map((opt, i) => (
                        <div key={i}>
                            <input
                                type="radio"
                                name={`q${idx}`}
                                value={opt}
                                checked={userAnswers[idx] === opt}
                                onChange={() => handleChange(idx, opt)}
                            />
                            {" "}
                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </div>
                    ))}

                    {q.type === "text" && (
                        <input
                            type="text"
                            style={styles.input}
                            value={userAnswers[idx] || ""}
                            onChange={(e) => handleChange(idx, e.target.value)}
                            placeholder="Type your answer"
                        />
                    )}

                    {submitted && (
                        <div>
                            {userAnswers[idx]?.trim().toLowerCase() === q.answer.trim().toLowerCase()
                                ? <span style={styles.correct}>Correct</span>
                                : <span style={styles.incorrect}>Incorrect</span>
                            }
                        </div>
                    )}
                </div>
            ))}

            {!submitted ? (
                <button style={styles.submitBtn} onClick={handleSubmit}>Submit</button>
            ) : (
                <div>
                    <h2>Your Score: {score}/{questions.length}</h2>
                    <button style={styles.retakeBtn} onClick={handleRetake}>Retake Test</button>

                    {!loggedIn && (
                        <div style={styles.loginReminder}>
                            <p>🔒 You are not logged in.</p>
                            <p><strong>Please log in to save your score and track your progress.</strong></p>
                            <button style={styles.loginButton} onClick={() => navigate('/login')}>
                                Login
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ClassTest;
