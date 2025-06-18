import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

const HoverLink = ({ to, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={to}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <span
                style={{
                    ...underlineStyle,
                    width: isHovered ? "100%" : "0%",
                    left: isHovered ? "0%" : "50%",
                    opacity: isHovered ? 1 : 0,
                }}
            ></span>
        </Link>
    );
};

const Navbar = () => {
    const dsaRef = useRef(null);
    const frameworksRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dsaRef.current &&
                !dsaRef.current.contains(event.target) &&
                frameworksRef.current &&
                !frameworksRef.current.contains(event.target)
            ) {
                setExpandedDropdowns({});
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const [expandedDropdowns, setExpandedDropdowns] = useState({});
    const [mobileSubmenus, setMobileSubmenus] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const { loggedIn } = useContext(AuthContext);

    const toggleDropdown = (name) => {
        setExpandedDropdowns((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const toggleMobileSubmenu = (name) => {
        setMobileSubmenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav style={navbarStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/images/prepjava_logo.webp" alt="PrepJava Logo" style={{ height: '50px', width: '50px' }} />
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>PrepJava</h1>
            </div>

            {/* Hamburger for Mobile */}
            {isMobile ? (
                <div onClick={() => setMenuOpen(!menuOpen)} style={hamburgerStyle}>
                    <div style={barStyle}></div>
                    <div style={barStyle}></div>
                    <div style={barStyle}></div>
                </div>
            ) : (
                <div style={leftSectionStyle}>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => toggleDropdown('dsa')}
                            style={buttonStyle}
                        >
                            DSA <span style={caretStyle}>&#9662;</span>
                        </button>
                        {expandedDropdowns.dsa && (
                            <div
                                style={dropdownStyle}
                                onMouseLeave={() =>
                                    setExpandedDropdowns((prev) => ({ ...prev, dsa: false }))
                                }
                            >
                                <Link to="/dsa/intro" style={{ ...buttonStyle, ...dropdownItemStyle }}>DSA Intro</Link>
                                <Link to="/dsa/problems" style={{ ...buttonStyle, ...dropdownItemStyle }}>DSA Problems</Link>
                                <Link to="/sql-questions" style={{ ...buttonStyle, ...dropdownItemStyle }}>SQL Queries</Link>
                            </div>
                        )}
                    </div>



                    <HoverLink to="/dbmsoverview">DBMS</HoverLink>

                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => toggleDropdown('frameworks')}
                            style={buttonStyle}
                        >
                            Frameworks <span style={caretStyle}>&#9662;</span>
                        </button>
                        {expandedDropdowns.frameworks && (
                            <div
                                style={dropdownStyle}
                                onMouseLeave={() =>
                                    setExpandedDropdowns((prev) => ({ ...prev, frameworks: false }))
                                }
                            >
                                <Link to="/hibernate" style={{ ...buttonStyle, ...dropdownItemStyle }}>Hibernate</Link>
                                <Link to="/springboot" style={{ ...buttonStyle, ...dropdownItemStyle }}>Spring Boot</Link>
                            </div>
                        )}
                    </div>


                    <HoverLink to="/interview">Interview</HoverLink>
                </div>
            )}

            {/* Profile/Login */}
            {!isMobile && (
                <div style={{ display: 'flex' }}>
                    {loggedIn ? (
                        <div onClick={() => navigate('/profile')} style={profileIconStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path d="M14 13s-1-1-6-1-6 1-6 1 1-4 6-4 6 3 6 4z" />
                            </svg>
                        </div>
                    ) : (
                        <Link to="/login" style={loginButtonStyle}>Login</Link>
                    )}
                </div>
            )}

            {/* Mobile Menu */}
            {isMobile && menuOpen && (
                <div style={mobileMenuStyle}>
                    {/* DSA */}
                    <div onClick={() => toggleMobileSubmenu('dsa')} style={mobileItemStyle}>
                        DSA <span style={caretStyle}>&#9662;</span>
                    </div>
                    {mobileSubmenus.dsa && (
                        <div style={mobileSubmenuStyle}>
                            <Link to="/dsa/intro" style={mobileSubItemStyle}>DSA Intro</Link>
                            <Link to="/dsa/problems" style={mobileSubItemStyle}>DSA Problems</Link>
                            <Link to="/sql-questions" style={mobileSubItemStyle}>SQL Queries</Link>
                        </div>
                    )}

                    {/* DBMS */}
                    <Link to="/dbmsoverview" style={mobileItemStyle}>DBMS</Link>

                    {/* Frameworks */}
                    <div onClick={() => toggleMobileSubmenu('frameworks')} style={mobileItemStyle}>
                        Frameworks <span style={caretStyle}>&#9662;</span>
                    </div>
                    {mobileSubmenus.frameworks && (
                        <div style={mobileSubmenuStyle}>
                            <Link to="/hibernate" style={mobileSubItemStyle}>Hibernate</Link>
                            <Link to="/springboot" style={mobileSubItemStyle}>Spring Boot</Link>
                        </div>
                    )}

                    {/* Interview */}
                    <Link to="/interview" style={mobileItemStyle}>Interview</Link>

                    {/* Profile/Login */}
                    {loggedIn ? (
                        <div onClick={() => navigate('/profile')} style={mobileItemStyle}>Profile</div>
                    ) : (
                        <Link to="/login" style={mobileItemStyle}>Login</Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

// ==== Styles ====

const navbarStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2c3e50',
    padding: '5px 20px',
    flexWrap: 'wrap',
    borderBottom: '2px solid #1abc9c',
};

const leftSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
};

const buttonStyle = {
    border: 'none',
    textDecoration: 'none',
    color: '#ffffff',
    padding: '5px 10px',
    fontSize: '18px',
    backgroundColor: 'transparent',
    position: 'relative',
    cursor: 'pointer',
};

const underlineStyle = {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    width: '0%',
    height: '2px',
    backgroundColor: '#00bfa6',
    transition: 'width 0.4s ease-in-out, left 0.4s ease-in-out, opacity 0.3s',
    opacity: 0,
};

const caretStyle = {
    marginLeft: '5px',
};

const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#34495e',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    zIndex: 1,
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
};

const dropdownItemStyle = {
    whiteSpace: 'nowrap',
    padding: '5px 15px',
    fontSize: '16px',
};

const loginButtonStyle = {
    backgroundColor: '#1abc9c',
    color: 'white',
    padding: '6px 16px',
    borderRadius: '5px',
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
    marginRight:'35px'
};

const profileIconStyle = {
    backgroundColor: '#34495e',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:'35px'
};

const hamburgerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'pointer',
};

const barStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: 'white',
    marginRight:'30px'
};

const mobileMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2c3e50',
    width: '100%',
    marginTop: '10px',
    padding: '10px 0',
    borderTop: '1px solid #1abc9c',
};

const mobileItemStyle = {
    padding: '10px 20px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer',
};

const mobileSubmenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#34495e',
    paddingLeft: '20px',
};

const mobileSubItemStyle = {
    padding: '8px 20px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
};
