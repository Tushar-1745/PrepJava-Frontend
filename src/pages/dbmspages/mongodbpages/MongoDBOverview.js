import React from 'react';

const MongoDBOverview = () => {
    return (
        <div>
            <h1>Welcome to MongoDB</h1>
            <p>
                MongoDB is a NoSQL database that uses a document-oriented model for storing and retrieving data. It is highly scalable and flexible for modern applications.
            </p>
            <h3>Key Features</h3>
            <ul>
                <li>Schema-less structure</li>
                <li>Horizontal scalability with sharding</li>
                <li>Rich query language and aggregation framework</li>
            </ul>
            <h3>Applications</h3>
            <p>
                MongoDB is widely used in IoT, real-time analytics, content management systems, and other data-intensive applications.
            </p>
        </div>
    );
};

export default MongoDBOverview;
