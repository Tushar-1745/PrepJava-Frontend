import React, { useState, useContext } from 'react';
import { reportBug } from '../api/contactUsApi';
import { AuthContext } from '../context/AuthContext';

const ReportBug = () => {
  const [formData, setFormData] = useState({
    email: '',
    description: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const { loggedIn, loggedInUsername } = useContext(AuthContext); // ✅

  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '2rem',
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      marginTop: '2rem',
    },
    heading: {
      fontSize: '2rem',
      color: '#2c3e50',
      marginBottom: '1.5rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      marginBottom: '1rem',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      minHeight: '120px',
      marginBottom: '1rem',
    },
    button: {
      backgroundColor: '#1abc9c',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    success: {
      color: 'green',
      marginTop: '1rem',
    },
    error: {
      color: 'red',
      marginTop: '1rem',
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (formData.description.trim().length < 10) {
      setError('Please provide a more detailed bug description.');
      return;
    }

    // ✅ Determine final email to send
    const finalEmail =
      formData.email.trim() !== ''
        ? formData.email
        : loggedIn
        ? loggedInUsername
        : '';

    const bugData = {
      email: finalEmail !== '' ? finalEmail : null,
      description: formData.description
    };

    try {
      await reportBug(bugData);
      setSuccess('Thank you! Your bug report has been submitted.');
      setFormData({ email: '', description: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to submit bug report. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Report a Bug</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Your Email (optional)"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          style={styles.textarea}
          name="description"
          placeholder="Describe the issue you're facing..."
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>Submit Bug</button>
        {success && <p style={styles.success}>{success}</p>}
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default ReportBug;
