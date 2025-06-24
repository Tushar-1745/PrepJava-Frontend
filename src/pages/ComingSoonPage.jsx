import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';

const ComingSoonPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <FaTools style={styles.icon} />
        <h1 style={styles.title}>Coming Soon</h1>
        <p style={styles.message}>
          This section is under development. We’re working hard to prepare amazing content!
        </p>
        <Link to="/" style={styles.button}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#2c3e50',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    textAlign: 'center',
    padding: '40px 30px',
    backgroundColor: '#34495e',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    maxWidth: '500px',
    width: '100%',
  },
  icon: {
    fontSize: '60px',
    color: '#1abc9c',
    marginBottom: '20px',
    animation: 'spin 2s linear infinite',
  },
  title: {
    fontSize: '32px',
    marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    marginBottom: '30px',
    lineHeight: '1.5',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1abc9c',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
};

// Optional: add spinning animation to icon
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default ComingSoonPage;
