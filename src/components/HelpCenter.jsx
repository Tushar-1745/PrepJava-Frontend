import React from 'react';

const HelpCenter = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#ecf0f1',
      color: '#2c3e50',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2rem',
      color: '#1abc9c',
      marginBottom: '1.5rem',
    },
    section: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      marginBottom: '1.5rem',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    text: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#34495e',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Help Center</h1>

      <div style={styles.section}>
        <div style={styles.title}>Getting Started</div>
        <p style={styles.text}>
          Browse our tutorials to start learning Java, SQL, DSA, and more. Use the search bar to find specific topics.
        </p>
      </div>

      <div style={styles.section}>
        <div style={styles.title}>How to use Code Executor?</div>
        <p style={styles.text}>
          Go to the Java or SQL practice sections, write your code, and click "Run". It uses JDoodle API for live execution.
        </p>
      </div>

      <div style={styles.section}>
        <div style={styles.title}>Still have questions?</div>
        <p style={styles.text}>
          Visit the <strong>Contact Us</strong> page and send us your query. We'll respond within 24–48 hours.
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;
