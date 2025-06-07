import React, { useState } from 'react';

const MySQLCommands = () => {

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

  const commands = [
    {
      title: 'CREATE',
      description: 'Used to create database objects like tables, indexes, and views.',
      syntax: `CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2),
    department_id INT
);`,
    },
    {
      title: 'ALTER',
      description: 'Used to modify an existing table structure.',
      syntax: `ALTER TABLE employees ADD age INT;
ALTER TABLE employees MODIFY salary DECIMAL(12, 2);
ALTER TABLE employees DROP COLUMN age;`,
    },
    {
      title: 'DROP',
      description: 'Used to delete database objects permanently.',
      syntax: `DROP TABLE employees;`,
    },
    {
      title: 'TRUNCATE',
      description: 'Used to delete all rows from a table without removing its structure.',
      syntax: `TRUNCATE TABLE employees;`,
    },
  ];

  const dmlCommands = [
    {
      title: 'INSERT',
      description: 'Used to insert data into a table.',
      syntax: `INSERT INTO employees (id, name, salary, department_id) 
VALUES (1, 'John Doe', 50000, 3);`,
    },
    {
      title: 'UPDATE',
      description: 'Used to modify existing records in a table.',
      syntax: `UPDATE employees 
SET salary = 55000 
WHERE id = 1;`,
    },
    {
      title: 'DELETE',
      description: 'Used to delete records from a table.',
      syntax: `DELETE FROM employees 
WHERE id = 1;`,
    },
  ];

  const dclCommands = [
    {
      title: 'GRANT',
      description: 'Used to give privileges to users.',
      syntax: `GRANT SELECT, INSERT ON employees TO 'user'@'localhost';`,
    },
    {
      title: 'REVOKE',
      description: 'Used to remove privileges from users.',
      syntax: `REVOKE SELECT ON employees FROM 'user'@'localhost';`,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>MySQL Commands</h1>
      <p style={styles.paragraph}>
        There are three types of SQL commands: DDL (Data Definition Language), DML (Data Manipulation Language), and DCL (Data Control Language).
      </p>

      <h2 style={styles.sectionHeader}>DDL Commands</h2>
      <p style={styles.paragraph}>
        DDL (Data Definition Language) commands are used to define and modify database structures.
      </p>

      {commands.map((cmd, index) => (
        <section key={index}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4rem' }}>{cmd.title}</h3>
          <p style={styles.paragraph}>{cmd.description}</p>
          <div style={styles.codeBlock}>
            <pre>{cmd.syntax}</pre>
          </div>
        </section>
      ))}

      <h2 style={styles.sectionHeader}>DML Commands</h2>
      <p style={styles.paragraph}>
        DML (Data Manipulation Language) commands are used to manipulate data within tables.
      </p>

      {dmlCommands.map((cmd, index) => (
        <section key={index}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4rem' }}>{cmd.title}</h3>
          <p style={styles.paragraph}>{cmd.description}</p>
          <div style={styles.codeBlock}>
            <pre>{cmd.syntax}</pre>
          </div>
        </section>
      ))}

      <h2 style={styles.sectionHeader}>DCL Commands</h2>
      <p style={styles.paragraph}>
        DCL (Data Control Language) commands are used to control access to data in the database.
      </p>

      {dclCommands.map((cmd, index) => (
        <section key={index}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4rem' }}>{cmd.title}</h3>
          <p style={styles.paragraph}>{cmd.description}</p>
          <div style={styles.codeBlock}>
            <pre>{cmd.syntax}</pre>
          </div>
        </section>
      ))}

      <h2 style={styles.sectionHeader}>Difference Between DDL, DML, and DCL Commands</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Points</th>
            <th style={styles.th}>DDL</th>
            <th style={styles.th}>DML</th>
            <th style={styles.th}>DCL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Purpose</td>
            <td style={styles.td}>Defines and manages database structure.</td>
            <td style={styles.td}>Manipulates the data stored within tables.</td>
            <td style={styles.td}>Manages access to the data within the database.</td>
          </tr>
          <tr>
            <td style={styles.td}>Operations</td>
            <td style={styles.td}>CREATE, ALTER, DROP, TRUNCATE</td>
            <td style={styles.td}>INSERT, UPDATE, DELETE</td>
            <td style={styles.td}>GRANT, REVOKE</td>
          </tr>
          <tr>
            <td style={styles.td}>Impact</td>
            <td style={styles.td}>Affects the database schema.</td>
            <td style={styles.td}>Affects the data in the tables.</td>
            <td style={styles.td}>Affects the user's access rights.</td>
          </tr>
        </tbody>
      </table>

      <h2 style={styles.sectionHeader}>Difference Between DELETE, DROP, and TRUNCATE</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Points</th>
            <th style={styles.th}>DELETE</th>
            <th style={styles.th}>DROP</th>
            <th style={styles.th}>TRUNCATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Purpose</td>
            <td style={styles.td}>Removes rows from a table based on a condition.</td>
            <td style={styles.td}>Deletes the entire table or database.</td>
            <td style={styles.td}>Removes all rows from a table without deleting the structure.</td>
          </tr>
          <tr>
            <td style={styles.td}>Effect on Data</td>
            <td style={styles.td}>Deletes specific rows, data is removed but structure remains.</td>
            <td style={styles.td}>Deletes the entire table, including structure.</td>
            <td style={styles.td}>Removes all rows but keeps the table structure intact.</td>
          </tr>
          <tr>
            <td style={styles.td}>Performance</td>
            <td style={styles.td}>Slower (because it deletes row by row and logs changes).</td>
            <td style={styles.td}>Faster (removes table definition and data).</td>
            <td style={styles.td}>Faster (removes all rows at once and doesn't log individual deletions).</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MySQLCommands;
