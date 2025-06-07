import React from 'react';

const MongoDBInstallation = () => {
    return (
        <div>
            <h1>MongoDB Installation Guide</h1>
            <p>Follow these steps to install MongoDB:</p>
            <ol>
                <li>Go to the <a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">MongoDB official website</a>.</li>
                <li>Download the MongoDB Community Edition for your platform.</li>
                <li>Follow the installation wizard or instructions for your operating system.</li>
                <li>Start the MongoDB server using the `mongod` command and verify the installation with `mongo` in your terminal.</li>
            </ol>
        </div>
    );
};

export default MongoDBInstallation;
