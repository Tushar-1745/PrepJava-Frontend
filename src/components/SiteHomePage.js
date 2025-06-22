import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const SiteHomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const { loggedIn, loggedInUsername, logoutUser } = useContext(AuthContext);
  const isAdmin = loggedInUsername === 'tusharmadane729@gmail.com';

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      backgroundColor: '#f9f9f9',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#282c34',
      color: '#fff',
      position: 'relative',
      flexWrap: 'wrap',
    },
    logo: {
      color: '#61dafb',
      fontSize: '1.5rem',
    },
    navLinks: {
      display: 'flex',
      gap: '1.2rem',
      alignItems: 'center',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    mobileMenuIcon: {
      display: 'none',
      fontSize: '1.5rem',
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
    },
    footer: {
      padding: '2rem 1rem',
      textAlign: 'center',
      backgroundColor: '#282c34',
      color: '#fff',
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        .link-hover-effect {
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .link-hover-effect:hover {
          color: #61dafb;
          text-shadow: 0 0 5px #61dafb, 0 0 10px #61dafb;
        }        
        

        @media (max-width: 768px) {
          .nav-links {
            display: ${isMobileNavOpen ? 'flex' : 'none'};
            flex-direction: column;
            width: 100%;
            background-color: #282c34;
            padding: 1rem 0;
          }
          .mobile-menu-icon {
            display: block !important;
          }
        }

        @media (max-width: 1024px) {
          .responsive-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .responsive-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>

      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Prep Java</h1>

        <div
          className="mobile-menu-icon"
          style={styles.mobileMenuIcon}
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        >
          {isMobileNavOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="nav-links" style={styles.navLinks}>
          {isAdmin && (
            <Link to="/admin" style={styles.navLink}>
              Admin Panel
            </Link>
          )}
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

      <section className="services" style={{ padding: '2rem 1rem', backgroundColor: '#000', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '3rem', color: '#ffffff' }}>
          Explore Our Services
        </h3>
        <div className="responsive-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Java', image: 'images/java_logo.png', link: '/java/javadashboard' },
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
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '2rem',
          padding: '0.5rem 1rem',
          textAlign: 'left',
        }}>
          {[
            {
              title: "Explore",
              links: [
                { label: "About Us", path: "/aboutus" },
                { label: "Contact Us", path: "/contact" },
                { label: "Terms & Conditions", path: "/terms" },
                { label: "Privacy Policy", path: "/privacy" },
              ],
            },
            {
              title: "Learning Paths",
              links: [
                { label: "Java", path: "/java/javadashboard" },
                { label: "DSA", path: "/dsa/intro" },
                { label: "MySQL", path: "/mysql" },
                { label: "Spring Boot", path: "/springboot" },
              ],
            },
            {
              title: "Follow Us",
              links: [
                { label: "Facebook", path: "#" },
                { label: "Instagram", path: "#" },
                { label: "LinkedIn", path: "#" },
                { label: "YouTube", path: "#" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "FAQs", path: "/faq" },
                { label: "Help Center", path: "/help" },
                { label: "Report a Bug", path: "/report-bug" },
              ],
            },
          ].map((section, index) => (
            <div key={index} style={{ marginTop: '0.5rem' }}>
              <h4 style={{ color: '#61dafb', margin: '0 0 0.5rem' }}>{section.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link, i) => {
                  const isExternal = link.path === "#" || link.path.startsWith("http");
                  return (
                    <li key={i} style={{ marginBottom: '0.4rem' }}>
                      {isExternal ? (
                        <a href={link.path} className="link-hover-effect">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.path} className="link-hover-effect">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid #444',
          textAlign: 'center',
          paddingTop: '1rem',
          fontSize: '0.9rem',
        }}>
          <p style={{ margin: 0 }}>© 2024 Prep Java. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default SiteHomePage;
