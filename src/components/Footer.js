import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    textAlign: 'center',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  footerText: {
    fontSize: '1em',
    color: '#ddd',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  icon: {
    color: '#fff',
    fontSize: '1.5em',
    textDecoration: 'none',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <p style={styles.footerText}>© 2024 Prep Java. All Rights Reserved.</p>
        <div style={styles.socialIcons}>
          <a href="https://www.linkedin.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.twitter.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.facebook.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.github.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

