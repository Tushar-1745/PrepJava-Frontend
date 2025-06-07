import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSolvedProblemsByUser } from '../../api/api'; // Import the API function
import universalDsaProblems from '../../data/universalDsaProblems';
import { AuthContext } from '../../context/AuthContext.js';

const styles = {
    pageContainer: {
        margin: 'auto',
        padding: '5px 20px',
        fontFamily: "'Poppins', sans-serif",
        display: 'flex',
        gap: '20px',
    },
    sidebar: {
        maxWidth: '250px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        padding: '20px',
        flex: '0 0 25%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    sidebarHeader: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    },
    statsBox: {
        marginBottom: '20px',
        padding: '15px',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #007BFF, #5A9BFF)',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    statsValue: {
        fontSize: '30px',
        fontWeight: 'bold',
    },
    statsLabel: {
        fontSize: '14px',
    },
    mainContent: {
        flex: '1',
    },
    stickyContainer: {
        position: 'sticky',
        top: '0',
        backgroundColor: '#fff',
        zIndex: '1000',
        padding: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
    },
    headerStyle: {
        textAlign: 'center',
        fontSize: '2.5em',
        fontWeight: 'bold',
        color: '#333',
        margin: '0',
        background: 'linear-gradient(135deg, #007BFF, #5A9BFF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    categoriesContainer: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        margin: '10px auto',
        flexWrap: 'wrap',
    },
    categoryButton: (isSelected) => ({
        padding: "10px 20px",
        borderRadius: "8px",
        border: "2px solid black",
        backgroundColor: isSelected ? "white" : "#007BFF",
        color: isSelected ? "black" : "white",
        cursor: "pointer",
        transition: "all 0.3s ease",
    }),
    categoryButtonHover: {
        backgroundColor: '#0056b3',
    },
    tableContainer: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '12px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    tableRow: {
        padding: '8px 12px',
        textAlign: 'center',
    },
    evenRow: {
        backgroundColor: '#f9f9f9',
    },
    oddRow: {
        backgroundColor: '#fff',
    },
    problemTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        maxWidth: '250px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginLeft: '20px'
    },
    getDifficultyStyle: (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return { color: 'green', fontWeight: 'bold' };
            case 'Medium':
                return { color: 'orange', fontWeight: 'bold' };
            case 'Hard':
                return { color: 'red', fontWeight: 'bold' };
            default:
                return { color: '#555' };
        }
    },
    solvedText: {
        color: 'green',
        fontSize: '14px',
    },
    buttonStyle: {
        padding: '7px 15px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '1px',
        transition: 'background-color 0.3s ease',
    },
    solvedProblemStyle: {
        backgroundColor: '#28a745',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '14px',
        display: 'inline-block',
        textAlign: 'center',
    },
    solveProblemStyle: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '14px',
        transition: 'background-color 0.3s',
    }
};
const DsaProblems = () => {
    const { loggedInUserId } = useContext(AuthContext);
    const navigate = useNavigate();
    const categories = ['All', 'Array', 'LinkedList', 'Stack', 'Queue', 'HashMap', 'Tree', 'Sorting Algorithms'];
    const [solvedProblems, setSolvedProblems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const userId = loggedInUserId; // Replace with actual user ID (from context, props, or localStorage)

    // Fetch solved problems by user
    useEffect(() => {
        const fetchSolvedProblems = async () => {
            try {
                const data = await fetchSolvedProblemsByUser(userId);
                setSolvedProblems(data.map(problem => problem.problemId)); // Store only problemIds
            } catch (error) {
                console.error('Error fetching solved problems:', error);
            }
        };
        fetchSolvedProblems();
    }, [userId]);

    // Filter problems based on selected category
    const getProblemsForCategory = () => {
        if (selectedCategory === 'All') {
            return universalDsaProblems;
        }
        return universalDsaProblems.filter(problem =>
            problem.category.includes(selectedCategory)
        );
    };

    const [hoveredProblemId, setHoveredProblemId] = useState(null); // Track hovered row

    const handleSolveProblem = (problemTitle) => {
        navigate('/dsa/problems/practice', { state: { problemTitle } });
    };

    return (
        <div style={styles.pageContainer}>
            {/* Sidebar Section */}
            <div style={styles.sidebar}>
                <h2 style={styles.sidebarHeader}>Progress</h2>
                <div style={styles.statsBox}>
                    <div style={styles.statsValue}>{solvedProblems.length}</div>
                    <div style={styles.statsLabel}>Total Problems Solved</div>
                </div>
                {/* You can use this logic to update stats for specific categories */}
                <div style={styles.statsBox}>
                    <div style={styles.statsValue}>{solvedProblems.filter(problemId => universalDsaProblems.find(p => p.problemId === problemId && p.category === 'Array')).length}</div>
                    <div style={styles.statsLabel}>Array Problems</div>
                </div>
            </div>

            {/* Main Content Section */}
            <div style={styles.mainContent}>
                <div style={styles.stickyContainer}>
                    <h1 style={styles.headerStyle}>DSA Problems</h1>
                    <div style={styles.categoriesContainer}>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            style={styles.categoryButton(selectedCategory === category)}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                </div>

                

                <table style={styles.tableContainer}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Problem</th>
                            <th style={styles.tableHeader}>Difficulty</th>
                            <th style={styles.tableHeader}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getProblemsForCategory().map((problem, index) => (
                            <tr
                                key={problem.no}
                                style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
                                onClick={() => handleSolveProblem(problem.name)} // Handle row click
                                onMouseEnter={() => setHoveredProblemId(problem.no)} // Set hover state
                                onMouseLeave={() => setHoveredProblemId(null)} // Clear hover state
                            >
                                <td
                                    style={{
                                        paddingLeft: '20px',
                                        cursor: 'pointer', // Pointer cursor
                                        color: hoveredProblemId === problem.no ? 'blue' : 'inherit', // Change color only for hovered row
                                    }}
                                >
                                    {problem.no}. {problem.name}
                                </td>
                                <td style={styles.tableRow}>
                                    <span style={styles.getDifficultyStyle(problem.difficulty)}>
                                        {problem.difficulty}
                                    </span>
                                </td>
                                <td style={{ padding: '10px', textAlign: 'center' }}>
                                    {solvedProblems && solvedProblems.includes(problem.no) ? (
                                        <span
                                            style={styles.solvedProblemStyle}
                                        >
                                            ✔ Solved
                                        </span>
                                    ) : (
                                        <button
                                            style={styles.solveProblemStyle}
                                            onClick={() => handleSolveProblem(problem.name)}
                                        >
                                            Solve Problem
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default DsaProblems;