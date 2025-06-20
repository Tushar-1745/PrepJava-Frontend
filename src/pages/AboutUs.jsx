import React from 'react';

const AboutUs = () => {
  const styles = {
    container: {
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '2rem 1rem',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.7',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1abc9c',
      marginBottom: '1.5rem',
      textAlign: 'center',
    },
    subHeader: {
      fontSize: '1.5rem',
      marginTop: '2rem',
      color: '#1abc9c',
    },
    paragraph: {
      marginTop: '1rem',
      fontSize: '1rem',
    },
    list: {
      marginTop: '1rem',
      paddingLeft: '1.5rem',
    },
    listItem: {
      marginBottom: '0.5rem',
    },
    link: {
      color: '#1abc9c',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Prep Java</h1>

      <p style={styles.paragraph}>
        Prep Java is a self-developed educational platform built with passion and purpose. As the creator, I designed this website to support software engineering students in mastering development skills like Java, DSA, MySQL, Spring Boot, and more.
      </p>

      <p style={styles.paragraph}>
        Whether you're preparing for technical interviews, improving backend skills, or building a project portfolio — Prep Java offers structured learning paths, real-time code practice, and curated resources to help you grow.
      </p>

      <h2 style={styles.subHeader}>Why I Built This</h2>
      <p style={styles.paragraph}>
        During my own learning journey, I struggled to find one place with everything well-organized and beginner-friendly. This platform is my answer to that — built by a student, for students — to reduce confusion and boost confidence.
      </p>

      <h2 style={styles.subHeader}>What You'll Learn Here</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>✔️ Java core topics explained clearly</li>
        <li style={styles.listItem}>✔️ Data Structures & Algorithms for placements</li>
        <li style={styles.listItem}>✔️ MySQL practice with interactive compilers</li>
        <li style={styles.listItem}>✔️ Backend frameworks like Spring Boot & Hibernate</li>
        <li style={styles.listItem}>✔️ Interview preparation and mock questions</li>
      </ul>

      <h2 style={styles.subHeader}>Our Mission</h2>
      <p style={styles.paragraph}>
        Empower every aspiring software engineer with access to high-quality, free learning content — without distractions or paywalls.
      </p>

      <h2 style={styles.subHeader}>Let's Connect</h2>
      <p style={styles.paragraph}>
        I'm always open to suggestions, ideas, or collaborations. Feel free to reach out via the <a href="/contact" style={styles.link}>Contact</a> page or email me directly at{' '}
        <a href="mailto:support@prepjava.com" style={styles.link}>support@prepjava.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
