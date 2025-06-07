

// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { login } from '../api/api.js';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false); // State for password visibility
//     const navigate = useNavigate();

//     const { setLoggedIn, setLoggedInUsername, setLoggedInUserId } = useContext(AuthContext);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const data = await login(username, password);

//             if (data) {
//                 setLoggedIn(true);
//                 setLoggedInUsername(username);
//                 setLoggedInUserId(data.id);
//                 alert('Login successful!');
//                 navigate('/javapage');
//             } else {
//                 setError('Invalid credentials');
//                 alert('Invalid credentials');
//             }
//         } catch (err) {
//             setError('Login failed. Please check your credentials and try again.');
//             alert('Login failed. Please check your credentials and try again.');
//         }
//     };

//     const styles = {
//         wrapper: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             minHeight: '100vh',
//             backgroundColor: '#f0f2f5',
//         },
//         container: {
//             display: 'flex',
//             backgroundColor: 'white',
//             borderRadius: '10px',
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//             overflow: 'hidden',
//             width: '800px',
//             maxWidth: '90%',
//         },
//         leftSection: {
//             flex: '1',
//             backgroundColor: '#007BFF', // You can adjust the background color
//             color: 'white',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//         },
//         rightSection: {
//             flex: '1',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//         },
//         heading: {
//             fontSize: '2.5em',
//             marginBottom: '10px',
//         },
//         tagline: {
//             fontSize: '1.2em',
//             marginBottom: '20px',
//             fontStyle: 'italic',
//         },
//         description: {
//             fontSize: '1em',
//             lineHeight: '1.5',
//         },
//         form: {
//             width: '100%',
//         },
//         inputGroup: {
//             position: 'relative', // For positioning the eye icon
//             marginBottom: '20px',
//             textAlign: 'left',
//             width: '100%',
//         },
//         input: {
//             width: '95%',
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//         },
//         eyeIcon: {
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             transform: 'translateY(-50%)',
//             cursor: 'pointer',
//             fontSize: '1.2em',
//         },
//         checkboxGroup: {
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px',
//         },
//         checkbox: {
//             marginRight: '5px',
//         },
//         button: {
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#007BFF',
//             border: 'none',
//             color: 'white',
//             borderRadius: '5px',
//             cursor: 'pointer',
//         },
//         buttonHover: {
//             backgroundColor: '#0056b3',
//         },
//         signupLink: {
//             marginTop: '15px',
//         },
//         link: {
//             color: '#007BFF',
//             textDecoration: 'none',
//         },
//     };

//     return (
//         <div style={styles.wrapper}>
//             <div style={styles.container}>
//                 {/* Left Section */}
//                 <div style={styles.leftSection}>
//                     <h1 style={styles.heading}>PrepJava</h1>
//                     <h2 style={styles.tagline}>Unlock Your Coding Potential</h2>
//                     <p style={styles.description}>
//                         Join PrepJava to learn Java programming in a fun and interactive way.
//                         Master the fundamentals, dive deep into advanced topics, and build real-world projects.
//                     </p>
//                 </div>

//                 {/* Right Section - Login Form */}
//                 <div style={styles.rightSection}>
//                     <h1 style={{ marginBottom: '20px', color: '#333' }}>Login</h1>
//                     <form onSubmit={handleSubmit} style={styles.form}>
//                         <div style={styles.inputGroup}>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 placeholder="Email or Mobile Number"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 style={styles.input}
//                             />
//                         </div>
//                         <div style={styles.inputGroup}>
//                             <input
//                                 type={showPassword ? 'text' : 'password'} // Toggle input type
//                                 id="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 style={styles.input}
//                             />
//                             <span
//                                 style={styles.eyeIcon}
//                                 onClick={() => setShowPassword(!showPassword)} // Toggle visibility
//                             >
//                                 {showPassword ? '👁️' : '👁️‍🗨️'} {/* Eye and eye-slash symbols */}
//                             </span>
//                         </div>
//                         <div style={styles.checkboxGroup}>
//                             <input
//                                 type="checkbox"
//                                 id="rememberMe"
//                                 checked={rememberMe}
//                                 onChange={() => setRememberMe(!rememberMe)}
//                                 style={styles.checkbox}
//                             />
//                             <label htmlFor="rememberMe">Keep me logged in</label>
//                         </div>
//                         <button
//                             type="submit"
//                             style={styles.button}
//                             onMouseOver={(e) =>
//                                 (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//                             }
//                             onMouseOut={(e) =>
//                                 (e.target.style.backgroundColor = styles.button.backgroundColor)
//                             }
//                         >
//                             Login
//                         </button>
//                         <p style={styles.signupLink}>
//                             Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { login } from '../api/api.js';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const { setLoggedIn, setLoggedInUsername, setLoggedInUserId } = useContext(AuthContext);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const data = await login(username, password);

