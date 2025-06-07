import React, { useState } from 'react';
import { FaDatabase, FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Using FaDatabase for Hibernate icon

const HibernateSidebar = ({ setCurrentPage }) => {
    const [activePage, setActivePage] = useState('HibernateOverview'); // Example state for active page
    const [expandedDropdown, setExpandedDropdown] = useState(false); // State for toggling dropdown

    const sidebarItems = [
        { name: 'Overview', page: 'HibernateOverview' },
        { name: 'History', page: 'HibernateHistory' },
        { name: 'Architecture', page: 'HibernateArchitecture' },
        { name: 'Configuration', page: 'HibernateConfiguration' },
        { name: 'Mappings', page: 'HibernateMappings' },
        { name: 'Annotations', page: 'HibernateAnnotations' },
        { name: 'SessionFactory', page: 'SessionFactory' },
        { name: 'Sessions', page: 'HibernateSessions' },
        {
            name: 'Querying', // Parent item with dropdown
            isDropdown: true,
            subItems: [
                { name: 'HQL', page: 'HQL' },
                { name: 'Criteria API', page: 'CriteriaAPI' },
                { name: 'Native SQL', page: 'NativeSQL' },
            ],
        },
        { name: 'Caching', page: 'HibernateCaching' },
        { name: 'Transaction Management', page: 'TransactionManagement' },
        { name: 'Performance Optimization', page: 'PerformanceOptimization' },
    ];

    const handleDropdownClick = () => {
        setExpandedDropdown(!expandedDropdown);
    };

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
            {/* Sidebar */}
            <div
                style={{
                    width: '200px',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '15px',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* Heading */}
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '25px' }}>
                    <FaDatabase style={{ fontSize: '30px', marginRight: '10px', color: 'white' }} />
                    Hibernate Topics
                </h2>

                {/* Sidebar Items */}
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sidebarItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Regular Item */}
                            {!item.isDropdown ? (
                                <li
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer',
                                        backgroundColor: activePage === item.page ? '#1abc9c' : '#34495e',
                                        color: 'white',
                                        borderRadius: '5px',
                                        marginBottom: '10px',
                                        textAlign: 'left',
                                    }}
                                    onClick={() => {
                                        setActivePage(item.page);
                                        setCurrentPage(item.page); // Pass the page name to the parent component
                                    }}
                                >
                                    {item.name}
                                    {activePage === item.page && <FaChevronRight style={{ marginLeft: '5px' }} />}
                                </li>
                            ) : (
                                // Dropdown Item
                                <>
                                    <li
                                        style={{
                                            padding: '10px',
                                            cursor: 'pointer',
                                            backgroundColor: expandedDropdown ? '#1abc9c' : '#34495e',
                                            color: 'white',
                                            borderRadius: '5px',
                                            marginBottom: '10px',
                                            textAlign: 'left',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                        onClick={handleDropdownClick}
                                    >
                                        {item.name}
                                        {expandedDropdown ? (
                                            <FaChevronDown style={{ marginLeft: '5px' }} />
                                        ) : (
                                            <FaChevronRight style={{ marginLeft: '5px' }} />
                                        )}
                                    </li>
                                    {/* Sub-items for Dropdown */}
                                    {expandedDropdown &&
                                        item.subItems.map((subItem, subIndex) => (
                                            <li
                                                key={subIndex}
                                                style={{
                                                    padding: '10px',
                                                    paddingLeft: '30px', // Indent sub-items
                                                    cursor: 'pointer',
                                                    backgroundColor: activePage === subItem.page ? '#16a085' : '#2c3e50',
                                                    color: 'white',
                                                    borderRadius: '5px',
                                                    marginBottom: '5px',
                                                    textAlign: 'left',
                                                }}
                                                onClick={() => {
                                                    setActivePage(subItem.page);
                                                    setCurrentPage(subItem.page); // Pass the sub-item page name to the parent component
                                                }}
                                            >
                                                {subItem.name}
                                            </li>
                                        ))}
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HibernateSidebar;
