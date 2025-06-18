import React, { useState, useEffect, useRef } from 'react';
import JavaSidebar from './JavaSidebar';
import JavaCurrentPage from './JavaCurrentPage';
import Navbar from '../Navbar';
import Footer from '../Footer';

const JavaPage = () => {
    const [currentPage, setCurrentPage] = useState('JavaOverview');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef();

    // Handle window resize for mobile detection
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setSidebarOpen(false); // Close sidebar if switching to desktop
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle outside click to close sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                isMobile &&
                sidebarOpen
            ) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile, sidebarOpen]);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div style={styles.pageContainer}>
            {/* Navbar */}
            <div style={styles.navbarContainer}>
                <Navbar />
            </div>

            {/* Hamburger menu for mobile */}
            {isMobile && (
                <div style={styles.mobileMenuContainer}>
                    <button onClick={toggleSidebar} style={styles.menuButton}>
                        &#9776; Menu
                    </button>
                </div>
            )}

            {/* Main layout */}
            <div style={styles.mainContent}>
                {/* Sidebar */}
                {(sidebarOpen || !isMobile) && (
                    <div
                        ref={isMobile ? sidebarRef : null}
                        style={{
                            ...styles.sidebarContainer,
                            ...(isMobile ? styles.mobileSidebar : {}),
                        }}
                    >
                        <JavaSidebar
                            setCurrentPage={(page) => {
                                setCurrentPage(page);
                                if (isMobile) setSidebarOpen(false); // Close on selection
                            }}
                        />
                    </div>
                )}

                {/* Page Content */}
                <div
                    style={{
                        ...styles.contentContainer,
                        ...(isMobile ? { width: '100%', marginLeft: 0 } : {}),
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
        top: '140px', // Adjust as per actual navbar + menu height
        left: 0,
        width: '250px',
        maxHeight: 'calc(100vh - 140px)',
        overflowY: 'auto',
        backgroundColor: '#2c3e50',
        color: '#fff',
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
