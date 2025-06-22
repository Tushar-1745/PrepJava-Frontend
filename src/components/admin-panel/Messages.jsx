import React, { useEffect, useState } from 'react';
import { fetchContactMessages, markMessageAsSeen } from '../../api/adminApi';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      const data = await fetchContactMessages();
      const sorted = data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

      const updated = await Promise.all(
        sorted.map(async (msg) => {
          if (!msg.seenByAdmin && msg.message && msg.message.length <= 50) {
            try {
              await markMessageAsSeen(msg.id);
              return { ...msg, seenByAdmin: true };
            } catch {
              return msg;
            }
          }
          return msg;
        })
      );

      setMessages(updated);
    } catch (err) {
      console.error('Failed to load messages', err);
    }
  };

  const handleToggleExpand = async (msg) => {
    if (expandedId === msg.id) {
      setExpandedId(null);
      return;
    }

    setExpandedId(msg.id);

    if (!msg.seenByAdmin) {
      try {
        await markMessageAsSeen(msg.id);
        const updated = messages.map((m) =>
          m.id === msg.id ? { ...m, seenByAdmin: true } : m
        );
        setMessages(updated);
      } catch (err) {
        console.error('Failed to mark message as seen', err);
      }
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
    statusText: { fontWeight: 600 },
    seen: { color: '#27ae60' },
    unseen: { color: '#e74c3c' },
    viewBtn: {
      color: '#1abc9c',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.9rem',
      padding: 0,
      marginTop: '0.3rem',
    },
  };

  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    return d.toLocaleString();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User Messages</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Message</th>
              <th style={styles.th}>Submitted At</th>
              <th style={styles.th}>Seen</th>
              <th style={styles.th}>Responded</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '2rem' }}>
                  No messages found.
                </td>
              </tr>
            ) : (
              messages.map((msg, index) => (
                <tr key={msg.id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{msg.name || '-'}</td>
                  <td style={styles.td}>{msg.email || '-'}</td>
                  <td style={styles.td}>
                    {!msg.message
                      ? '-'
                      : msg.message.length <= 50 || expandedId === msg.id
                      ? msg.message
                      : `${msg.message.slice(0, 50)}...`}

                    {msg.message && msg.message.length > 50 && (
                      <div>
                        <button
                          style={styles.viewBtn}
                          onClick={() => handleToggleExpand(msg)}
                        >
                          {expandedId === msg.id ? 'View Less' : 'View More'}
                        </button>
                      </div>
                    )}
                  </td>
                  <td style={styles.td}>{formatDate(msg.submittedAt)}</td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.statusText,
                        ...(msg.seenByAdmin ? styles.seen : styles.unseen),
                      }}
                    >
                      {msg.seenByAdmin ? 'Seen' : 'Unseen'}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.statusText,
                        ...(msg.respondedByAdmin ? styles.seen : styles.unseen),
                      }}
                    >
                      {msg.respondedByAdmin ? 'Responded' : 'Pending'}
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

export default Messages;
