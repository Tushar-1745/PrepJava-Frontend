import axios from 'axios';

// const API_URL = 'http://localhost:8080/api';
const API_URL = process.env.REACT_APP_BACKEND_API_URL;



export const signup = async(userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data; 
    } catch (error) {
        console.error('Error during signup:', error);
        throw error; // Rethrow the error for handling in the signup page
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, null, {
            params: {
                username,
                password,
            },
            withCredentials: true 
        });

        if (response) {
            return response.data;
        }
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`, null, {
            withCredentials: true,
        });

        console.log(response.data);

    } catch (error) {
        console.error('Error logging out:', error);
    }
};

export const fetchUserProfile = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/getprofile`, {
            params: { username },
            withCredentials: true // Include cookies in the request
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

export const fetchSolvedProblemsByUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/solvedproblems`, {
            params: { userId },
        });
        console.log(response.data)
        return response.data; // Return the list of solved problems from the response
    } catch (error) {
        console.error('Error fetching solved problems:', error);
        throw error; // Rethrow the error so it can be handled in the component
    }
};
export const addProfilePicture = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/addprofilepicture`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Required for file uploads
            },
        });

        // Check if the response indicates success
        if (response.status === 200 || response.status === 201) {
            return response.data; // Return the response data on success
        } else {
            throw new Error(`Unexpected response: ${response.status}`);
        }
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        // Throw a user-friendly error message
        throw new Error('Failed to upload the profile picture. Please try again.');
    }
};

export const submitSolvedSQLProblem = async (SQLSubmissionRequest) => {
    try {
        const response = await axios.post(
            `${API_URL}/sqlsubmission`, // Match the endpoint
            SQLSubmissionRequest, // Send the `submissionRequest` object as the request body
            {
                headers: { 'Content-Type': 'application/json' }, // Ensure JSON format
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error while submitting solved problem:', error.response?.data || error.message);
        throw error;
    }
};

export const fetchSolvedSQLProblemsByUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/solvedsqlproblems`, {
            params: { userId },
        });
        console.log(response.data)
        return response.data; // Return the list of solved problems from the response
    } catch (error) {
        console.error('Error fetching solved problems:', error);
        throw error; // Rethrow the error so it can be handled in the component
    }
};

export const getSolutionsOfSolvedSQLProblem = async (userId, problemId) => {
    try {
        const response = await axios.get(`${API_URL}/solutionsofsolvedsqlproblem`, {
            params: { userId, problemId }, // Query parameters
            headers: {'Content-Type': 'application/json'} // Optional headers
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error while fetching solved problem solutions:', error.response?.data || error.message);
        throw error; // Propagate the error to the caller
    }
};

export const updateUserProfile = async (userId, updatedUserData) => {
    try {
        const formData = new FormData();

        // Append fields to FormData (only include if they are provided)
        if (updatedUserData.firstName) formData.append('firstName', updatedUserData.firstName);
        if (updatedUserData.lastName) formData.append('lastName', updatedUserData.lastName);
        if (updatedUserData.email) formData.append('email', updatedUserData.email);

        // ✅ Ensure photo is a File object before appending
        if (updatedUserData.photo instanceof File) {
            formData.append('photo', updatedUserData.photo);
        } else {
            console.warn('Photo is not a valid file:', updatedUserData.photo);
        }

        // Convert userId to number
        const numericUserId = Number(userId);

        const response = await axios.put(`${API_URL}/${numericUserId}/updateprofile`, formData, {
            withCredentials: true, // Ensures authentication tokens/cookies are sent
            headers: {
                'Content-Type': 'multipart/form-data', // Important for file upload
            },
        });

        return response.data;
    } catch (error) {
        console.error('Profile update error:', error);
        throw error;
    }
};


export const sendEmailVerification = async (email) => {
    const response = await axios.post(`${API_URL}/send-verification-email`, { email });
    console.log("response for email verification is", response);
    return response.data;
};

// export const sendMobileVerification = async (mobileNumber) => {
//     const response = await axios.post(`${API_URL}/send-verification-mobile`, { mobileNumber });
//     console.log("response for mobile verification is", response);
//     return response.data;
// };

// Send OTP to mobile
export const sendMobileVerification = async (mobileNumber) => {
    const response = await fetch(`${API_URL}/send-verification-mobile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobileNumber })
    });

    console.log("response for mobile is ", response);
  
    if (!response.ok) throw new Error("Failed to send OTP");
    return await response.text(); // "OTP sent to mobile number"
  };
  
  // Verify OTP (uses token as query param)
  export const verifyMobileOtpAPI = async (token) => {
    const response = await fetch(`${API_URL}/verify-mobile-token?token=${token}`, {
      method: 'GET'
    });
  
    if (!response.ok) throw new Error("Invalid or expired OTP");
    return await response.text(); // "Mobile number verified"
  };
  
  // Check if a mobile number is verified
  export const isMobileVerified = async (mobileNumber) => {
    const response = await fetch(`${API_URL}/is-mobile-verified?mobileNumber=${mobileNumber}`);
    if (!response.ok) throw new Error("Failed to check verification");
    return await response.json(); // true or false
  };
  