//             if (data) {
//                 setLoggedIn(true);
//                 setLoggedInUsername(username);
//                 setLoggedInUserId(data.id);
//                 alert('Login successful!');
//                 navigate('/javapage');
//             } else {
//                 setError('Invalid credentials');
//                 alert('Invalid credentials');
//             }
//         } catch (err) {
//             setError('Login failed. Please check your credentials and try again.');
//             alert('Login failed. Please check your credentials and try again.');
//         }
//     };

//     const styles = {
//         wrapper: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             minHeight: '100vh',
//             backgroundColor: '#f7f9fc', // A slightly fresher light background
//         },
//         container: {
//             display: 'flex',
//             backgroundColor: 'white',
//             borderRadius: '10px',
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//             overflow: 'hidden',
//             width: '800px',
//             maxWidth: '90%',
//         },
//         leftSection: {
//             flex: '1',
//             /* Using a vibrant gradient inspired by your navbar's color */
//             background: 'linear-gradient(135deg, #3498db, #2980b9)',
//             color: 'white',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//         },
//         rightSection: {
//             flex: '1',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//         },
//         heading: {
//             fontSize: '2.5em',
//             marginBottom: '10px',
//         },
//         tagline: {
//             fontSize: '1.2em',
//             marginBottom: '20px',
//             fontStyle: 'italic',
//         },
//         description: {
//             fontSize: '1em',
//             lineHeight: '1.5',
//         },
//         form: {
//             width: '100%',
//         },
//         inputGroup: {
//             position: 'relative',
//             marginBottom: '20px',
//             textAlign: 'left',
//             width: '100%',
//         },
//         input: {
//             width: '95%',
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//         },
//         eyeIcon: {
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             transform: 'translateY(-50%)',
//             cursor: 'pointer',
//             fontSize: '1.2em',
//         },
//         checkboxGroup: {
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px',
//         },
//         checkbox: {
//             marginRight: '5px',
//         },
//         button: {
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#3498db',
//             border: 'none',
//             color: 'white',
//             borderRadius: '5px',
//             cursor: 'pointer',
//         },
//         buttonHover: {
//             backgroundColor: '#2980b9',
//         },
//         signupLink: {
//             marginTop: '15px',
//         },
//         link: {
//             color: '#3498db',
//             textDecoration: 'none',
//         },
//     };

//     return (
//         <div style={styles.wrapper}>
//             <div style={styles.container}>
//                 {/* Left Section */}
//                 <div style={styles.leftSection}>
//                     <h1 style={styles.heading}>PrepJava</h1>
//                     <h2 style={styles.tagline}>Unlock Your Coding Potential</h2>
//                     <p style={styles.description}>
//                         Join PrepJava to learn Java programming in a fun and interactive way.
//                         Master the fundamentals, dive deep into advanced topics, and build real-world projects.
//                     </p>
//                 </div>

//                 {/* Right Section - Login Form */}
//                 <div style={styles.rightSection}>
//                     <h1 style={{ marginBottom: '20px', color: '#333' }}>Login</h1>
//                     <form onSubmit={handleSubmit} style={styles.form}>
//                         <div style={styles.inputGroup}>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 placeholder="Email or Mobile Number"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 style={styles.input}
//                             />
//                         </div>
//                         <div style={styles.inputGroup}>
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 id="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 style={styles.input}
//                             />
//                             <span
//                                 style={styles.eyeIcon}
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? '👁️' : '👁️‍🗨️'}
//                             </span>
//                         </div>
//                         <div style={styles.checkboxGroup}>
//                             <input
//                                 type="checkbox"
//                                 id="rememberMe"
//                                 checked={rememberMe}
//                                 onChange={() => setRememberMe(!rememberMe)}
//                                 style={styles.checkbox}
//                             />
//                             <label htmlFor="rememberMe">Keep me logged in</label>
//                         </div>
//                         <button
//                             type="submit"
//                             style={styles.button}
//                             onMouseOver={(e) =>
//                                 (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//                             }
//                             onMouseOut={(e) =>
//                                 (e.target.style.backgroundColor = styles.button.backgroundColor)
//                             }
//                         >
//                             Login
//                         </button>
//                         <p style={styles.signupLink}>
//                             Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { login } from '../api/api.js';
// import LoginModal from '../modals/LoginModal.js';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const { setLoggedIn, setLoggedInUsername, setLoggedInUserId } = useContext(AuthContext);

//     const [openModal, setOpenModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState(""); // New state for modal

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setModalMessage('');
    
//         try {
//             const data = await login(username, password);
    
//             if (data) {
//                 setLoggedIn(true);
//                 setLoggedInUsername(username);
//                 setLoggedInUserId(data.id);
//                 setModalMessage('Login successful!');
//                 setOpenModal(true);
    
