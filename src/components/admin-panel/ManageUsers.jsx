import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/adminApi'; // Adjust the path as needed

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("Fetching users..."); // <--- Add this
      try {
        const data = await getAllUsers();
        console.log("users are", data);
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);
  

  const styles = {
    header: {
      fontSize: '2rem',
      color: '#2c3e50',
      marginBottom: '2rem'
    },
    userCard: {
      padding: '1rem',
      backgroundColor: '#ffffff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      marginBottom: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    username: {
      fontWeight: '600',
      fontSize: '1.1rem',
      color: '#34495e',
    },
    email: {
      marginTop: '0.3rem',
      fontSize: '0.95rem',
      color: '#7f8c8d',
    },
  };

  return (
    <>
      <h1 style={styles.header}>All Registered Users</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div key={user.id} style={styles.userCard}>
            <div style={styles.username}>{user.username}</div>
            <div style={styles.email}>{user.email}</div>
          </div>
        ))
      )}
    </>
  );
};

export default ManageUsers;
