import React from 'react';

const BinarySearch = () => {
    const styles = {
        container: {
            padding: '40px',
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(to right, #1e3c72, #2a5298)',
            color: '#ffffff',
            minHeight: '100vh',
            boxSizing: 'border-box',
        },
        card: {
            backgroundColor: '#ffffff10',
            padding: '20px',
            borderRadius: '12px',
            margin: '20px 0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        header: { fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px' },
        sectionHeader: { fontSize: '1.8rem', margin: '10px 0', color: '#ffcc00' },
        paragraph: { fontSize: '1.2rem', lineHeight: '1.8' },
        code: {
            backgroundColor: '#1c1c1e',
            padding: '15px',
            borderRadius: '10px',
            fontFamily: "'Source Code Pro', monospace",
            fontSize: '1.1rem',
            color: '#00e6e6',
            overflowX: 'auto',
        },
        list: { paddingLeft: '20px', lineHeight: '1.8' },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Binary Search</h1>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Introduction</h2>
                <p style={styles.paragraph}>
                    Binary Search is a divide-and-conquer algorithm that finds the target element in a sorted array efficiently by
                    halving the search space at each step.
                </p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Algorithm Steps</h2>
                <ul style={styles.list}>
                    <li>Initialize two pointers: left at the start, and right at the end of the array.</li>
                    <li>Calculate the middle index.</li>
                    <li>
                        If the middle element matches the target, return its index. If not:
                        <ul>
                            <li>Move the left pointer if the target is greater than the middle element.</li>
                            <li>Move the right pointer if the target is smaller.</li>
                        </ul>
                    </li>
                    <li>Repeat until the target is found or the pointers overlap.</li>
                </ul>
            </div>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Time Complexity</h2>
                <p style={styles.paragraph}>
                    <strong>Best Case:</strong> \(O(1)\) <br />
                    <strong>Worst Case:</strong> \(O(\log n)\)
                </p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Code Example (JavaScript)</h2>
                <pre style={styles.code}>
{`
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
`}
                </pre>
            </div>
        </div>
    );
};

export default BinarySearch;
