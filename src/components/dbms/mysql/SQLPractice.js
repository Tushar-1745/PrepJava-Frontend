import { useState, useEffect, useContext } from "react";
import universalSQLProblems from "../../../data/universalSQLProblems";
import { submitSolvedSQLProblem } from "../../../api/api";
import { ExecuteSQLQuery } from "../../../api/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import LoadingBarComponent from "../../LoadingBarComponent";

export default function SQLPractice() {

    const [query, setQuery] = useState("");
    const [cpuTime, setCpuTime] = useState('')
    const [memory, setMemory] = useState('')
    const [resultMessage, setResultMessage] = useState("");
    const [queryResult, setQueryResult] = useState([]);


    const location = useLocation();
    const { problemId } = location.state || problemId;
    console.log("problem id is", problemId)

    const [problemData, setProblemData] = useState(null);
    const [inputTable, setInputTable] = useState([]);
    const [expectedOutput, setExpectedOutput] = useState([]);

    useEffect(() => {
        if (universalSQLProblems.length > 0 && problemId) {
            const foundProblem = universalSQLProblems.find((problem) => problem.no === problemId);
            setProblemData(foundProblem);

            if (foundProblem) {
                // Manually extracting input data (since it's inside a SQL query)
                setInputTable(foundProblem.inputTable)
                setExpectedOutput(foundProblem.expectedOutput);
            }
        }
    }, [universalSQLProblems, problemId]);

    const { loggedInUsername, loggedInUserId } = useContext(AuthContext);


    console.log("Problem Data:", problemData);

    const [errorOutput, setErrorOutput] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [actualOutput, setActualOutput] = useState([]);

    const [querySuccessfull, setQuerySuccessfull] = useState(false);


    const runQuery = async () => {
        setIsLoading(true); // Show loading bar
        setQueryResult([]); // Clear previous results
        setErrorOutput(null); // Clear previous error message
        setResultMessage({ text: "", color: "black" }); // Reset message
    
        const userDefinedQuery = query;
        const finalQuery = `${problemData.inputQuery} ${userDefinedQuery}`;
    
        if (!finalQuery.trim()) {
            setResultMessage({ text: "❌ Query cannot be empty!", color: "red" });
            setIsLoading(false);
            return;
        }
    
        try {
            const response = await ExecuteSQLQuery(finalQuery, "sql");
    
            if (!response) {
                setResultMessage({ text: "❌ No response received!", color: "red" });
                setIsLoading(false);
                return;
            }
    
            const { output, isCompiled, isExecutionSuccess, cpuTime, memory } = response;
    
            if (!isCompiled) {
                setResultMessage({ text: "❌ Compilation Error! Please check your SQL syntax.", color: "red" });
                setErrorOutput(output || "No detailed error message available.");
                setIsLoading(false);
                return;
            }
    
            if (!isExecutionSuccess) {
                setResultMessage({ text: "❌ Execution Error! Query failed to execute.", color: "red" });
                setErrorOutput(output || "No detailed error message available.");
                setIsLoading(false);
                return;
            }
    
            setCpuTime(cpuTime);
            setMemory(memory);
    
            if (output) {
                const parsedData = parseOutputResult(output);
                setActualOutput(parsedData);
                setQueryResult(parsedData);
    
                const isCorrect = compareResults(problemData.expectedOutput, parsedData);
                if (isCorrect) {
                    setResultMessage({ text: "✅ Test Passed: Your query is correct!", color: "green" });
                    setQuerySuccessfull(true);
                } else {
                    setResultMessage({ text: "❌ Test Failed: Your query result does not match the expected output.", color: "red" });
                }
            }
    
        } catch (error) {
            console.error("Error executing query:", error);
            setResultMessage({ text: "❌ Error executing query: " + error.message, color: "red" });
            setErrorOutput(error.message);
        } finally {
            setIsLoading(false); // Hide loading bar
        }
    };
    
    const handleSubmitQuery = async () => {
        if (!loggedInUsername) {
            alert("Please login to submit");
            return;
        }
    
        if (!querySuccessfull) {
            alert("Submit correct query");
            return;
        }
    
        const solvedSQLProblem = {
            userId: loggedInUserId,
            sqlProblemId: problemData?.no,
            solution: {
                query: query,
                timeComplexity: cpuTime,
                spaceComplexity: memory,
                timeStamp: new Date().toISOString(),
            },
        };
    
        try {
            const result = await submitSolvedSQLProblem(solvedSQLProblem);
            alert("Problem submitted successfully");
    
            // Clear the result area after successful submission
            setQueryResult([]);
            setErrorOutput(null);
            setResultMessage({ text: "", color: "black" });
    
        } catch (error) {
            console.error("Error submitting the problem:", error);
            alert("An error occurred during submission. Please try again.");
        }
    };
    
    const parseOutputResult = (output) => {
        if (!output || !problemData?.headers || problemData.headers.length === 0) return [];

        const headers = problemData.headers; // Directly access problemData from state
        const rows = output.trim().split("\n").map(row => row.split("|").map(value => value.trim()));

        if (rows.length === 0) return [];

        return rows.map(row =>
            headers.reduce((acc, header, index) => {
                const val = isNaN(row[index]) ? row[index] : Number(row[index]);
                return { ...acc, [header]: val };
            }, {})
        );
    };

    const compareResults = (expected, actual) => {
        if (expected.length !== actual.length) return false; // Check if row counts match

        // Compare each row field by field
        for (let i = 0; i < expected.length; i++) {
            const expectedRow = expected[i];
            const actualRow = actual[i];

            for (let key in expectedRow) {
                // Convert both to string for a fair comparison (adjust as needed)
                if (String(expectedRow[key]) !== String(actualRow[key])) {
                    return false;
                }
            }
        }
        return true;
    };

    const goToSQLSubmission = (problemId) => {
        navigate('/sql-submission', { state: { problemId } });
    };


    const navigate = useNavigate();
    return (
        <div>
            {isLoading && <LoadingBarComponent />}

            <div style={styles.navbar}>
                {/* Website Name */}
                <div style={styles.brand}>PrepJava</div>

                {/* Navigation Links */}
                <ul style={styles.navLinks}>
                    <li><a href="#" style={styles.navLink}>Home</a></li>
                    <li><a href="#" style={styles.navLink}>Problems</a></li>
                    <li>
    <Link to="/sql-submission" state={{ problemId }}>Submission</Link>
</li>


                </ul>

                {/* Right-Side Authentication */}
                <div style={styles.authSection}>
                    {loggedInUsername ? (
                        <span style={styles.username}>{loggedInUsername}</span>
                    ) : (<button style={styles.loginButton} onClick={() => navigate("/login")}> Login </button>
                    )}
                </div>
            </div>

            <div style={styles.container}>

                <div style={styles.leftSection}>
                    {/* Problem Information Section */}
                    {problemData && (
                        <div style={styles.problemInfo}>
                            <p style={styles.problemTitle}>
                                {problemData.no}: {problemData.name}
                                <span
                                    style={{
                                        float: "right",
                                        fontWeight: "bold",
                                        color:
                                            problemData.difficulty === "Easy" ? "green" :
                                                problemData.difficulty === "Medium" ? "orange" :
                                                    problemData.difficulty === "Hard" ? "red" :
                                                        "black"
                                    }}
                                >
                                    {problemData.difficulty}
                                </span>
                            </p>
                            <p style={styles.problemDesc}>{problemData.description}</p>
                        </div>
                    )}

                    {/* Input Table */}
                    <h4 style={styles.subHeading}>Input Table</h4>
                    {problemData?.inputTable ? (
                        Array.isArray(problemData.inputTable) ? (
                            // Case 1: Single input table
                            <table style={styles.table}>
                                <thead>
                                    <tr style={styles.tableHeader}>
                                        {Object.keys(problemData.inputTable[0] || {}).map((col, index) => (
                                            <th key={index} style={styles.tableCell}>{col.toUpperCase()}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {problemData.inputTable.map((row, rowIndex) => (
                                        <tr key={rowIndex} style={styles.tableRow}>
                                            {Object.values(row).map((value, colIndex) => (
                                                <td key={colIndex} style={styles.tableCell}>{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            // Case 2: Multiple input tables
                            Object.entries(problemData.inputTable || {}).map(([tableName, tableData]) => (
                                <div key={tableName}>
                                    <h3 style={styles.tableTitle}>{tableName.toUpperCase()}</h3>
                                    <table style={styles.table}>
                                        <thead>
                                            <tr style={styles.tableHeader}>
                                                {Object.keys(tableData[0] || {}).map((col, index) => (
                                                    <th key={index} style={styles.tableCell}>{col.toUpperCase()}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((row, rowIndex) => (
                                                <tr key={rowIndex} style={styles.tableRow}>
                                                    {Object.values(row).map((value, colIndex) => (
                                                        <td key={colIndex} style={styles.tableCell}>{value}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))
                        )
                    ) : (
                        <p>No input table available</p>
                    )}


                    {/* Expected Output Table */}
                    <h4 style={styles.subHeading}>Expected Output</h4>
                    <table style={styles.table}>
                        <thead>
                            <tr style={{ ...styles.tableHeader, backgroundColor: "#28a745" }}>
                                {/* Dynamically generate table headers */}
                                {problemData?.expectedOutput?.length > 0 &&
                                    Object.keys(problemData.expectedOutput[0]).map((key) => (
                                        <th key={key} style={styles.tableCell}>{key.replace("_", " ").toUpperCase()}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {/* Dynamically generate table rows */}
                            {problemData?.expectedOutput?.map((row, index) => (
                                <tr key={index} style={styles.tableRow}>
                                    {Object.values(row).map((value, idx) => (
                                        <td key={idx} style={styles.tableCell}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div style={styles.rightSection}>
                    <h3 style={styles.editorTitle}>SQL Editor</h3>

                    <textarea
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Write your SQL query here..."
                        style={styles.textarea}
                    />

                    <div style={styles.buttonContainer}>
                        <button onClick={runQuery} style={{ ...styles.button, backgroundColor: "#ffc107", color: "black" }}>
                            Run Query
                        </button>
                        <button style={{ ...styles.button, backgroundColor: "#007bff", color: "white" }} onClick={handleSubmitQuery}>
                            Submit Query
                        </button>
                    </div>

                    <div style={styles.resultContainer}>
                        <strong>Query Result:</strong>
                        <p style={{ ...styles.resultMessage, color: resultMessage.color }}>
                            {resultMessage.text}
                        </p>

                        {/* Show error output only if there's an error */}
                        {errorOutput && (
                            <pre style={{ ...styles.errorOutput, color: "red" }}>
                                {errorOutput}
                            </pre>
                        )}

                        {Array.isArray(queryResult) && queryResult.length > 0 && queryResult[0] && (
                            <table style={styles.table}>
                                <thead>
                                    <tr style={styles.tableHeader}>
                                        {Object.keys(queryResult[0]).map(key => (
                                            <th key={key} style={styles.tableCell}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {queryResult.map((row, index) => (
                                        <tr key={index}>
                                            {Object.values(row).map((value, idx) => (
                                                <td key={idx} style={styles.tableCell}>{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


const styles = {
    navbar: {
        position: "fixed",   // Make it fixed on the screen
        top: "0",            // Align it to the top
        left: "0",           // Align to the left edge
        width: "100%",       // Full width
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 20px",
        backgroundColor: "#ffffff", // Matches right section
        borderBottom: "2px solid #ddd",
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#343a40",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000         // Ensure it stays on top of other elements
    },
    brand: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#007bff"
    },
    navLinks: {
        display: "flex",
        gap: "20px",
        listStyle: "none",
        padding: 0,
        margin: 0
    },
    navLink: {
        textDecoration: "none",
        color: "#343a40",
        fontWeight: "normal",
        padding: "8px 12px",
        borderRadius: "5px",
        transition: "background 0.3s ease"
    },
    navLinkHover: {
        backgroundColor: "#f8f9fa"
    },
    authSection: {
        display: "flex",
        alignItems: "center"
    },
    loginButton: {
        padding: "8px 15px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background 0.3s ease"
    },
    loginButtonHover: {
        backgroundColor: "#0056b3"
    },
    username: {
        fontSize: "16px",
        color: "#007bff",
        fontWeight: "bold",
        marginRight: '25px'
    },
    container: {
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fc",
        paddingTop: "40px" // Adjust based on navbar height
    },
    problemTitle: {
        color: "#333",
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px"
    },
    problemDesc: {
        color: "#555",
        fontSize: "16px",
        fontWeight: "normal",
        marginBottom: "15px",
        textAlign: "left"
    },
    difficultyTag: {
        fontSize: "14px",
        fontWeight: "bold",
        padding: "5px 10px",
        borderRadius: "5px"
    },
    leftSection: {
        flex: "1",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRight: "2px solid #ddd",
        overflowY: "auto"
    },
    rightSection: {
        flex: "1",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "15px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden"
    },
    tableHeader: {
        backgroundColor: "#007bff",
        color: "white",
        fontWeight: "normal",
        padding: "12px",
        borderBottom: "2px solid #0056b3"
    },
    tableRow: {
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
        transition: "background-color 0.3s ease"
    },
    tableCell: {
        padding: "5px 15px",
        border: "1px solid #ddd",
        textAlign: "left"
    },
    editorTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#343a40"
    },
    textarea: {
        width: "97%",
        height: "200px",
        padding: "10px",
        fontSize: "16px",
        fontFamily: "monospace",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f4f4f4"
    },
    buttonContainer: {
        marginTop: "10px",
        display: "flex",
        gap: "10px"
    },
    button: {
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px"
    },
    resultContainer: {
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f4f4f4"
    },
    resultMessage: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#343a40"
    }
};

