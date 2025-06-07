import React, { useState } from 'react';
import { FaLeaf, FaChevronRight } from 'react-icons/fa';
import MongoDBCRUD from '../../pages/dbmspages/mongodbpages/MongoDBCRUD';
import MongoDBOverview from '../../pages/dbmspages/mongodbpages/MongoDBOverview';
import MongoDBInstallation from '../../pages/dbmspages/mongodbpages/MongoDbInstallation';

const MongoDBPage = () => {
    const [activePage, setActivePage] = useState('Overview');

    const renderContent = () => {
        switch (activePage) {
            case 'Overview':
                return <MongoDBOverview />;
            case 'Installation':
                return <MongoDBInstallation />;
            case 'CRUD Operations':
                return <MongoDBCRUD />;
            default:
                return <MongoDBOverview />;
        }
    };

    const sidebarItems = [
        { name: 'Overview', page: 'Overview' },
        { name: 'Installation Guide', page: 'Installation' },
        { name: 'CRUD Operations', page: 'CRUD Operations' },
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
            {/* Sidebar */}
            <div style={{ width: '250px', backgroundColor: '#2c3e50', color: 'white', padding: '15px', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <FaLeaf /> MongoDB Topics
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sidebarItems.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                backgroundColor: activePage === item.page ? '#27ae60' : '#34495e',
                                color: 'white',
                                borderRadius: '5px',
                                marginBottom: '10px',
                                textAlign: 'center',
                            }}
                            onClick={() => setActivePage(item.page)}
                        >
                            {item.name}
                            {activePage === item.page && <FaChevronRight style={{ marginLeft: '5px' }} />}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '20px', backgroundColor: '#ecf0f1', overflowY: 'auto' }}>
                {renderContent()}
            </div>
        </div>
    );
};

export default MongoDBPage;
