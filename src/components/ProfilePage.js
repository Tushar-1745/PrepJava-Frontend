// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { fetchUserProfile, fetchSolvedProblemsByUser, fetchSolvedSQLProblemsByUser } from '../api/api.js';
// import { FaEnvelope, FaPhone, FaUser, FaSpinner, FaSignOutAlt } from 'react-icons/fa';
// import { logout } from '../api/api.js'; // Adjust this path as needed
// import LogoutModal from '../modals/LogoutModal.js';
// import universalDsaProblems from '../data/universalDsaProblems.js';
// import universalSQLProblems from '../data/universalSQLProblems.js';

// const ProfilePage = () => {
//     const { logoutUser } = useContext(AuthContext);
//     const { loggedInUsername, loggedInUserId } = useContext(AuthContext);
//     const [userDetails, setUserDetails] = useState(null);
//     const [userSolvedProblems, setUserSolvedProblems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [profileImage, setProfileImage] = useState(null);

//     const [openModal, setOpenModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState(""); // New state for modal

//     const [userId, setUserId] = useState(null);


//     const navigate = useNavigate();

//     // Logout Function
//     const handleLogout = async () => {
//         try {
//             await logout(); // Call API logout function
//             logoutUser();   // Clear local storage & update state

//             setModalMessage("You have been logged out successfully!");
//             setOpenModal(true);

//             setTimeout(() => {
//                 setOpenModal(false);
//                 setModalMessage(""); window.location.href = "/javapage";

//             }, 3000);
//         } catch (error) {
//             console.error("Logout failed", error);
//             setModalMessage("Logout failed. Please try again.");
//             setOpenModal(true);

//             setTimeout(() => {
//                 setOpenModal(false);
//                 setModalMessage("");
//             }, 3000);
//         }
//     };

//     // Fetch user details
//     useEffect(() => {
//         const fetchUserDetails = async () => {
//             if (!loggedInUsername) return;

//             try {
//                 setLoading(true);
//                 const userData = await fetchUserProfile(loggedInUsername);
//                 setUserId(userData.id);

//                 setUserDetails(userData);


//             } catch (err) {
//                 setError('Error fetching user details. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserDetails();
//     }, [loggedInUsername]);


//     useEffect(() => {
//         const fetchSolvedProblems = async () => {
//             if (!userId) return;
    
//             try {
//                 setLoading(true);
//                 // Fetch both DSA and SQL solved problems concurrently
//                 const [dsaProblems, sqlProblems] = await Promise.all([
//                     fetchSolvedProblemsByUser(userId),  // Fetch DSA problems
//                     fetchSolvedSQLProblemsByUser(userId) // Fetch SQL problems
//                 ]);
    
//                 // Merge and sort by timeStamp
//                 const sortedProblems = [...dsaProblems, ...sqlProblems].sort((a, b) =>
//                     new Date(b.timeStamp) - new Date(a.timeStamp)
//                 );
//                 // Update state with sorted array
//                 setUserSolvedProblems(sortedProblems);
//             } catch (err) {
//                 setError('Error fetching solved problems. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };
    
//         fetchSolvedProblems();
//     }, [userId]); // Runs whenever userId changes
    
//     // ✅ Log once state has updated
//     useEffect(() => {
//     }, [userSolvedProblems]); // Logs updated state when it changes


//     const getProblemNameByNo = (problem) => {
//         if (problem.sqlproblemId) {
//             // This is an SQL problem
//             const sqlProblem = universalSQLProblems.find((p) => p.no === problem.sqlproblemId);
//             return sqlProblem ? sqlProblem.name : `SQL Problem No: ${problem.sqlproblemId}`;
//         } else {
//             // This is a DSA problem
//             const dsaProblem = universalDsaProblems.find((p) => p.no === problem.problemId);
//             return dsaProblem ? dsaProblem.name : `DSA Problem No: ${problem.problemId}`;
//         }
//     };

//     // Capitalize helper function
//     const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

