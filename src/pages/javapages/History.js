import React from 'react';

const History = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white',
      color: '#333333',
      lineHeight: '1.5',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2.5rem',
      textAlign: 'left',
      color: 'black',
      marginBottom: '20px',
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
    },
    listItem: {
      marginBottom: '10px',
    },
    section: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      transition: 'transform 0.3s ease',
    },
    sectionHover: {
      transform: 'scale(1.02)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>History of Java</h1>

      <div
        style={styles.section}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <h2 style={styles.sectionHeader}>Origin and Creator</h2>
        <p style={styles.paragraph}>
          Java was originally developed by James Gosling at Sun Microsystems. The project started in June 1991, and the first public release was in 1995.
          Java was designed to have the following goals:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Simple and familiar</li>
          <li style={styles.listItem}>Object-oriented</li>
          <li style={styles.listItem}>Robust and secure</li>
          <li style={styles.listItem}>Architecture-neutral</li>
          <li style={styles.listItem}>Portable</li>
          <li style={styles.listItem}>High performance</li>
          <li style={styles.listItem}>Multi-threaded</li>
          <li style={styles.listItem}>Dynamic</li>
        </ul>
      </div>

      <div
        style={styles.section}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <h2 style={styles.sectionHeader}>Key Versions and Milestones</h2>
        <p style={styles.paragraph}>Here are some significant versions of Java and their release years:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Java 1.0</strong> - Released in 1996: The first version that introduced the core concepts of the language.
          </li>
          <li style={styles.listItem}>
            <strong>Java 1.1</strong> - Released in 1997: Added features like inner classes, JavaBeans, and JDBC.
          </li>
          <li style={styles.listItem}>
            <strong>Java 2 (Java 1.2)</strong> - Released in 1998: Introduced the Swing graphical API, the Collections framework, and the Java 2 Platform.
          </li>
          <li style={styles.listItem}>
            <strong>Java 5 (Java 1.5)</strong> - Released in 2004: Introduced generics, metadata annotations, enumerated types, and the enhanced for loop.
          </li>
          <li style={styles.listItem}>
            <strong>Java 8</strong> - Released in 2014: Introduced lambda expressions, the Stream API, and a new date and time API.
          </li>
          <li style={styles.listItem}>
            <strong>Java 9</strong> - Released in 2017: Introduced the module system (Project Jigsaw) and enhancements to the Java Platform Module System.
          </li>
          <li style={styles.listItem}>
            <strong>Java 10</strong> - Released in 2018: Introduced local variable type inference (var) and garbage collector improvements.
          </li>
          <li style={styles.listItem}>
            <strong>Java 11</strong> - Released in 2018: Long-Term Support (LTS) version that included new features like the HTTP Client and more.
          </li>
          <li style={styles.listItem}>
            <strong>Java 17</strong> - Released in 2021: Another LTS version that includes new language features, sealed classes, and pattern matching for switch (preview).
          </li>
        </ul>
      </div>

      <div
        style={styles.section}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <h2 style={styles.sectionHeader}>Java Today</h2>
        <p style={styles.paragraph}>
          Java has evolved significantly since its inception and continues to be one of the most widely used programming languages in the world.
          It is used for developing enterprise-level applications, web applications, mobile applications (especially Android), and much more.
        </p>
        <p style={styles.paragraph}>
          The Java community is large and active, with numerous libraries, frameworks, and tools available to developers. Java remains relevant due
          to its robustness, security features, and the constant evolution through regular updates and new versions.
        </p>
      </div>
    </div>
  );
};

export default History;
