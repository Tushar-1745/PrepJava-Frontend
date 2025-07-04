import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getScoreByModule } from '../../api/api.js'; // ✅ Ensure this exists in your api.js
// ... all imports remain the same

const JavaOverviewPage = () => {
  const navigate = useNavigate();
  const { loggedInUserId } = useContext(AuthContext);
  const [scoreData, setScoreData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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
    if (scored >= 9) return '#6fdc8c';
    if (scored >= 6) return '#f4a742';
    return '#e57373';
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
      color: '#333',
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
    sectionHeader: {
      fontSize: '1.5rem',
      color: 'black',
      borderBottom: '2px solid #1abc9c',
      display: 'inline-block',
      marginTop: '30px',
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
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    listItem: {
      marginBottom: '10px',
    },
    takeTestButton: {
      backgroundColor: '#1abc9c',
      color: '#fff',
      padding: '12px 24px',
      fontSize: '1.1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginTop: '30px',
      display: 'inline-block',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
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
              marginTop: '-6px',
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
        Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible.
        It was originally developed by James Gosling at Sun Microsystems (now Oracle) in 1995.
        Java allows developers to write code once and run it anywhere (WORA), meaning compiled Java code can run on all platforms
        that support Java without the need for recompilation.
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

      <h2 style={styles.sectionHeader}>Java Architecture</h2>
      <p style={styles.paragraph}>
        Java architecture is based on the concept of the Java Virtual Machine (JVM). The source code written in Java is compiled
        into bytecode by the Java compiler. This bytecode is platform-independent and can run on any system that has a JVM.
        The JVM interprets or compiles bytecode into machine code using Just-In-Time (JIT) compilers.
      </p>

      <h2 style={styles.sectionHeader}>How Java Code Runs</h2>
      <ol style={styles.list}>
        <li style={styles.listItem}>Java source file (.java) is written.</li>
        <li style={styles.listItem}>The compiler (`javac`) converts it to bytecode (.class).</li>
        <li style={styles.listItem}>The JVM loads the bytecode and executes it using either an interpreter or JIT.</li>
        <li style={styles.listItem}>The final output appears on the system running the JVM.</li>
      </ol>

      <h2 style={styles.sectionHeader}>Where is Java Used?</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Enterprise Applications (Spring, Hibernate)</li>
        <li style={styles.listItem}>Android Development (Kotlin + Java)</li>
        <li style={styles.listItem}>Web Applications (JSP, Servlets)</li>
        <li style={styles.listItem}>Scientific Applications</li>
        <li style={styles.listItem}>Game Development</li>
        <li style={styles.listItem}>Big Data and Hadoop Frameworks</li>
        <li style={styles.listItem}>Cloud-Based Applications</li>
      </ul>

      <button
        style={styles.takeTestButton}
        onClick={handleTakeTest}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#00a38c')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1abc9c')}
      >
        🎯 Take Test on Java Overview
      </button>
    </div>
  );
};

export default JavaOverviewPage;
