import React, { useEffect, useState } from 'react';
import { fetchBugReports } from '../../api/adminApi'; // You'll create this API

const BugReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const data = await fetchBugReports();
      const sorted = data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
      setReports(sorted);
    } catch (error) {
      console.error('Error fetching bug reports:', error);
    }
  };

  const styles = {
    container: {
      padding: '0.1rem 1rem',
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#ecf0f1',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2rem',
      color: '#2c3e50',
      marginBottom: '1.2rem',
      marginTop: '10px',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem',
    },
    th: {
      backgroundColor: '#1abc9c',
      color: 'white',
      padding: '1rem',
      textAlign: 'left',
    },
    td: {
      padding: '0.9rem 1rem',
      borderBottom: '1px solid #ddd',
      verticalAlign: 'top',
    },
    status: {
      fontWeight: 600,
    },
    solved: {
      color: '#27ae60',
    },
    unsolved: {
      color: '#e74c3c',
    },
  };

  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    return d.toLocaleString();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Bug Reports</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Submitted At</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>
                  No bug reports found.
                </td>
              </tr>
            ) : (
              reports.map((report, index) => (
                <tr key={report.id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{report.email || '-'}</td>
                  <td style={styles.td}>{report.description}</td>
                  <td style={styles.td}>{formatDate(report.submittedAt)}</td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.status,
                        ...(report.solved ? styles.solved : styles.unsolved),
                      }}
                    >
                      {report.solved ? 'Solved' : 'Unsolved'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BugReports;
