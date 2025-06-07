import React, { useState } from 'react';
import { FaJava, FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Using icons for expand/collapse

const JavaSidebar = ({ currentPage, setCurrentPage }) => {
    const [expandedDropdowns, setExpandedDropdowns] = useState({}); // State for toggling multiple dropdowns

    const sidebarItems = [
        { name: 'Overview', page: 'JavaOverview' },
        { name: 'History', page: 'History' },
        {
            name: 'Java Basics',
            isDropdown: true,
            subItems: [
                { name: 'Class', page: 'Class' },
                { name: 'Object', page: 'Object' },
                { name: 'Interface', page: 'Interface'},
            ]
        },
        { name: 'JDK, JRE and JVM', page: 'JdkJreJvm' },
        { name: 'Packages', page: 'Packages' },
        { name: 'Operators', page: 'Operators'},
        { name: 'Conditional Statements', page: 'ConditionalStatements'},
        { name: 'Access Modifiers', page: 'AccessModifiers' },
        { name: 'Variables', page: 'Variables' },
        { name: 'Constructor', page: 'Constructor' },
        { name: 'Data Types', page: 'DataTypes' },
        { name: 'Comparable and Comparator Interface', page: 'ComparableandComparatorInterface' },
        {
            name: 'OOPS',
            isDropdown: true,
            subItems: [
                { name: 'Inheritance', page: 'Inheritance' },
                { name: 'Polymorphism', page: 'Polymorphism' },
                { name: 'Abstraction', page: 'Abstraction' },
                { name: 'Encapsulation', page: 'Encapsulation' },
            ],
        },
        { name: 'Memory Management', page: 'MemoryManagement' },
        {
            name: 'Input/Output',
            isDropdown: true,
            subItems: [
                { name: 'Serialization and Deserialization', page: 'SerializationandDeserialization' },
                { name: 'File Handling', page: 'FileHandling' },
            ],
        },
        { name: 'Type Casting', page:'TypeCasting'},
        { name: 'Multithreading', page: 'Multithreading' },
        { name: 'Exception Handling', page: 'ExceptionHandling'},
        { name: 'Inner Class', page: 'InnerClass' },
        { name: 'File Handling', page: 'FileHandling' },
        { name: 'JDBC', page:'JDBC'},
        {
            name: 'Java 8 Features',
            isDropdown: true,
            subItems: [
                { name: 'Lambda Expressions', page: 'LambdaExpressions' },
                { name: 'Functional Interfaces', page: 'FunctionalInterfaces' },
                { name: 'Method References', page: 'MethodReferences' },
                { name: 'Streams API', page: 'StreamsAPI' },
                { name: 'Optional Class', page: 'OptionalClass' },
                { name: 'Default Methods', page: 'DefaultMethods' },
                { name: 'Collector Class', page: 'CollectorClass' },
                { name: 'New Date and Time API', page: 'DateTimeAPI' }
            ]
        },        
        { name: 'Legacy Classes', page: 'LegacyClasses' },
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
        width: '250px',  // Increased width from 200px to 250px
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '15px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        flexGrow: 1  
    }}
>

                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '25px' }}>
                    <FaJava style={{ fontSize: '30px', marginRight: '10px', color: 'white' }} />
                    Java Topics
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

export default JavaSidebar;
