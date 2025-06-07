import React from 'react';

const LeftJoin = () => {
  // Reusing styles from InnerJoin for consistency
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#f9f9f9',
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
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      border: '1px solid black',
      padding: '8px',
      backgroundColor: '#ddd',
      textAlign: 'left',
    },
    td: {
      border: '1px solid black',
      padding: '8px',
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
      <h1 style={styles.header}>LEFT JOIN in SQL</h1>
      <p style={styles.paragraph}>
        A LEFT JOIN returns all records from the left table and the matched records from the right table.
        If no match is found, NULL values are returned for columns from the right table.
      </p>
      
      <h2 style={styles.sectionHeader}>SQL Query for LEFT JOIN</h2>
      <pre style={styles.codeBlock}>
        {`SELECT Customers.CustomerID, Customers.Name, Customers.City, Orders.OrderID, Orders.Product
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`}
      </pre>

      <h2 style={styles.sectionHeader}>Result: LEFT JOIN Output</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>CustomerID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}>OrderID</th>
            <th style={styles.th}>Product</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={styles.td}>1</td><td style={styles.td}>Alice</td><td style={styles.td}>New York</td><td style={styles.td}>101</td><td style={styles.td}>Laptop</td></tr>
          <tr><td style={styles.td}>2</td><td style={styles.td}>Bob</td><td style={styles.td}>Los Angeles</td><td style={styles.td}>NULL</td><td style={styles.td}>NULL</td></tr>
          <tr><td style={styles.td}>3</td><td style={styles.td}>Charlie</td><td style={styles.td}>Chicago</td><td style={styles.td}>102</td><td style={styles.td}>Smartphone</td></tr>
        </tbody>
      </table>
      
      <h2 style={styles.sectionHeader}>👉 What happened?</h2>
      <p style={styles.paragraph}>✔ Bob (CustomerID 2) appears, even though he has no orders. The OrderID and Product columns are NULL.</p>
      <p style={styles.paragraph}>✔ Only orders from existing customers are included.</p>
    </div>
  );
};

export default LeftJoin;
