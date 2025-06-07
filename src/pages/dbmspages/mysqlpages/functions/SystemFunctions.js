import React, { useState } from 'react';

const SystemFunctions = () => {
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

  const systemFunctions = [
    {
      title: 'VERSION() - Get MySQL Version',
      description: 'Returns the MySQL server version.',
      syntax: `SELECT VERSION();  -- Output: 8.0.34`,
    },
    {
      title: 'DATABASE() - Get Current Database',
      description: 'Returns the name of the currently selected database.',
      syntax: `SELECT DATABASE();  -- Output: my_database`,
    },
    {
      title: 'USER() - Get Current User',
      description: 'Returns the current MySQL user name.',
      syntax: `SELECT USER();  -- Output: root@localhost`,
    },
    {
      title: 'SESSION_USER() - Get Session User',
      description: 'Returns the current MySQL user for the session.',
      syntax: `SELECT SESSION_USER();  -- Output: root@localhost`,
    },
    {
      title: 'SYSTEM_USER() - Get System User',
      description: 'Returns the system user name.',
      syntax: `SELECT SYSTEM_USER();  -- Output: root@localhost`,
    },
    {
      title: 'CURRENT_USER() - Get Privileged User',
      description: 'Returns the user with privileges in the current session.',
      syntax: `SELECT CURRENT_USER();  -- Output: root@%`,
    },
    {
      title: 'CONNECTION_ID() - Get Connection ID',
      description: 'Returns the unique ID of the current connection.',
      syntax: `SELECT CONNECTION_ID();  -- Output: 12345`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MySQL System Functions</h1>
      <p style={styles.paragraph}>
        MySQL provides system functions that return important information about the database server, user, and session. These functions help in debugging and monitoring database usage.
      </p>

      <h2 style={styles.sectionHeader}>Common System Functions</h2>
      <p style={styles.paragraph}>
        Below are some of the most commonly used MySQL system functions:
      </p>

      {systemFunctions.map((func, index) => (
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

      <h2 style={styles.sectionHeader}>Comparison of System Functions</h2>
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
            <td style={styles.td}>VERSION()</td>
            <td style={styles.td}>Returns MySQL server version.</td>
            <td style={styles.td}>8.0.34</td>
          </tr>
          <tr>
            <td style={styles.td}>DATABASE()</td>
            <td style={styles.td}>Returns the current database name.</td>
            <td style={styles.td}>my_database</td>
          </tr>
          <tr>
            <td style={styles.td}>USER()</td>
            <td style={styles.td}>Returns the current user.</td>
            <td style={styles.td}>root@localhost</td>
          </tr>
          <tr>
            <td style={styles.td}>SESSION_USER()</td>
            <td style={styles.td}>Returns the session user.</td>
            <td style={styles.td}>root@localhost</td>
          </tr>
          <tr>
            <td style={styles.td}>SYSTEM_USER()</td>
            <td style={styles.td}>Returns the system user name.</td>
            <td style={styles.td}>root@localhost</td>
          </tr>
          <tr>
            <td style={styles.td}>CURRENT_USER()</td>
            <td style={styles.td}>Returns the privileged user.</td>
            <td style={styles.td}>root@%</td>
          </tr>
          <tr>
            <td style={styles.td}>CONNECTION_ID()</td>
            <td style={styles.td}>Returns the current connection ID.</td>
            <td style={styles.td}>12345</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SystemFunctions;
