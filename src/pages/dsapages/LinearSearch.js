import React from 'react';

const LinearSearch = () => {
    const styles = {
        container: {
            padding: '40px',
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
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
            <h1 style={styles.header}>Linear Search</h1>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Introduction</h2>
                <p style={styles.paragraph}>
                    Linear Search scans each element in the dataset one by one until the target element is found or the end of the
                    dataset is reached.
                </p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Algorithm Steps</h2>
                <ul style={styles.list}>
                    <li>Start from the first element of the dataset.</li>
                    <li>Compare the current element with the target.</li>
                    <li>If they match, return the index. Otherwise, move to the next element.</li>
                    <li>Continue until the target is found or the end of the dataset is reached.</li>
                </ul>
            </div>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Time Complexity</h2>
                <p style={styles.paragraph}>
                    <strong>Best Case:</strong> \(O(1)\) <br />
                    <strong>Worst Case:</strong> \(O(n)\)
                </p>
            </div>
            <div style={styles.card}>
                <h2 style={styles.sectionHeader}>Code Example (JavaScript)</h2>
                <pre style={styles.code}>
{`
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
`}
                </pre>
            </div>
        </div>
    );
};

export default LinearSearch;
