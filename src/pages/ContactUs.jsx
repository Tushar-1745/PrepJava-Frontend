import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const styles = {
    container: {
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '2rem 1rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1abc9c',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
    },
    textarea: {
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      height: '150px',
      outline: 'none',
    },
    button: {
      backgroundColor: '#1abc9c',
      color: '#fff',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    info: {
      marginTop: '2rem',
      fontSize: '1rem',
    },
    link: {
      color: '#1abc9c',
      textDecoration: 'none',
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to backend or email)
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
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
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <div style={styles.info}>
        <p>Or email us directly at <a href="mailto:support@prepjava.com" style={styles.link}>support@prepjava.com</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
