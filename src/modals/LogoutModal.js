import React from "react";

const LogoutModal = ({ message, onClose }) => {
    if (!message) return null; // Don't render if there's no message

    const styles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 0.3s ease-in-out",
        },
        modal: {
            backgroundColor: "#fff",
            padding: "20px 30px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            width: "320px",
            transform: "scale(0.9)",
            animation: "scaleIn 0.3s ease-in-out forwards",
        },
        title: {
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
        },
        message: {
            fontSize: "1rem",
            color: "#555",
            marginBottom: "15px",
        },
        button: {
            padding: "10px 15px",
            backgroundColor: "#FF4D4D",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#CC0000",
        },
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2 style={styles.title}>Logged Out</h2>
                <p style={styles.message}>{message}</p>
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default LogoutModal;
