// src/components/DsaOverviewPage.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DsaOverviewPage = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs'],
                datasets: [
                    {
                        label: 'Difficulty Level',
                        data: [2, 3, 4, 3, 4, 5],
                        backgroundColor: ['#3498db', '#9b59b6', '#1abc9c', '#f1c40f', '#e74c3c', '#34495e'],
                        borderColor: ['#2980b9', '#8e44ad', '#16a085', '#f39c12', '#c0392b', '#2c3e50'],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                },
                scales: {
                    x: { beginAtZero: true },
                    y: { beginAtZero: true },
                },
            },
        });

        return () => chart.destroy(); // Cleanup on component unmount
    }, []);

    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <h1 style={styles.title}>Data Structures and Algorithms in Java</h1>
                <p style={styles.introText}>
                    Mastering Data Structures and Algorithms (DSA) is crucial for efficient programming. Java, being a versatile language, offers a rich 
                    set of libraries and tools to implement these concepts effectively. DSA is the backbone of many real-world applications, from simple 
                    programs to complex systems such as databases, operating systems, and large-scale web applications.
                </p>
            </header>

            {/* Visualization Section */}
            <section style={styles.chartSection}>
                <h2 style={styles.sectionTitle}>Difficulty Level of Key DSA Topics</h2>
                <p style={styles.chartDescription}>
                    Below is a visualization showing the difficulty levels of some key Data Structure topics in Java, based on the common challenges faced
                    by developers and interviewers.
                </p>
                <div style={styles.chartContainer}>
                    <canvas ref={chartRef}></canvas>
                </div>
            </section>

            {/* DSA Topics Explanation */}
            <section style={styles.topicsSection}>
                <h2 style={styles.sectionTitle}>Understanding Key DSA Topics in Java</h2>
                <p style={styles.sectionDescription}>
                    Data Structures and Algorithms (DSA) are fundamental to the software development process. They help you efficiently store and 
                    manipulate data. Below is an overview of some essential DSA topics:
                </p>

                <div style={styles.topic}>
                    <h3 style={styles.topicTitle}>1. Arrays</h3>
                    <p style={styles.topicDescription}>
                        Arrays are the simplest and most commonly used data structures in Java. They store a fixed-size sequence of elements of the 
                        same type. Arrays allow quick access to elements using their indices, making them ideal for applications where fast access is 
                        needed.
                        <br />
                        <strong>Use Case:</strong> Storing and accessing a list of elements, like storing integers or strings.
                    </p>
                </div>

                <div style={styles.topic}>
                    <h3 style={styles.topicTitle}>2. Linked Lists</h3>
                    <p style={styles.topicDescription}>
                        A linked list is a linear collection of nodes, where each node contains a data element and a reference (link) to the next node.
                        Unlike arrays, linked lists are dynamic, meaning their size can grow or shrink as needed. However, accessing elements in a 
                        linked list requires traversing the list from the beginning, making it slower than arrays for random access.
                        <br />
                        <strong>Use Case:</strong> Implementing data structures like stacks, queues, and dynamic memory allocation.
                    </p>
                </div>

                <div style={styles.topic}>
                    <h3 style={styles.topicTitle}>3. Stacks</h3>
                    <p style={styles.topicDescription}>
                        A stack follows the Last In First Out (LIFO) principle, meaning that the last element added is the first one to be removed. 
                        Stacks are useful for solving problems related to recursion, expression evaluation, and backtracking.
                        <br />
                        <strong>Use Case:</strong> Undo operations in text editors or evaluating expressions in compilers.
                    </p>
                </div>

                <div style={styles.topic}>
                    <h3 style={styles.topicTitle}>4. Queues</h3>
                    <p style={styles.topicDescription}>
                        A queue follows the First In First Out (FIFO) principle, meaning the first element added is the first one to be removed. 
                        Queues are essential for managing tasks in parallel processing, networking, and handling real-time data.
                        <br />
                        <strong>Use Case:</strong> Print job scheduling, task scheduling in operating systems, and breadth-first search (BFS) in graphs.
                    </p>
                </div>

                <div style={styles.topic}>
                    <h3 style={styles.topicTitle}>5. Trees</h3>
                    <p style={styles.topicDescription}>
                        Trees are hierarchical data structures consisting of nodes connected by edges. They are used to represent hierarchical relationships.
                        Common types of trees include binary trees, binary search trees, AVL trees, and heaps.
                        <br />
                        <strong>Use Case:</strong> Database indexing, file systems, and implementing algorithms like binary search.
                    </p>
                </div>

                <div style={styles.topic}>
                    <h3 style={styles.topicTitle}>6. Graphs</h3>
                    <p style={styles.topicDescription}>
                        A graph is a non-linear data structure made up of nodes (vertices) connected by edges. Graphs are ideal for representing networks, 
                        such as social media, communication systems, or transportation routes.
                        <br />
                        <strong>Use Case:</strong> Routing algorithms (e.g., Dijkstra), social network analysis, and recommendation systems.
                    </p>
                </div>
            </section>

            {/* Why DSA is Important */}
            <section style={styles.importanceSection}>
                <h2 style={styles.sectionTitle}>Why DSA is Crucial for Coding Interviews</h2>
                <p style={styles.importanceText}>
                    A strong understanding of Data Structures and Algorithms is essential for solving problems efficiently during coding interviews.
                    Interviewers often focus on assessing the candidate's problem-solving abilities using DSA concepts. A well-optimized solution
                    not only helps solve the problem faster but also demonstrates the candidate's ability to think algorithmically and optimize
                    time and space complexity.
                </p>

                <h3 style={styles.subTitle}>Common Interview Topics</h3>
                <ul style={styles.interviewTopics}>
                    <li>Arrays and Strings</li>
                    <li>Linked Lists</li>
                    <li>Stacks and Queues</li>
                    <li>Trees and Binary Search Trees</li>
                    <li>Graphs and Shortest Path Algorithms</li>
                    <li>Sorting and Searching Algorithms</li>
                    <li>Dynamic Programming</li>
                    <li>Backtracking</li>
                </ul>
            </section>

            {/* Conclusion Section */}
            <footer style={styles.footer}>
                <h2 style={styles.footerTitle}>Conclusion</h2>
                <p style={styles.footerText}>
                    Mastering DSA in Java is an essential step in becoming a proficient developer. It enables you to tackle complex problems with 
                    optimized solutions and prepares you for coding interviews. Whether you are building efficient algorithms or solving real-world 
                    problems, DSA is a skill that every programmer must develop.
                </p>
            </footer>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f4f6f9',
    },
    header: {
        textAlign: 'center',
        marginBottom: '40px',
    },
    title: {
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '10px',
    },
    introText: {
        fontSize: '1.2rem',
        color: '#7f8c8d',
        lineHeight: '1.6',
        marginBottom: '40px',
    },
    chartSection: {
        marginBottom: '40px',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: '2rem',
        color: '#34495e',
        marginBottom: '10px',
    },
    chartDescription: {
        fontSize: '1.1rem',
        color: '#7f8c8d',
        marginBottom: '20px',
    },
    chartContainer: {
        width: '80%',
        margin: '0 auto',
    },
    topicsSection: {
        marginBottom: '40px',
    },
    sectionDescription: {
        fontSize: '1.1rem',
        color: '#7f8c8d',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    topic: {
        marginBottom: '20px',
    },
    topicTitle: {
        fontSize: '1.5rem',
        color: '#2c3e50',
    },
    topicDescription: {
        fontSize: '1.1rem',
        color: '#7f8c8d',
        lineHeight: '1.6',
    },
    importanceSection: {
        marginBottom: '40px',
    },
    importanceText: {
        fontSize: '1.1rem',
        color: '#7f8c8d',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    subTitle: {
        fontSize: '1.3rem',
        color: '#34495e',
        marginTop: '20px',
    },
    interviewTopics: {
        fontSize: '1.1rem',
        color: '#7f8c8d',
        lineHeight: '1.6',
        listStyleType: 'disc',
        paddingLeft: '20px',
    },
    footer: {
        marginTop: '40px',
        textAlign: 'center',
    },
    footerTitle: {
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: '10px',
    },
    footerText: {
        fontSize: '1.1rem',
        color: '#7f8c8d',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
};

export default DsaOverviewPage;
