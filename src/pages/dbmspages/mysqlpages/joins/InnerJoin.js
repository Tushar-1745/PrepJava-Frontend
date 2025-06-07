import React from 'react';

const InnerJoin = () => {
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
  }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Inner Join in SQL</h1>
      <p style={styles.paragraph}>
        An INNER JOIN returns only the matching rows from both tables based on a specified condition. If there is no match, the rows are not included in the result.
      </p>

      <h2 style={styles.sectionHeader}>Description</h2>
      <p style={styles.paragraph}>✔ INNER JOIN is the most commonly used join.</p>
      <p style={styles.paragraph}>✔ It retrieves rows where there is at least one matching value in both tables.</p>
      <p style={styles.paragraph}>✔ It works by comparing a specified column (or multiple columns) in two tables and returning only those rows where the values match.</p>
      <p style={styles.paragraph}>✔ If a row in either table does not have a corresponding match in the other table, it is excluded from the result.</p>
      <p style={styles.paragraph}>✔ The matching condition is typically set using a FOREIGN KEY relationship but can be any condition.</p>

      <h2 style={styles.sectionHeader}>Consider Two Tables:</h2>

      <h3 style={styles.sectionHeader}>Table 1: Customers</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>CustomerID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>City</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={styles.td}>1</td><td style={styles.td}>Alice</td><td style={styles.td}>New York</td></tr>
          <tr><td style={styles.td}>2</td><td style={styles.td}>Bob</td><td style={styles.td}>Los Angeles</td></tr>
          <tr><td style={styles.td}>3</td><td style={styles.td}>Charlie</td><td style={styles.td}>Chicago</td></tr>
          <tr><td style={styles.td}>4</td><td style={styles.td}>David</td><td style={styles.td}>Miami</td></tr>
        </tbody>
      </table>

      <h3 style={styles.sectionHeader}>Table 2: Orders</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>OrderID</th>
            <th style={styles.th}>CustomerID</th>
            <th style={styles.th}>Product</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={styles.td}>101</td><td style={styles.td}>1</td><td style={styles.td}>Laptop</td></tr>
          <tr><td style={styles.td}>102</td><td style={styles.td}>3</td><td style={styles.td}>Smartphone</td></tr>
          <tr><td style={styles.td}>103</td><td style={styles.td}>4</td><td style={styles.td}>Tablet</td></tr>
          <tr><td style={styles.td}>104</td><td style={styles.td}>5</td><td style={styles.td}>Headphones</td></tr>
        </tbody>
      </table>

      <p style={styles.paragraph}>👉 Notice: Customer ID 5 is in the Orders table but does not exist in Customers.</p>
      <p style={styles.paragraph}>👉 Customer ID 2 (Bob) is in Customers but has not placed any order.</p>

      <h2 style={styles.sectionHeader}>SQL Query for INNER JOIN</h2>
      <pre style={styles.codeBlock}>
        {`SELECT Customers.CustomerID, Customers.Name, Customers.City, Orders.OrderID, Orders.Product
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`}
      </pre>

      <h2 style={styles.sectionHeader}>Result: INNER JOIN Output</h2>
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
        </tbody>
      </table>

      <h2 style={styles.sectionHeader}>👉 What happened?</h2>
      <p style={styles.paragraph}>✔ Bob (CustomerID 2) was excluded because he has not placed an order.</p>
      <p style={styles.paragraph}>✔ OrderID 104 (Headphones) was excluded because it belongs to CustomerID 5, which does not exist in Customers.</p>
      <p style={styles.paragraph}>✔ Only rows with a match between Customers and Orders were included.</p>

      <h2 style={styles.sectionHeader}>Handling Duplicates in INNER JOIN</h2>
      <p style={styles.paragraph}>If there are duplicate values in either table, the INNER JOIN will return multiple rows for those matches.</p>

      <h2 style={styles.sectionHeader}>Example with Duplicates</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>OrderID</th>
            <th style={styles.th}>CustomerID</th>
            <th style={styles.th}>Product</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={styles.td}>101</td><td style={styles.td}>1</td><td style={styles.td}>Laptop</td></tr>
          <tr><td style={styles.td}>105</td><td style={styles.td}>1</td><td style={styles.td}>Mouse</td></tr>
          <tr><td style={styles.td}>106</td><td style={styles.td}>1</td><td style={styles.td}>Keyboard</td></tr>
        </tbody>
      </table>

      <h2 style={styles.sectionHeader}>Result with Duplicates</h2>
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
          <tr><td style={styles.td}>1</td><td style={styles.td}>Alice</td><td style={styles.td}>New York</td><td style={styles.td}>105</td><td style={styles.td}>Mouse</td></tr>
          <tr><td style={styles.td}>1</td><td style={styles.td}>Alice</td><td style={styles.td}>New York</td><td style={styles.td}>106</td><td style={styles.td}>Keyboard</td></tr>
        </tbody>
      </table>

      <p style={styles.paragraph}>👉 Each matching order is included!</p>

      <h2 style={styles.sectionHeader}>Handling Duplicates in INNER JOIN</h2>
      <p style={styles.paragraph}>If there are duplicate values in either table, the INNER JOIN will return multiple rows for those matches.</p>

      <h2 style={styles.sectionHeader}>Handling NULL Values in INNER JOIN</h2>
      <p style={styles.paragraph}>INNER JOIN excludes rows that contain NULL values in the join condition column.</p>
      <p style={styles.paragraph}>If a CustomerID in either table is NULL, that row is ignored.</p>
      
      <h2 style={styles.sectionHeader}>Example</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>CustomerID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>City</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={styles.td}>NULL</td><td style={styles.td}>John</td><td style={styles.td}>Seattle</td></tr>
        </tbody>
      </table>
      <p style={styles.paragraph}>Since NULL cannot match any value, John will not appear in the INNER JOIN results.</p>
      
      <h2 style={styles.sectionHeader}>Performance Considerations</h2>
      <p style={styles.paragraph}><strong>Indexes:</strong> To speed up INNER JOIN queries, ensure that the columns used in the join condition (Customers.CustomerID and Orders.CustomerID) are indexed.</p>
      <p style={styles.paragraph}><strong>Large Datasets:</strong> INNER JOIN can be slow on large datasets without proper indexing.</p>
      <p style={styles.paragraph}><strong>Filtering:</strong> Adding WHERE conditions after the join can help optimize performance.</p>
    
    </div>
  );
};

export default InnerJoin;