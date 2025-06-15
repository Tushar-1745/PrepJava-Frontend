// import React, { useState, useContext, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { login } from '../api/api.js';
// import LoginModal from '../modals/LoginModal.js';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const { setLoggedIn, setLoggedInUsername, setLoggedInUserId } = useContext(AuthContext);

//     const [openModal, setOpenModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState("");

//     const { loginUser } = useContext(AuthContext);

//     // Check local storage for logged-in user
//     useEffect(() => {
//         const storedUser = localStorage.getItem('loggedInUser');
//         if (storedUser) {
//             const userData = JSON.parse(storedUser);
//             setLoggedIn(true);
//             setLoggedInUsername(userData.username);
//             setLoggedInUserId(userData.id);
//             navigate('/javapage');
//         }
//     }, [setLoggedIn, setLoggedInUsername, setLoggedInUserId, navigate]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setModalMessage('');

//         try {
//             const data = await login(username, password); // Fetch user data from API
//             console.log("data is", data);
//             console.log("user id is", data.user.id);

//             if (data) {
//                 // Pass both username and user id returned from your API
//                 loginUser(username, data.user.id);

//                 localStorage.setItem('token', data.token); // Store the token

//                 setModalMessage('Login successful!');
//                 setOpenModal(true);

//                 setTimeout(() => {
//                     setOpenModal(false);
//                     setModalMessage('');
//                     navigate('/javapage');
//                 }, 3000);
//             }
//         } catch (err) {
//             console.log("Error is:", err);

//             if (err.response && err.response.status === 401) {
//                 setModalMessage('Invalid credentials. Please check your username and password.');
//             } else {
//                 setModalMessage('Login failed. Sorry for the inconvenience. Please try again later.');
//             }

//             setOpenModal(true);
//             setTimeout(() => setOpenModal(false), 3000);
//         }
//     };


//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f7f9fc' }}>
//             <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden', width: '800px', maxWidth: '90%' }}>

//                 {/* Left Section */}
//                 <div style={{ flex: '1', background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                     <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>PrepJava</h1>
//                     <h2 style={{ fontSize: '1.2em', marginBottom: '20px', fontStyle: 'italic' }}>Unlock Your Coding Potential</h2>
//                     <p style={{ fontSize: '1em', lineHeight: '1.5' }}>
//                         Join PrepJava to learn Java programming in a fun and interactive way.
//                         Master the fundamentals, dive deep into advanced topics, and build real-world projects.
//                     </p>
//                 </div>

//                 {/* Right Section - Login Form */}
//                 <div style={{ flex: '1', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                     <h1 style={{ marginBottom: '20px', color: '#333' }}>Login</h1>
//                     <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//                         <div style={{ position: 'relative', marginBottom: '20px', textAlign: 'left', width: '100%' }}>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 placeholder="Email or Mobile Number"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 style={{ width: '95%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
//                             />
//                         </div>
//                         <div style={{ position: 'relative', marginBottom: '20px', textAlign: 'left', width: '100%' }}>
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 id="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 style={{ width: '95%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
//                             />
//                             <span
//                                 style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '1.2em' }}
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? '👁️' : '👁️‍🗨️'}
//                             </span>
//                         </div>
//                         <button
//                             type="submit"
//                             style={{ width: '100%', padding: '10px', backgroundColor: '#3498db', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer' }}
//                             onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
//                             onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
//                         >
//                             Login
//                         </button>
//                         <p style={{ marginTop: '15px' }}>
//                             Don't have an account? <Link to="/signup" style={{ color: '#3498db', textDecoration: 'none' }}>Sign Up</Link>
//                         </p>
//                     </form>
//                 </div>

//                 {/* Login Modal */}
//                 {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
//             </div>
//         </div>
//     );
// };

// export default LoginPage;

import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { login } from '../api/api';
import LoginModal from '../modals/LoginModal';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const { setLoggedIn, setLoggedInUsername, setLoggedInUserId, loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setLoggedIn(true);
            setLoggedInUsername(userData.username);
            setLoggedInUserId(userData.id);
            navigate('/javapage');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalMessage('');
        setLoading(true);
        try {
            const data = await login(username, password);
            loginUser(username, data.user.id);
            localStorage.setItem('token', data.token);

            setModalMessage('Login successful!');
            setOpenModal(true);

            setTimeout(() => {
                setOpenModal(false);
                setModalMessage('');
                navigate('/javapage');
            }, 2000);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setModalMessage('Invalid credentials. Please check your username and password.');
            } else {
                setModalMessage('Login failed. Please try again later.');
            }
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username or Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                        disabled={loading}
                    />
                    <div style={styles.inputGroup}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                            disabled={loading}
                        />
                        <span style={styles.toggleVisibility} onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? <span style={styles.loadingSpinner}></span> : 'Login'}
                    </button>
                    <p style={styles.linkText}>
                        Don't have an account? <Link to="/signup" style={styles.link}>Register</Link>
                    </p>
                </form>
                {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        fontFamily: 'Arial, sans-serif',
    },
    container: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '400px',
        textAlign: 'center',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    title: {
        marginBottom: '1rem',
        color: '#333',
    },
    input: {
        width: '90%',
        padding: '0.75rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '1rem',
        marginBottom: '1rem', // ✅ Added for spacing between inputs
    },
    inputGroup: {
        position: 'relative',
        marginBottom: '1rem', // Already present
    },
    toggleVisibility: {
        position: 'absolute',
        right: '30px',
        top: '40%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        fontSize: '1.2rem',
        color: '#666',
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#2575fc',
        border: 'none',
        color: 'white',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingSpinner: {
        width: '18px',
        height: '18px',
        border: '3px solid #fff',
        borderTop: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
    linkText: {
        marginTop: '1rem',
        fontSize: '0.95rem',
    },
    link: {
        color: '#2575fc',
        textDecoration: 'none',
    },
};

// Add keyframes via JS if not defined globally
const styleSheet = document.styleSheets[0];
if (styleSheet) {
    const rule = `@keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }`;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
}

export default LoginPage;
