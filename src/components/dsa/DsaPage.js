import React, { useState, useEffect, useRef } from 'react';
import DSASidebar from './DSASidebar';
import DSACurrentPage from './DSACurrentPage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumb from '../Breadcrumb';
import { useLocation } from 'react-router-dom';

const DSAPage = () => {
    const [currentPage, setCurrentPage] = useState('DSAOverview');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const sidebarRef = useRef();
    const location = useLocation();

    const breadcrumbItems = ['Home', 'DSA', currentPage];

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setSidebarOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, sidebarOpen]);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div style={styles.pageContainer}>
            <div style={styles.navbarContainer}>
                <Navbar />
            </div>

            <div style={styles.mainContent}>
                {(sidebarOpen || !isMobile) && (
                    <div
                        ref={isMobile ? sidebarRef : null}
                        style={{
                            ...styles.sidebarContainer,
                            ...(isMobile ? styles.mobileSidebar : {}),
                        }}
                    >
                        <DSASidebar
                            setCurrentPage={(page) => {
                                setCurrentPage(page);
                                if (isMobile) setSidebarOpen(false);
                            }}
                        />
                    </div>
                )}

                <div
                    style={{
                        ...styles.contentContainer,
                        ...(isMobile ? { width: '100%', marginLeft: 0 } : {}),
                    }}
                >
                    <div style={styles.breadcrumbRow}>
                        {isMobile && (
                            <button onClick={toggleSidebar} style={styles.mobileMenuButton}>
                                &#9776;
                            </button>
                        )}
                        <Breadcrumb
                            breadcrumbItems={breadcrumbItems}
                            currentPage={currentPage}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                    </div>

                    <DSACurrentPage currentPage={currentPage} searchQuery={searchQuery} />
                </div>
            </div>

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
        height: '100vh',
        overflowY: 'auto',
        position: 'sticky',
        top: 0,
    },
    mobileSidebar: {
        position: 'fixed',
        top: '140px',
        left: 0,
        width: '250px',
        height: 'calc(100vh - 140px)',
        overflowY: 'auto',
        backgroundColor: '#2c3e50',
        color: '#fff',
        zIndex: 999,
    },
    contentContainer: {
        flex: 1,
        height: 'calc(100vh - 70px)',
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: '#f9fafc',
        transition: 'margin-left 0.3s ease-in-out',
    },
    breadcrumbRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 15px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        flexWrap: 'wrap',
        gap: '10px',
    },
    mobileMenuButton: {
        fontSize: '20px',
        padding: '8px 12px',
        cursor: 'pointer',
        backgroundColor: '#2c3e50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    },
};

export default DSAPage;