//                 setTimeout(() => {
//                     setOpenModal(false);
//                     setModalMessage('');
//                     navigate('/javapage'); // Redirect after modal closes
//                 }, 3000);
//             }
//         } catch (err) {
//             console.log("Error is:", err);
    
//             if (err.response && err.response.status === 401) {
//                 // ❌ Backend rejected credentials (401 Unauthorized)
//                 setModalMessage('Invalid credentials. Please check your username and password.');
//             } else {
//                 // ⚠️ Backend is down, unreachable, or another unexpected error
//                 setModalMessage('Login failed. Sorry for the inconvenience. Please try again later.');
//             }
    
//             setOpenModal(true);
//             setTimeout(() => setOpenModal(false), 3000);
//         }
//     };
    
    

//     const styles = {
//         wrapper: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             minHeight: '100vh',
//             backgroundColor: '#f7f9fc', // A slightly fresher light background
//         },
//         container: {
//             display: 'flex',
//             backgroundColor: 'white',
//             borderRadius: '10px',
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//             overflow: 'hidden',
//             width: '800px',
//             maxWidth: '90%',
//         },
//         leftSection: {
//             flex: '1',
//             /* Using a vibrant gradient inspired by your navbar's color */
//             background: 'linear-gradient(135deg, #3498db, #2980b9)',
//             color: 'white',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//         },
//         rightSection: {
//             flex: '1',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//         },
//         heading: {
//             fontSize: '2.5em',
//             marginBottom: '10px',
//         },
//         tagline: {
//             fontSize: '1.2em',
//             marginBottom: '20px',
//             fontStyle: 'italic',
//         },
//         description: {
//             fontSize: '1em',
//             lineHeight: '1.5',
//         },
//         form: {
//             width: '100%',
//         },
//         inputGroup: {
//             position: 'relative',
//             marginBottom: '20px',
//             textAlign: 'left',
//             width: '100%',
//         },
//         input: {
//             width: '95%',
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//         },
//         eyeIcon: {
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             transform: 'translateY(-50%)',
//             cursor: 'pointer',
//             fontSize: '1.2em',
//         },
//         checkboxGroup: {
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px',
//         },
//         checkbox: {
//             marginRight: '5px',
//         },
//         button: {
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#3498db',
//             border: 'none',
//             color: 'white',
//             borderRadius: '5px',
//             cursor: 'pointer',
//         },
//         buttonHover: {
//             backgroundColor: '#2980b9',
//         },
//         signupLink: {
//             marginTop: '15px',
//         },
//         link: {
//             color: '#3498db',
//             textDecoration: 'none',
//         },
//     };

//     return (
//         <div style={styles.wrapper}>
//             <div style={styles.container}>
//                 {/* Left Section */}
//                 <div style={styles.leftSection}>
//                     <h1 style={styles.heading}>PrepJava</h1>
//                     <h2 style={styles.tagline}>Unlock Your Coding Potential</h2>
//                     <p style={styles.description}>
//                         Join PrepJava to learn Java programming in a fun and interactive way.
//                         Master the fundamentals, dive deep into advanced topics, and build real-world projects.
//                     </p>
//                 </div>

//                 {/* Right Section - Login Form */}
//                 <div style={styles.rightSection}>
//                     <h1 style={{ marginBottom: '20px', color: '#333' }}>Login</h1>
//                     <form onSubmit={handleSubmit} style={styles.form}>
//                         <div style={styles.inputGroup}>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 placeholder="Email or Mobile Number"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 style={styles.input}
//                             />
//                         </div>
//                         <div style={styles.inputGroup}>
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 id="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 style={styles.input}
//                             />
//                             <span
//                                 style={styles.eyeIcon}
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? '👁️' : '👁️‍🗨️'}
//                             </span>
//                         </div>
//                         <div style={styles.checkboxGroup}>
//                             <input
//                                 type="checkbox"
//                                 id="rememberMe"
//                                 checked={rememberMe}
//                                 onChange={() => setRememberMe(!rememberMe)}
//                                 style={styles.checkbox}
//                             />
//                             <label htmlFor="rememberMe">Keep me logged in</label>
//                         </div>
//                         <button
//                             type="submit"
//                             style={styles.button}
//                             onMouseOver={(e) =>
//                                 (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//                             }
//                             onMouseOut={(e) =>
//                                 (e.target.style.backgroundColor = styles.button.backgroundColor)
//                             }
//                         >
//                             Login
//                         </button>
//                         <p style={styles.signupLink}>
//                             Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
//                         </p>
//                     </form>
//                 </div>

//                 {/* Login Modal */}
//             {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


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

