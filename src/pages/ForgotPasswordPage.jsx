import React, { useState } from 'react';
import { verifyEmail, resetPassword } from '../api/contactUsApi';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [verified, setVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleVerify = async () => {
    setError('');
    setMessage('');
    setLoading(true);
    try {
      const res = await verifyEmail({ email }); // Pass email as object
      if (res === 'Email exists') {
        setVerified(true);
        setMessage('✅ Email exists');
      } else {
        setError('❌ ' + res); // shows "❌ Email not found"
      }
      
    } catch (err) {
      setError('❌ Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setError('');
    setMessage('');
    if (newPassword !== confirmPassword) {
      setError('❌ Passwords do not match');
      return;
    }

    try {
      await resetPassword({ email, newPassword }); // Pass as object
      setMessage('✅ Password reset successfully');
      setVerified(false);
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
      navigate("/login")
    } catch (err) {
      setError('❌ Failed to reset password');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Reset Password</h2>

        {!verified ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleVerify} style={styles.button} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </>
        ) : (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleReset} style={styles.button}>
              Reset Password
            </button>
          </>
        )}

        {message && <p style={styles.success}>{message}</p>}
        {error && (
          <p style={styles.error}>
            {error}
            {error.includes('Sign Up') && (
              <span style={styles.link} onClick={() => navigate('/signup')}>Sign Up</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    backgroundColor: '#34495e',
    padding: '2rem',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#ffffff',
    fontSize: '1.5rem',
  },
  input: {
    width: '90%',
    padding: '0.75rem',
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    border: '1px solid #1abc9c',
    borderRadius: '5px',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#1abc9c',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  error: {
    color: '#e74c3c',
    fontSize: '0.95rem',
  },
  success: {
    color: '#2ecc71',
    fontSize: '0.95rem',
  },
  link: {
    color: '#1abc9c',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginLeft: '6px',
  },
};
