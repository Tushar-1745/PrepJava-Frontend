import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../api/api.js';

const EditProfile = () => {
    const { loggedInUsername, loggedInUserId } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [editedDetails, setEditedDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        photo: null,
        preview: 'Images/avatar.jpg',
    });

    const navigate = useNavigate();
    const API_URL = 'http://localhost:8080/api';

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (!loggedInUsername) return;
            try {
                setLoading(true);
                const userData = await fetchUserProfile(loggedInUsername);
                setUserDetails(userData);
                setEditedDetails({
                    firstName: userData.firstName || '',
                    lastName: userData.lastName || '',
                    email: userData.email || '',
                    mobileNumber: userData.mobileNumber || '',
                    password: '',
                    confirmPassword: '',
                    photo: null,
                    preview: userData.photo
                        ? `http://localhost:8080${userData.photo}`
                        : 'Images/avatar.jpg',
                });
            } catch (err) {
                setError('Error fetching user details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [loggedInUsername]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewURL = URL.createObjectURL(file);
            setEditedDetails(prevDetails => ({
                ...prevDetails,
                photo: file,
                preview: previewURL,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editedDetails.password !== editedDetails.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const formData = new FormData();
        formData.append("firstName", editedDetails.firstName);
        formData.append("lastName", editedDetails.lastName);
        formData.append("email", editedDetails.email);
        formData.append("password", editedDetails.password);
        if (editedDetails.photo) {
            formData.append("photo", editedDetails.photo);
        }

        try {
            await axios.put(`${API_URL}/${loggedInUserId}/updateprofile`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Profile updated successfully!");
            navigate('/profile');
        } catch (err) {
            alert("Error updating profile: " + err.response?.data);
        }
    };

    // Stylish CSS with light blue shades
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
            padding: '20px',
        },
        card: {
            background: '#ffffff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 8px 18px rgba(0, 0, 0, 0.2)',
            width: '100%',
            maxWidth: '450px',
            textAlign: 'center',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0d47a1',
            marginBottom: '20px',
        },
        label: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#1565c0',
            textAlign: 'left',
            display: 'block',
            marginBottom: '6px',
        },
        input: {
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            border: '2px solid #bbdefb',
            borderRadius: '8px',
            background: '#f0f9ff',
            outline: 'none',
            fontSize: '14px',
            transition: '0.3s',
        },
        inputHover: {
            borderColor: '#0d47a1',
            boxShadow: '0 0 8px rgba(13, 71, 161, 0.2)',
        },
        button: {
            width: '100%',
            padding: '12px',
            marginTop: '10px',
            background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s',
            boxShadow: '0px 4px 10px rgba(30, 136, 229, 0.3)',
        },
        imageContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20px',
        },
        image: {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',  // Keeps shadow for depth
        },
        uploadLabel: {
            marginTop: '10px',
            fontSize: '14px',
            color: '#1e88e5',
            cursor: 'pointer',
            fontWeight: '500',
            transition: '0.3s',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Edit Profile</h2>

                {loading ? (
                    <p style={{ color: '#555', textAlign: 'center' }}>Loading...</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={styles.imageContainer}>
                            <img src={editedDetails.preview} alt="Profile Preview" style={styles.image} />
                            <label style={styles.uploadLabel}>
                                Change Photo
                                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                            </label>
                        </div>

                        <label style={styles.label}>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={editedDetails.firstName}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />

                        <label style={styles.label}>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={editedDetails.lastName}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />

                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={editedDetails.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />

                        <label style={styles.label}>Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={editedDetails.mobileNumber}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />

                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={editedDetails.password}
                            onChange={handleChange}
                            style={styles.input}
                        />

                        <label style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={editedDetails.confirmPassword}
                            onChange={handleChange}
                            style={styles.input}
                        />

                        <button type="submit" style={styles.button}>Save Changes</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EditProfile;
