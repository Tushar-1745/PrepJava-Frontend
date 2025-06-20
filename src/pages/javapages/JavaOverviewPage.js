// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const JavaOverviewPage = () => {
//   const navigate = useNavigate();
//   const styles = {
//     container: {
//       padding: '10px 20px',
//       fontFamily: "'Poppins', sans-serif",
//       backgroundColor: 'white',
//       color: '#333333',
//       lineHeight: '1.5',
//     },
//     header: {
//       fontSize: '2.5rem',
//       textAlign: 'left',
//       color: 'black',
//     },
//     sectionHeader: {
//       fontSize: '1.5rem',
//       color: 'black',
//       borderBottom: '1px solid black',
//       display: 'inline-block',
//     },
//     paragraph: {
//       fontSize: '1.1rem',
//       margin: '10px 0',
//     },
//     codeBox: {
//       backgroundColor: '#212121',
//       color: '#ffffff',
//       padding: '20px',
//       borderRadius: '8px',
//       fontFamily: "'Source Code Pro', monospace",
//       fontSize: '1rem',
//       overflowX: 'auto',
//       marginBottom: '20px',
//     },
//     codeButton: {
//       backgroundColor: '#1565c0',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '1rem',
//       float: 'right',
//       padding: '5px 10px',
//     },
//     practiceButton: {
//       margin: '25px auto',
//       color: 'black',
//       padding: '5px 10px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '1rem',
//       display: 'inline-block',
//       backgroundColor: '#89CFF0',
//     },
//     list: {
//       paddingLeft: '20px',
//       margin: '10px 0',
//     },
//     listItem: {
//       marginBottom: '10px',
//     },
//   };

//   const handleCopy = (codeId) => {
//     const code = document.getElementById(codeId).innerText;
//     navigator.clipboard.writeText(code);
//     alert('Code copied to clipboard!');
//   };

//   const handleTakeTest = () => {
//     navigate('/javaoverview-test');
// };
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Java Programming Overview</h1>

//       <h2 style={styles.sectionHeader}>What is Java?</h2>
//       <p style={styles.paragraph}>
//         Java is a powerful, versatile, and widely-used programming language developed by Sun Microsystems in 1995. It follows the principle of "write once, run anywhere" (WORA), meaning code written in Java can run on any platform that supports Java Virtual Machine (JVM). Java is known for its reliability, security, and scalability, making it a preferred choice for enterprise applications, mobile apps, web development, cloud computing, artificial intelligence, and more.
//       </p>

//       <h2 style={styles.sectionHeader}>Key Features</h2>
//       <ul style={styles.list}>
//         <li style={styles.listItem}>Simple and Easy to Learn</li>
//         <li style={styles.listItem}>Object-Oriented</li>
//         <li style={styles.listItem}>Platform-Independent (WORA)</li>
//         <li style={styles.listItem}>Secure and Robust</li>
//         <li style={styles.listItem}>Multi-threaded for better performance</li>
//         <li style={styles.listItem}>Automatic Memory Management (Garbage Collection)</li>
//         <li style={styles.listItem}>High Performance with Just-In-Time (JIT) Compiler</li>
//         <li style={styles.listItem}>Rich API and Built-in Libraries</li>
//         <li style={styles.listItem}>Huge Community Support</li>
//       </ul>

//       <h2 style={styles.sectionHeader}>Java Syntax Example</h2>
//       <pre id="javaSyntax" style={styles.codeBox}>
//         <button
//           style={styles.codeButton}
//           onClick={() => handleCopy('javaSyntax')}
//         >
//           Copy
//         </button>
//         {`public class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Hello, World!"); // Output: Hello, World!
//     }
// }`}
//       </pre>

//       <button
//         style={{
//             backgroundColor: '#0066ff',
//             color: 'white',
//             padding: '12px 24px',
//             fontSize: '1.1rem',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             transition: 'all 0.3s ease',
//         }}
//         onMouseOver={(e) => {
//             e.currentTarget.style.backgroundColor = '#004ecb';
//         }}
//         onMouseOut={(e) => {
//             e.currentTarget.style.backgroundColor = '#0066ff';
//         }}
//         onClick={handleTakeTest}
//     >
//         🎯 Take Test on Classes
//     </button>
//     </div>
//   );
// };

