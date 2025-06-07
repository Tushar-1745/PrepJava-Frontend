import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import sqlProblems from "../../../data/universalSQLProblems";
import { AuthContext } from "../../../context/AuthContext";
import { fetchSolvedSQLProblemsByUser } from "../../../api/api";

export default function SQLQueryQuestions() {
    const { loggedInUserId } = useContext(AuthContext);
    const navigate = useNavigate();

    const userId = loggedInUserId;
    const [solvedSQLQuestions, setSolvedSQLQuestions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");

    useEffect(() => {
        const fetchSolvedSQLProblems = async () => {
            try {
                const data = await fetchSolvedSQLProblemsByUser(userId);
                console.log("Solved SQL problems:", data);
                setSolvedSQLQuestions(data.map(problem => problem.sqlproblemId)); // Store problem IDs correctly
            } catch (error) {
                console.error('Error fetching solved problems:', error);
            }
        };
        if (userId) fetchSolvedSQLProblems();
    }, [userId]);

    const goToPracticePage = (problemId) => {
        navigate('/sql-practice', { state: { problemId } });
    };

    const difficultyColors = {
        Easy: "#28a745",
        Medium: "#ffc107",
        Hard: "#dc3545"
    };

    const categories = ["All", ...new Set(sqlProblems.map(q => q.category))];
    const difficulties = ["All", "Easy", "Medium", "Hard"];

    const filteredQuestions = sqlProblems.filter(q =>
        (selectedCategory === "All" || q.category === selectedCategory) &&
        (selectedDifficulty === "All" || q.difficulty === selectedDifficulty)
    );

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>SQL Practice Questions</h2>
            <div style={styles.filterContainer}>
                <label style={styles.label}>Category:</label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={styles.dropdown}>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <label style={styles.label}>Difficulty:</label>
                <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)} style={styles.dropdown}>
                    {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                </select>
            </div>
            <ul style={styles.list}>
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map(q => {
                        const isSolved = solvedSQLQuestions.includes(q.no); // Ensure correct ID check
                        return (
                            <li key={q.no} style={styles.listItem}>
                                <span style={styles.questionText} onClick={() => goToPracticePage(q.no)}>
                                    <b>{q.no}. {q.name}</b> {q.text}
                                </span>
                                <span style={{ ...styles.difficulty, color: difficultyColors[q.difficulty] }}>
                                    {q.difficulty}
                                </span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); goToPracticePage(q.no); }}
                                    disabled={isSolved}
                                    style={{
                                        ...styles.button,
                                        backgroundColor: isSolved ? "#28a745" : "#007bff",
                                        opacity: isSolved ? 0.7 : 1
                                    }}
                                >
                                    {isSolved ? "Solved ✅" : "Solve"}
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <p style={{ textAlign: "center", color: "#888" }}>No questions found for the selected filters.</p>
                )}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    },
    heading: {
        textAlign: "center",
        color: "#333"
    },
    filterContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "20px",
        flexWrap: "wrap"
    },
    label: {
        fontWeight: "bold"
    },
    dropdown: {
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        cursor: "pointer"
    },
    list: {
        listStyle: "none",
        padding: 0
    },
    listItem: {
        display: "grid",
        gridTemplateColumns: "2fr 0.5fr 0.5fr",
        gap: "15px",
        alignItems: "center",
        margin: "10px 0",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "white",
        transition: "background 0.3s",
        fontSize: "16px"
    },
    questionText: {
        fontSize: "16px",
        cursor: "pointer",
        transition: "color 0.3s"
    },
    difficulty: {
        fontWeight: "bold",
        textAlign: "center"
    },
    button: {
        padding: "6px 12px",
        cursor: "pointer",
        border: "none",
        color: "white",
        borderRadius: "5px",
        transition: "background 0.3s, transform 0.2s"
    }
};