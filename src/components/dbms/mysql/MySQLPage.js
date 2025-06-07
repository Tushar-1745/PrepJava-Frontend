import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Breadcrumb from '../../Breadcrumb';
import MySQLSidebar from './MySQLSidebar';
import MySQLCurrentPage from './MySQLCurrentPage';

const MySQLPage = () => {
    const [currentPage, setCurrentPage] = useState('Overview');
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    useEffect(() => {
        const breadcrumbs = ['Home', 'DBMS', 'MySQL', currentPage];
        setBreadcrumbItems(breadcrumbs);
    }, [currentPage]);

    return (
        <div style={styles.pageContainer}>
            {/* Navbar */}
            <div style={styles.navbarContainer}>
                <Navbar />
            </div>

            {/* Sticky Breadcrumb */}
            <div style={styles.breadcrumbContainer}>
                <Breadcrumb breadcrumbItems={breadcrumbItems} />
            </div>

            {/* Main Content with Sidebar and Page */}
            <div style={styles.mainContent}>
                {/* Sidebar */}
                <div style={styles.sidebarContainer}>
                    <MySQLSidebar setCurrentPage={setCurrentPage} />
                </div>

                {/* Main Content */}
                <div style={styles.contentContainer}>
                    <MySQLCurrentPage currentPage={currentPage} />
                </div>
            </div>

            {/* Footer */}
            <div style={styles.footerContainer}>
                <Footer />
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
        backgroundColor: '#f3f4f6',
        fontFamily: `'Poppins', sans-serif`,
        overflow: 'hidden', // Prevents extra scrollbars if needed
    },
    navbarContainer: {
        position: 'sticky',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        backgroundColor: '#fff',
        zIndex: 1000,
    },
    breadcrumbContainer: {
        position: 'sticky',
        top: '75px',
        width: '100%',
        margin: '5px auto',
        backgroundColor: 'rgba(253, 255, 255, 1)',
        zIndex: 999,
        padding: '5px 0',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    mainContent: {
        display: 'flex',
        width: '100%',
        margin: 'auto',
        alignItems: 'flex-start', // Ensures the sidebar is based on its own content
    },
    sidebarContainer: {
        width: '250px', // Fixed width
        backgroundColor: '#2c3e50', // Sidebar background color
        color: '#fff', // Text color
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch', // Ensures the sidebar stretches independently
        minHeight: '100vh', // Ensures it covers full viewport height
    },    
    contentContainer: {
        flex: 1, // Takes remaining space
        padding: '20px',
        backgroundColor: '#f9fafc',
        minHeight: '100vh', // Ensures content area has enough height
        marginLeft: '20px',
    },
    footerContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: '10px 0',
        marginTop: 'auto', // Push footer below content dynamically
        position: 'relative', // Ensures it does not overlap sidebar
    }
    
};


export default MySQLPage;