// export default JavaOverviewPage;

import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getScoreByModule } from '../../api/api.js'; // ✅ Ensure this exists in your api.js

const JavaOverviewPage = () => {
  const navigate = useNavigate();
  const { loggedInUserId } = useContext(AuthContext);
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const fetchScore = async () => {
      if (!loggedInUserId) return;
      try {
        const score = await getScoreByModule(loggedInUserId, 'JavaOverview');
        console.log("score is", score);
        setScoreData(score);
      } catch (err) {
        console.error('Failed to fetch score:', err);
      }
    };
    fetchScore();
  }, [loggedInUserId]);

  const scoredMarks = scoreData?.score ?? null;
  const totalMarks = scoreData?.total ?? null;

  const getScoreColor = (scored) => {
    if (scored >= 9) return '#6fdc8c';     // Light green
    if (scored >= 6) return '#f4a742';     // Soft orange
    return '#e57373';                      // Light red
  };
  


  const handleCopy = (codeId) => {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const handleTakeTest = () => {
    navigate('/javaoverview-test');
  };

  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white',
      color: '#333333',
      lineHeight: '1.5',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    header: {
      fontSize: '2.5rem',
      color: 'black',
    },
    score: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    sectionHeader: {
      fontSize: '1.5rem',
      color: 'black',
      borderBottom: '1px solid black',
      display: 'inline-block',
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
    },
    codeBox: {
      backgroundColor: '#212121',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      fontFamily: "'Source Code Pro', monospace",
      fontSize: '1rem',
      overflowX: 'auto',
      marginBottom: '20px',
    },
    codeButton: {
      backgroundColor: '#1565c0',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      float: 'right',
      padding: '5px 10px',
    },
    practiceButton: {
      margin: '25px auto',
      color: 'black',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'inline-block',
      backgroundColor: '#89CFF0',
    },
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    listItem: {
      marginBottom: '10px',
    },
    takeTestButton: {
      backgroundColor: '#0066ff',
      color: 'white',
      padding: '12px 24px',
      fontSize: '1.1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
  <h1 style={styles.header}>Java Overview</h1>
  {scoredMarks !== null && totalMarks !== null && (
    <div
      style={{
        width: '30px',
        height: '30px',
        marginLeft: '12px',
        marginTop: '-6px', // Push slightly upward
        borderRadius: '50%',
        border: `2px solid ${getScoreColor(scoredMarks)}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: getScoreColor(scoredMarks),
        fontWeight: 'bold',
        fontSize: '1rem',
      }}
      title={`Test taken. Score: ${scoredMarks}/${totalMarks}`}
    >
      ✓
    </div>
  )}
</div>




      <h2 style={styles.sectionHeader}>What is Java?</h2>
      <p style={styles.paragraph}>
        Java is a powerful, versatile, and widely-used programming language developed by Sun Microsystems in 1995...
      </p>

      <h2 style={styles.sectionHeader}>Key Features</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Simple and Easy to Learn</li>
        <li style={styles.listItem}>Object-Oriented</li>
        <li style={styles.listItem}>Platform-Independent (WORA)</li>
        <li style={styles.listItem}>Secure and Robust</li>
        <li style={styles.listItem}>Multi-threaded for better performance</li>
        <li style={styles.listItem}>Automatic Memory Management</li>
        <li style={styles.listItem}>High Performance with JIT Compiler</li>
        <li style={styles.listItem}>Rich API and Libraries</li>
        <li style={styles.listItem}>Huge Community Support</li>
      </ul>

      <h2 style={styles.sectionHeader}>Java Syntax Example</h2>
      <pre id="javaSyntax" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy('javaSyntax')}
        >
          Copy
        </button>
        {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
      </pre>

      <button
        style={styles.takeTestButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#004ecb')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0066ff')}
        onClick={handleTakeTest}
      >
        🎯 Take Test on Java Overview
      </button>
    </div>
  );
};

export default JavaOverviewPage;
