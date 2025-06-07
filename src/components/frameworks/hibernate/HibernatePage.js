// HibernatePage.js
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../Breadcrumb';
import HibernateSidebar from '../hibernate/HibernateSidebar';
import HibernateCurrentPage from '../hibernate/HibernateCurrentPage';

const HibernatePage = () => {
    const [currentPage, setCurrentPage] = useState('HibernateOverview'); // Default to Overview page
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    // Update breadcrumb when currentPage changes
    useEffect(() => {
        const breadcrumbs = ['Home', 'Hibernate', currentPage];
        setBreadcrumbItems(breadcrumbs);
    }, [currentPage]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Breadcrumb Navigation */}
            <Breadcrumb breadcrumbItems={breadcrumbItems} />

            <div style={{ display: 'flex', flex: 1 }}>
                {/* Sidebar Section */}
                <HibernateSidebar setCurrentPage={setCurrentPage} />

                {/* Content Section */}
                <div style={{ flex: 1, padding: '20px' }}>
                    <HibernateCurrentPage currentPage={currentPage} />
                </div>
            </div>
        </div>
    );
};

export default HibernatePage;
