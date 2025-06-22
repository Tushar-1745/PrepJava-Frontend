import React from 'react';

const TermsAndConditions = () => {
  const styles = {
    container: {
      maxWidth: '800px',      // Limit width
      margin: '0 auto',       // Center horizontally
      padding: '2rem',
      backgroundColor: '#ecf0f1',
      fontFamily: 'Poppins, sans-serif',
      color: '#2c3e50',
      lineHeight: '1.6',
      minHeight: '100vh',
    },    
    header: {
      fontSize: '2rem',
      marginBottom: '1.5rem',
      color: '#1abc9c',
    },
    sectionTitle: {
      fontWeight: '600',
      marginTop: '1.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Terms and Conditions</h1>
      <p>Last updated: June 21, 2025</p>

      <p>Welcome to <strong>PrepJava</strong>. By accessing this website, you accept these terms in full. Do not continue to use PrepJava if you do not agree with all the terms and conditions stated on this page.</p>

      <p style={styles.sectionTitle}>1. Use of Content</p>
      <p>All content provided is for educational purposes only. You may not reproduce, duplicate, or copy material from PrepJava without proper permission.</p>

      <p style={styles.sectionTitle}>2. Account & Security</p>
      <p>You are responsible for maintaining the confidentiality of your login credentials.</p>

      <p style={styles.sectionTitle}>3. Acceptable Use</p>
      <p>You agree not to use the site in a way that may damage or impair the site or its availability.</p>

      <p style={styles.sectionTitle}>4. External Links</p>
      <p>We may link to external websites. We are not responsible for their content or policies.</p>

      <p style={styles.sectionTitle}>5. Changes to Terms</p>
      <p>We may update these terms. Continued use implies acceptance.</p>

      <p style={styles.sectionTitle}>6. Contact</p>
      <p>For questions, email us at <strong>prepjava.contact@gmail.com</strong>.</p>
    </div>
  );
};

export default TermsAndConditions;
