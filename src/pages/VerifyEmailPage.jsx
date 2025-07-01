// src/pages/VerifyEmailPage.jsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyEmailPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const BACKEND_URL = "https://prepjava-backend-6vfj.onrender.com";

    useEffect(() => {
        const token = new URLSearchParams(location.search).get('token');

        if (!token) {
            alert('No token found in the link.');
            navigate('/signup');
            return;
        }

        fetch(`${BACKEND_URL}/api/verify-email-token?token=${token}`)
            .then(async (res) => {
                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error(errorText || 'Verification failed');
                }
                return res.json();
            })
            .then((data) => {
                if (data.email) {
                    localStorage.setItem('verifiedEmail', data.email);
                    alert('Email verified successfully!');
                    navigate('/signup');
                } else {
                    throw new Error('Invalid or expired token');
                }
            })
            .catch((err) => {
                alert(err.message || 'Verification failed');
                navigate('/signup');
            });
    }, [navigate, location.search]);

    return (
        <div style={{ padding: '2rem', color: 'white', fontSize: '1.2rem' }}>
            Verifying your email...
        </div>
    );
};

export default VerifyEmailPage;
