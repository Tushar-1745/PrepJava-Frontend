import React from 'react';
import { useLocation } from 'react-router-dom';

// Styles for the page
const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
};

const submissionBoxStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const submissionHeaderStyle = {
    fontSize: '1.5rem',
    color: '#007BFF',
    marginBottom: '10px',
};

const codeBlockStyle = {
    whiteSpace: 'pre-wrap',
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontFamily: 'monospace',
    fontSize: '1rem',
};

const infoStyle = {
    marginTop: '10px',
    color: '#555',
};

const noSubmissionsStyle = {
    textAlign: 'center',
    color: '#777',
    fontSize: '1.2rem',
    fontStyle: 'italic',
};

// Component to display previous submissions
const PreviousSubmissions = () => {
    const location = useLocation();
    const solutions = location.state?.solutions || [];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Previous Submissions</h2>
            <h3></h3>
            {solutions.length > 0 ? (
                solutions.map((solution, index) => (
                    <div key={index} style={submissionBoxStyle}>
                        <h3 style={submissionHeaderStyle}>
                            Submission #{index + 1} 
                        </h3>
                        <div style={infoStyle}>
                            <strong>Submitted On:</strong>{' '}
                            <span style={{ color: '#0000ff' }}>
                                {new Date(solution.timeStamp).toLocaleString() || 'N/A'}
                            </span>
                        </div>

                        <div style={infoStyle}>
                            <strong>Code:</strong>
                            <pre style={codeBlockStyle}>{solution.code}</pre>
                        </div>
                        <div style={infoStyle}>
                            <strong>Time Complexity:</strong>{' '}
                            <span style={{ color: '#ff4500' }}>{solution.timeComplexity || 'N/A'}</span>
                        </div>
                        <div style={infoStyle}>
                            <strong>Space Complexity:</strong>{' '}
                            <span style={{ color: '#32cd32' }}>{solution.spaceComplexity || 'N/A'}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p style={noSubmissionsStyle}>No submissions found for this problem.</p>
            )}
        </div>
    );
};

export default PreviousSubmissions;
