import React from 'react';

const FullJoin = () => {
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
      <h1 style={styles.header}>Full Join in SQL</h1>
      <p style={styles.paragraph}>
        A FULL JOIN returns all records when there is a match in either left or right table. If there is no match, the result will contain NULL values for columns from the table that lacks a match.
      </p>

      <h2 style={styles.sectionHeader}>SQL Query for FULL JOIN</h2>
      <pre style={styles.codeBlock}>
        {`SELECT Customers.CustomerID, Customers.Name, Customers.City, Orders.OrderID, Orders.Product
FROM Customers
FULL JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`}
      </pre>

      <h2 style={styles.sectionHeader}>Result: FULL JOIN Output</h2>
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
          <tr><td style={styles.td}>2</td><td style={styles.td}>Bob</td><td style={styles.td}>Los Angeles</td><td style={styles.td}>NULL</td><td style={styles.td}>NULL</td></tr>
          <tr><td style={styles.td}>NULL</td><td style={styles.td}>NULL</td><td style={styles.td}>NULL</td><td style={styles.td}>104</td><td style={styles.td}>Headphones</td></tr>
        </tbody>
      </table>

      <h2 style={styles.sectionHeader}>👉 What happened?</h2>
      <p style={styles.paragraph}>✔ Bob (CustomerID 2) is included, even though he has no orders.</p>
      <p style={styles.paragraph}>✔ OrderID 104 (Headphones) is included, even though it belongs to an unknown CustomerID.</p>
      <p style={styles.paragraph}>✔ All rows from both tables are included, with NULLs where there is no match.</p>

      <h2 style={styles.sectionHeader}>Performance Considerations</h2>
      <p style={styles.paragraph}><strong>Indexes:</strong> Indexing columns used in the join condition can improve performance.</p>
      <p style={styles.paragraph}><strong>Large Datasets:</strong> FULL JOIN can be expensive in terms of performance, especially on large datasets.</p>
      <p style={styles.paragraph}><strong>Filtering:</strong> Adding WHERE conditions after the join can help optimize performance.</p>
    </div>
  );
};

export default FullJoin;