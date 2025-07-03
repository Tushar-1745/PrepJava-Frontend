import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const dummyModules = [
  { name: 'Java Overview',         status: 'completed'  },
  { name: 'Java History',          status: 'completed'  },
  { name: 'Java Basics',           status: 'in_progress'},
  { name: 'OOP in Java',           status: 'not_started'},
  { name: 'Exception Handling',    status: 'not_started'},
  { name: 'Collections Framework', status: 'not_started'},
];

const JavaDashboard = () => {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => setModules(dummyModules), []);

  const completedCount = modules.filter(m => m.status === 'completed').length;
  const percentage     = Math.round((completedCount / modules.length) * 100);

  /* grayscale row background to keep main content B/W */
  const getStatusBg = (status) => {
    switch (status) {
      case 'completed':   return '#efefef'; // light gray
      case 'in_progress': return '#f7f7f7'; // even lighter
      default:            return '#ffffff'; // pure white
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Java Learning Dashboard</h1>

        {/* Progress card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Progress Overview</h2>
          <p style={styles.percent}>{percentage}%</p>
          <p style={styles.status}>{completedCount} of {modules.length} modules completed</p>
          <button style={styles.button} onClick={() => navigate('/javapage')}>
            Continue Learning
          </button>
        </div>

        {/* Two‑column section */}
        <div style={styles.row}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Next Recommended Module</h2>
            {modules.find(m => m.status === 'not_started')
              ? <p style={styles.text}>{modules.find(m => m.status === 'not_started').name}</p>
              : <p style={styles.text}>You're all caught up!</p>}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Achievements</h2>
            {percentage >= 50  && <p style={styles.text}>🏆 Beginner Badge</p>}
            {percentage >= 100 && <p style={styles.text}>🥇 Java Master Badge</p>}
          </div>
        </div>

        {/* Module list */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Modules</h2>
          <ul style={styles.moduleList}>
            {modules.map((mod, idx) => (
              <li
                key={idx}
                style={{
                  ...styles.moduleItem,
                  backgroundColor: getStatusBg(mod.status),
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

/* ------------------ styles ------------------ */
const styles = {
  /* only background is dark */
  container: {
    minHeight: '100vh',
    backgroundColor: '#2c3e50',
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
    color: '#ffffff',
  },
  /* primary cards are plain white */
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  },
  cardTitle: {
    color: '#2c3e50',
    marginBottom: '10px',
  },
  text: {
    color: '#2c3e50',
  },
  percent: {
    fontSize: '24px',
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  status: {
    color: '#555',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#1abc9c',   // accent for CTA
    color: '#ffffff',
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
    color: '#2c3e50',
  },
  moduleLink: {
    color: '#1abc9c',
    textDecoration: 'underline',
    fontWeight: '600',
  },
};

export default JavaDashboard;
