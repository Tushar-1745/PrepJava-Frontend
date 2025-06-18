// import React, { useState, useEffect } from 'react';
// import JavaSidebar from './JavaSidebar';
// import JavaCurrentPage from './JavaCurrentPage';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import Breadcrumb from '../Breadcrumb';

// const JavaPage = () => {
//     const [currentPage, setCurrentPage] = useState('JavaOverview');
//     const [breadcrumbItems, setBreadcrumbItems] = useState([]);

//     useEffect(() => {
//         const breadcrumbs = ['Home', 'Java', currentPage];
//         setBreadcrumbItems(breadcrumbs);
//     }, [currentPage]);

//     return (
//         <div style={styles.pageContainer}>
//             {/* Navbar */}
//             <div style={styles.navbarContainer}>
//                 <Navbar />
//             </div>

//             {/* Sticky Breadcrumb */}
//             {/* <div style={styles.breadcrumbContainer}>
//                 <Breadcrumb breadcrumbItems={breadcrumbItems} />
//             </div> */}

//             {/* Main Content with Sidebar and Page */}
//             <div style={styles.mainContent}>
//                 {/* Sidebar */}
//                 <div style={styles.sidebarContainer}>
//                     <JavaSidebar setCurrentPage={setCurrentPage} />
//                 </div>

//                 {/* Main Content */}

//                 <div style={styles.contentContainer}>
//                     <JavaCurrentPage currentPage={currentPage} />
//                 </div>
//             </div>

//             {/* Footer */}
//             <div style={{ width: '100%', margin: 'auto' }}>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// const styles = {
//     pageContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//         backgroundColor: '#f3f4f6',
//         fontFamily: `'Poppins', sans-serif`,
//     },
//     navbarContainer: {
//         position: 'sticky',
//         top: 0,
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'space-between',
//         margin: 'auto',
//         backgroundColor: '#fff',
//         zIndex: 1000,
//     },
//     breadcrumbContainer: {
//         position: 'sticky',
//         top: '75px',
//         width: '100%',
//         margin: '5px auto',
//         backgroundColor: 'rgba(253, 255, 255, 1)',
//         zIndex: 999,
//         padding: '5px 0',
//         boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
//     },
//     mainContent: {
//         display: 'flex',
//         flex: 1,
//         width: '100%',
//         margin: 'auto',
//         marginBottom: '5px',
//         backgroundColor: '#fff',
//         boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
//         overflow: 'hidden',
//     },
//     sidebarContainer: {
//         backgroundColor: '#2c3e50',
//         color: '#fff',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: '5px',
//         backgroundColor: '#f9fafc',
//         overflowY: 'auto',
//     },
// };

// export default JavaPage;

import React, { useState, useEffect } from 'react';
import JavaSidebar from './JavaSidebar';
import JavaCurrentPage from './JavaCurrentPage';
import Navbar from '../Navbar';
import Footer from '../Footer';

const JavaPage = () => {
    const [currentPage, setCurrentPage] = useState('JavaOverview');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setSidebarOpen(false); // Reset sidebar if switching to desktop
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div style={styles.pageContainer}>
            {/* Navbar */}
            <div style={styles.navbarContainer}>
                <Navbar />
            </div>

            {/* Hamburger menu below navbar for mobile */}
            {isMobile && (
                <div style={styles.mobileMenuContainer}>
                    <button onClick={toggleSidebar} style={styles.menuButton}>
                        📂 Menu
                    </button>
                </div>
            )}

            {/* Main Layout */}
            <div style={styles.mainContent}>
                {/* Sidebar */}
                {(sidebarOpen || !isMobile) && (
                    <div
                        style={{
                            ...styles.sidebarContainer,
                            ...(isMobile ? styles.mobileSidebar : {}),
                        }}
                    >
                        <JavaSidebar setCurrentPage={setCurrentPage} />
                    </div>
                )}

                {/* Main Content */}
                <div
                    style={{
                        ...styles.contentContainer,
                        ...(isMobile
                            ? sidebarOpen
                                ? { marginLeft: '250px', width: 'calc(100% - 250px)' }
                                : { width: '100%', marginLeft: 0 }
                            : {}),
                    }}
                >
                    <JavaCurrentPage currentPage={currentPage} />
                </div>

            </div>

            {/* Footer */}
            <div style={{ width: '100%', margin: 'auto' }}>
                <Footer />
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        fontFamily: `'Poppins', sans-serif`,
    },
    navbarContainer: {
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#fff',
    },
    mobileMenuContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10px 20px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 999,
    },
    menuButton: {
        fontSize: '18px',
        padding: '8px 16px',
        cursor: 'pointer',
        backgroundColor: '#2c3e50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    },
    mainContent: {
        display: 'flex',
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    sidebarContainer: {
        backgroundColor: '#2c3e50',
        color: '#fff',
    },
    mobileSidebar: {
        position: 'fixed',
        top: '140px', // below navbar + menu button
        left: 0,
        width: '250px',
        height: '100%',
        zIndex: 999,
    },
    contentContainer: {
        flex: 1,
        padding: '10px',
        backgroundColor: '#f9fafc',
        overflowY: 'auto',
        transition: 'margin-left 0.3s ease-in-out',
    },
};

export default JavaPage;
