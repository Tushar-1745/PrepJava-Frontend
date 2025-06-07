import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL  = "http://localhost:8080/api"
const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get(`${API_URL}/checkAuth`, { withCredentials: true });
                if (response.status === 200) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsLoggedIn(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    return { isLoggedIn, loading };
};

export default useAuth;
