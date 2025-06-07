import React, { useState } from 'react';
import { FaJava, FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Using icons for expand/collapse

const SpringbootSidebar = ({ currentPage, setCurrentPage }) => {
    const [expandedDropdowns, setExpandedDropdowns] = useState({}); // State for toggling multiple dropdowns

    const sidebarItems = [
        { name: 'Introduction', page: 'Springboot Introduction' },
        { name: 'Rest Api', page: 'REST API'},
        { name: 'HTTP Status Codes', page: 'HTTPStatusCodes'},
        {
            name: 'Core Concepts',
            isDropdown: true,
            subItems: [
                { name: 'IoC Container', page:'IoCContainer'},
                { name: 'Annotations', page: 'Springboot Annotations' },
                { name: 'Configuration', page: 'Springboot Configuration' },
                { name: 'Dependency Injection', page: 'Dependency Injection' },
                { name: 'Starter Dependencies', page: 'Starter Dependencies'},
            ],
        },
        {
            name: 'Spring Boot with Databases',
            isDropdown: true,
            subitems: [
                { name: 'Connecting to MySQL/PostgreSQL', page:'ConnectingToDatabase' },
                { name: 'Introduction to Spring Data JPA', page: 'SpringDataJPA'},
                { name: 'CRUD Operations with JPA Repository', page: 'CRUDWithJPa' },
                { name: 'Using Hibernate with Spring Boot', page: 'HibernateWithSpringBoot'}
            ]
        }

    ];

    const handleDropdownClick = (name) => {
        setExpandedDropdowns((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <div
                style={{
                    width: '200px',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '15px',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '25px' }}>
                    <FaJava style={{ fontSize: '30px', marginRight: '10px', color: 'white' }} />
                    Spring Boot
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sidebarItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {!item.isDropdown ? (
                                <li
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer',
                                        backgroundColor: currentPage === item.page ? '#1abc9c' : '#34495e',
                                        color: 'white',
                                        borderRadius: '5px',
                                        marginBottom: '10px',
                                        textAlign: 'left',
                                    }}
                                    onClick={() => setCurrentPage(item.page)}
                                >
                                    {item.name}
                                    {currentPage === item.page && <FaChevronRight style={{ marginLeft: '5px' }} />}
                                </li>
                            ) : (
                                <>
                                    <li
                                        style={{
                                            padding: '10px',
                                            cursor: 'pointer',
                                            backgroundColor: expandedDropdowns[item.name] ? '#1abc9c' : '#34495e',
                                            color: 'white',
                                            borderRadius: '5px',
                                            marginBottom: '10px',
                                            textAlign: 'left',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                        onClick={() => handleDropdownClick(item.name)}
                                    >
                                        {item.name}
                                        {expandedDropdowns[item.name] ? (
                                            <FaChevronDown style={{ marginLeft: '5px' }} />
                                        ) : (
                                            <FaChevronRight style={{ marginLeft: '5px' }} />
                                        )}
                                    </li>
                                    {expandedDropdowns[item.name] &&
                                        item.subItems.map((subItem, subIndex) => (
                                            <li
                                                key={subIndex}
                                                style={{
                                                    padding: '10px',
                                                    paddingLeft: '30px',
                                                    cursor: 'pointer',
                                                    backgroundColor: currentPage === subItem.page ? '#16a085' : '#2c3e50',
                                                    color: 'white',
                                                    borderRadius: '5px',
                                                    marginBottom: '5px',
                                                    textAlign: 'left',
                                                }}
                                                onClick={() => setCurrentPage(subItem.page)}
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

export default SpringbootSidebar;
