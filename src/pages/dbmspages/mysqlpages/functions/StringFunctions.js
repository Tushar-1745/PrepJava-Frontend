import React, { useState } from 'react';

const StringFunctions = () => {
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

  const stringFunctions = [
    {
      title: 'CONCAT()',
      description: 'Concatenates two or more strings into one string.',
      syntax: `SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;`,
    },
    {
      title: 'LENGTH()',
      description: 'Returns the length of a string (in characters).',
      syntax: `SELECT LENGTH(first_name) FROM employees;`,
    },
    {
      title: 'SUBSTRING()',
      description: 'Extracts a substring from a string.',
      syntax: `SELECT SUBSTRING(first_name, 1, 3) FROM employees;`,
    },
    {
      title: 'UPPER()',
      description: 'Converts a string to uppercase.',
      syntax: `SELECT UPPER(first_name) FROM employees;`,
    },
    {
      title: 'LOWER()',
      description: 'Converts a string to lowercase.',
      syntax: `SELECT LOWER(first_name) FROM employees;`,
    },
    {
      title: 'TRIM()',
      description: 'Removes leading and trailing spaces from a string.',
      syntax: `SELECT TRIM(first_name) FROM employees;`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MySQL String Functions</h1>
      <p style={styles.paragraph}>
        String functions are used to manipulate string values in MySQL. These functions can be used to modify strings, extract substrings, and perform various other string operations.
      </p>

      <h2 style={styles.sectionHeader}>Common MySQL String Functions</h2>
      <p style={styles.paragraph}>
        Below are some commonly used string functions in MySQL:
      </p>

      {stringFunctions.map((func, index) => (
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

      <h2 style={styles.sectionHeader}>Difference Between String Functions</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Points</th>
            <th style={styles.th}>CONCAT()</th>
            <th style={styles.th}>LENGTH()</th>
            <th style={styles.th}>SUBSTRING()</th>
            <th style={styles.th}>UPPER()</th>
            <th style={styles.th}>LOWER()</th>
            <th style={styles.th}>TRIM()</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Purpose</td>
            <td style={styles.td}>Concatenates two or more strings.</td>
            <td style={styles.td}>Returns length of a string.</td>
            <td style={styles.td}>Extracts a substring from a string.</td>
            <td style={styles.td}>Converts a string to uppercase.</td>
            <td style={styles.td}>Converts a string to lowercase.</td>
            <td style={styles.td}>Removes leading and trailing spaces from a string.</td>
          </tr>
          <tr>
            <td style={styles.td}>Works With</td>
            <td style={styles.td}>Strings.</td>
            <td style={styles.td}>Strings.</td>
            <td style={styles.td}>Strings.</td>
            <td style={styles.td}>Strings.</td>
            <td style={styles.td}>Strings.</td>
            <td style={styles.td}>Strings.</td>
          </tr>
          <tr>
            <td style={styles.td}>Return Value</td>
            <td style={styles.td}>Concatenated string.</td>
            <td style={styles.td}>Length of string (int).</td>
            <td style={styles.td}>Extracted substring.</td>
            <td style={styles.td}>Uppercase string.</td>
            <td style={styles.td}>Lowercase string.</td>
            <td style={styles.td}>String without leading/trailing spaces.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StringFunctions;
