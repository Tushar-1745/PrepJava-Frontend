import React from 'react';

const DataTypes = () => {
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
    card: {
      backgroundColor: '#f9f9f9',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '15px',
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
    iframe: {
      width: '100%',
      height: '300px',
      border: 'none',
      borderRadius: '8px',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.header}>Java Data Types</h1>

      {/* Primitive Data Types */}
      <h2 style={styles.sectionHeader}>Primitive Data Types</h2>
      <p style={styles.paragraph}>
        Java provides eight primitive data types to store simple values like numbers, characters, and boolean values.
      </p>
      <div style={styles.card}>
        <strong>byte:</strong> 8-bit signed integer, range: -128 to 127.
      </div>
      <div style={styles.card}>
        <strong>short:</strong> 16-bit signed integer, range: -32,768 to 32,767.
      </div>
      <div style={styles.card}>
        <strong>int:</strong> 32-bit signed integer, range: -2<sup>31</sup> to 2<sup>31</sup>-1.
      </div>
      <div style={styles.card}>
        <strong>long:</strong> 64-bit signed integer, range: -2<sup>63</sup> to 2<sup>63</sup>-1.
      </div>
      <div style={styles.card}>
        <strong>float:</strong> 32-bit floating-point number, used for decimals.
      </div>
      <div style={styles.card}>
        <strong>double:</strong> 64-bit floating-point number, used for large decimals.
      </div>
      <div style={styles.card}>
        <strong>char:</strong> 16-bit character, used to store a single character or ASCII values.
      </div>
      <div style={styles.card}>
        <strong>boolean:</strong> Holds either <code>true</code> or <code>false</code>.
      </div>

      {/* Non-Primitive Data Types */}
      <h2 style={styles.sectionHeader}>Non-Primitive Data Types</h2>
      <p style={styles.paragraph}>
        Non-primitive data types include objects, arrays, and interfaces. They are created by the programmer and used to store complex data.
      </p>
      <div style={styles.card}>
        <strong>String:</strong> Used to store a sequence of characters.
      </div>
      <div style={styles.card}>
        <strong>Array:</strong> A collection of elements of the same type.
      </div>
      <div style={styles.card}>
        <strong>Class:</strong> A blueprint for creating objects.
      </div>

      {/* Video Section */}
      <h2 style={styles.sectionHeader}>Video Tutorial</h2>
      <iframe
        style={styles.iframe}
        src="https://www.youtube.com/embed/xk4_1vDrzzo"
        title="Java Data Types Tutorial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DataTypes;
