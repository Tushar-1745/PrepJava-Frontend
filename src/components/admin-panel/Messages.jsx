// import React, { useEffect, useState } from 'react';
// import { fetchContactMessages, markMessageAsSeen } from '../../api/adminApi';

// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);

//   useEffect(() => {
//     getMessages();
//   }, []);

//   const getMessages = async () => {
//     try {
//       const data = await fetchContactMessages();
//       const sorted = data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

//       const updated = await Promise.all(
//         sorted.map(async (msg) => {
//           if (!msg.seenByAdmin && msg.message && msg.message.length <= 50) {
//             try {
//               await markMessageAsSeen(msg.id);
//               return { ...msg, seenByAdmin: true };
//             } catch {
//               return msg;
//             }
//           }
//           return msg;
//         })
//       );

//       setMessages(updated);
//     } catch (err) {
//       console.error('Failed to load messages', err);
//     }
//   };

//   const handleToggleExpand = async (msg) => {
//     if (expandedId === msg.id) {
//       setExpandedId(null);
//       return;
//     }

//     setExpandedId(msg.id);

//     if (!msg.seenByAdmin) {
//       try {
//         await markMessageAsSeen(msg.id);
//         const updated = messages.map((m) =>
//           m.id === msg.id ? { ...m, seenByAdmin: true } : m
//         );
//         setMessages(updated);
//       } catch (err) {
//         console.error('Failed to mark message as seen', err);
//       }
//     }
//   };

//   const styles = {
//     container: {
//       padding: '0.1rem 1rem',
//       fontFamily: 'Poppins, sans-serif',
//       backgroundColor: '#ecf0f1',
//       minHeight: '100vh',
//     },
//     header: {
//       fontSize: '2rem',
//       color: '#2c3e50',
//       marginBottom: '1.2rem',
//       marginTop: '10px',
//     },
//     card: {
//       backgroundColor: '#ffffff',
//       padding: '1.5rem',
//       borderRadius: '10px',
//       boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       marginTop: '1rem',
//     },
//     th: {
//       backgroundColor: '#1abc9c',
//       color: 'white',
//       padding: '1rem',
//       textAlign: 'left',
//     },
//     td: {
//       padding: '0.9rem 1rem',
//       borderBottom: '1px solid #ddd',
//       verticalAlign: 'top',
//     },
//     statusText: { fontWeight: 600 },
//     seen: { color: '#27ae60' },
//     unseen: { color: '#e74c3c' },
//     viewBtn: {
//       color: '#1abc9c',
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer',
//       fontSize: '0.9rem',
//       padding: 0,
//       marginTop: '0.3rem',
//     },
//   };

//   const formatDate = (isoDate) => {
//     const d = new Date(isoDate);
//     return d.toLocaleString();
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>User Messages</h1>
//       <div style={styles.card}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>ID</th>
//               <th style={styles.th}>Name</th>
//               <th style={styles.th}>Email</th>
//               <th style={styles.th}>Message</th>
//               <th style={styles.th}>Submitted At</th>
//               <th style={styles.th}>Seen</th>
//               <th style={styles.th}>Responded</th>
//             </tr>
//           </thead>
//           <tbody>
//             {messages.length === 0 ? (
//               <tr>
//                 <td colSpan="7" style={{ textAlign: 'center', padding: '2rem' }}>
//                   No messages found.
//                 </td>
//               </tr>
//             ) : (
//               messages.map((msg, index) => (
//                 <tr key={msg.id}>
//                   <td style={styles.td}>{index + 1}</td>
//                   <td style={styles.td}>{msg.name || '-'}</td>
//                   <td style={styles.td}>{msg.email || '-'}</td>
//                   <td style={styles.td}>
//                     {!msg.message
//                       ? '-'
//                       : msg.message.length <= 50 || expandedId === msg.id
//                       ? msg.message
//                       : `${msg.message.slice(0, 50)}...`}

//                     {msg.message && msg.message.length > 50 && (
//                       <div>
//                         <button
//                           style={styles.viewBtn}
//                           onClick={() => handleToggleExpand(msg)}
//                         >
//                           {expandedId === msg.id ? 'View Less' : 'View More'}
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                   <td style={styles.td}>{formatDate(msg.submittedAt)}</td>
//                   <td style={styles.td}>
//                     <span
//                       style={{
//                         ...styles.statusText,
//                         ...(msg.seenByAdmin ? styles.seen : styles.unseen),
//                       }}
//                     >
//                       {msg.seenByAdmin ? 'Seen' : 'Unseen'}
//                     </span>
//                   </td>
//                   <td style={styles.td}>
//                     <span
//                       style={{
//                         ...styles.statusText,
//                         ...(msg.respondedByAdmin ? styles.seen : styles.unseen),
//                       }}
//                     >
//                       {msg.respondedByAdmin ? 'Responded' : 'Pending'}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Messages;

// import { fetchContactMessages, markMessageAsSeen } from '../../api/adminApi';


