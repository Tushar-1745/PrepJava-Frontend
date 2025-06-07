
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';

const JavaHomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      backgroundColor: '#f9f9f9',
      transition: 'background 0.3s, color 0.3s',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 2rem',
      backgroundColor: '#282c34',
      color: '#fff',
    },
    logo: {
      color: '#61dafb',
      fontSize: '1.5rem',
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    heroSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #1a73e8, #4285f4)',
      color: 'white',
      textAlign: 'center',
    },
    heroText: {
      fontSize: '2.5rem',
      margin: '0.5rem 0',
    },
    heroSubText: {
      fontSize: '1.25rem',
      margin: '0.5rem 0 2rem',
    },
    heroButton: {
      backgroundColor: '#ff5722',
      color: 'white',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    footer: {
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#282c34',
      color: '#fff',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Prep Java</h1>
        <div style={styles.navLinks}>
          <a href="#courses" style={styles.navLink}>Courses</a>
          <a href="#practice" style={styles.navLink}>Practice</a>
          <a href="#blogs" style={styles.navLink}>Blogs</a>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </div>
      </nav>

      <section style={styles.heroSection}>
        <h2 style={styles.heroText}>Master Java with Interactive Learning!</h2>
        <p style={styles.heroSubText}>Join a community of aspiring Java developers.</p>
        <button
          style={styles.heroButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#e64a19')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ff5722')}
        >
          <Link to="/javapage" style={{ textDecoration: 'none', color: 'white' }}>Get Started</Link>
        </button>
      </section>

      <section className="services" style={{ padding: '2rem 2rem', backgroundColor: '#000000', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '3rem', color: '#ffffff' }}>
          Explore Our Services
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Java', image: 'images/java_logo.png', link: '/javapage' },
            { name: 'DSA', image: 'images/dsa_logo.jpg', link: '/dsa/intro' },
            { name: 'MySQL', image: 'images/mysql_logo.png', link: '/mysql' },
            { name: 'Hibernate', image: 'images/hibernate_logo.png', link: '/hibernate' },
            { name: 'Spring Boot', image: 'images/springboot_logo.jpg', link: '/springboot' },
            { name: 'Interview Preparation', image: 'images/interview_logo.avif', link: '/interview' },
          ].map((service, index) => (
            <Link to={service.link} key={index} style={{ textDecoration: 'none' }}>
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: '#222',
                borderRadius: '10px',
                border: '2px solid transparent',
                transition: '0.3s',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseOver={(e) => e.currentTarget.style.border = '2px solid #61dafb'}
              onMouseOut={(e) => e.currentTarget.style.border = '2px solid transparent'}>
                <img
                  src={service.image}
                  alt={`${service.name} Logo`}
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'contain',
                  }}
                />
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginTop: '0.5rem',
                  color: '#ffffff',
                }}>
                  {service.name}
                </p>
                <FaArrowRight style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#61dafb', fontSize: '2rem' }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={styles.footer}>
        <h4>Stay Updated</h4>
        <input type="email" placeholder="Enter your email" style={{ padding: '0.5rem', marginRight: '0.5rem', borderRadius: '5px', border: '1px solid #ddd' }} />
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#61dafb', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Subscribe</button>
        <p>© 2024 Prep Java. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default JavaHomePage;
