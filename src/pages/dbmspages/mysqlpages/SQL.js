import React from 'react';

const SQL = () => {
    const styles = {
        container: {
            padding: '10px 20px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: 'white',
            color: '#333',
            lineHeight: '1.5',
        },
        header: {
            fontSize: '2.5rem',
            textAlign: 'left',
            color: 'black',
        },
        sectionHeader: {
            fontSize: '1.5rem',
            color: 'black',
            borderBottom: '1px solid black',
            display: 'inline-block',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '1.1rem',
            margin: '10px 0',
        },
        codeBlock: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '1rem',
            margin: '10px 0',
            whiteSpace: 'pre-wrap',
        },
        note: {
            backgroundColor: '#fff3cd',
            color: '#856404',
            padding: '10px',
            borderLeft: '5px solid #ffcc00',
            marginBottom: '15px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        th: {
            backgroundColor: '#f2f2f2',
            padding: '10px',
            border: '1px solid #ddd',
            textAlign: 'left',
        },
        td: {
            padding: '10px',
            border: '1px solid #ddd',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Introduction to SQL</h1>
            <p style={styles.paragraph}>
                Structured Query Language (SQL) is the standard language used for managing and manipulating relational databases. 
                It allows users to create, read, update, and delete data efficiently.
            </p>

            <div style={styles.note}>
                <strong>Note:</strong> MySQL is a database system, and SQL is the language used to interact with the MySQL system. 
                We will be using SQL to interact with MySQL.
            </div>

            <h2 style={styles.sectionHeader}>SQL vs. MySQL</h2>
            <p style={styles.paragraph}>
                SQL is a query language used to communicate with databases, whereas MySQL is a popular open-source 
                relational database management system (RDBMS) that uses SQL.
            </p>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Feature</th>
                        <th style={styles.th}>SQL</th>
                        <th style={styles.th}>MySQL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}><strong>Definition</strong></td>
                        <td style={styles.td}>SQL is a language used to interact with databases.</td>
                        <td style={styles.td}>MySQL is a database management system that uses SQL.</td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>Type</strong></td>
                        <td style={styles.td}>A query language.</td>
                        <td style={styles.td}>A relational database management system (RDBMS).</td>
                    </tr>
                </tbody>
            </table>

            <h2 style={styles.sectionHeader}>How SQL Interacts with MySQL and PostgreSQL</h2>
            <p style={styles.paragraph}>
                The following examples show how SQL can be used to create, insert, and retrieve data from **MySQL** and **PostgreSQL**.
            </p>

            <h3 style={styles.sectionHeader}>Example: Creating a Table in MySQL</h3>
            <p style={styles.paragraph}>This SQL code creates a "users" table in a MySQL database.</p>
            <pre style={styles.codeBlock}>
                {`CREATE DATABASE my_database;
USE my_database;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

SELECT * FROM users;`}
            </pre>

            <h3 style={styles.sectionHeader}>Example: Creating a Table in PostgreSQL</h3>
            <p style={styles.paragraph}>This SQL code does the same but for a PostgreSQL database.</p>
            <pre style={styles.codeBlock}>
                {`CREATE DATABASE my_database;
\\c my_database; -- Connect to the database

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

SELECT * FROM users;`}
            </pre>

            <h3 style={styles.sectionHeader}>Differences in MySQL vs. PostgreSQL SQL</h3>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Feature</th>
                        <th style={styles.th}>MySQL</th>
                        <th style={styles.th}>PostgreSQL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}><strong>Auto Increment</strong></td>
                        <td style={styles.td}>Uses <code>AUTO_INCREMENT</code> for primary keys.</td>
                        <td style={styles.td}>Uses <code>SERIAL</code> for primary keys.</td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>Default Database Selection</strong></td>
                        <td style={styles.td}>Use <code>USE database_name;</code></td>
                        <td style={styles.td}>Use <code>\\c database_name;</code></td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>JSON Support</strong></td>
                        <td style={styles.td}>Has JSON support but limited functionality.</td>
                        <td style={styles.td}>Provides better native JSONB support.</td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>Concurrency Handling</strong></td>
                        <td style={styles.td}>Row-level locking, better suited for read-heavy workloads.</td>
                        <td style={styles.td}>MVCC (Multi-Version Concurrency Control) for high concurrency.</td>
                    </tr>
                </tbody>
            </table>

            <h2 style={styles.sectionHeader}>Key Takeaways</h2>
            <ul>
                <li><strong>SQL</strong> is a language used to interact with relational databases.</li>
                <li><strong>MySQL</strong> is a widely used open-source database that uses SQL.</li>
                <li><strong>PostgreSQL</strong> is an advanced open-source database with better support for complex queries.</li>
                <li>Both databases support **SQL** but have differences in features like auto-incrementing and JSON support.</li>
            </ul>
        </div>
    );
};

export default SQL;
