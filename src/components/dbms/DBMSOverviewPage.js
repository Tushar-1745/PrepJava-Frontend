import React from "react";
import { useNavigate } from "react-router-dom";

const DBMSOverviewPage = () => {
    const navigate = useNavigate();

    // Common Button Styles
    const buttonStyle = (bgColor) => ({
        backgroundColor: bgColor,
        color: "white",
        padding: "12px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "0.3s",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    });

    // Styles
    const styles = {
        container: { width: '95%', margin: 'auto', fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", color: "#333", lineHeight: "1.6", paddingBottom: "40px" },
        hero: { textAlign: "center", padding: "40px 20px", backgroundColor: "#2c3e50", color: "white", borderRadius: "10px" },
        heroTitle: { fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" },
        heroText: { fontSize: "1.2rem", marginBottom: "20px" },
        buttonContainer: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "15px" },
        section: { padding: "40px 20px", backgroundColor: "#fff" },
        sectionTitle: { fontSize: "2rem", marginBottom: "20px", textAlign: "center", borderBottom: "3px solid #1abc9c", paddingBottom: "10px", display: "inline-block" },
        text: { fontSize: "1.1rem", lineHeight: "1.6", textAlign: "justify" },
        table: { width: "100%", borderCollapse: "collapse", margin: "20px 0", textAlign: "left" },
        th: { border: "1px solid black", padding: "12px", backgroundColor: "#2980b9", color: "white", fontWeight: "bold" },
        td: { border: "1px solid black", padding: "10px", backgroundColor: "#f9f9f9" },
        ul: { marginLeft: "20px", fontSize: "1.1rem" },
        li: { marginBottom: "5px" }
    };

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Database Management Systems</h1>
                <p style={styles.heroText}>
                    The backbone of modern applications, ensuring seamless data management, integrity, and security.
                </p>
                <div style={styles.buttonContainer}>
                    <button style={buttonStyle("#1abc9c")} onClick={() => navigate("/mysql")}>Explore MySQL</button>
                    <button style={buttonStyle("#3498db")} onClick={() => navigate("/mongodb")}>Dive into MongoDB</button>
                    <button style={buttonStyle("#e74c3c")} onClick={() => navigate("/practice-sql")}>Practice SQL Queries</button>
                    <button style={buttonStyle("#f39c12")} onClick={() => navigate("/dbms-quiz")}>Test Your DBMS Knowledge</button>
                </div>
            </section>

            {/* What is DBMS? */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>What is DBMS?</h2>
                <p style={styles.text}>
                    A Database Management System (DBMS) is software designed to store, retrieve, and manage data efficiently. 
                    It provides an interface for users and applications to interact with databases, ensuring data consistency, integrity, and security.
                </p>
                <p><strong>Fun Fact:</strong> The first-ever DBMS was developed in the 1960s by IBM!</p>
            </section>

            {/* Types of DBMS */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Types of DBMS</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}><strong>Hierarchical DBMS:</strong> Data is structured like a tree (e.g., IBM’s IMS).</li>
                    <li style={styles.li}><strong>Network DBMS:</strong> Uses graph structures (e.g., Integrated Data Store).</li>
                    <li style={styles.li}><strong>Relational DBMS:</strong> Uses tables with rows & columns (e.g., MySQL, PostgreSQL).</li>
                    <li style={styles.li}><strong>Object-Oriented DBMS:</strong> Stores objects like in programming (e.g., ObjectDB).</li>
                </ul>
            </section>

            {/* Key Components of DBMS */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Key Components of DBMS</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}><strong>Data Definition Language (DDL):</strong> Defines database structure (CREATE, ALTER).</li>
                    <li style={styles.li}><strong>Data Manipulation Language (DML):</strong> Handles data operations (INSERT, UPDATE, DELETE).</li>
                    <li style={styles.li}><strong>Query Processor:</strong> Translates SQL commands into database actions.</li>
                    <li style={styles.li}><strong>Transaction Management:</strong> Ensures ACID properties for reliable transactions.</li>
                </ul>
            </section>

            {/* Real-World Applications */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Real-World Applications of DBMS</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}><strong>Banking:</strong> Secure transactions & customer management.</li>
                    <li style={styles.li}><strong>Healthcare:</strong> Electronic medical records & patient data.</li>
                    <li style={styles.li}><strong>E-commerce:</strong> Product catalogs, order tracking.</li>
                    <li style={styles.li}><strong>Social Media:</strong> User profiles, posts, messaging.</li>
                </ul>
            </section>

            {/* Common SQL Commands */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Common SQL Commands</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Command</th>
                            <th style={styles.th}>Description</th>
                            <th style={styles.th}>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.td}>SELECT</td>
                            <td style={styles.td}>Retrieves data from a table</td>
                            <td style={styles.td}>SELECT * FROM users;</td>
                        </tr>
                        <tr>
                            <td style={styles.td}>INSERT</td>
                            <td style={styles.td}>Adds new records</td>
                            <td style={styles.td}>INSERT INTO users (name, email) VALUES ('John', 'john@example.com');</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default DBMSOverviewPage;