//     // ✅ Check LocalStorage on Component Mount
//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (storedUser) {
//             setLoggedIn(true);
//             setLoggedInUsername(storedUser.username);
//             setLoggedInUserId(storedUser.id);
//             navigate("/javapage");
//         }
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setModalMessage('');
    
//         try {
//             const data = await login(username, password);
    
//             if (data) {
//                 setLoggedIn(true);
//                 setLoggedInUsername(username);
//                 setLoggedInUserId(data.id);
                
//                 // ✅ Save user details in localStorage
//                 localStorage.setItem("user", JSON.stringify({ username, id: data.id }));

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
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Email or Mobile Number" value={username} onChange={(e) => setUsername(e.target.value)} required />
//                 <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Login</button>
//             </form>
//             {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
//         </div>
//     );
// };

// export default LoginPage;

import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { login } from '../api/api.js';
import LoginModal from '../modals/LoginModal.js';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { setLoggedIn, setLoggedInUsername, setLoggedInUserId } = useContext(AuthContext);

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const { loginUser } = useContext(AuthContext);

    // Check local storage for logged-in user
    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setLoggedIn(true);
            setLoggedInUsername(userData.username);
            setLoggedInUserId(userData.id);
            navigate('/javapage');
        }
    }, [setLoggedIn, setLoggedInUsername, setLoggedInUserId, navigate]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setModalMessage('');
    
    //     try {
    //         const data = await login(username, password); // Fetch user data from API
    
    //         if (data) {
    //             loginUser(username); // ✅ Use loginUser instead of setLoggedIn
    
    //             localStorage.setItem('token', data.token); // Store the token
    
    //             setModalMessage('Login successful!');
    //             setOpenModal(true);
    
    //             setTimeout(() => {
    //                 setOpenModal(false);
    //                 setModalMessage('');
    //                 navigate('/javapage');
    //             }, 3000);
    //         }
    //     } catch (err) {
    //         console.log("Error is:", err);
    
    //         if (err.response && err.response.status === 401) {
    //             setModalMessage('Invalid credentials. Please check your username and password.');
    //         } else {
    //             setModalMessage('Login failed. Sorry for the inconvenience. Please try again later.');
    //         }
    
    //         setOpenModal(true);
    //         setTimeout(() => setOpenModal(false), 3000);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalMessage('');
        
        try {
            const data = await login(username, password); // Fetch user data from API
            console.log("data is", data);
            console.log("user id is", data.user.id);
        
            if (data) {
                // Pass both username and user id returned from your API
                loginUser(username, data.user.id);
        
                localStorage.setItem('token', data.token); // Store the token
        
                setModalMessage('Login successful!');
                setOpenModal(true);
        
                setTimeout(() => {
                    setOpenModal(false);
                    setModalMessage('');
                    navigate('/javapage');
                }, 3000);
            }
        } catch (err) {
            console.log("Error is:", err);
        
            if (err.response && err.response.status === 401) {
                setModalMessage('Invalid credentials. Please check your username and password.');
            } else {
                setModalMessage('Login failed. Sorry for the inconvenience. Please try again later.');
            }
        
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 3000);
        }
    };

    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f7f9fc' }}>
            <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden', width: '800px', maxWidth: '90%' }}>
                
                {/* Left Section */}
                <div style={{ flex: '1', background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>PrepJava</h1>
                    <h2 style={{ fontSize: '1.2em', marginBottom: '20px', fontStyle: 'italic' }}>Unlock Your Coding Potential</h2>
                    <p style={{ fontSize: '1em', lineHeight: '1.5' }}>
                        Join PrepJava to learn Java programming in a fun and interactive way.
                        Master the fundamentals, dive deep into advanced topics, and build real-world projects.
                    </p>
                </div>

                {/* Right Section - Login Form */}
                <div style={{ flex: '1', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ marginBottom: '20px', color: '#333' }}>Login</h1>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <div style={{ position: 'relative', marginBottom: '20px', textAlign: 'left', width: '100%' }}>
                            <input
                                type="text"
                                id="username"
                                placeholder="Email or Mobile Number"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={{ width: '95%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            />
                        </div>
                        <div style={{ position: 'relative', marginBottom: '20px', textAlign: 'left', width: '100%' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ width: '95%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                            />
                            <span
                                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '1.2em' }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>
                        <button
                            type="submit"
                            style={{ width: '100%', padding: '10px', backgroundColor: '#3498db', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer' }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
                        >
                            Login
                        </button>
                        <p style={{ marginTop: '15px' }}>
                            Don't have an account? <Link to="/signup" style={{ color: '#3498db', textDecoration: 'none' }}>Sign Up</Link>
                        </p>
                    </form>
                </div>

                {/* Login Modal */}
                {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
            </div>
        </div>
    );
};

export default LoginPage;
