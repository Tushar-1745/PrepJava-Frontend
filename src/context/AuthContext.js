import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState(null);
    const [loggedInUserId, setLoggedInUserId] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        console.log("stored User is ", storedUser)
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                if (userData && userData.username) {
                    setLoggedIn(true);
                    setLoggedInUsername(userData.username);
                    setLoggedInUserId(userData.id || null); // Handle missing id gracefully
                }
            } catch (error) {
                console.error("Error parsing localStorage data:", error);
                localStorage.removeItem("loggedInUser"); // Clear corrupted data
            }
        }
    }, []);

    const loginUser = (username, userId) => {
        console.log("authcontext username is", username)
        console.log("authcontext userid is", userId)
        setLoggedIn(true);
        setLoggedInUsername(username);
        setLoggedInUserId(userId);  // Update state with the userId
    
        localStorage.setItem("loggedInUser", JSON.stringify({ 
            username, 
            id: userId  // Store user ID as well
        }));
    };
    

    const logoutUser = () => {
        setLoggedIn(false);
        setLoggedInUsername(null);
        setLoggedInUserId(null);
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("token");

        setTimeout(() => {
            window.location.href = "/"; // Redirect after logout
        }, 500);
    };

    return (
        <AuthContext.Provider value={{ 
            loggedIn, 
            loggedInUsername, 
            loggedInUserId, 
            loginUser, 
            logoutUser 
        }}>
            {children}
        </AuthContext.Provider>
    );
};
