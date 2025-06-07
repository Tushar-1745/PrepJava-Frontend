import React from 'react';

const MongoDBCRUD = () => {
    return (
        <div>
            <h1>MongoDB CRUD Operations</h1>
            <p>
                MongoDB CRUD operations allow you to create, read, update, and delete data in a collection. Below are the basic commands:
            </p>
            <h3>1. Create</h3>
            <pre>{`db.collection.insertOne({ name: "John", age: 30 })`}</pre>
            <h3>2. Read</h3>
            <pre>{`db.collection.find({ age: { $gt: 25 } })`}</pre>
            <h3>3. Update</h3>
            <pre>{`db.collection.updateOne({ name: "John" }, { $set: { age: 35 } })`}</pre>
            <h3>4. Delete</h3>
            <pre>{`db.collection.deleteOne({ name: "John" })`}</pre>
        </div>
    );
};

export default MongoDBCRUD;
