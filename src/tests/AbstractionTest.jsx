import React, { useState } from 'react';

const AbstractionTest = () => {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 1,
            question: "What is abstraction in Java?",
            options: [
                "Showing complete implementation to the user",
                "Hiding internal details and showing functionality only",
                "Encapsulation of code into one class",
                "Using static variables only"
            ],
            correct: 1,
        },
        {
            id: 2,
            question: "Which of the following is used to achieve abstraction in Java?",
            options: [
                "Only classes",
                "Interfaces and abstract classes",
                "Constructors",
                "Public variables"
            ],
            correct: 1,
        },
        {
            id: 3,
            question: "Which keyword is used to define an abstract class?",
            options: [
                "abstract",
                "interface",
                "virtual",
                "final"
            ],
            correct: 0,
        },
        {
            id: 4,
            question: "Which of the following statements is true?",
            options: [
                "Interfaces can have constructors.",
                "Abstract classes can't have constructors.",
                "Interfaces can have static methods with bodies (Java 8+).",
                "Abstract classes cannot have non-abstract methods."
            ],
            correct: 2,
        }
    ];

    const handleOptionChange = (questionId, optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionIndex
        }));
    };

    const handleSubmit = () => {
        let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) {
                score++;
            }
        });
        setScore(score);
        setSubmitted(true);
    };

    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: "'Poppins', sans-serif",
            color: '#333',
        },
        questionBox: {
            marginBottom: '25px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        },
        questionText: {
            fontSize: '1.2rem',
            marginBottom: '10px'
        },
        option: {
            display: 'block',
            margin: '5px 0'
        },
        submitButton: {
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '20px'
        },
        scoreBox: {
            marginTop: '30px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#28a745'
        }
    };

    return (
        <div style={styles.container}>
            <h1>Abstraction Quiz</h1>

            {questions.map((q, index) => (
                <div key={q.id} style={styles.questionBox}>
                    <div style={styles.questionText}>{index + 1}. {q.question}</div>
                    {q.options.map((option, i) => (
                        <label key={i} style={styles.option}>
                            <input
                                type="radio"
                                name={`question-${q.id}`}
                                value={i}
                                checked={answers[q.id] === i}
                                onChange={() => handleOptionChange(q.id, i)}
                                disabled={submitted}
                            />
                            {' '}{option}
                        </label>
                    ))}
                </div>
            ))}

            {!submitted ? (
                <button style={styles.submitButton} onClick={handleSubmit}>Submit Quiz</button>
            ) : (
                <div style={styles.scoreBox}>
                    You scored {score} out of {questions.length}
                </div>
            )}
        </div>
    );
};

export default AbstractionTest;