export const submitSolvedProblem = async (submissionRequest) => {
    try {
        const response = await axios.post(
            `${API_URL}/submission`, // Match the endpoint
            submissionRequest, // Send the `submissionRequest` object as the request body
            {
                headers: { 'Content-Type': 'application/json' }, // Ensure JSON format
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error while submitting solved problem:', error.response?.data || error.message);
        throw error;
    }
};

export const submitTestScore = async (scoreRequest) => {
    try {
        const response = await axios.post(
            `${API_URL}/score`,  // Your backend score submission endpoint
            scoreRequest,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error while submitting test score:', error.response?.data || error.message);
        throw error;
    }
};


export const getSolutionsOfSolvedProblem = async (userId, problemId) => {
    try {
        const response = await axios.get(`${API_URL}/solutionsofsolvedproblem`, {
            params: { userId, problemId }, // Query parameters
            headers: {'Content-Type': 'application/json'} // Optional headers
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error while fetching solved problem solutions:', error.response?.data || error.message);
        throw error; // Propagate the error to the caller
    }
};






// const MIDDLEWARE_API_URL = 'http://localhost:5001/api'; // Middleware server URL

const MIDDLEWARE_API_URL = 'https://prepjava-jdoodle-server.onrender.com/api';

// New function to interact with middleware server
export const FetchCodeResult = async (code, language = 'java', versionIndex = '0', input = '') => {
    try {
      const response = await axios.post(`${MIDDLEWARE_API_URL}/execute`, {
        script: code,
        language,
        versionIndex,
        stdin: input,  // sending the input for stdin
      });
      return response.data;
    } catch (error) {
      // Log detailed error
      console.error('Error executing code:', error.response ? error.response.data : error.message);
      throw new Error('Failed to execute code with JDoodle API');
    }
  };
  
  const employee = `
    CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER,
        department TEXT
    );
`;


export const ExecuteSQLQuery = async (query, language='sql') => {
    if (!query || !language) {
        console.error('❌ Missing required parameters: query or language');
        throw new Error('Query and language are required.');
    }

    try {
        // 🚀 Add a valid versionIndex
        const response = await axios.post(`${MIDDLEWARE_API_URL}/execute`, {
            script: query,
            language,
            versionIndex: "5", // ✅ Ensure this is a valid index for MySQL
            stdin: employee,
        });

        console.log("Query response is", response.data);
        return response.data;
    } catch (error) {
        console.error('SQL Execution Error:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Failed to execute SQL query.');
    }
};


export const getScoreByModule = async (userId, module) => {
    try {
      const response = await axios.get(`${API_URL}/score/${userId}/${module}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching score:', error);
      throw error;
    }
  };
  
