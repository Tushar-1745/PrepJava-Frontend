import React from 'react';

const PrivacyPolicy = () => {
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
      <h1 style={styles.header}>Privacy Policy</h1>
      <p>Last updated: June 21, 2025</p>

      <p>This Privacy Policy explains how <strong>PrepJava</strong> collects, uses, and protects your information.</p>

      <p style={styles.sectionTitle}>1. Information We Collect</p>
      <p>We collect name, email (on sign-up/contact), and usage data like page visits and device info (via analytics).</p>

      <p style={styles.sectionTitle}>2. How We Use Data</p>
      <p>We use your data to improve the site, personalize experience, and send updates.</p>

      <p style={styles.sectionTitle}>3. Cookies</p>
      <p>PrepJava uses cookies. You can disable them in your browser settings.</p>

      <p style={styles.sectionTitle}>4. Data Security</p>
      <p>We take security seriously and protect your data with best practices.</p>

      <p style={styles.sectionTitle}>5. Sharing</p>
      <p>We do not sell your data. Analytics tools like Google Analytics may process anonymized data.</p>

      <p style={styles.sectionTitle}>6. Your Rights</p>
      <p>You can request data removal by emailing us at <strong>prepjava.contact@gmail.com</strong>.</p>

      <p style={styles.sectionTitle}>7. Policy Updates</p>
      <p>We may revise this policy anytime. Please check back regularly.</p>
    </div>
  );
};

export default PrivacyPolicy;
