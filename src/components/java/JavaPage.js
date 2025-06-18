import React, { useState, useEffect } from 'react';
import JavaSidebar from './JavaSidebar';
import JavaCurrentPage from './JavaCurrentPage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumb from '../Breadcrumb';
import ChatWidget from '../ChatWidget';

const JavaPage = () => {
    const [currentPage, setCurrentPage] = useState('JavaOverview');
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    useEffect(() => {
        const breadcrumbs = ['Home', 'Java', currentPage];
        setBreadcrumbItems(breadcrumbs);
    }, [currentPage]);

    return (
        <div style={styles.pageContainer}>
            {/* Navbar */}
            <div style={styles.navbarContainer}>
                <Navbar />
            </div>

            {/* Sticky Breadcrumb */}
            {/* <div style={styles.breadcrumbContainer}>
                <Breadcrumb breadcrumbItems={breadcrumbItems} />
            </div> */}

            {/* Main Content with Sidebar and Page */}
            <div style={styles.mainContent}>
                {/* Sidebar */}
                <div style={styles.sidebarContainer}>
                    <JavaSidebar setCurrentPage={setCurrentPage} />
                </div>

                {/* Main Content */}
                
                <div style={styles.contentContainer}>
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
        flex: 1,
        width: '100%',
        margin: 'auto',
        marginBottom: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    sidebarContainer: {
        backgroundColor: '#2c3e50',
        color: '#fff',
    },
    contentContainer: {
        flex: 1,
        padding: '5px',
        backgroundColor: '#f9fafc',
        overflowY: 'auto',
    },
};

export default JavaPage;