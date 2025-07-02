// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signup, sendEmailVerification } from '../api/api';
// import { verifyEmail } from '../api/contactUsApi';
// import { FiEye, FiEyeOff } from 'react-icons/fi';
// import { AuthContext } from '../context/AuthContext';
// import LoginModal from '../modals/LoginModal';

// const SignupPage = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         isEmailVerified: false,
//         mobileNumber: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const [errors, setErrors] = useState({});
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');
//     const [openModal, setOpenModal] = useState(false);
//     const [emailVerificationSent, setEmailVerificationSent] = useState(false);
//     const [sendingVerification, setSendingVerification] = useState(false);


//     const { loginUser } = useContext(AuthContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUser = localStorage.getItem('loggedInUser');
//         if (storedUser) {
//             navigate('/javapage');
//         }
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         setErrors({ ...errors, [name]: '' });
//     };

//     useEffect(() => {
//         const storedUser = localStorage.getItem('loggedInUser');
//         if (storedUser) {
//             navigate('/javapage');
//         }

//         const verifiedEmail = localStorage.getItem("verifiedEmail");
//         const savedForm = localStorage.getItem("signupFormBackup");

//         if (verifiedEmail && savedForm) {
//             const parsedForm = JSON.parse(savedForm);
//             setFormData(prev => ({
//                 ...prev,
//                 ...parsedForm,
//                 isEmailVerified: true
//             }));
//             localStorage.removeItem("verifiedEmail");
//             localStorage.removeItem("signupFormBackup");
//         }
//     }, []);



//     const validateForm = () => {
//         const newErrors = {};
//         if (formData.mobileNumber.length !== 10) {
//             newErrors.mobileNumber = 'Mobile number must be 10 digits';
//         }
//         const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!passwordPattern.test(formData.password)) {
//             newErrors.password = 'Password must contain 8+ characters, 1 uppercase, 1 digit, and 1 special character';
//         }
//         if (formData.password !== formData.confirmPassword) {
//             newErrors.confirmPassword = 'Passwords do not match';
//         }
//         if (!formData.isEmailVerified) {
//             newErrors.email = 'Please verify your email before signing up';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const sendEmailVerificationLink = async () => {
//         if (!formData.email) {
//             setErrors(prev => ({ ...prev, email: 'Enter a valid email first' }));
//             return;
//         }

//         // Save partial form data (excluding passwords)
//         const { firstName, lastName, email, mobileNumber } = formData;
//         localStorage.setItem('signupFormBackup', JSON.stringify({ firstName, lastName, email, mobileNumber }));

//         setSendingVerification(true);

//         const result = await verifyEmail({ email: formData.email });

//         if (result === 'Email exists') {
//             setModalMessage('Email is already registered. Please login or reset your password.');
//             setOpenModal(true);
//             setTimeout(() => setOpenModal(false), 3000);
//             setSendingVerification(false);
//             return;
//         }
//         try {
//             await sendEmailVerification(formData.email);
//             setModalMessage('Verification link sent to your email');
//             setEmailVerificationSent(true);
//         } catch (err) {
//             setModalMessage('Failed to send verification link. Try again.');
//         } finally {
//             setOpenModal(true);
//             setTimeout(() => setOpenModal(false), 3000);
//             setSendingVerification(false);
//         }
//     };


//     // const sendEmailVerificationLink = async () => {
//     //     if (!formData.email) {
//     //         setErrors(prev => ({ ...prev, email: 'Enter a valid email first' }));
//     //         return;
//     //     }

