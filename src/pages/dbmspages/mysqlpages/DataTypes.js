import React from 'react';

const MySQLDataTypes = () => {
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
            <h1 style={styles.header}>MySQL Data Types</h1>
            <p style={styles.paragraph}>
                In MySQL, data types define the type of data a column can hold. They ensure data integrity and optimize storage and performance.
            </p>

            <h2 style={styles.sectionHeader}>Common MySQL Data Types</h2>

            <datatype>
                <h3>1. Integer Types</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Used for storing whole numbers.</p>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Employees (
                            id INT PRIMARY KEY,
                            age TINYINT,
                            salary BIGINT
                        );
                    </pre>
                </div>
            </datatype>

            <datatype>
                <h3>2. Floating-Point & Decimal Types</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Used for storing decimal and floating-point numbers.</p>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Products (
                            price FLOAT,
                            discount DOUBLE,
                            tax DECIMAL(5,2)
                        );
                    </pre>
                </div>
            </datatype>

            <datatype>
                <h3>3. String Types</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Used for storing text or character data.</p>
                    
                    <h4>CHAR vs VARCHAR</h4>
                    <p><strong>Purpose: </strong>Both store character data but have differences in storage and performance.</p>

                    <strong>Example:</strong>
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Users (
                            fixedLength CHAR(10),
                            variableLength VARCHAR(10)
                        );
                    </pre>

                    <h4>Difference between CHAR and VARCHAR</h4>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Feature</th>
                                <th style={styles.th}>CHAR</th>
                                <th style={styles.th}>VARCHAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.td}><strong>Storage</strong></td>
                                <td style={styles.td}>Fixed length, always occupies the defined space</td>
                                <td style={styles.td}>Variable length, only uses required space</td>
                            </tr>
                            <tr>
                                <td style={styles.td}><strong>Performance</strong></td>
                                <td style={styles.td}>Faster for fixed-length data</td>
                                <td style={styles.td}>Better for variable-length data</td>
                            </tr>
                            <tr>
                                <td style={styles.td}><strong>Use Case</strong></td>
                                <td style={styles.td}>Best for storing fixed-size strings like country codes</td>
                                <td style={styles.td}>Best for storing names, addresses, and dynamic-length text</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </datatype>

            <datatype>
                <h3>4. Date and Time Types</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Used for storing date and time values.</p>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Orders (
                            orderDate DATE,
                            deliveryTime TIME,
                            orderTimestamp TIMESTAMP
                        );
                    </pre>
                </div>
            </datatype>

            <datatype>
                <h3>5. Boolean Type</h3>
                <div style={{ marginLeft: '50px' }}>
                    <p><strong>Purpose: </strong>Used for storing true/false values.</p>
                    <strong>Example: </strong>
                    <pre style={styles.codeBlock}>
                        CREATE TABLE Customers (
                            isActive BOOLEAN
                        );
                    </pre>
                </div>
            </datatype>
        </div>
    );
};

export default MySQLDataTypes;
