import React, { useState } from 'react';

const StringBuilder = () => {
  const questions = {
    basic: [
      "What is StringBuilder in Java?",
      "How is StringBuilder different from String?",
      "What are some basic operations of StringBuilder?",
    ],
    intermediate: [
      "How to reverse a string using StringBuilder?",
      "Explain the append() and insert() methods in StringBuilder.",
      "How do you delete a substring using StringBuilder?",
    ],
    advanced: [
      "How does StringBuilder manage memory internally?",
      "Explain the difference between capacity and length in StringBuilder.",
      "How to convert a StringBuilder object to a String?",
    ],
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#f9f9f9',
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
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
    },
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
      fontSize: '1.1rem',
    },
    codeBlock: {
      position: 'relative',
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '1rem',
      marginBottom: '20px',
    },
    copyButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#4A90E2',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '5px 10px',
      cursor: 'pointer',
      fontSize: '0.8rem',
    },
    copySuccess: {
      fontSize: '0.8rem',
      color: 'green',
      marginTop: '5px',
    },
  };

  const codeSnippet = `// StringBuilder example
StringBuilder sb = new StringBuilder("Hello");

// Append operation
sb.append(" World");
System.out.println(sb); // Output: Hello World

// Insert operation
sb.insert(5, ",");
System.out.println(sb); // Output: Hello, World

// Reverse operation
sb.reverse();
System.out.println(sb); // Output: dlroW ,olleH

// Delete operation
sb.delete(5, 7);
System.out.println(sb); // Output: dlroWolleH`;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>StringBuilder</h1>

      {/* What is StringBuilder? */}
      <section>
        <h2 style={styles.sectionHeader}>What is StringBuilder?</h2>
        <p style={styles.paragraph}>
          StringBuilder is a mutable sequence of characters that allows modifications to strings without creating new objects. It is part of java.lang package and is more efficient for operations like concatenation, insertion, and deletion compared to the String class.
        </p>
      </section>

      {/* Important Methods */}
      <section>
        <h2 style={styles.sectionHeader}>Important StringBuilder Methods</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(codeSnippet)}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <pre>{codeSnippet}</pre>
        </div>
      </section>

      {/* StringBuilder Questions */}
      <section>
        <h2 style={styles.sectionHeader}>StringBuilder Questions</h2>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4em' }}>Basic</h3>
          <ul style={styles.list}>
            {questions.basic.map((q, index) => (
              <li key={`basic-${index}`}>{q}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4em' }}>Intermediate</h3>
          <ul style={styles.list}>
            {questions.intermediate.map((q, index) => (
              <li key={`intermediate-${index}`}>{q}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4em' }}>Advanced</h3>
          <ul style={styles.list}>
            {questions.advanced.map((q, index) => (
              <li key={`advanced-${index}`}>{q}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default StringBuilder;
