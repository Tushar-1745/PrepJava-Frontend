import React, { useState } from 'react';
import { FaSort, FaCubes, FaSearch, FaChevronRight, FaChevronDown, FaCogs } from 'react-icons/fa';

const DSASidebar = ({ currentPage, setCurrentPage }) => {
    const [expandedDropdown, setExpandedDropdown] = useState('');

    const sidebarItems = [
        {
            name: 'Recursion and Backtracking',
            isDropdown: true,
            icon: <FaCubes />,
            subItems: [
                { name: 'Recursion', page: 'Recursion' },
                { name: 'Backtracking', page: 'Backtracking'}
            ]
        },
        {
            name: 'Data Structures',
            isDropdown: true,
            icon: <FaCubes />,
            subItems: [
                { name:'String', page:'String'},
                { name:'StringBuilder', page:'StringBuilder'},
                { name: 'StringBuffer', page:'StringBuffer'},
                { name: 'Arrays', page: 'Array' },
                { name:'ArrayList', page: 'ArrayList'},
                { name: 'Queues', page: 'Queue' },
                { name: 'Stacks', page: 'Stack' },
                { name: 'LinkedList', page: 'LinkedList'},
                { name: 'HashMap', page:'HashMap'},
                { name: 'Tree', page:'Tree'},
                { name:'BinaryTree', page:'BinaryTree'},
                { name:'BinarySearchTree', page:'BinarySearchTree'}
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
                { name: 'Behavioral Patterns', page: 'BehavioralPatterns'}
            ],
        },
        
    ];

    const toggleDropdown = (name) => {
        setExpandedDropdown(expandedDropdown === name ? '' : name);
    };

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
            {/* Sidebar */}
            <div
                style={{
                    width: '250px',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '15px',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* Heading */}
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        color: 'white',
                        fontSize: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                    }}
                >
                    <FaCogs style={{ fontSize: '30px', color: 'white' }} />
                    DSA Topics
                </h2>

                {/* Sidebar Items */}
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sidebarItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Dropdown Item */}
                            <li
                                style={{
                                    padding: '10px',
                                    cursor: 'pointer',
                                    backgroundColor: expandedDropdown === item.name ? '#1abc9c' : '#34495e',
                                    color: 'white',
                                    borderRadius: '5px',
                                    marginBottom: '10px',
                                    textAlign: 'left',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                                onClick={() => toggleDropdown(item.name)}
                            >
                                <span>
                                    {item.icon} {item.name}
                                </span>
                                {expandedDropdown === item.name ? (
                                    <FaChevronDown style={{ marginLeft: '5px' }} />
                                ) : (
                                    <FaChevronRight style={{ marginLeft: '5px' }} />
                                )}
                            </li>
                            {/* Sub-items for Dropdown */}
                            {expandedDropdown === item.name &&
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
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DSASidebar;
