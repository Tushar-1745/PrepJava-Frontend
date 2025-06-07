import React from 'react';

const JDBC = () => {
    const styles = {
        container: {
            padding: '10px 20px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: 'white',
            color: '#333333',
            lineHeight: '1.6',
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
            marginTop: '20px',
        },
        paragraph: {
            fontSize: '1.1rem',
            margin: '10px 0',
        },
        codeBox: {
            backgroundColor: '#212121',
            color: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            fontFamily: "'Source Code Pro', monospace",
            fontSize: '1rem',
            overflowX: 'auto',
            position: 'relative',
            marginBottom: '20px',
        },
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>JDBC in Java</h1>
            
            <p style={styles.paragraph}>
                JDBC (Java Database Connectivity) is an API that enables Java applications to interact with databases. It provides methods for querying and updating data in a database.
            </p>

            <h2 style={styles.sectionHeader}>JDBC Architecture</h2>
            <p style={styles.paragraph}>
                JDBC follows a layered architecture that includes the following components:
            </p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li>JDBC API</li>
                <li>JDBC Driver Manager</li>
                <li>JDBC Drivers</li>
                <li>Database</li>
            </ul>

            <h2 style={styles.sectionHeader}>Steps to Connect to a Database</h2>
            <p style={styles.paragraph}>JDBC connection involves the following steps:</p>
            {renderCodeExample(`// Step 1: Load the JDBC Driver
Class.forName("com.mysql.cj.jdbc.Driver");

// Step 2: Establish a connection
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");

// Step 3: Create a statement
Statement stmt = con.createStatement();

// Step 4: Execute a query
ResultSet rs = stmt.executeQuery("SELECT * FROM users");

// Step 5: Process the results
while (rs.next()) {
    System.out.println("User: " + rs.getString("name"));
}

// Step 6: Close the connection
con.close();`)}
            
            <h2 style={styles.sectionHeader}>Types of JDBC Drivers</h2>
            <p style={styles.paragraph}>There are four types of JDBC drivers:</p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li>Type 1: JDBC-ODBC Bridge Driver</li>
                <li>Type 2: Native-API Driver</li>
                <li>Type 3: Network Protocol Driver</li>
                <li>Type 4: Thin Driver (Pure Java Driver)</li>
            </ul>

            <h2 style={styles.sectionHeader}>Executing SQL Statements</h2>
            <p style={styles.paragraph}>JDBC provides different interfaces to execute SQL commands:</p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li><strong>Statement</strong> – Used for executing static SQL queries.</li>
                <li><strong>PreparedStatement</strong> – Used for executing parameterized queries.</li>
                <li><strong>CallableStatement</strong> – Used for calling stored procedures.</li>
            </ul>
            
            {renderCodeExample(`// Using PreparedStatement
PreparedStatement pstmt = con.prepareStatement("INSERT INTO users (name, age) VALUES (?, ?)");
pstmt.setString(1, "John Doe");
pstmt.setInt(2, 30);
pstmt.executeUpdate();`)}
        </div>
    );
};

export default JDBC;