//     //     setSendingVerification(true); // Start loading
//     //     try {
//     //         await sendEmailVerification(formData.email);
//     //         setModalMessage('Verification link sent to your email');
//     //         setEmailVerificationSent(true);
//     //     } catch (err) {
//     //         setModalMessage('Failed to send verification link. Try again.');
//     //     } finally {
//     //         setOpenModal(true);
//     //         setTimeout(() => setOpenModal(false), 3000);
//     //         setSendingVerification(false); // End loading
//     //     }
//     // };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         setLoading(true);
//         try {
//             const data = await signup(formData);
//             setModalMessage('Signup successful!');
//             setOpenModal(true);
//             setTimeout(() => {
//                 setOpenModal(false);
//                 navigate('/login');
//             }, 2000);
//         } catch (error) {
//             setModalMessage('Signup failed. Please try again.');
//             setOpenModal(true);
//             setTimeout(() => setOpenModal(false), 3000);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div style={styles.page}>
//             <div style={styles.container}>
//                 <h2 style={styles.title}>Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="firstName"
//                         placeholder="First Name"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         required
//                         style={styles.input}
//                     />
//                     <input
//                         type="text"
//                         name="lastName"
//                         placeholder="Last Name"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         required
//                         style={styles.input}
//                     />

// <div>
//   <input
//     type="email"
//     name="email"
//     placeholder="Email"
//     value={formData.email}
//     onChange={handleChange}
//     required
//     style={styles.input}
//   />
//   {!formData.isEmailVerified ? (
//     <div style={styles.verificationRight}>
//       {sendingVerification ? (
//         <span style={{ fontSize: '0.85rem', color: '#1abc9c' }}>Sending...</span>
//       ) : (
//         <span
//           onClick={sendEmailVerificationLink}
//           style={{
//             ...styles.verifyText,
//             color: emailVerificationSent ? '#95a5a6' : '#1abc9c',
//             cursor: emailVerificationSent ? 'default' : 'pointer',
//           }}
//         >
//           {emailVerificationSent ? 'Link Sent' : 'Send Verification Link'}
//         </span>
//       )}
//     </div>
//   ) : (
//     <div style={styles.verificationRight}>
//       <span style={styles.verifiedLabel}>Verified</span>
//     </div>
//   )}
// </div>


// {/* <div>
//   <input
//     type="email"
//     name="email"
//     placeholder="Email"
//     value={formData.email}
//     onChange={handleChange}
//     required
//     style={styles.input}
//   />
//   {!formData.isEmailVerified ? (
//     <div style={styles.verificationRight}>
//       <span
//         onClick={sendEmailVerificationLink}
//         style={{
//           ...styles.verifyText,
//           color: emailVerificationSent ? '#95a5a6' : '#1abc9c',
//           cursor: emailVerificationSent ? 'default' : 'pointer',
//         }}
//       >
//         {emailVerificationSent ? 'Link Sent' : 'Send Verification Link'}
//       </span>
//     </div>
//   ) : (
//     <div style={styles.verificationRight}>
//       <span style={styles.verifiedLabel}>Verified</span>
//     </div>
//   )}
// </div> */}

//                     {errors.email && <p style={styles.error}>{errors.email}</p>}

//                     <input
//                         type="text"
//                         name="mobileNumber"
//                         placeholder="Mobile Number"
//                         value={formData.mobileNumber}
//                         onChange={handleChange}
//                         required
//                         style={styles.input}
//                     />
//                     {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}

//                     <div style={styles.inputGroup}>
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
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
//                             {passwordVisible ? <FiEyeOff /> : <FiEye />}
//                         </span>
//                     </div>
//                     {errors.password && <p style={styles.error}>{errors.password}</p>}

//                     <div style={styles.inputGroup}>
//                         <input
//                             type={confirmPasswordVisible ? 'text' : 'password'}
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                         />
//                         <span
//                             style={styles.toggleVisibility}
//                             onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//                         >
//                             {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
//                         </span>
//                     </div>
//                     {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}

//                     <button type="submit" style={styles.button} disabled={loading}>
//                         {loading ? <span style={styles.loadingSpinner}></span> : 'Sign Up'}
//                     </button>
//                     <p style={styles.loginLink}>
//                         Already have an account?{' '}
//                         <span style={styles.loginAnchor} onClick={() => navigate('/login')}>
//                             Login
//                         </span>
//                     </p>
//                 </form>
//                 {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
//             </div>
//         </div>
//     );
// };

