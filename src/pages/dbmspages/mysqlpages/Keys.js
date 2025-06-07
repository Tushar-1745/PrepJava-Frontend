import React from 'react';

const Keys = () => {
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
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>MySQL Keys</h1>
            <p style={styles.paragraph}>
                In MySQL, keys are used to uniquely identify rows in a table and establish relationships between tables. They help in maintaining data integrity and improving query performance.
            </p>

            <h2 style={styles.sectionHeader}>Common MySQL Keys</h2>

            <key>
                <h3>1. Primary Key</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Uniquely identifies each record in a table.</p>
                    <strong>Syntax: </strong><br />
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Employee (
                        id INT PRIMARY KEY,
                        firstName VARCHAR(50),
                        lastName VARCHAR(50)
                        );
                    </pre>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        ALTER TABLE Employee ADD PRIMARY KEY (id);
                    </pre>
                </div>
            </key>

            <key>
                <h3>2. Foreign Key</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Establishes a relationship between two tables.</p>
                    <strong>Syntax: </strong><br />
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Orders (
                        orderId INT PRIMARY KEY,
                        empId INT,
                        FOREIGN KEY (empId) REFERENCES Employee(id)
                        );
                    </pre>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        ALTER TABLE Orders ADD CONSTRAINT fk_emp FOREIGN KEY (empId) REFERENCES Employee(id);
                    </pre>
                </div>
            </key>

            <key>
                <h3>3. Unique Key</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Ensures all values in a column are distinct.</p>
                    <strong>Syntax: </strong><br />
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Users (
                        userId INT PRIMARY KEY,
                        email VARCHAR(100) UNIQUE
                        );
                    </pre>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        ALTER TABLE Users ADD UNIQUE (email);
                    </pre>
                </div>
            </key>

            <key>
                <h3>4. Composite Key</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>A key made up of two or more columns.</p>
                    <strong>Syntax: </strong><br />
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Enrollment (
                        studentId INT,
                        courseId INT,
                        PRIMARY KEY (studentId, courseId)
                        );
                    </pre>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        ALTER TABLE Enrollment ADD PRIMARY KEY (studentId, courseId);
                    </pre>
                </div>
            </key>

        </div>
    );
};

export default Keys;
