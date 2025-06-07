import React from 'react';

const MySQLViews = () => {
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
            <h1 style={styles.header}>MySQL Views</h1>
            <p style={styles.paragraph}>
                A **View** in MySQL is a virtual table based on the result of an SQL query. It does not store data itself but presents data from one or more tables in a structured way.
            </p>

            <h2 style={styles.sectionHeader}>1. Creating a View</h2>
            <p style={styles.paragraph}>
                You can create a view using the **CREATE VIEW** statement. Views are useful for simplifying complex queries and enhancing security.
            </p>
            <pre style={styles.codeBlock}>
                CREATE VIEW EmployeeView AS 
                SELECT id, name, department, salary 
                FROM Employees 
                WHERE salary &gt; 50000;
            </pre>

            <h2 style={styles.sectionHeader}>2. Using a View</h2>
            <p style={styles.paragraph}>
                Once a view is created, you can use it like a table in a **SELECT** statement.
            </p>
            <pre style={styles.codeBlock}>
                SELECT * FROM EmployeeView;
            </pre>

            <h2 style={styles.sectionHeader}>3. Updating a View</h2>
            <p style={styles.paragraph}>
                You can modify an existing view using the **CREATE OR REPLACE VIEW** statement.
            </p>
            <pre style={styles.codeBlock}>
                CREATE OR REPLACE VIEW EmployeeView AS 
                SELECT id, name, department 
                FROM Employees 
                WHERE department = 'IT';
            </pre>

            <h2 style={styles.sectionHeader}>4. Deleting a View</h2>
            <p style={styles.paragraph}>
                To remove a view, use the **DROP VIEW** statement.
            </p>
            <pre style={styles.codeBlock}>
                DROP VIEW EmployeeView;
            </pre>

            <h2 style={styles.sectionHeader}>5. Advantages of Views</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Advantage</th>
                        <th style={styles.th}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}><strong>Simplifies Queries</strong></td>
                        <td style={styles.td}>Views allow complex queries to be stored as virtual tables.</td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>Security</strong></td>
                        <td style={styles.td}>Users can access specific columns without exposing the full table.</td>
                    </tr>
                    <tr>
                        <td style={styles.td}><strong>Data Abstraction</strong></td>
                        <td style={styles.td}>Hides complexity from users by presenting filtered data.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MySQLViews;
