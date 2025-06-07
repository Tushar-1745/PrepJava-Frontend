import React from 'react';

const JoinIntro = () => {
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
    },
    listItem: {
      fontSize: '1.1rem',
      margin: '5px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>SQL Joins Introduction</h1>
      <p style={styles.paragraph}>
        SQL JOINs are used to combine records from two or more tables based on a related column between them. They help in retrieving meaningful data that spans multiple tables in a database.
      </p>
      
      <h2 style={styles.sectionHeader}>Types of Joins</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>INNER JOIN:</strong> Returns only matching rows from both tables.</li>
        <li style={styles.listItem}><strong>LEFT JOIN (LEFT OUTER JOIN):</strong> Returns all rows from the left table and matching rows from the right table. Non-matching rows in the right table are returned as NULL.</li>
        <li style={styles.listItem}><strong>RIGHT JOIN (RIGHT OUTER JOIN):</strong> Returns all rows from the right table and matching rows from the left table. Non-matching rows in the left table are returned as NULL.</li>
        <li style={styles.listItem}><strong>FULL JOIN (FULL OUTER JOIN):</strong> Returns all rows when there is a match in either table. If there is no match, NULL values are returned for the missing side.</li>
      </ul>
      
      <h2 style={styles.sectionHeader}>Why Use Joins?</h2>
      <p style={styles.paragraph}>Joins are essential for working with relational databases because:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>They enable data retrieval from multiple tables efficiently.</li>
        <li style={styles.listItem}>They help maintain database normalization.</li>
        <li style={styles.listItem}>They allow better organization and data integrity.</li>
      </ul>
    </div>
  );
};

export default JoinIntro;