// const styles = {
//         loginLink: {
//             color: '#ecf0f1',
//             fontSize: '0.9rem',
//             marginTop: '1rem',
//         },

//         loginAnchor: {
//             color: '#1abc9c',
//             textDecoration: 'underline',
//             cursor: 'pointer',
//             marginLeft: '5px',
//         },
//         page: {
//             height: '100vh',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#2c3e50',
//             fontFamily: 'Arial, sans-serif',
//         },
//         container: {
//             backgroundColor: '#34495e',
//             padding: '2rem',
//             borderRadius: '10px',
//             width: '90%',
//             maxWidth: '400px',
//             boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
//             textAlign: 'center',
//         },
//         title: {
//             marginBottom: '1rem',
//             color: '#ffffff',
//             fontSize: '1.5rem',
//         },
//         input: {
//             width: '90%',
//             padding: '0.75rem',
//             backgroundColor: '#2c3e50',
//             color: '#ffffff',
//             border: '1px solid #1abc9c',
//             borderRadius: '5px',
//             fontSize: '1rem',
//             marginBottom: '1rem',
//         },
//         inputGroup: {
//             position: 'relative',
//             marginBottom: '1rem',
//         },
//         toggleVisibility: {
//             position: 'absolute',
//             right: '30px',
//             top: '40%',
//             transform: 'translateY(-50%)',
//             cursor: 'pointer',
//             fontSize: '1.2rem',
//             color: '#1abc9c',
//         },
//         error: {
//             color: '#e74c3c',
//             fontSize: '0.85rem',
//             marginBottom: '0.75rem',
//             textAlign: 'left',
//             width: '90%',
//             margin: '0 auto 1rem auto',
//         },
//         button: {
//             width: '100%',
//             padding: '0.75rem',
//             backgroundColor: '#1abc9c',
//             border: 'none',
//             color: 'white',
//             borderRadius: '5px',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             fontSize: '1rem',
//             transition: 'background-color 0.3s ease',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         loadingSpinner: {
//             width: '18px',
//             height: '18px',
//             border: '3px solid #fff',
//             borderTop: '3px solid transparent',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite',
//     },

//     verificationGroup: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         gap: '8px',
//         marginBottom: '1rem',
//     },
//     verifyBtn: {
//         backgroundColor: '#1abc9c',
//         color: 'white',
//         border: 'none',
//         padding: '0.5rem 0.75rem',
//         borderRadius: '5px',
//         fontSize: '0.85rem',
//         cursor: 'pointer',
//         whiteSpace: 'nowrap',
//     },
//     verificationRight: {
//         width: '90%',
//         textAlign: 'right',
//         marginTop: '-0.5rem',
//         marginBottom: '0.75rem',
//       },

//       verifyText: {
//         fontSize: '0.85rem',
//         textDecoration: 'underline',
//       },

//       verifiedLabel: {
//         fontSize: '0.85rem',
//         color: '#2ecc71',
//         fontWeight: 'bold',
//       }

//     };

//     // Add keyframes via JS if not already defined globally
//     const styleSheet = document.styleSheets[0];
//     if (styleSheet) {
//         const rule = `@keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//         }`;
//         styleSheet.insertRule(rule, styleSheet.cssRules.length);
//     }

// export default SignupPage;


