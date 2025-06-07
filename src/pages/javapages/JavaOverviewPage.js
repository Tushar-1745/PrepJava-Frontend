import React from 'react';

const JavaOverviewPage = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white',
      color: '#333333',
      lineHeight: '1.5',
    },
    header: {
      fontSize: '2.5rem',
      textAlign: 'left',
      color: 'black',
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
  };

  const handleCopy = (codeId) => {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Java Programming Overview</h1>

      <h2 style={styles.sectionHeader}>What is Java?</h2>
      <p style={styles.paragraph}>
        Java is a powerful, versatile, and widely-used programming language developed by Sun Microsystems in 1995. It follows the principle of "write once, run anywhere" (WORA), meaning code written in Java can run on any platform that supports Java Virtual Machine (JVM). Java is known for its reliability, security, and scalability, making it a preferred choice for enterprise applications, mobile apps, web development, cloud computing, artificial intelligence, and more.
      </p>

      <h2 style={styles.sectionHeader}>Key Features</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Simple and Easy to Learn</li>
        <li style={styles.listItem}>Object-Oriented</li>
        <li style={styles.listItem}>Platform-Independent (WORA)</li>
        <li style={styles.listItem}>Secure and Robust</li>
        <li style={styles.listItem}>Multi-threaded for better performance</li>
        <li style={styles.listItem}>Automatic Memory Management (Garbage Collection)</li>
        <li style={styles.listItem}>High Performance with Just-In-Time (JIT) Compiler</li>
        <li style={styles.listItem}>Rich API and Built-in Libraries</li>
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
        System.out.println("Hello, World!"); // Output: Hello, World!
    }
}`}
      </pre>
    </div>
  );
};

export default JavaOverviewPage;