//     // Inline styles
//     const styles = {
//         container: {
//             display: 'flex',
//             minHeight: '100vh',
//             backgroundColor: '#f5f5f5',
//         },
//         sidebar: {
//             width: '300px',
//             padding: '20px',
//             background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
//             boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
//             color: '#fff',
//             fontFamily: 'Arial, sans-serif',
//             textAlign: 'center',
//         },
//         profileImageContainer: {
//             position: 'relative',
//             width: '100px',
//             height: '100px',
//             borderRadius: '50%',
//             margin: '0 auto 15px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             overflow: 'hidden',
//         },
//         profileImage: {
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//         },
//         plusIcon: {
//             position: 'absolute',
//             bottom: '5px',
//             right: '5px',
//             backgroundColor: '#fff',
//             borderRadius: '50%',
//             padding: '5px',
//             fontSize: '1.5rem',
//             color: '#2575fc',
//             cursor: 'pointer',
//         },
//         userName: {
//             fontSize: '1.8rem',
//             fontWeight: 'bold',
//             marginBottom: '20px',
//         },
//         divider: {
//             height: '1px',
//             backgroundColor: '#ddd',
//             margin: '10px 0',
//         },
//         userDetails: {
//             fontSize: '1rem',
//             marginLeft: '30px',
//             marginBottom: '10px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-start',
//         },
//         icon: {
//             marginRight: '8px',
//             color: '#ddd',
//         },
//         mainContent: {
//             flex: 1,
//             padding: '20px',
//             backgroundColor: '#fff',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         },
//         sectionHeader: {
//             fontWeight: 'bold',
//             marginBottom: '15px',
//             color: '#333',
//         },
//         problemItem: {
//             padding: '10px 0',
//             borderBottom: '1px solid #ddd',
//             display: 'flex',
//             justifyContent: 'space-between',
//             fontSize: '1rem',
//             color: '#555',
//         },
//         loader: {
//             fontSize: '2rem',
//             color: '#2575fc',
//         },
//         error: {
//             color: 'red',
//             fontWeight: 'bold',
//         },
//         modalCloseButton: {
//             backgroundColor: "#007BFF",
//             color: "#FFF",
//             border: "none",
//             borderRadius: "5px",
//             padding: "10px 20px",
//             cursor: "pointer",
//         },
//         subOptions: {
//             cursor: 'pointer',
//             color: 'white',
//             fontSize: '1rem',
//             transition: 'color 0.3s ease'
//         },

//     };

//     return (
//         <div style={styles.container}>
//             {/* Sidebar */}
//             <div style={styles.sidebar}>
//                 {loading ? (
//                     <FaSpinner style={styles.loader} />
//                 ) : (
//                     <div style={styles.profileImageContainer}>
//                         <label htmlFor="fileInput">
//                             <div
//                                 style={{
//                                     ...styles.profileImage,
//                                     backgroundColor: "#e0e0e0",
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     fontSize: "2rem",
//                                     color: "#666",
//                                     position: "relative",
//                                 }}
//                             >
//                                 {profileImage ? (
//                                     <img
//                                         key={userDetails?.photo}  // Key forces re-render when the photo changes
//                                         src={userDetails?.photo ? `http://localhost:8080${userDetails.photo}` : "/Images/avatar.jpg"}
//                                         alt="Profile"
//                                         style={styles.profileImage}
//                                         onError={(e) => { e.target.src = "/Images/avatar.jpg"; }}
//                                     />

//                                 ) : (
//                                     <FaUser /> // Dummy profile icon if no photo
//                                 )}
//                             </div>
//                         </label>
//                     </div>

//                 )}

//                 <h2 style={styles.userName}> {capitalize(userDetails?.firstName || '')} {capitalize(userDetails?.lastName || '')}</h2>
//                 {/* <div style={styles.divider}></div> */}
//                 <div style={styles.userDetails}>
//                     <FaEnvelope style={styles.icon} /> {loading ? '...' : userDetails?.email}
//                 </div>
//                 <div style={styles.userDetails}>
//                     <FaPhone style={styles.icon} /> {loading ? '...' : userDetails?.mobileNumber}
//                 </div>
//                 {error && <div style={styles.error}>{error}</div>}

//                 <div style={{ height: '1.5px', margin: '20px 0px', background: '#ddd' }}></div>