import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, sendEmailVerification, sendMobileVerification, verifyMobileOtpAPI } from '../api/api';
import { verifyEmail } from '../api/contactUsApi';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';
import LoginModal from '../modals/LoginModal';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        isEmailVerified: false,
        mobileNumber: '',
        isMobileVerified: false,
        password: '',
        confirmPassword: '',
    });

    const [otp, setOtp] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [emailVerificationSent, setEmailVerificationSent] = useState(false);
    const [sendingVerification, setSendingVerification] = useState(false);
    const [mobileVerificationSent, setMobileVerificationSent] = useState(false);

    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) navigate('/javapage');

        const verifiedEmail = localStorage.getItem("verifiedEmail");
        const savedForm = localStorage.getItem("signupFormBackup");

        if (verifiedEmail && savedForm) {
            const parsedForm = JSON.parse(savedForm);
            setFormData(prev => ({
                ...prev,
                ...parsedForm,
                isEmailVerified: true
            }));
            localStorage.removeItem("verifiedEmail");
            localStorage.removeItem("signupFormBackup");
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
        if (!formData.isEmailVerified) {
            newErrors.email = 'Please verify your email before signing up';
        }
        if (!formData.isMobileVerified) {
            newErrors.mobileNumber = 'Please verify your mobile number before signing up';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmailVerificationLink = async () => {
        if (!formData.email) {
            setErrors(prev => ({ ...prev, email: 'Enter a valid email first' }));
            return;
        }

        const { firstName, lastName, email, mobileNumber } = formData;
        localStorage.setItem('signupFormBackup', JSON.stringify({ firstName, lastName, email, mobileNumber }));

        setSendingVerification(true);

        const result = await verifyEmail({ email: formData.email });

        if (result === 'Email exists') {
            setModalMessage('Email is already registered. Please login or reset your password.');
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 3000);
            setSendingVerification(false);
            return;
        }
        try {
            await sendEmailVerification(formData.email);
            setModalMessage('Verification link sent to your email');
            setEmailVerificationSent(true);
        } catch (err) {
            setModalMessage('Failed to send verification link. Try again.');
        } finally {
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 3000);
            setSendingVerification(false);
        }
    };

    const sendMobileVerificationLink = async () => {
        if (!formData.mobileNumber || formData.mobileNumber.length !== 10) {
            setErrors(prev => ({ ...prev, mobileNumber: 'Enter a valid 10-digit number' }));
            return;
        }

        try {
            setSendingVerification(true);
            await sendMobileVerification(formData.mobileNumber);
            setMobileVerificationSent(true);
            setModalMessage('OTP sent to your mobile number');
        } catch (err) {
            setModalMessage('Failed to send OTP. Try again.');
        } finally {
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 3000);
            setSendingVerification(false);
        }
    };

    const verifyMobileOtp = async () => {
        try {
            const result = await verifyMobileOtpAPI(formData.mobileNumber, otp);
            if (result === 'verified') {
                setFormData(prev => ({ ...prev, isMobileVerified: true }));
                setModalMessage('Mobile number verified!');
            } else {
                setModalMessage('Invalid OTP. Please try again.');
            }
        } catch (err) {
            setModalMessage('Verification failed. Try again.');
        } finally {
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 3000);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await signup(formData);
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
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required style={styles.input} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required style={styles.input} />

                    {/* Email */}
                    <div>
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
                        {!formData.isEmailVerified ? (
                            <div style={styles.verificationRight}>
                                {sendingVerification ? (
                                    <span style={{ fontSize: '0.85rem', color: '#1abc9c' }}>Sending...</span>
                                ) : (
                                    <span onClick={sendEmailVerificationLink} style={{
                                        ...styles.verifyText,
                                        color: emailVerificationSent ? '#95a5a6' : '#1abc9c',
                                        cursor: emailVerificationSent ? 'default' : 'pointer',
                                    }}>
                                        {emailVerificationSent ? 'Link Sent' : 'Send Verification Link'}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div style={styles.verificationRight}>
                                <span style={styles.verifiedLabel}>Verified</span>
                            </div>
                        )}
                    </div>
                    {errors.email && <p style={styles.error}>{errors.email}</p>}

                    {/* Mobile */}
                    <div>
                        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required style={styles.input} />
                        {!formData.isMobileVerified ? (
                            <div style={styles.verificationRight}>
                                {sendingVerification ? (
                                    <span style={{ fontSize: '0.85rem', color: '#1abc9c' }}>Sending...</span>
                                ) : (
                                    <span onClick={sendMobileVerificationLink} style={{
                                        ...styles.verifyText,
                                        color: mobileVerificationSent ? '#95a5a6' : '#1abc9c',
                                        cursor: mobileVerificationSent ? 'default' : 'pointer',
                                    }}>
                                        {mobileVerificationSent ? 'OTP Sent' : 'Send OTP'}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div style={styles.verificationRight}>
                                <span style={styles.verifiedLabel}>Verified</span>
                            </div>
                        )}
                    </div>
                    {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}

                    {/* OTP Input */}
                    {mobileVerificationSent && !formData.isMobileVerified && (
                        <div style={{ width: '90%', margin: '0 auto 1rem auto' }}>
                            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} style={styles.input} />
                            <button onClick={verifyMobileOtp} style={styles.verifyBtn} type="button">Verify OTP</button>
                        </div>
                    )}

                    {/* Password */}
                    <div style={styles.inputGroup}>
                        <input type={passwordVisible ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={styles.input} />
                        <span style={styles.toggleVisibility} onClick={() => setPasswordVisible(!passwordVisible)}>
                            {passwordVisible ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    {errors.password && <p style={styles.error}>{errors.password}</p>}

                    <div style={styles.inputGroup}>
                        <input type={confirmPasswordVisible ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required style={styles.input} />
                        <span style={styles.toggleVisibility} onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                            {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}

                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? <span style={styles.loadingSpinner}></span> : 'Sign Up'}
                    </button>
                    <p style={styles.loginLink}>Already have an account? <span style={styles.loginAnchor} onClick={() => navigate('/login')}>Login</span></p>
                </form>
                {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
            </div>
        </div>
    );
};

// 💅 STYLES (unchanged from previous for consistency)
const styles = {
    loginLink: { color: '#ecf0f1', fontSize: '0.9rem', marginTop: '1rem' },
    loginAnchor: { color: '#1abc9c', textDecoration: 'underline', cursor: 'pointer', marginLeft: '5px' },
    page: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3e50', fontFamily: 'Arial, sans-serif' },
    container: { backgroundColor: '#34495e', padding: '2rem', borderRadius: '10px', width: '90%', maxWidth: '400px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', textAlign: 'center' },
    title: { marginBottom: '1rem', color: '#ffffff', fontSize: '1.5rem' },
    input: { width: '90%', padding: '0.75rem', backgroundColor: '#2c3e50', color: '#ffffff', border: '1px solid #1abc9c', borderRadius: '5px', fontSize: '1rem', marginBottom: '1rem' },
    inputGroup: { position: 'relative', marginBottom: '1rem' },
    toggleVisibility: { position: 'absolute', right: '30px', top: '40%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '1.2rem', color: '#1abc9c' },
    error: { color: '#e74c3c', fontSize: '0.85rem', marginBottom: '0.75rem', textAlign: 'left', width: '90%', margin: '0 auto 1rem auto' },
    button: { width: '100%', padding: '0.75rem', backgroundColor: '#1abc9c', border: 'none', color: 'white', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    loadingSpinner: { width: '18px', height: '18px', border: '3px solid #fff', borderTop: '3px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' },
    verificationRight: { width: '90%', textAlign: 'right', marginTop: '-0.5rem', marginBottom: '0.75rem' },
    verifyText: { fontSize: '0.85rem', textDecoration: 'underline' },
    verifiedLabel: { fontSize: '0.85rem', color: '#2ecc71', fontWeight: 'bold' },
    verifyBtn: { backgroundColor: '#1abc9c', color: 'white', border: 'none', padding: '0.5rem 0.75rem', borderRadius: '5px', fontSize: '0.85rem', cursor: 'pointer', whiteSpace: 'nowrap' }
};

// Add CSS keyframes for spinner
const styleSheet = document.styleSheets[0];
if (styleSheet) {
    styleSheet.insertRule(`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`, styleSheet.cssRules.length);
}

export default SignupPage;
