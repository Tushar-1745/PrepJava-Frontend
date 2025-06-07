import React from 'react';

const MySQLInstallation = () => {
    return (
        <div>
            <h1>MySQL Installation Guide</h1>
            <p>Follow these steps to install MySQL:</p>
            <ol>
                <li>Download the installer from the <a href="https://dev.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">MySQL official website</a>.</li>
                <li>Run the installer and follow the prompts.</li>
                <li>Configure the server settings and set up a root password.</li>
                <li>Test the installation by running <code>mysql --version</code> in your terminal.</li>
            </ol>
            <h2>Watch the Installation Video</h2>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/uj4OYk5nKCg" 
                    title="MySQL Installation Guide" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default MySQLInstallation;
