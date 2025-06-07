import React, { useState } from 'react';
import { FaDatabase, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const MySQLSidebar = ({ currentPage, setCurrentPage }) => {
    const [expandedDropdowns, setExpandedDropdowns] = useState({});

    const sidebarItems = [
        { name: 'Overview', page: 'MySQLOverview' },
        { name: 'History', page: 'MySQLHistory' },
        { name: 'Installation', page: 'Installation' },
        {
            name: 'Basic Commands',
            isDropdown: true,
            subItems: [
                { name: 'Create Database', page: 'CreateDatabase' },
                { name: 'Drop Database', page: 'DropDatabase' },
                { name: 'Create Table', page: 'CreateTable' },
                { name: 'Drop Table', page: 'DropTable' },
                { name: 'Insert Data', page: 'InsertData' },
                { name: 'Update Data', page: 'UpdateData' },
                { name: 'Delete Data', page: 'DeleteData' },
            ]
        },
        { name: 'Data Types', page: 'DataTypes' },
        {
            name: 'Constraints',
            isDropdown: true,
            subItems: [
                { name: 'Primary Key', page: 'PrimaryKey' },
                { name: 'Foreign Key', page: 'ForeignKey' },
                { name: 'Unique Key', page: 'UniqueKey' },
                { name: 'Not Null', page: 'NotNull' },
                { name: 'Check Constraint', page: 'CheckConstraint' },
                { name: 'Default Constraint', page: 'DefaultConstraint' }
            ]
        },
        { name: 'Joins', page: 'Joins' },
        { name: 'Indexes', page: 'Indexes' },
        {
            name: 'Normalization',
            isDropdown: true,
            subItems: [
                { name: '1NF', page: 'FirstNF' },
                { name: '2NF', page: 'SecondNF' },
                { name: '3NF', page: 'ThirdNF' },
                { name: 'BCNF', page: 'BCNF' }
            ]
        },
        { name: 'Transactions', page: 'Transactions' },
        { name: 'Stored Procedures', page: 'StoredProcedures' },
        { name: 'Triggers', page: 'Triggers' },
        { name: 'Views', page: 'Views' },
        { name: 'Performance Optimization', page: 'PerformanceOptimization' }
    ];

    const handleDropdownClick = (name) => {
        setExpandedDropdowns((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <div
                style={{
                    width: '250px',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '15px',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                    flexGrow: 1
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '25px' }}>
                    <FaDatabase style={{ fontSize: '30px', marginRight: '10px', color: 'white' }} />
                    MySQL Topics
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

export default MySQLSidebar;
