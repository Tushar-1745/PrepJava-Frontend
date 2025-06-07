import React from 'react';

const RightJoin = () => {
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
      <h1 style={styles.header}>Right Join in SQL</h1>
      <p style={styles.paragraph}>
        A RIGHT JOIN returns all rows from the right table and only the matching rows from the left table. If there is no match, NULL values are returned for the left table's columns.
      </p>

      <h2 style={styles.sectionHeader}>SQL Query for RIGHT JOIN</h2>
      <pre style={styles.codeBlock}>
        {`SELECT Customers.CustomerID, Customers.Name, Customers.City, Orders.OrderID, Orders.Product
FROM Customers
RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`}
      </pre>

      <h2 style={styles.sectionHeader}>Result: RIGHT JOIN Output</h2>
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
          <tr><td style={styles.td}>3</td><td style={styles.td}>Charlie</td><td style={styles.td}>Chicago</td><td style={styles.td}>102</td><td style={styles.td}>Smartphone</td></tr>
          <tr><td style={styles.td}>4</td><td style={styles.td}>David</td><td style={styles.td}>Miami</td><td style={styles.td}>103</td><td style={styles.td}>Tablet</td></tr>
          <tr><td style={styles.td}>NULL</td><td style={styles.td}>NULL</td><td style={styles.td}>NULL</td><td style={styles.td}>104</td><td style={styles.td}>Headphones</td></tr>
        </tbody>
      </table>
      
      <h2 style={styles.sectionHeader}>👉 What happened?</h2>
      <p style={styles.paragraph}>✔ Bob (CustomerID 2) was excluded because he has not placed an order.</p>
      <p style={styles.paragraph}>✔ OrderID 104 (Headphones) is included even though no matching customer exists.</p>
      <p style={styles.paragraph}>✔ NULL values appear in the Customers columns for unmatched orders.</p>
      
      <h2 style={styles.sectionHeader}>Handling NULL Values in RIGHT JOIN</h2>
      <p style={styles.paragraph}>Since RIGHT JOIN includes all rows from the right table, unmatched rows from the left table will have NULL values.</p>
      
      <h2 style={styles.sectionHeader}>Performance Considerations</h2>
      <p style={styles.paragraph}><strong>Indexes:</strong> Ensure indexes are used on the join columns to optimize query performance.</p>
      <p style={styles.paragraph}><strong>Use Cases:</strong> Useful when ensuring all records from the right table are retained.</p>
    </div>
  );
};

export default RightJoin;