import React, { useEffect, useState } from 'react';
import {
  fetchContactMessages,
  markMessageAsSeen,
  deleteContactMessage,
  markMessageAsResponded,
} from '../../api/adminApi';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [activeModalId, setActiveModalId] = useState(null);
  const [respondingTo, setRespondingTo] = useState(null);
  const [emailBody, setEmailBody] = useState({ subject: '', message: '' });

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      const data = await fetchContactMessages();
      const sorted = data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
      setMessages(sorted);
    } catch (err) {
      console.error('Failed to load messages', err);
    }
  };

  useEffect(() => {
    const timers = [];
    messages.forEach((msg) => {
      if (!msg.seenByAdmin && msg.message && msg.message.length <= 50) {
        const timer = setTimeout(async () => {
          try {
            await markMessageAsSeen(msg.id);
            setMessages((prev) =>
              prev.map((m) => (m.id === msg.id ? { ...m, seenByAdmin: true } : m))
            );
          } catch (err) {
            console.error('Failed to mark as seen', err);
          }
        }, 5000);
        timers.push(timer);
      }
    });
    return () => timers.forEach(clearTimeout);
  }, [messages]);

  const handleToggleExpand = async (msg) => {
    if (expandedId === msg.id) {
      setExpandedId(null);
      return;
    }
    setExpandedId(msg.id);
    if (!msg.seenByAdmin) {
      setTimeout(async () => {
        try {
          await markMessageAsSeen(msg.id);
          setMessages((prev) =>
            prev.map((m) => (m.id === msg.id ? { ...m, seenByAdmin: true } : m))
          );
        } catch (err) {
          console.error('Failed to mark as seen', err);
        }
      }, 5000);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContactMessage(id);
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
      setActiveModalId(null);
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  const handleSendEmail = async (id) => {
    try {
      await markMessageAsResponded(id);
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, respondedByAdmin: true } : m))
      );
      setRespondingTo(null);
      setEmailBody({ subject: '', message: '' });
    } catch (err) {
      console.error('Email send failed', err);
    }
  };

  const styles = {
    container: {
      padding: '1rem',
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#ecf0f1',
      minHeight: '100vh',
    },
    th: {
      backgroundColor: '#1abc9c',
      color: '#fff',
      padding: '1rem',
    },
    td: {
      padding: '0.8rem',
      borderBottom: '1px solid #ddd',
      verticalAlign: 'top',
    },
    modalWrapper: {
      position: 'relative',
      display: 'inline-block',
    },
    modal: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      borderRadius: '8px',
      padding: '0.5rem',
      zIndex: 999,
      minWidth: '120px',
    },
    btn: {
      background: 'none',
      border: 'none',
      color: '#1abc9c',
      cursor: 'pointer',
      fontWeight: 600,
      padding: '0.3rem 0.6rem',
      borderRadius: '4px',
      margin: '0.3rem 0',
      width: '100%',
      textAlign: 'left',
      transition: 'background-color 0.2s',
    },
    pendingHover: {
      cursor: 'pointer',
      color: '#e67e22',
      transition: 'color 0.2s',
    },
    emailBox: {
      position: 'fixed',
      top: '50%',
      right: '30px',
      transform: 'translateY(-50%)',
      width: '300px',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      padding: '1rem',
      zIndex: 1000,
    },
  };

  const formatDate = (iso) => new Date(iso).toLocaleString();

  return (
    <div style={styles.container}>
      <h2>User Messages</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Message</th>
            <th style={styles.th}>Submitted</th>
            <th style={styles.th}>Seen</th>
            <th style={styles.th}>Responded</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, idx) => (
            <tr key={msg.id}>
              <td style={styles.td}>{idx + 1}</td>
              <td style={styles.td}>{msg.name}</td>
              <td style={styles.td}>{msg.email}</td>
              <td style={styles.td}>
                {!msg.message || msg.message.length <= 50 || expandedId === msg.id
                  ? msg.message || '-'
                  : `${msg.message.slice(0, 50)}...`}
                {msg.message && msg.message.length > 50 && (
                  <button style={styles.btn} onClick={() => handleToggleExpand(msg)}>
                    {expandedId === msg.id ? 'View Less' : 'View More'}
                  </button>
                )}
              </td>
              <td style={styles.td}>{formatDate(msg.submittedAt)}</td>
              <td style={styles.td}>
                <span style={{ color: msg.seenByAdmin ? '#27ae60' : '#e74c3c' }}>
                  {msg.seenByAdmin ? 'Seen' : 'Unseen'}
                </span>
              </td>
              <td style={styles.td}>
                <div
                  style={styles.modalWrapper}
                  onMouseLeave={() => setTimeout(() => setActiveModalId(null), 400)}
                >
                  <span
                    style={styles.pendingHover}
                    onClick={() => setActiveModalId(msg.id)}
                    onMouseEnter={(e) => (e.target.style.color = '#d35400')}
                    onMouseLeave={(e) => (e.target.style.color = msg.respondedByAdmin ? '#27ae60' : '#e67e22')}
                  >
                    {msg.respondedByAdmin ? 'Responded' : 'Pending'}
                  </span>

                  {activeModalId === msg.id && (
                    <div style={styles.modal}>
                      <button
                        style={styles.btn}
                        onClick={() => {
                          setRespondingTo(msg);
                          setActiveModalId(null);
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#eafaf8')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                      >
                        Respond
                      </button>
                      <button
                        style={styles.btn}
                        onClick={() => handleDelete(msg.id)}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#eafaf8')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {respondingTo && (
        <div style={styles.emailBox}>
          <h4 style={{ marginTop: 0 }}>Reply to: {respondingTo.email}</h4>
          <input
            type="text"
            placeholder="Subject"
            value={emailBody.subject}
            onChange={(e) => setEmailBody({ ...emailBody, subject: e.target.value })}
            style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}
          />
          <textarea
            rows="4"
            placeholder="Message"
            value={emailBody.message}
            onChange={(e) => setEmailBody({ ...emailBody, message: e.target.value })}
            style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}
          />
          <button
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: '#1abc9c',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={() => handleSendEmail(respondingTo.id)}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Messages;