//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', }}>
//                     <div
//                         style={styles.subOptions}
//                         onMouseEnter={(e) => e.target.style.color = '#ccc'} // Changes color on hover
//                         onMouseLeave={(e) => e.target.style.color = 'white'}
//                         onClick={() => navigate("/edit-profile")}

//                     >
//                         Edit Profile
//                     </div>

//                     <div style={styles.subOptions} onMouseEnter={(e) => e.target.style.color = '#ccc'} onMouseLeave={(e) => e.target.style.color = 'white'} // Reverts color when mouse leaves
//                     >
//                         Settings
//                     </div>

//                 </div>

//                 <div style={{ height: '1.5px', margin: '20px 0px', background: 'red' }}></div>

//                 <div style={{ display: "flex", alignItems: "center", justifyContent: 'center', color: "white", cursor: "pointer" }}
//                     onMouseEnter={(e) => e.target.style.color = '#ccc'} // Changes color on hover
//                     onMouseLeave={(e) => e.target.style.color = 'white'}
//                     onClick={handleLogout}>
//                     <FaSignOutAlt style={{ marginRight: "8px", fontSize: "18px" }} /> Logout

//                 </div>

//                 {openModal && <LogoutModal message={modalMessage} onClose={() => setOpenModal(false)} />}
//             </div>

//             <div style={styles.mainContent}>
//                 <h2 style={styles.sectionHeader}>Solved Problems</h2>
//                 {loading ? (
//                     <p>Loading solved problems...</p>
//                 ) : userSolvedProblems?.length > 0 ? (
//                     userSolvedProblems.map((problem, index) => (
//                         <div key={index} style={styles.problemItem}>
//                             <span>
//                                 {index + 1}. {getProblemNameByNo(problem)}
//                             </span>
//                             <span>
//                                 {new Date(problem.timeStamp).toLocaleString('en-GB', {
//                                     day: '2-digit',
//                                     month: '2-digit',
//                                     year: 'numeric',
//                                     weekday: 'long',
//                                     hour: '2-digit',
//                                     minute: '2-digit',
//                                     second: '2-digit',
//                                 })}
//                             </span>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No solved problems yet.</p>
//                 )}
//             </div>

//         </div>
//     );
// };

// export default ProfilePage;




import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { fetchUserProfile, fetchSolvedProblemsByUser, fetchSolvedSQLProblemsByUser, logout } from '../api/api.js';
import { FaEnvelope, FaPhone, FaUser, FaSpinner, FaSignOutAlt } from 'react-icons/fa';
import LogoutModal from '../modals/LogoutModal.js';
import universalDsaProblems from '../data/universalDsaProblems.js';
import universalSQLProblems from '../data/universalSQLProblems.js';

