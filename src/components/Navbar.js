import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import { logout } from '../api/api.js';

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
                    left: isHovered ? "0%" : "50%", // Expands outward
                    opacity: isHovered ? 1 : 0, // Fades in
                }}
            ></span>
        </Link>
    );
};

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const topics = [
        "Array", "Binary Tree", "Linked List", "Spring Boot", "Hibernate",
        "DBMS Overview", "SQL Queries", "DSA Intro", "DSA Problems",
        "Interview Questions", "React", "Java", "MySQL", "Collections Framework"
    ];

    const topicMap = {
        "dsa": "/dsa/intro",
        "dsa intro": "/dsa/intro",
        "problems": "/dsa/problems",
        "dsa problems": "/dsa/problems",
        "sql": "/sql-questions",
        "sql queries": "/sql-questions",
        "hibernate": "/hibernate",
        "spring boot": "/springboot",
        "dbms": "/dbmsoverview",
        "interview": "/interview",
        'login': "/login",
        'signup': '/signup'
    };

    const handleSearch = () => {
        const path = topicMap[searchQuery.trim().toLowerCase()];
        if (path) {
            navigate(path);
            setSearchQuery('');
        } else {
            alert('No matching topic found');
        }
    };

    const [isHovered, setIsHovered] = React.useState(false);

    const getHoverStyle = () => (isHovered ? { width: '100%' } : { width: '0%' });

    const [isFocused, setIsFocused] = React.useState(false);

    const [dropdowns, setDropdowns] = useState({
        dsa: false,
        frameworks: false,
        profile: false,
    });

    const navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(AuthContext);

    const toggleDropdown = (name) => {
        setDropdowns((prev) => ({
            dsa: name === 'dsa' ? !prev.dsa : false,
            frameworks: name === 'frameworks' ? !prev.frameworks : false,
            profile: name === 'profile' ? !prev.profile : false,
        }));
    };

    const handleMouseLeave = (dropdownName) => {
        setDropdowns((prev) => ({
            ...prev,
            [dropdownName]: false,
        }));
    };

    return (
        <nav style={navbarStyle}>

            <div style={{ display: 'flex', alignItems: 'center', margin: 'auto 30px' }}>
                {/* PrepJava Logo */}
                <img
                    src="/images/prepjava_logo.webp"
                    alt="PrepJava Logo"
                    style={{ height: '50px', width: '50px' }}
                />
                {/* Heading */}
                <h1 style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                    PrepJava
                </h1>
            </div>


            {/* fields section */}
            <div style={leftSectionStyle}>
                <div
                    style={{ position: 'relative' }}
                    onMouseLeave={() => handleMouseLeave('dsa')}
                >
                    <button onClick={() => toggleDropdown('dsa')} style={buttonStyle}>
                        DSA <span style={caretStyle}>&#9662;</span>
                    </button>
                    {dropdowns.dsa && (
                        <div
                            style={dropdownStyle}
                            onMouseLeave={() => handleMouseLeave('dsa')}
                        >
                            <Link to="/dsa/intro" style={{ ...buttonStyle, ...dropdownItemStyle }}>DSA Intro</Link>
                            <Link to="/dsa/problems" style={{ ...buttonStyle, ...dropdownItemStyle }}>DSA Problems</Link>
                            <Link to='/sql-questions' style={{ ...buttonStyle, ...dropdownItemStyle }}>SQL Queries</Link>
                        </div>
                    )}
                </div>

                <HoverLink to="/dbmsoverview">DBMS</HoverLink>

                <div
                    style={{ position: 'relative' }}
                    onMouseLeave={() => handleMouseLeave('frameworks')}
                >
                    <button onClick={() => toggleDropdown('frameworks')} style={buttonStyle}>
                        Frameworks <span style={caretStyle}>&#9662;</span>
                    </button>
                    {dropdowns.frameworks && (
                        <div
                            style={dropdownStyle}
                            onMouseLeave={() => handleMouseLeave('frameworks')}
                        >
                            <Link to="/hibernate" style={{ ...buttonStyle, ...dropdownItemStyle }}>Hibernate</Link>
                            <Link to="/springboot" style={{ ...buttonStyle, ...dropdownItemStyle }}>Spring Boot</Link>
                        </div>
                    )}
                </div>

                <HoverLink to="/interview">interview</HoverLink>
            </div>

            <form
                style={{ ...searchBarStyle, ...(isFocused ? searchBarHoverStyle : {}) }}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}
            >
                <div style={{ position: 'relative', width: '300px' }}>
                    <input
                        type="text"
                        placeholder="Search topic.."
                        style={{
                            ...inputStyle,
                            paddingRight: '40px' // leave space for the icon
                        }}
                        value={searchTerm}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearchTerm(value);

                            const filtered = topics.filter(topic =>
                                topic.toLowerCase().includes(value.toLowerCase())
                            );
                            setSuggestions(filtered);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {
                            setIsFocused(false);
                            setTimeout(() => setShowSuggestions(false), 200);
                        }}
                    />

                    {/* Search icon button inside input */}
                    <button
                        type="submit"
                        style={searchIconButtonStyle}
                        onClick={handleSearch}
                    >
                        🔍
                    </button>

                    {showSuggestions && (
                        <div style={suggestionsBoxStyle}>
                            {suggestions.length > 0 ? (
                                suggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        style={suggestionItemStyle}
                                        onClick={() => {
                                            setSearchTerm(suggestion);
                                            setShowSuggestions(false);
                                            if (suggestion.toLowerCase().includes("spring")) {
                                                navigate("/springboot");
                                            }
                                        }}
                                    >
                                        {suggestion}
                                    </div>
                                ))
                            ) : (
                                <div style={noMatchStyle}>No topic match found</div>
                            )}
                        </div>
                    )}
                </div>
            </form>

            {/* Login and Profile Section */}
            <div style={{ display: 'flex', position: 'relative' }}>
                {loggedIn ? (
                    <div
                        onClick={() => navigate('/profile')}
                        onMouseLeave={() => handleMouseLeave('profile')}
                        style={profileIconStyle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                            <path d="M14 13s-1-1-6-1-6 1-6 1 1-4 6-4 6 3 6 4z" />
                        </svg>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        style={loginButtonStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

const noMatchStyle = {
    padding: '8px 12px',
    fontSize: '14px',
    color: '#888',
    textAlign: 'center',
};

const suggestionsBoxStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '2px',
    zIndex: 10,
    maxHeight: '150px',
    overflowY: 'auto',
};

const suggestionItemStyle = {
    padding: '8px 12px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
    fontSize: '14px',
};



const searchIconButtonStyle = {
    position: 'absolute',
    right: '-11px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#007bff',
    border: 'none',
    borderRadius: '0 35% 35% 0', // top-right, bottom-right rounded; top-left, bottom-left square
    color: '#fff',
    width: '50px',
    height: '32px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};



const navbarStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures proper spacing
    backgroundColor: '#2c3e50',
    padding: '2px 20px', // Added padding to prevent elements from sticking to the edges
};

const leftSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    margin: '1px 50px', // Reduced margin to prevent layout shifts
};

const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2c3e50',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    padding: '10px 0',
    minWidth: '100px',
};

const buttonStyle = {
    border: 'none',
    textDecoration: 'none',
    color: '#ffffff',
    padding: '5px 10px',
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '20px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    position: 'relative', // Needed for underline effect
    overflow: 'hidden',
};

const underlineStyle = {
    content: '""',
    position: 'absolute',
    left: '50%', // Start from the center
    bottom: '0',
    width: '0%',
    height: '2px',
    backgroundColor: '#00bfa6',
    transition: 'width 0.4s ease-in-out, left 0.4s ease-in-out, opacity 0.3s',
    opacity: 0, // Initially hidden
};

const caretStyle = {
    marginLeft: '5px',
};

const dropdownItemStyle = {
    whiteSpace: 'nowrap',
    padding: '5px 15px',
};

const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '5px 10px',
    backgroundColor: 'white',
    marginRight: 'auto', // Instead of fixed marginLeft
};

const searchBarHoverStyle = {
    border: '1px solid #00bfa6',
    boxShadow: '0 0 8px rgba(0, 191, 166, 0.6)',
};

const inputStyle = {
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    width: '200px',
};

const loginButtonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '5px 20px',
    fontSize: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    /* Corrected alignment */
    marginLeft: '10px', // Small spacing instead of static 250px
};

const profileIconStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '20px',

    /* Corrected alignment */
    marginLeft: '10px', // Small spacing instead of static 250px
};

