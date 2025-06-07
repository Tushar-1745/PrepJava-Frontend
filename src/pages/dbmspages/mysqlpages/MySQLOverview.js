import React, { useState } from "react";

const MySQLIntro = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = {
    container: {
      padding: "10px 20px",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333333",
      lineHeight: "1.5",
    },
    header: {
      fontSize: "2.5rem",
      textAlign: "left",
      color: "black",
    },
    sectionHeader: {
      fontSize: "1.5rem",
      color: "black",
      borderBottom: "1px solid black",
      display: "inline-block",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      margin: "10px 0",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "20px 0",
    },
    th: {
      border: "1px solid black",
      padding: "10px",
      backgroundColor: "#4A90E2",
      color: "white",
    },
    td: {
      border: "1px solid black",
      padding: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Introduction to MySQL</h1>
  
      {/* What is MySQL? */}
      <section>
        <h2 style={styles.sectionHeader}>What is MySQL?</h2>
        <p style={styles.paragraph}>
          MySQL is a popular open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) 
          to manage data. It is widely used for web applications and enterprise solutions.
        </p>
      </section>
      
      {/* Features of MySQL */}
      <section>
        <h2 style={styles.sectionHeader}>Key Features of MySQL</h2>
        <ul>
          <li>Fast, scalable, and reliable</li>
          <li>Supports ACID compliance for transactions</li>
          <li>Cross-platform support</li>
          <li>High availability and replication support</li>
        </ul>
      </section>
      
      {/* SQL vs NoSQL */}
      <section>
        <h2 style={styles.sectionHeader}>SQL vs NoSQL</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>SQL (Relational)</th>
              <th style={styles.th}>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Data Storage</td>
              <td style={styles.td}>Tables with predefined schema</td>
              <td style={styles.td}>Flexible document/key-value stores</td>
            </tr>
            <tr>
              <td style={styles.td}>Best For</td>
              <td style={styles.td}>Structured data with relationships</td>
              <td style={styles.td}>Unstructured or semi-structured data</td>
            </tr>
            <tr>
              <td style={styles.td}>Example Databases</td>
              <td style={styles.td}>MySQL, PostgreSQL</td>
              <td style={styles.td}>MongoDB, CouchDB</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MySQLIntro;

