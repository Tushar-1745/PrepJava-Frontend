// import React from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import { FaUsers, FaEnvelope, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

// const AdminPanel = () => {
//   const location = useLocation();

//   const styles = {
//     container: {
//       display: 'flex',
//       height: '100vh',
//       fontFamily: 'Arial, sans-serif',
//     },
//     sidebar: {
//       width: '250px',
//       backgroundColor: '#2c3e50',
//       color: '#ecf0f1',
//       padding: '2rem 1rem',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '1rem',
//     },
//     link: {
//       color: '#ecf0f1',
//       textDecoration: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.75rem',
//       fontSize: '1rem',
//       borderRadius: '8px',
//       padding: '0.5rem 0.75rem',
//       transition: 'background-color 0.3s ease',
//     },
//     activeLink: {
//       backgroundColor: '#1abc9c',
//       color: '#fff',
//     },
//     main: {
//       flex: 1,
//       backgroundColor: '#ecf0f1',
//       padding: '2rem',
//     },
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div style={styles.container}>
//       <aside style={styles.sidebar}>
//         <h2 style={{ color: '#1abc9c', marginBottom: '2rem' }}>Admin Panel</h2>
//         <Link to="/admin/dashboard" style={{ ...styles.link, ...(isActive('/admin/dashboard') && styles.activeLink) }}>
//           <FaChartBar /> Dashboard
//         </Link>
//         <Link to="/admin/users" style={{ ...styles.link, ...(isActive('/admin/users') && styles.activeLink) }}>
//           <FaUsers /> Manage Users
//         </Link>
//         <Link to="/admin/users" style={{ ...styles.link, ...(isActive('/admin/messages') && styles.activeLink) }}>
//           <FaUsers />  Messages
//         </Link>
//         <Link to="/" style={styles.link}>
//           <FaSignOutAlt /> Exit Admin
//         </Link>
//       </aside>

//       <main style={styles.main}>
//         <Outlet /> {/* This is where sub-pages like ManageUsers will be rendered */}
//       </main>
//     </div>
//   );
// };

// export default AdminPanel;


import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaUsers, FaEnvelope, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { getUnseenMessageCount } from '../../api/adminApi'; // ✅ Import API

const AdminPanel = () => {
  const location = useLocation();
  const [unseenCount, setUnseenCount] = useState(0);

  useEffect(() => {
    loadCount();
  }, []);

  const loadCount = async () => {
    try {
      const count = await getUnseenMessageCount();
      setUnseenCount(count);
    } catch (err) {
      console.error('Failed to load unseen message count', err);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '1rem',
      borderRadius: '8px',
      padding: '0.5rem 0.75rem',
      transition: 'background-color 0.3s ease',
    },
    activeLink: {
      backgroundColor: '#1abc9c',
      color: '#fff',
    },
    badge: {
      backgroundColor: '#e74c3c',
      borderRadius: '50%',
      color: 'white',
      fontSize: '0.75rem',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: '0.5rem',
    },
    main: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: '2rem',
    },
    linkContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={{ color: '#1abc9c', marginBottom: '2rem' }}>Admin Panel</h2>

        <Link to="/admin/dashboard" style={{ ...styles.link, ...(isActive('/admin/dashboard') && styles.activeLink) }}>
          <div style={styles.linkContent}>
            <FaChartBar /> Dashboard
          </div>
        </Link>

        <Link to="/admin/users" style={{ ...styles.link, ...(isActive('/admin/users') && styles.activeLink) }}>
          <div style={styles.linkContent}>
            <FaUsers /> Manage Users
          </div>
        </Link>

        <Link to="/admin/messages" style={{ ...styles.link, ...(isActive('/admin/messages') && styles.activeLink) }}>
          <div style={styles.linkContent}>
            <FaEnvelope /> Messages
          </div>
          {unseenCount > 0 && <span style={styles.badge}>{unseenCount}</span>}
        </Link>

        <Link to="/admin/bugs" style={{ ...styles.link, ...(isActive('/admin/bugs') && styles.activeLink) }}>
          <div style={styles.linkContent}>
            <FaEnvelope /> Bug Reports
          </div>
          {unseenCount > 0 && <span style={styles.badge}>{unseenCount}</span>}
        </Link>

        <Link to="/" style={styles.link}>
          <div style={styles.linkContent}>
            <FaSignOutAlt /> Exit Admin
          </div>
        </Link>
      </aside>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
