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
                        <Link to="/forgot-password" style={styles.link}>Forgot Password?</Link>
                    </p>

                    <p style={styles.linkText}>
                        Don't have an account? <Link to="/signup" style={styles.link}>Register</Link>
                    </p>
                </form>
                {openModal && <LoginModal message={modalMessage} onClose={() => setOpenModal(false)} />}
            </div>
        </div>
    );
};


export default LoginPage;


const styles = {
    page: {
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        fontFamily: 'Arial, sans-serif',
    },
    container: {
        backgroundColor: '#34495e',
        padding: '2rem',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '400px',
        textAlign: 'center',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
    title: {
        marginBottom: '1rem',
        color: '#ffffff',
        fontSize: '1.5rem',
    },
    input: {
        width: '90%',
        padding: '0.75rem',
        backgroundColor: '#2c3e50',
        color: 'white',
        border: '1px solid #1abc9c',
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
        color: '#1abc9c',
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#1abc9c',
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
        color: '#ecf0f1',
    },
    link: {
        color: '#1abc9c',
        textDecoration: 'none',
    },
};
