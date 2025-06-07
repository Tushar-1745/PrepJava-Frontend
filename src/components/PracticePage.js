import React, { useState, useContext, useEffect, } from 'react';
import LoadingBarComponent from './LoadingBarComponent';
import { useNavigate } from 'react-router-dom';
import { Editor, loader } from '@monaco-editor/react';
import { AuthContext } from '../context/AuthContext.js';
import { FetchCodeResult, submitSolvedProblem, getSolutionsOfSolvedProblem } from '../api/api.js';
import { useLocation } from 'react-router-dom';
import universalDsaProblems from '../data/universalDsaProblems.js';

loader.init().then((monaco) => {
    monaco.editor.defineTheme('customVsCodeTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
            'editor.background': '#1E1E1E',
            'editor.foreground': '#FFFFFF',
            'editor.lineHighlightBackground': '#2A2A2A',
            'editorCursor.foreground': '#FFFFFF',
            'editor.selectionBackground': '#264f78',
        },
    });
    monaco.editor.setTheme('customVsCodeTheme');
});

const buttonStyle = {
    margin: '10px 15px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
};

const runButtonStyle = { ...buttonStyle, backgroundColor: '#4CAF50' };
const resetButtonStyle = { ...buttonStyle, backgroundColor: '#f44336' };
const submitButtonStyle = { ...buttonStyle, backgroundColor: 'orange' };
const testCaseButtonStyle = { ...buttonStyle, backgroundColor: 'grey' };

const practicePageStyle = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    width: '100%',
    margin: '20px auto',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    gap: '4px',
    flexWrap: 'wrap',
};

const sectionStyle = {
    flex: 0.9,
    width: '400px',
    padding: '20px',
    backgroundColor: '#ffffff',
    marginBottom: '20px',
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
};

const thStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
};

