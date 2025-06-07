import React, { useState } from 'react';

const UserDefinedFunctions = () => {
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

  const udFunctions = [
    {
      title: 'Creating User-Defined Function (UDF)',
      description: 'A user-defined function (UDF) is a function created by users in MySQL. It allows for encapsulating business logic that can be reused in SQL queries.',
      syntax: `CREATE FUNCTION function_name (parameters)
               RETURNS return_type
               DETERMINISTIC
               BEGIN
                 -- function body
                 RETURN value;
               END;`,
    },
    {
      title: 'Calling a User-Defined Function',
      description: 'Once a UDF is created, it can be called like any other MySQL function.',
      syntax: `SELECT function_name(parameter);`,
    },
    {
      title: 'Example: Calculating the Square of a Number',
      description: 'Example of creating and calling a simple UDF to calculate the square of a number.',
      syntax: `CREATE FUNCTION square(num INT) 
               RETURNS INT
               DETERMINISTIC
               BEGIN
                 RETURN num * num;
               END;
               SELECT square(5);  -- Output will be 25`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MySQL User-Defined Functions (UDF)</h1>
      <p style={styles.paragraph}>
        User-defined functions (UDFs) in MySQL allow developers to extend MySQL's built-in capabilities by creating custom functions. These functions can then be used in SQL queries to encapsulate specific logic, making code more modular and reusable.
      </p>

      <h2 style={styles.sectionHeader}>Creating and Using User-Defined Functions in MySQL</h2>
      <p style={styles.paragraph}>
        Below is an overview of creating and using user-defined functions in MySQL:
      </p>

      {udFunctions.map((func, index) => (
        <section key={index}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4rem' }}>{func.title}</h3>
          <p style={styles.paragraph}>{func.description}</p>
          <div style={styles.codeBlock}>
            <pre>{func.syntax}</pre>
          </div>
        </section>
      ))}

      <h2 style={styles.sectionHeader}>User-Defined Functions vs Built-In Functions</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Points</th>
            <th style={styles.th}>User-Defined Functions</th>
            <th style={styles.th}>Built-In Functions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Creation</td>
            <td style={styles.td}>Created by the user, defining specific logic.</td>
            <td style={styles.td}>Predefined by MySQL.</td>
          </tr>
          <tr>
            <td style={styles.td}>Purpose</td>
            <td style={styles.td}>Encapsulate custom logic or business rules.</td>
            <td style={styles.td}>Perform specific operations like mathematical, string, date manipulations.</td>
          </tr>
          <tr>
            <td style={styles.td}>Return Type</td>
            <td style={styles.td}>Can return any valid data type (int, varchar, etc.).</td>
            <td style={styles.td}>Returns predefined data types based on the operation.</td>
          </tr>
          <tr>
            <td style={styles.td}>Usage</td>
            <td style={styles.td}>Called within SQL queries just like built-in functions.</td>
            <td style={styles.td}>Directly available for use in queries.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDefinedFunctions;
