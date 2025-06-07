import React, { useState } from 'react';

const AggregateFunctions = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
    },
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
      fontSize: '1.1rem',
    },
    codeBlock: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '1rem',
      marginBottom: '20px',
    },
    copyButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#4A90E2',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '5px 10px',
      cursor: 'pointer',
      fontSize: '0.8rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      backgroundColor: '#f2f2f2',
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left',
    },
  };

  const aggregateFunctions = [
    {
      title: 'COUNT()',
      description: 'Counts the number of rows or non-NULL values in a result set.',
      syntax: `SELECT COUNT(*) FROM employees;`,
    },
    {
      title: 'SUM()',
      description: 'Calculates the total sum of a numeric column.',
      syntax: `SELECT SUM(salary) FROM employees;`,
    },
    {
      title: 'AVG()',
      description: 'Calculates the average value of a numeric column.',
      syntax: `SELECT AVG(salary) FROM employees;`,
    },
    {
      title: 'MIN()',
      description: 'Returns the smallest value from a column.',
      syntax: `SELECT MIN(salary) FROM employees;`,
    },
    {
      title: 'MAX()',
      description: 'Returns the largest value from a column.',
      syntax: `SELECT MAX(salary) FROM employees;`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MySQL Aggregate Functions</h1>
      <p style={styles.paragraph}>
        Aggregate functions are used to perform calculations on multiple rows of data to return a single value. Common aggregate functions in MySQL include `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()`.
      </p>

      <h2 style={styles.sectionHeader}>Common MySQL Aggregate Functions</h2>
      <p style={styles.paragraph}>
        Below are some of the most commonly used aggregate functions in MySQL:
      </p>

      {aggregateFunctions.map((func, index) => (
        <section key={index}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4rem' }}>{func.title}</h3>
          <p style={styles.paragraph}>{func.description}</p>
          <div style={styles.codeBlock}>
            <button
              style={styles.copyButton}
              onClick={() => handleCopy(func.syntax)}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <pre>{func.syntax}</pre>
          </div>
        </section>
      ))}

      <h2 style={styles.sectionHeader}>Difference Between Aggregate Functions</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Points</th>
            <th style={styles.th}>COUNT()</th>
            <th style={styles.th}>SUM()</th>
            <th style={styles.th}>AVG()</th>
            <th style={styles.th}>MIN()</th>
            <th style={styles.th}>MAX()</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Purpose</td>
            <td style={styles.td}>Counts rows or non-NULL values.</td>
            <td style={styles.td}>Adds up numeric values.</td>
            <td style={styles.td}>Calculates average of numeric values.</td>
            <td style={styles.td}>Finds the smallest value in a column.</td>
            <td style={styles.td}>Finds the largest value in a column.</td>
          </tr>
          <tr>
            <td style={styles.td}>Data Type</td>
            <td style={styles.td}>Numeric (int).</td>
            <td style={styles.td}>Numeric (int, decimal).</td>
            <td style={styles.td}>Numeric (int, decimal).</td>
            <td style={styles.td}>Numeric (int, decimal).</td>
            <td style={styles.td}>Numeric (int, decimal).</td>
          </tr>
          <tr>
            <td style={styles.td}>Works With</td>
            <td style={styles.td}>Any column or constant.</td>
            <td style={styles.td}>Numeric columns.</td>
            <td style={styles.td}>Numeric columns.</td>
            <td style={styles.td}>Numeric columns.</td>
            <td style={styles.td}>Numeric columns.</td>
          </tr>
          <tr>
            <td style={styles.td}>Returns</td>
            <td style={styles.td}>The number of rows or non-NULL values.</td>
            <td style={styles.td}>The sum of values.</td>
            <td style={styles.td}>The average of values.</td>
            <td style={styles.td}>The smallest value.</td>
            <td style={styles.td}>The largest value.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AggregateFunctions;
