import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const dummyModules = [
  { name: 'Java Overview', status: 'completed' },
  { name: 'Java History', status: 'completed' },
  { name: 'Java Basics', status: 'in_progress' },
  { name: 'OOP in Java', status: 'not_started' },
  { name: 'Exception Handling', status: 'not_started' },
  { name: 'Collections Framework', status: 'not_started' },
];

const JavaDashboard = () => {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setModules(dummyModules);
  }, []);

  const completedCount = modules.filter((m) => m.status === 'completed').length;
  const percentage = Math.round((completedCount / modules.length) * 100);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#d4edda';
      case 'in_progress': return '#fff3cd';
      default: return '#f8f9fa';
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Java Learning Dashboard</h1>

        <div style={styles.card}>
          <h2>Progress Overview</h2>
          <p style={styles.percent}>{percentage}%</p>
          <p style={styles.status}>{completedCount} of {modules.length} modules completed</p>
          <button style={styles.button} onClick={() => navigate('/javapage')}>
            Continue Learning
          </button>
        </div>

        <div style={styles.row}>
          <div style={styles.card}>
            <h2>Next Recommended Module</h2>
            {modules.find((m) => m.status === 'not_started') ? (
              <p>{modules.find((m) => m.status === 'not_started').name}</p>
            ) : (
              <p>You're all caught up!</p>
            )}
          </div>

          <div style={styles.card}>
            <h2>Achievements</h2>
            {percentage >= 50 && <p>🏆 Beginner Badge</p>}
            {percentage >= 100 && <p>🥇 Java Master Badge</p>}
          </div>
        </div>

        <div style={styles.card}>
          <h2>Modules</h2>
          <ul style={styles.moduleList}>
            {modules.map((mod, idx) => (
              <li
                key={idx}
                style={{
                  ...styles.moduleItem,
                  backgroundColor: getStatusColor(mod.status),
                }}
              >
                <span>{mod.name}</span>
                <Link
                  to={`/javapage?module=${encodeURIComponent(mod.name)}`}
                  style={styles.moduleLink}
                >
                  {mod.status === 'completed' ? 'Review' : 'Start'}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
  },
  wrapper: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  percent: {
    fontSize: '24px',
    color: '#007bff',
    fontWeight: 'bold',
  },
  status: {
    color: '#555',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    flexWrap: 'wrap',
  },
  moduleList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '10px',
  },
  moduleItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    flexWrap: 'wrap',
  },
  moduleLink: {
    color: '#007bff',
    textDecoration: 'underline',
  },
};

export default JavaDashboard;
