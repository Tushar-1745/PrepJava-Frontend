import React from 'react';

const AdminDashboard = () => {
  const styles = {
    header: { fontSize: '2rem', color: '#2c3e50', marginBottom: '2rem' },
    card: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      marginBottom: '1.5rem',
    }
  };

  return (
    <>
      <h1 style={styles.header}>Dashboard Overview</h1>
      <div style={styles.card}>
        <h3>Total Users</h3>
        <p>1,250</p>
      </div>
      <div style={styles.card}>
        <h3>New Messages</h3>
        <p>18 unread messages</p>
      </div>
      <div style={styles.card}>
        <h3>Site Traffic</h3>
        <p>Last 24hrs: 2,134 visits</p>
      </div>
    </>
  );
};

export default AdminDashboard;
