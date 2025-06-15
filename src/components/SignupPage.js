// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {signup} from '../api/api.js'; // Adjust this path as needed

// const SignupPage = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         mobileNumber: '',
//         password: '',
//         // confirmPassword: '',
//     });

//     const [errors, setErrors] = useState({});
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         setErrors({ ...errors, [name]: '' });
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (formData.mobileNumber.length !== 10) {
//             newErrors.mobileNumber = "Mobile number must be 10 digits";
//         }

//         const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!passwordPattern.test(formData.password)) {
//             newErrors.password = "Password must be at least 8 characters long, contain one uppercase letter, one digit, and one special character";
//         }

//         if (formData.password !== formData.confirmPassword) {
//             newErrors.confirmPassword = "Passwords do not match";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             try {
//                 const data = await signup(formData);
//                 console.log('Form Submitted:', data);
//                 alert('Signup successful!');
//                 navigate('/login');
//             } catch (error) {
//                 console.error('Error:', error);
//                 alert('Signup failed! Please try again.');
//             }
//         }
//     };

//     const styles = {
//         wrapper: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh',
//             backgroundColor: '#f5f5f5',
//         },
//         container: {
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '10px',
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//             width: '450px',
//             textAlign: 'center',
//         },
//         title: {
//             marginBottom: '20px',
//             color: '#333',
//         },
//         inputGroup: {
//             marginBottom: '20px',
//             position: 'relative',
//             textAlign: 'left',
//         },
//         input: {
//             width: '95%',
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//         },
//         error: {
//             color: 'red',
//             fontSize: '0.8rem',
//             marginTop: '5px',
//         },
//         toggleVisibility: {
//             position: 'absolute',
//             right: '10px',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             cursor: 'pointer',
//             fontSize: '1.2rem',
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
//     };

//     return (
//         <div style={styles.wrapper}>
//             <div style={styles.container}>
//                 <h1 style={styles.title}>Sign Up</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type="text"
//                             name="firstName"
//                             placeholder="First Name"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                         />
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type="text"
//                             name="lastName"
//                             placeholder="Last Name"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                         />
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                         />
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type="text"
//                             name="mobileNumber"
//                             placeholder="Mobile Number"
//                             value={formData.mobileNumber}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                         />
//                         {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type={passwordVisible ? "text" : "password"}
//                             name="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                         />
//                         <span
//                             style={styles.toggleVisibility}
//                             onClick={() => setPasswordVisible(!passwordVisible)}
//                         >
//                             {passwordVisible ? '🙈' : '👁️'}
//                         </span>
//                         {errors.password && <p style={styles.error}>{errors.password}</p>}
//                     </div>
//                     <div style={styles.inputGroup}>
//                         <input
//                             type={confirmPasswordVisible ? "text" : "password"}
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             // value={formData.confirmPassword}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                         />
//                         <span style={styles.toggleVisibility} onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
//                             {confirmPasswordVisible ? '🙈' : '👁️'}
//                         </span>
//                         {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
//                     </div>
//                     <button
//                         type="submit" style={styles.button} onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
//                         onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignupPage;

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/api';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';
import LoginModal from '../modals/LoginModal'; // Reuse for success/failure message

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            navigate('/javapage');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (formData.mobileNumber.length !== 10) {
            newErrors.mobileNumber = 'Mobile number must be 10 digits';
        }
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(formData.password)) {
            newErrors.password = 'Password must contain 8+ characters, 1 uppercase, 1 digit, and 1 special character';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const data = await signup(formData);
            setModalMessage('Signup successful!');
            setOpenModal(true);
            setTimeout(() => {
                setOpenModal(false);
                navigate('/login');
            }, 2000);
        } catch (error) {
            setModalMessage('Signup failed. Please try again.');
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.title}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}

                    <div style={styles.inputGroup}>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                        <span
                            style={styles.toggleVisibility}
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    {errors.password && <p style={styles.error}>{errors.password}</p>}

                    <div style={styles.inputGroup}>
                        <input
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                        <span
                            style={styles.toggleVisibility}
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        >
                            {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}

                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? <span style={styles.loadingSpinner}></span> : 'Sign Up'}
                    </button>
                </form>
                {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: '100vh',
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
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
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
        marginBottom: '1rem',
    },
    inputGroup: {
        position: 'relative',
        marginBottom: '1rem',
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
    error: {
        color: 'red',
        fontSize: '0.85rem',
        marginBottom: '0.75rem',
        textAlign: 'left',
        width: '90%',
        margin: '0 auto 1rem auto',
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
};

// Add keyframes via JS if not already defined globally
const styleSheet = document.styleSheets[0];
if (styleSheet) {
    const rule = `@keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }`;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
}

export default SignupPage;
