import React, { useState, useEffect } from 'react';
import DSASidebar from './DSASidebar';
import DSACurrentPage from './DSACurrentPage';
import Navbar from '../Navbar'; // Assuming Navbar is in the common folder
import Footer from '../Footer'; // Assuming Footer is in the common folder
import Breadcrumb from '../Breadcrumb'; // Assuming Breadcrumb is in the common folder

const DSAPage = () => { 
    const [currentPage, setCurrentPage] = useState('DSAOverview'); // Default page
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    // Update breadcrumb when currentPage changes
    useEffect(() => {
        const breadcrumbs = ['Home', 'DSA', currentPage];
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
                    <DSASidebar setCurrentPage={setCurrentPage} />
                </div>

                {/* Main Content */}
                <div style={styles.contentContainer}>
                    <DSACurrentPage currentPage={currentPage} />
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
        backgroundColor: '#f3f4f6', // Soft background for a modern look
        fontFamily: `'Poppins', sans-serif`, // Clean and professional font
    },

    navbarContainer: {
        position: 'sticky',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        backgroundColor: '#fff', // Ensure navbar background is visible
        zIndex: 1000, // Keep it above other content
    },

    breadcrumbContainer: {
        position: 'sticky',
        top: '75px', // Adjust according to the height of the navbar
        width: '100%',
        margin: '5px auto',
        marginTop:'',
        backgroundColor: 'rgba(253, 255, 255, 1)',
        zIndex: 999, // Ensure breadcrumb is above content but below navbar
        padding: '5px 0',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Adds a slight shadow for clarity
    },

    mainContent: {
        display: 'flex',
        flex: 1,
        width: '100%',
        margin: 'auto',
        marginBottom: '5px',
        backgroundColor: '#fff', // White content background for focus
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', // Premium shadow effect
        overflow: 'hidden', // Prevents content overflow
    },

    sidebarContainer: {
        backgroundColor: '#2c3e50', // Dark sidebar for contrast
        color: '#fff',
    },

    contentContainer: {
        flex: 1,
        padding: '5px',
        backgroundColor: '#f9fafc', // Light background for reading content
        overflowY: 'auto',
    },
};

export default DSAPage;
