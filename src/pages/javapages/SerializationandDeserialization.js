import React, { useState } from 'react';

const SerializationandDeserialization = () => {
    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f0f8ff', // Softer light blue background
        borderRadius: '5px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        lineHeight: '1.8',
        width: '100%',
        boxSizing: 'border-box',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#007acc', // Light blue heading
        marginBottom: '20px',
        fontSize: '28px',
    };

    const subheadingStyle = {
        color: '#007acc',
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '22px',
    };

    const codeBlockContainerStyle = {
        position: 'relative',
        marginBottom: '20px',
    };

    const codeBlockStyle = {
        backgroundColor: '#000', // Black background
        color: '#00e6e6', // Light blue text
        padding: '15px',
        borderRadius: '5px',
        fontFamily: 'Courier New, monospace',
        overflowX: 'auto',
        position: 'relative',
        border: '1px solid #007acc',
    };

    const copyButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#007acc',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '12px',
    };

    const exampleStyle = {
        backgroundColor: '#e6f7ff',
        padding: '15px',
        borderRadius: '5px',
        border: '1px solid #b3e0ff',
        marginTop: '10px',
        marginBottom: '20px',
        color: '#005580',
    };

    const CodeBlock = ({ code }) => {
        const [copied, setCopied] = useState(false);

        const handleCopy = () => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
        };

        return (
            <div style={codeBlockContainerStyle}>
                <pre style={codeBlockStyle}>{code}</pre>
                <button style={copyButtonStyle} onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        );
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Serialization and Deserialization in Java</h1>
            <p>
                <b>Serialization</b> is the process of converting an object into a byte stream for storage or transmission, 
                while <b>deserialization</b> reconstructs the object from the byte stream.
            </p>

            <h2 style={subheadingStyle}>Serialization: Saving an Object to a File</h2>
            <p>To serialize an object, follow these steps:</p>
            <ol>
                <li>Make the class implement the <code>Serializable</code> interface.</li>
                <li>Use <code>ObjectOutputStream</code> to write the object to a file.</li>
            </ol>
            <CodeBlock
                code={`import java.io.*;

// Step 1: Define a class and implement Serializable
class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + "}";
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        Student student = new Student("John", 25);

        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("student.ser"))) {
            oos.writeObject(student);
            System.out.println("Object serialized successfully!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}
            />
            <div style={exampleStyle}>
                <b>Example:</b> Run this code, and it creates a file <code>student.ser</code> containing the serialized object data.
            </div>

            <h2 style={subheadingStyle}>Deserialization: Restoring the Object</h2>
            <p>To deserialize an object:</p>
            <ol>
                <li>Use <code>ObjectInputStream</code> to read the object from a file.</li>
            </ol>
            <CodeBlock
                code={`import java.io.*;

public class DeserializationExample {
    public static void main(String[] args) {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("student.ser"))) {
            Student student = (Student) ois.readObject();
            System.out.println("Object deserialized successfully!");
            System.out.println("Deserialized object: " + student);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`}
            />
            <div style={exampleStyle}>
                <b>Example:</b> This code reads the serialized object from <code>student.ser</code> and restores the original
                <code>Student</code> object.
            </div>

            <h2 style={subheadingStyle}>Key Points to Note</h2>
            <ul>
                <li>The <code>serialVersionUID</code> is used for versioning during deserialization.</li>
                <li>Static and <code>transient</code> fields are not serialized.</li>
                <li>Make sure to handle <code>IOException</code> and <code>ClassNotFoundException</code>.</li>
            </ul>

            <h2 style={subheadingStyle}>Real-World Use Cases</h2>
            <ul>
                <li>Saving the state of an object to disk or a database.</li>
                <li>Sending objects over a network (e.g., in distributed systems).</li>
                <li>Storing user session data in web applications.</li>
            </ul>
        </div>
    );
};

export default SerializationandDeserialization;
