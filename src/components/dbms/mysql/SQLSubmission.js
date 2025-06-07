import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { getSolutionsOfSolvedSQLProblem } from "../../../api/api";
import universalSQLProblems from "../../../data/universalSQLProblems";

const SQLSubmission = () => {
    const location = useLocation();
    const problemId = location.state?.problemId;
    const { loggedInUserId } = useContext(AuthContext);

    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Fetch the problem name using problemId
    const problemName = universalSQLProblems.find((problem) => problem.no === problemId)?.name || "Unknown Problem";

    useEffect(() => {
        if (!problemId || !loggedInUserId) return;

        const fetchSolutions = async () => {
            try {
                setLoading(true);
                const data = await getSolutionsOfSolvedSQLProblem(loggedInUserId, problemId);
                setSolutions(data);
            } catch (err) {
                setError(err.message || "Error fetching solutions");
            } finally {
                setLoading(false);
            }
        };

        fetchSolutions();
    }, [problemId, loggedInUserId]);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>SQL Submission</h1>
            <p style={styles.problemInfo}>
                <strong>Problem ID:</strong> {problemId || "Not Provided"} <br />
                <strong>Problem Name:</strong> {problemName}
            </p>

            {loading ? (
                <p style={styles.loading}>Loading solutions...</p>
            ) : error ? (
                <p style={styles.error}>{error}</p>
            ) : solutions.length > 0 ? (
                <div style={styles.solutionContainer}>
                    {solutions.map((solution) => (
                        <div key={solution.id} style={styles.solutionCard}>
                            <h3 style={styles.cardHeading}>SQL Query</h3>
                            <pre style={styles.queryBox}>{solution.query}</pre>

                            <p><strong>⏳ Time Complexity:</strong> {solution.timeComplexity}</p>
                            <p><strong>📦 Space Complexity:</strong> {solution.spaceComplexity}</p>
                            <p style={styles.timestamp}>
                                <strong>🕒 Submitted on:</strong> {new Date(solution.timeStamp).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={styles.noData}>No solutions found.</p>
            )}
        </div>
    );
};

// 💡 Updated Styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
    },
    heading: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "15px",
    },
    problemInfo: {
        fontSize: "20px",
        color: "#555",
        marginBottom: "20px",
        textAlign: "center",
    },
    loading: {
        fontSize: "18px",
        color: "#666",
    },
    error: {
        fontSize: "18px",
        color: "red",
    },
    noData: {
        fontSize: "18px",
        color: "#888",
    },
    solutionContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px", // Increased gap for better readability
        width: "100%",
    },
    solutionCard: {
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        width: "80%", // Increased width for better readability
        maxWidth: "700px", // Allows a larger box while maintaining responsiveness
        textAlign: "left",
        transition: "transform 0.2s",
    },
    cardHeading: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    queryBox: {
        backgroundColor: "#272822",
        color: "#f8f8f2",
        padding: "12px",
        borderRadius: "5px",
        fontFamily: "monospace",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
    },
    timestamp: {
        fontSize: "14px",
        color: "#666",
    },
};

export default SQLSubmission;
