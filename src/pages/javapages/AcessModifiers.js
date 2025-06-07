import React from 'react';

const AccessModifiers = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white', // Light background
      color: '#333333', // Dark text
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
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
    },
    codeBox: {
      backgroundColor: '#212121', // Black background for code
      color: '#ffffff', // White text
      padding: '20px',
      borderRadius: '8px',
      fontFamily: "'Source Code Pro', monospace",
      fontSize: '1rem',
      overflowX: 'auto',
      marginBottom: '20px',
    },
    codeButton: {
      backgroundColor: '#1565c0', // Bluish button color
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      float: 'right',
      padding: '5px 10px',
    },
    practiceButton: {
      margin: '25px auto',
      color: 'black',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'inline-block',
      backgroundColor: '#89CFF0',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#ddd',
      padding: '10px',
      border: '1px solid #ccc',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    td: {
      padding: '10px',
      border: '1px solid #ccc',
      textAlign: 'center',
    },
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.header}>Access Modifiers in Java</h1>

      {/* Introduction Section */}
      <h2 style={styles.sectionHeader}>Introduction</h2>
      <p style={styles.paragraph}>
        Access modifiers in Java control the visibility and accessibility of classes, methods, and variables. They
        define how and where a class, method, or variable can be accessed. Java provides four main types of access
        modifiers: <b>public</b>, <b>protected</b>, <b>default</b>, and <b>private</b>.
      </p>

      {/* Access Modifier Table */}
      <h2 style={styles.sectionHeader}>Access Modifier Scope</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Modifier</th>
            <th style={styles.th}>Class</th>
            <th style={styles.th}>Package</th>
            <th style={styles.th}>Subclass</th>
            <th style={styles.th}>World</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Public</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>Yes</td>
          </tr>
          <tr>
            <td style={styles.td}>Protected</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>No</td>
          </tr>
          <tr>
            <td style={styles.td}>Default</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>No</td>
            <td style={styles.td}>No</td>
          </tr>
          <tr>
            <td style={styles.td}>Private</td>
            <td style={styles.td}>Yes</td>
            <td style={styles.td}>No</td>
            <td style={styles.td}>No</td>
            <td style={styles.td}>No</td>
          </tr>
        </tbody>
      </table>

      {/* Examples Section */}
      <h2 style={styles.sectionHeader}>Examples of Access Modifiers</h2>

      {/* Public Example */}
      <div>
        <h3>Public</h3>
        <p>Access Level: Anywhere in the project</p>
        <pre style={styles.codeBox}>
          {`public class MyClass { public int myVar; }`}
        </pre>
      </div>

      {/* Private Example */}
      <div>
        <h3>Private</h3>
        <p>Access Level: Within the same class</p>
        <pre style={styles.codeBox}>
          {`class MyClass { private int myVar; }`}
        </pre>
      </div>

    </div>
  );
};

export default AccessModifiers;
