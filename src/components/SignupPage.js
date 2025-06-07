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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/api.js'; // Adjust this path as needed

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '', // Added confirmPassword to state
    });

    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.mobileNumber.length !== 10) {
            newErrors.mobileNumber = "Mobile number must be 10 digits";
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long, contain one uppercase letter, one digit, and one special character";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const data = await signup(formData);
                console.log('Form Submitted:', data);
                alert('Signup successful!');
                navigate('/login');
            } catch (error) {
                console.error('Error:', error);
                alert('Signup failed! Please try again.');
            }
        }
    };

    const styles = {
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f7f9fc', // Fresh light background for the page
        },
        container: {
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '800px',
            maxWidth: '90%',
        },
        leftSection: {
            flex: '1',
            background: 'linear-gradient(135deg, #3498db, #2980b9)', // Vibrant gradient background
            color: 'white',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        rightSection: {
            flex: '1',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        leftHeading: {
            fontSize: '2.5em',
            marginBottom: '10px',
        },
        leftTagline: {
            fontSize: '1.2em',
            marginBottom: '20px',
            fontStyle: 'italic',
        },
        leftDescription: {
            fontSize: '1em',
            lineHeight: '1.5',
        },
        title: {
            marginBottom: '20px',
            color: '#333',
            textAlign: 'center',
        },
        inputGroup: {
            marginBottom: '20px',
            position: 'relative',
            textAlign: 'left',
        },
        input: {
            width: '95%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
        error: {
            color: 'red',
            fontSize: '0.8rem',
            marginTop: '5px',
        },
        toggleVisibility: {
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '1.2rem',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#3498db',
            border: 'none',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#2980b9',
        },
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                {/* Left Section with PrepJava branding */}
                <div style={styles.leftSection}>
                    <h1 style={styles.leftHeading}>PrepJava</h1>
                    <h2 style={styles.leftTagline}>Unlock Your Coding Potential</h2>
                    <p style={styles.leftDescription}>
                        Join PrepJava to learn Java programming in a fun and interactive way.
                        Master the fundamentals, dive deep into advanced topics, and build real-world projects.
                    </p>
                </div>

                {/* Right Section - Signup Form */}
                <div style={styles.rightSection}>
                    <h1 style={styles.title}>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.inputGroup}>
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
                        </div>
                        <div style={styles.inputGroup}>
                            <input
                                type={passwordVisible ? "text" : "password"}
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
                                {passwordVisible ? '🙈' : '👁️'}
                            </span>
                            {errors.password && <p style={styles.error}>{errors.password}</p>}
                        </div>
                        <div style={styles.inputGroup}>
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
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
                                {confirmPasswordVisible ? '🙈' : '👁️'}
                            </span>
                            {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
                        </div>
                        <button
                            type="submit"
                            style={styles.button}
                            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

