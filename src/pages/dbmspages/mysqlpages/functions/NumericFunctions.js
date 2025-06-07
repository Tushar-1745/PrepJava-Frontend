import React, { useState } from 'react';

const NumericFunctions = () => {
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

  const numericFunctions = [
    {
      title: 'ABS() - Absolute Value',
      description: 'Returns the absolute (positive) value of a number.',
      syntax: `SELECT ABS(-15);  -- Output: 15`,
    },
    {
      title: 'CEIL() - Ceiling Value',
      description: 'Returns the smallest integer greater than or equal to the given number.',
      syntax: `SELECT CEIL(10.2);  -- Output: 11`,
    },
    {
      title: 'FLOOR() - Floor Value',
      description: 'Returns the largest integer less than or equal to the given number.',
      syntax: `SELECT FLOOR(10.8);  -- Output: 10`,
    },
    {
      title: 'ROUND() - Round Value',
      description: 'Rounds the given number to the specified number of decimal places.',
      syntax: `SELECT ROUND(15.678, 2);  -- Output: 15.68`,
    },
    {
      title: 'MOD() - Modulus Value',
      description: 'Returns the remainder of division.',
      syntax: `SELECT MOD(10, 3);  -- Output: 1`,
    },
    {
      title: 'POW() - Power Function',
      description: 'Returns the value of a number raised to the power of another number.',
      syntax: `SELECT POW(2, 3);  -- Output: 8`,
    },
    {
      title: 'SQRT() - Square Root',
      description: 'Returns the square root of a given number.',
      syntax: `SELECT SQRT(25);  -- Output: 5`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MySQL Numeric Functions</h1>
      <p style={styles.paragraph}>
        MySQL provides various numeric functions to perform mathematical calculations, such as rounding, absolute values, and power calculations.
      </p>

      <h2 style={styles.sectionHeader}>Common Numeric Functions</h2>
      <p style={styles.paragraph}>
        Below are some of the most commonly used MySQL numeric functions:
      </p>

      {numericFunctions.map((func, index) => (
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

    </div>
  );
};

export default NumericFunctions;