const headingButtonStyle = {
    padding: '4px 10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s, box-shadow 0.2s',
}
const PracticePage = () => {
    const location = useLocation();
    const { loggedInUsername, loggedInUserId } = useContext(AuthContext);
    const problemTitle = location.state?.problemTitle;
    const problemData = universalDsaProblems.find((problem) => problem.name === problemTitle);
    const testCases = universalDsaProblems.testCases;
    const defaultCode = problemData?.defaultCode?.code || `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, TM");
    }
}`;

    const [code, setCode] = useState(defaultCode);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [output2, setOutput2] = useState('');
    const [loading, setLoading] = useState(false);
    const [isCompiled, setIsCompiled] = useState(false);
    const [isExecutionSuccess, setIsExecutionSuccess] = useState(false);
    const [outPutSection, setOutPutSection] = useState([]); // Use state for output section
    const [testCaseArray, setTestCaseArray] = useState([])
    const [testCasePassed, setTestCasePassed] = useState(true);
    const [cpuTime, setCpuTime] = useState('')
    const [memory, setMemory] = useState('')

    const handleTestCase = async () => {
        setLoading(true); // Start loading
        const outputs = []; // Temporary array to hold test case outputs
        const totalTestCases = problemData.testCases.length;

        try {
            for (let i = 0; i < totalTestCases; i++) {
                // Log current progress
                console.log(`Running Test Case ${i + 1} of ${totalTestCases}...`);

                try {
                    const result = await FetchCodeResult(code, 'java', '0', problemData.testCases[i].input);

                    console.log(`Test Case ${i + 1}:`);
                    console.log(`Input: ${problemData.testCases[i].input}`);
                    console.log(`Expected Output: ${problemData.testCases[i].output}`);
                    console.log(`Actual Output: ${result.output}`);
                    console.log("-----------------------------");

                    outputs.push(result.output); // Collect the actual output for internal reference
                } catch (error) {
                    console.error(`Error executing Test Case ${i + 1}:`, error);
                    outputs.push('Error executing code'); // Add error result for specific test case
                }
            }
        } catch (error) {
            console.error('Error during test case execution:', error);
        } finally {
            // Ensure this happens only after all test cases are processed
            setTestCaseArray(outputs); // Update state with test case results
            setLoading(false); // Stop loading
        }
    };



    const navigate = useNavigate();

    const handlePreviousSubmissions = async () => {
        if (!loggedInUsername) {
            alert("Please login to see previous submissions");
            return;
        }
        try {
            const result = await getSolutionsOfSolvedProblem(loggedInUserId, problemData.no);
            console.log("The result got from getSolutionsOfSolvedProblem API:", result);

            // Navigate to the Previous Submissions page with the result or an empty array
            navigate('/previous-submissions', { state: { solutions: result || [] } });
        } catch (error) {
            console.error("Error fetching previous submissions:", error);

            // Navigate to the page even in case of an error, with no data
            navigate('/previous-submissions', { state: { solutions: [] } });
        }
    };



    useEffect(() => {
        if (problemData && problemData.examples && problemData.examples[0]) {
            setInput(problemData.examples[0].input);

        }
    }, [problemData]);

    const handleSubmit = async () => {
        if (!loggedInUsername) {
            alert("Please log in to submit the code.");
            return;
        }

        if (!testCasePassed) {
            alert("Please pass all the test cases before submission.");
            return;
        }

        const solvedProblem = {
            userId: loggedInUserId,
            problemId: problemData?.no,
            solution: {
                code: code,
                timeComplexity: cpuTime,
                spaceComplexity: memory,
                timeStamp: new Date().toISOString(), // Correct casing
            },
        };

        console.log("Solved problem:", solvedProblem);

        try {
            const result = await submitSolvedProblem(solvedProblem);
            console.log("Submission Result:", result);
            alert("Problem submitted successfully");
            resetCode();
        } catch (error) {
            console.error("Error submitting the problem:", error);
            alert("An error occurred during submission. Please try again.");
        }
    };



    const runCode = async () => {
        if (loggedInUsername) {
            console.log("logged in user is: ", loggedInUsername);
        }
        else {
            console.log("user has not logged in");
        }
        try {
            setLoading(true);
            const result = await FetchCodeResult(code, 'java', '0', problemData.examples[0].input);
            console.log("result of first example: ", result);
            const result2 = await FetchCodeResult(code, 'java', '0', problemData.examples[1].input);
            console.log("result of second example:", result2);

            const { output, isCompiled, isExecutionSuccess, cpuTime, memory } = result;

            setOutput(output);
            setIsCompiled(isCompiled);
            setIsExecutionSuccess(isExecutionSuccess);
            setCpuTime(cpuTime);
            setMemory(memory);

            const output1 = result.output;
            const output2 = result2.output;

            setOutput2(output2);

            // Update state with new values
            setOutPutSection([output1, output2]);

            console.log("Updated outPutSection:", [output1, output2]); // Debug
        } catch (error) {
            setIsCompiled(false);
            setIsExecutionSuccess(false);
            setOutput('Error executing code');
            console.error('Error executing code:', error);
        }
        finally {
            setLoading(false); // Stop loading
        }
    };

    const resetCode = () => {
        setCode(defaultCode);
        setInput(problemData?.examples?.[0]?.input || '');
        setOutput('');
        setIsCompiled(false);
        setIsExecutionSuccess(false);
        setOutPutSection([]); // Reset the output section
    };

    const getOutputColor = (expectedOutput, actualOutput) => {
        const trimmedExpected = expectedOutput ? expectedOutput.trim() : "";
        const trimmedActual = actualOutput ? actualOutput.trim() : "";
        return trimmedExpected === trimmedActual ? "green" : "red";
    };

    return (
        <div style={practicePageStyle}>
            {loading && <LoadingBarComponent />}
            <div style={sectionStyle}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '4px solid black',
                    width: '100%',
                    height: '40px',
                    // gap: '5px',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: '0',
                    backgroundColor: 'white',
                    zIndex: '1000' // Ensures it stays above other content
                }}>
                    <button style={headingButtonStyle}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#f1f1f1';
                            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#f9f9f9';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Description
                    </button>

                    <button style={headingButtonStyle}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#f1f1f1';
                            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#f9f9f9';
                            e.currentTarget.style.boxShadow = 'none';
                        }} onClick={() => navigate('/solutions')}

                    >
                        Solutions
                    </button>

                    <button style={headingButtonStyle}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#f1f1f1';
                            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#f9f9f9';
                            e.currentTarget.style.boxShadow = 'none';
                        }} onClick={handlePreviousSubmissions}

                    >
                        Submissions
                    </button>

                </div>

                <h2>Problem Details</h2>
                {problemData ? (
                    <>
                        <h3>{problemData.no}. {problemData.name}</h3>
                        <p><strong>Description:</strong> {problemData.description || 'Not available'}</p>
                        <h3>Examples:</h3>
                        {problemData.examples?.map((example, index) => (
                            <div key={index}>
                                <p><strong>Input:</strong> {example.input}</p>
                                <p><strong>Output:</strong> {example.output}</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>Problem data not found. Please select a valid problem.</p>
                )}
            </div>


            <div style={{ ...sectionStyle, flex: 1.1 }}>
                <h2 style={{ marginTop: '-20px' }}>Code Editor</h2>
                <Editor
                    height="60vh"
                    defaultLanguage="java"
                    value={code}
                    onChange={(value) => setCode(value)}
                    options={{
                        theme: 'customVsCodeTheme',
                        lineNumbers: 'on',
                    }}
                />
                <div>
                    <button onClick={runCode} style={runButtonStyle}>Run Code</button>
                    <button onClick={resetCode} style={resetButtonStyle}>Reset</button>
                    <button onClick={handleTestCase} style={testCaseButtonStyle}>Run all test cases</button>
                    <button onClick={handleSubmit} style={submitButtonStyle}>Submit</button>
                </div>

                <div style={{ marginTop: '20px' }}>
                    {/* Case: Compilation or execution error */}
                    {!isCompiled || !isExecutionSuccess ? (
                        <textarea
                            value={output}
                            readOnly
                            style={{
                                width: '96%',
                                height: '150px',
                                backgroundColor: '#f9f9f9',
                                color: '#d32f2f',
                                border: '1px solid black',
                                borderRadius: '10px',
                                padding: '10px',
                            }}
                        />
                    ) : (
                        <>
                            {/* Case: Run Code Examples */}
                            <table style={tableStyle}>
                                <thead>
                                    <tr>
                                        <th style={thStyle}>Input</th>
                                        <th style={thStyle}>Expected Output</th>
                                        <th style={thStyle}>Actual Output</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {problemData.examples.map((example, index) => (
                                        <tr key={index}>
                                            <td style={tdStyle}>{example.input}</td>
                                            <td style={tdStyle}>{example.output}</td>
                                            <td style={tdStyle}>
                                                <span
                                                    style={{
                                                        color: getOutputColor(
                                                            example.output || "", // Expected output
                                                            outPutSection[index] || "" // Actual output
                                                        ),
                                                    }}
                                                >
                                                    {outPutSection[index] || "No Output"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Case: Run All Test Cases */}
                            {testCaseArray.length > 0 && (
                                <div style={{ marginTop: '20px' }}>
                                    <h3>Test Case Results</h3>
                                    <table style={tableStyle}>
                                        <thead>
                                            <tr>
                                                <th style={thStyle}>Test Case</th>
                                                <th style={thStyle}>Input</th>
                                                <th style={thStyle}>Expected Output</th>
                                                <th style={thStyle}>Actual Output</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {problemData.testCases.map((testCase, index) => (
                                                <tr key={index}>
                                                    <td style={tdStyle}>Test Case {index + 1}</td>
                                                    <td style={tdStyle}>{testCase.input}</td>
                                                    <td style={tdStyle}>{testCase.output}</td>
                                                    <td style={tdStyle}>
                                                        <span
                                                            style={{
                                                                color: getOutputColor(
                                                                    testCase.output || "", // Expected output
                                                                    testCaseArray[index] || "" // Actual output
                                                                ),
                                                            }}
                                                        >
                                                            {testCaseArray[index] || "No Output"}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PracticePage;

