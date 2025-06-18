import React, { useState } from 'react';
import { FaSort, FaCubes, FaSearch, FaChevronRight, FaChevronDown, FaCogs } from 'react-icons/fa';

const DSASidebar = ({ currentPage, setCurrentPage }) => {
    const [expandedDropdowns, setExpandedDropdowns] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const sidebarItems = [
        {
            name: 'Recursion and Backtracking',
            isDropdown: true,
            icon: <FaCubes />,
            subItems: [
                { name: 'Recursion', page: 'Recursion' },
                { name: 'Backtracking', page: 'Backtracking' }
            ]
        },
        {
            name: 'Data Structures',
            isDropdown: true,
            icon: <FaCubes />,
            subItems: [
                { name: 'String', page: 'String' },
                { name: 'StringBuilder', page: 'StringBuilder' },
                { name: 'StringBuffer', page: 'StringBuffer' },
                { name: 'Arrays', page: 'Array' },
                { name: 'ArrayList', page: 'ArrayList' },
                { name: 'Queues', page: 'Queue' },
                { name: 'Stacks', page: 'Stack' },
                { name: 'LinkedList', page: 'LinkedList' },
                { name: 'HashMap', page: 'HashMap' },
                { name: 'Tree', page: 'Tree' },
                { name: 'BinaryTree', page: 'BinaryTree' },
                { name: 'BinarySearchTree', page: 'BinarySearchTree' }
            ],
        },
        {
            name: 'Searching Algorithms',
            isDropdown: true,
            icon: <FaSearch />,
            subItems: [
                { name: 'Linear Search', page: 'LinearSearch' },
                { name: 'Binary Search', page: 'BinarySearch' },
                { name: 'Exponential Search', page: 'ExponentialSearch' },
                { name: 'Jump Search', page: 'JumpSearch' },
                { name: 'Interpolation Search', page: 'InterpolationSearch' },
            ],
        },
        {
            name: 'Sorting Algorithms',
            isDropdown: true,
            icon: <FaSort />,
            subItems: [
                { name: 'Bubble Sort', page: 'BubbleSort' },
                { name: 'Quick Sort', page: 'QuickSort' },
                { name: 'Merge Sort', page: 'MergeSort' },
            ],
        },
        {
            name: 'Design Patterns',
            isDropdown: true,
            icon: <FaCubes />,
            subItems: [
                { name: 'Creational Patterns', page: 'CreationalPatterns' },
                { name: 'Structural Patterns', page: 'StructuralPatterns' },
                { name: 'Behavioral Patterns', page: 'BehavioralPatterns' }
            ],
        },
    ];

    const handleDropdownClick = (name) => {
        setExpandedDropdowns((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const filterItems = (items) =>
        items
            .map(item => {
                if (item.isDropdown) {
                    const filteredSubItems = item.subItems.filter(sub =>
                        sub.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || filteredSubItems.length > 0) {
                        return {
                            ...item,
                            subItems: filteredSubItems
                        };
                    }
                    return null;
                } else {
                    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ? item : null;
                }
            })
            .filter(Boolean);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <div
                style={{
                    width: '250px',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '15px',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                    flexGrow: 1,
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '10px', color: 'white', fontSize: '25px' }}>
                    <FaCogs style={{ fontSize: '30px', marginRight: '10px', color: 'white' }} />
                    DSA Topics
                </h2>

                <input
                    type="text"
                    placeholder="Search topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '90%',
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        backgroundColor: '#fff',
                        color: '#2c3e50',
                        transition: 'border 0.3s, box-shadow 0.3s',
                    }}
                    onFocus={(e) => {
                        e.target.style.boxShadow = '0 0 5px 2px #1abc9c';
                        e.target.style.border = '1px solid #1abc9c';
                    }}
                    onBlur={(e) => {
                        e.target.style.boxShadow = 'none';
                        e.target.style.border = '1px solid #ccc';
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.boxShadow = '0 0 4px 1px #1abc9c';
                    }}
                    onMouseLeave={(e) => {
                        if (document.activeElement !== e.target) {
                            e.target.style.boxShadow = 'none';
                        }
                    }}
                />

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {filterItems(sidebarItems).map((item, index) => (
                        <React.Fragment key={index}>
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
                                    transition: 'background-color 0.3s',
                                }}
                                onClick={() => handleDropdownClick(item.name)}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1abc9c')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = expandedDropdowns[item.name] ? '#1abc9c' : '#34495e')}
                            >
                                {item.icon} {item.name}
                                {expandedDropdowns[item.name] ? (
                                    <FaChevronDown />
                                ) : (
                                    <FaChevronRight />
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
                                            transition: 'background-color 0.3s',
                                        }}
                                        onClick={() => setCurrentPage(subItem.page)}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#16a085')}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = currentPage === subItem.page ? '#16a085' : '#2c3e50')}
                                    >
                                        {subItem.name}
                                    </li>
                                ))}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DSASidebar;
