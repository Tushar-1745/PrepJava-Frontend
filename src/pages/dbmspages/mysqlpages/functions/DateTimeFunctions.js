import React, { useState } from 'react';

const DateTimeFunctions = () => {
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

  const dateTimeFunctions = [
    {
      title: 'CURRENT_DATE() - Get Current Date',
      description: 'Returns the current date in YYYY-MM-DD format.',
      syntax: `SELECT CURRENT_DATE();  -- Output: 2025-02-18`,
    },
    {
      title: 'CURRENT_TIME() - Get Current Time',
      description: 'Returns the current time in HH:MM:SS format.',
      syntax: `SELECT CURRENT_TIME();  -- Output: 14:30:15`,
    },
    {
      title: 'NOW() - Get Current Date & Time',
      description: 'Returns the current date and time as a timestamp.',
      syntax: `SELECT NOW();  -- Output: 2025-02-18 14:30:15`,
    },
    {
      title: 'DATE_FORMAT() - Format Date',
      description: 'Formats a given date according to the specified pattern.',
      syntax: `SELECT DATE_FORMAT('2025-02-18', '%W, %M %d, %Y');  -- Output: Tuesday, February 18, 2025`,
    },
    {
      title: 'TIMESTAMPDIFF() - Get Difference Between Dates',
      description: 'Calculates the difference between two dates in the specified unit.',
      syntax: `SELECT TIMESTAMPDIFF(DAY, '2025-01-01', '2025-02-18');  -- Output: 48`,
    },
    {
      title: 'DATE_ADD() - Add Interval to Date',
      description: 'Adds a time interval (days, months, years, etc.) to a date.',
      syntax: `SELECT DATE_ADD('2025-02-18', INTERVAL 10 DAY);  -- Output: 2025-02-28`,
    },
    {
      title: 'DATE_SUB() - Subtract Interval from Date',
      description: 'Subtracts a time interval from a date.',
      syntax: `SELECT DATE_SUB('2025-02-18', INTERVAL 7 DAY);  -- Output: 2025-02-11`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MySQL Date and Time Functions</h1>
      <p style={styles.paragraph}>
        MySQL provides various date and time functions to manipulate and retrieve date/time values. These functions help in handling timestamps, calculating date differences, formatting dates, and more.
      </p>

      <h2 style={styles.sectionHeader}>Common Date and Time Functions</h2>
      <p style={styles.paragraph}>
        Below are some of the most commonly used MySQL date and time functions:
      </p>

      {dateTimeFunctions.map((func, index) => (
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

      <h2 style={styles.sectionHeader}>Comparison of Date and Time Functions</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Function</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Example Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>CURRENT_DATE()</td>
            <td style={styles.td}>Returns the current date.</td>
            <td style={styles.td}>2025-02-18</td>
          </tr>
          <tr>
            <td style={styles.td}>CURRENT_TIME()</td>
            <td style={styles.td}>Returns the current time.</td>
            <td style={styles.td}>14:30:15</td>
          </tr>
          <tr>
            <td style={styles.td}>NOW()</td>
            <td style={styles.td}>Returns the current timestamp.</td>
            <td style={styles.td}>2025-02-18 14:30:15</td>
          </tr>
          <tr>
            <td style={styles.td}>DATE_FORMAT()</td>
            <td style={styles.td}>Formats a date into a specific format.</td>
            <td style={styles.td}>Tuesday, February 18, 2025</td>
          </tr>
          <tr>
            <td style={styles.td}>TIMESTAMPDIFF()</td>
            <td style={styles.td}>Returns the difference between two dates.</td>
            <td style={styles.td}>48</td>
          </tr>
          <tr>
            <td style={styles.td}>DATE_ADD()</td>
            <td style={styles.td}>Adds an interval to a date.</td>
            <td style={styles.td}>2025-02-28</td>
          </tr>
          <tr>
            <td style={styles.td}>DATE_SUB()</td>
            <td style={styles.td}>Subtracts an interval from a date.</td>
            <td style={styles.td}>2025-02-11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DateTimeFunctions;
