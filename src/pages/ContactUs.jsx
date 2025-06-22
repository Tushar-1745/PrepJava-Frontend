import React, { useState } from 'react';
import { submitContactMessage } from '../api/contactUsApi';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const styles = {
    outerContainer: {
      backgroundColor: '#2c3e50',
      minHeight: '100vh',
      padding: '4rem 1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    card: {
      backgroundColor: '#f9f9f9',
      color: '#2c3e50',
      padding: '2.5rem 2rem',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '700px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Poppins, sans-serif',
    },
    header: {
      fontSize: '2.2rem',
      fontWeight: '600',
      color: '#1abc9c',
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      padding: '0.9rem 1rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      outline: 'none',
    },
    textarea: {
      padding: '0.9rem 1rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      height: '150px',
      outline: 'none',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#1abc9c',
      color: '#fff',
      padding: '0.9rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    info: {
      marginTop: '2rem',
      fontSize: '1rem',
      textAlign: 'center',
      color: '#34495e',
    },
    link: {
      color: '#1abc9c',
      textDecoration: 'underline',
    },
    success: {
      marginTop: '1rem',
      color: '#27ae60',
      textAlign: 'center',
      fontWeight: '500',
    },
    error: {
      marginTop: '1rem',
      color: '#e74c3c',
      textAlign: 'center',
      fontWeight: '500',
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError('');
    try {
      await submitContactMessage(formData);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.card}>
        <h1 style={styles.header}>Contact Us</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            style={styles.button}
            disabled={loading}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#16a085')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#1abc9c')}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {submitted && <div style={styles.success}>Thank you! Your message has been sent.</div>}
        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.info}>
          <p>
            Or email us directly at{' '}
            <a href="mailto:support@prepjava.com" style={styles.link}>
              support@prepjava.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
