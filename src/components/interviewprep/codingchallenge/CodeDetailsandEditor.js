import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import universalDsaProblems from '../../../data/universalDsaProblems';


function CodeDetailsAndEditor({ challenge, onBack }) {
    const initialTime = 600; // 10 minutes in seconds
    const [result, setResult] = useState(null);
    const [time, setTime] = useState(initialTime); // Timer state initialized with 10 minutes
    const [isTimerRunning, setIsTimerRunning] = useState(false); // Timer control
    const [code, setCode] = useState('')
    const [dsaProblem, setDsaProblem] = useState(null);
    let originalProblem;

    useEffect(() => {
        if (universalDsaProblems && universalDsaProblems.length > 0) {
            const matchingObject = universalDsaProblems.find(
                (problem) => problem.name === challenge.name
            );
    
            if (matchingObject) {
                setDsaProblem(matchingObject);
                // setCode(dsaProblem.defaultCode.code);
            } else {
                console.log("No matching object found for challenge.name:", challenge.name);
            }
        } else {
            console.log("No data available in universalDsaProblems");
        }
    }, []);
    
    

    // Timer logic
    useEffect(() => {
        console.log("the problem is: ", dsaProblem)
        let timer;
        if (isTimerRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, time]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const runCode = () => {
        const testResult = Math.random() > 0.5 ? 'Pass' : 'Fail';
        setResult(testResult);
    };

    const startChallenge = () => {
        setIsTimerRunning(true);
    };

    const finishChallenge = () => {
        setIsTimerRunning(false);
        alert('Challenge Finished!');
    };

    return (
        <div className="coding-challenge">
            <div className="header">
                <button onClick={onBack} className="back-btn">
                    ⬅ Back to Challenges
                </button>
                <div className="timer">
                    Time Left: {formatTime(time)}
                </div>
            </div>

            <div className="challenge-container">
                {/* Left Section */}
                <div className="challenge-details">
                    <h2>{challenge.name}</h2>
                    <p>{<p>{dsaProblem?.description || "Description not available"}</p>}</p>
                    <p>Sample Test Cases:</p>
                    {challenge.testCases.map((testCase, index) => (
                        <div key={index} className="test-case">
                            <p><strong>Input:</strong> {testCase.input}</p>
                            <p><strong>Output:</strong> {testCase.output}</p>
                        </div>
                    ))}
                    <div className="action-buttons">
                        {!isTimerRunning && (
                            <button onClick={startChallenge} className="solve-btn">Solve</button>
                        )}
                        <button onClick={finishChallenge} className="finish-btn" disabled={!isTimerRunning}>
                            Finish
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="code-editor">
                    <h3>Code Editor</h3>
                    <MonacoEditor
                        height="400px"
                        language="java"  // Use 'java' as the language based on your default code language
                        theme="vs-dark"
                        value={dsaProblem?.defaultCode?.code || ""}   // Pass the code state as the value
                        onChange={setCode}  // Update code state when user changes code
                        options={{
                            selectOnLineNumbers: true,
                            automaticLayout: true,
                        }}
                    />
                    <div className="editor-buttons">
                        <button onClick={runCode} className="run-btn">Run Code</button>
                        <button className="submit-btn">Submit Code</button>
                    </div>
                    {result && <div className={`result ${result.toLowerCase()}`}>{result}</div>}
                </div>
            </div>

            <style jsx>{`
                .coding-challenge {
                    font-family: Arial, sans-serif;
                    color: #333;
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #f5f5f5;
                    padding: 15px 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .back-btn {
                    padding: 10px 20px;
                    background: #FF5722;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                }
                .back-btn:hover {
                    background: #E64A19;
                }
                .timer {
                    font-size: 18px;
                    font-weight: bold;
                }
                .challenge-container {
                    display: flex;
                    gap: 20px;
                }
                .challenge-details {
                    width: 35%;
                    background: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .challenge-details h2 {
                    margin-bottom: 10px;
                    color: #4CAF50;
                }
                .test-case {
                    margin-bottom: 10px;
                }
                .action-buttons {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }
                .solve-btn, .finish-btn {
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: bold;
                }
                .solve-btn {
                    background: #FFC107;
                    color: #333;
                }
                .solve-btn:hover {
                    background: #FFA000;
                }
                .finish-btn {
                    background: #4CAF50;
                    color: white;
                }
                .finish-btn:hover {
                    background: #388E3C;
                }
                .finish-btn:disabled {
                    background: #A5D6A7;
                    cursor: not-allowed;
                }
                .code-editor {
                    flex: 2;
                    background: #1e1e1e;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .code-editor h3 {
                    color: #fff;
                    margin-bottom: 10px;
                }
                .editor-buttons {
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                }
                .run-btn, .submit-btn {
                    padding: 10px 15px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: bold;
                }
                .run-btn {
                    background: #2196F3;
                    color: white;
                }
                .run-btn:hover {
                    background: #1976D2;
                }
                .submit-btn {
                    background: #673AB7;
                    color: white;
                }
                .submit-btn:hover {
                    background: #512DA8;
                }
                .result {
                    margin-top: 10px;
                    font-size: 18px;
                    font-weight: bold;
                    text-align: center;
                }
                .result.pass {
                    color: #4CAF50;
                }
                .result.fail {
                    color: #F44336;
                }
            `}</style>
        </div>
    );
}

export default CodeDetailsAndEditor;