const ProfilePage = () => {
  const { logoutUser, loggedInUsername, loggedInUserId } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);
  const [userSolvedProblems, setUserSolvedProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      logoutUser();
      setModalMessage("You have been logged out successfully!");
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
        setModalMessage("");
        window.location.href = "/javapage";
      }, 3000);
    } catch (error) {
      console.error("Logout failed", error);
      setModalMessage("Logout failed. Please try again.");
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
        setModalMessage("");
      }, 3000);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!loggedInUsername) return;
      try {
        setLoading(true);
        const userData = await fetchUserProfile(loggedInUsername);
        setUserId(userData.id);
        setUserDetails(userData);
      } catch (err) {
        setError('Error fetching user details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [loggedInUsername]);

  useEffect(() => {
    const fetchSolvedProblems = async () => {
      if (!userId) return;
      try {
        setLoading(true);
        const [dsaProblems, sqlProblems] = await Promise.all([
          fetchSolvedProblemsByUser(userId),
          fetchSolvedSQLProblemsByUser(userId),
        ]);
        const sortedProblems = [...dsaProblems, ...sqlProblems].sort(
          (a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)
        );
        setUserSolvedProblems(sortedProblems);
      } catch (err) {
        setError('Error fetching solved problems. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchSolvedProblems();
  }, [userId]);

  const getProblemNameByNo = (problem) => {
    if (problem.sqlproblemId) {
      const sqlProblem = universalSQLProblems.find(p => p.no === problem.sqlproblemId);
      return sqlProblem ? sqlProblem.name : `SQL Problem No: ${problem.sqlproblemId}`;
    } else {
      const dsaProblem = universalDsaProblems.find(p => p.no === problem.problemId);
      return dsaProblem ? dsaProblem.name : `DSA Problem No: ${problem.problemId}`;
    }
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#2c3e50',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '300px',
      padding: '20px',
      backgroundColor: '#34495e',
      color: '#ffffff',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
    },
    profileImageContainer: {
      position: 'relative',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      margin: '0 auto 15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    userName: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    userDetails: {
      fontSize: '1rem',
      marginLeft: '30px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    icon: {
      marginRight: '8px',
      color: '#1abc9c',
    },
    mainContent: {
        flex: 1,
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#2c3e50',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
      sectionHeader: {
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#1abc9c',
      },
      problemItem: {
        padding: '10px 0',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1rem',
        color: '#2c3e50',
      },
      
    loader: {
      fontSize: '2rem',
      color: '#1abc9c',
    },
    error: {
      color: '#e74c3c',
      fontWeight: 'bold',
    },
    subOptions: {
      cursor: 'pointer',
      color: 'white',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        {loading ? (
          <FaSpinner style={styles.loader} />
        ) : (
          <div style={styles.profileImageContainer}>
            <label htmlFor="fileInput">
              <div
                style={{
                  ...styles.profileImage,
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  color: "#666",
                  position: "relative",
                }}
              >
                {profileImage ? (
                  <img
                    key={userDetails?.photo}
                    src={userDetails?.photo ? `http://localhost:8080${userDetails.photo}` : "/Images/avatar.jpg"}
                    alt="Profile"
                    style={styles.profileImage}
                    onError={(e) => { e.target.src = "/Images/avatar.jpg"; }}
                  />
                ) : (
                  <FaUser />
                )}
              </div>
            </label>
          </div>
        )}

        <h2 style={styles.userName}>
          {capitalize(userDetails?.firstName || '')} {capitalize(userDetails?.lastName || '')}
        </h2>

        <div style={styles.userDetails}>
          <FaEnvelope style={styles.icon} /> {loading ? '...' : userDetails?.email}
        </div>
        <div style={styles.userDetails}>
          <FaPhone style={styles.icon} /> {loading ? '...' : userDetails?.mobileNumber}
        </div>
        {error && <div style={styles.error}>{error}</div>}

        <div style={{ height: '1px', margin: '20px 0px', background: '#1abc9c' }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          <div
            style={styles.subOptions}
            onMouseEnter={(e) => e.target.style.color = '#1abc9c'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
            onClick={() => navigate("/edit-profile")}
          >
            Edit Profile
          </div>
          <div
            style={styles.subOptions}
            onMouseEnter={(e) => e.target.style.color = '#1abc9c'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Settings
          </div>
        </div>

        <div style={{ height: '1px', margin: '20px 0px', background: 'red' }}></div>

        <div
          style={{ display: "flex", alignItems: "center", justifyContent: 'center', color: "white", cursor: "pointer" }}
          onMouseEnter={(e) => e.target.style.color = '#1abc9c'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
          onClick={handleLogout}
        >
          <FaSignOutAlt style={{ marginRight: "8px", fontSize: "18px" }} /> Logout
        </div>

        {openModal && <LogoutModal message={modalMessage} onClose={() => setOpenModal(false)} />}
      </div>

      <div style={styles.mainContent}>
        <h2 style={styles.sectionHeader}>Solved Problems</h2>
        {loading ? (
          <p>Loading solved problems...</p>
        ) : userSolvedProblems?.length > 0 ? (
          userSolvedProblems.map((problem, index) => (
            <div key={index} style={styles.problemItem}>
              <span>{index + 1}. {getProblemNameByNo(problem)}</span>
              <span>{new Date(problem.timeStamp).toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                weekday: 'long',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}</span>
            </div>
          ))
        ) : (
          <p>No solved problems yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
