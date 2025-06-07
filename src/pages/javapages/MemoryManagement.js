import React from 'react';

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#2c3e50',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#34495e',
        textAlign: 'left',
        marginBottom: '20px',
        borderBottom: '2px solid #e67e22',
        paddingBottom: '10px',
    },
    subHeader: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        marginBottom: '15px',
    },
    list: {
        marginLeft: '20px',
        marginBottom: '20px',
        fontSize: '1.2rem',
    },
    codeBlock: {
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        borderRadius: '5px',
        padding: '15px',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    footerNote: {
        textAlign: 'center',
        color: '#95a5a6',
        marginTop: '20px',
        fontSize: '0.9rem',
    },
};

const MemoryManagement = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Memory Management in Java</h1>
            <p style={styles.paragraph}>
                Memory management in Java is a process of managing memory allocation and deallocation for objects during the execution of a program. Java handles memory management through automatic garbage collection, which helps in reclaiming memory from objects that are no longer in use.
            </p>
            <p style={styles.paragraph}>
                Java’s memory management is based on the principle of automatic garbage collection, which makes the process of memory management easier for developers.
            </p>

            <h2 style={styles.subHeader}>1. Heap and Stack Memory</h2>
            <p style={styles.paragraph}>
                Java memory is divided into two main areas: Heap and Stack. Understanding the difference between them is crucial for memory management in Java.
            </p>
            <ul style={styles.list}>
                <li>
                    <strong>Heap Memory:</strong> This is where all objects and arrays are stored. It is created when the Java Virtual Machine (JVM) starts up and is shared among all threads.
                </li>
                <li>
                    <strong>Stack Memory:</strong> This is where all method calls and local variables are stored. Each thread has its own stack, which is created when the thread is created.
                </li>
            </ul>

            <h2 style={styles.subHeader}>2. Garbage Collection in Java</h2>
            <p style={styles.paragraph}>
                Garbage Collection is the process of automatically reclaiming memory by deleting objects that are no longer in use. The JVM automatically manages garbage collection, so developers don't have to manually deallocate memory.
            </p>
            <p style={styles.paragraph}>
                There are different types of garbage collectors in Java, such as Serial GC, Parallel GC, and G1 GC. The JVM determines when and how to run the garbage collector based on the system's memory and configuration.
            </p>
            <div style={styles.codeBlock}>
                {`// Example: Garbage Collection in Java

public class Main {
    public static void main(String[] args) {
        // Creating objects
        Person person1 = new Person("John");
        Person person2 = new Person("Alice");

        // Setting objects to null (eligible for garbage collection)
        person1 = null;
        person2 = null;

        // At this point, the garbage collector may clean up unused objects
        System.gc(); // Suggest to JVM to perform garbage collection
    }
}

class Person {
    String name;

    Person(String name) {
        this.name = name;
    }

    @Override
    protected void finalize() throws Throwable {
        System.out.println("Object is being garbage collected: " + name);
        super.finalize();
    }
}`}
            </div>

            <h2 style={styles.subHeader}>3. Memory Leaks in Java</h2>
            <p style={styles.paragraph}>
                A memory leak in Java occurs when the program continuously allocates memory for objects, but these objects are not released even though they are no longer in use. Memory leaks can lead to performance degradation and even application crashes.
            </p>
            <p style={styles.paragraph}>
                Java's garbage collector usually takes care of memory leaks, but developers need to ensure that objects are not accidentally referenced and can be collected.
            </p>

            <h2 style={styles.subHeader}>4. Finalize Method and Memory Management</h2>
            <p style={styles.paragraph}>
                The <code>finalize()</code> method is called by the garbage collector just before an object is removed from memory. While it can be used to clean up resources like file handles or network connections, it is not recommended for critical resource management since the timing of the garbage collection process is unpredictable.
            </p>
            <div style={styles.codeBlock}>
                {`class ResourceHandler {
    // Finalize method to clean up resources
    @Override
    protected void finalize() throws Throwable {
        System.out.println("Releasing resources...");
        super.finalize();
    }
}

public class Main {
    public static void main(String[] args) {
        ResourceHandler handler = new ResourceHandler();
        handler = null;

        // Suggesting garbage collection to clean up the object
        System.gc();
    }
}`}
            </div>

            <h2 style={styles.subHeader}>Advantages of Java's Memory Management</h2>
            <ul style={styles.list}>
                <li>Automatic garbage collection ensures developers don't have to manually manage memory.</li>
                <li>Memory management is less error-prone and easier to maintain compared to manual memory management in other languages.</li>
                <li>Heap and Stack separation allows for efficient memory allocation and deallocation.</li>
            </ul>

            <h2 style={styles.subHeader}>Key Points</h2>
            <ul style={styles.list}>
                <li>Heap stores objects, while Stack stores method calls and local variables.</li>
                <li>Garbage collection is automatic in Java and helps prevent memory leaks.</li>
                <li>The <code>finalize()</code> method is used to clean up resources before object destruction.</li>
            </ul>

            <p style={styles.footerNote}>© 2024 Prep Java - All Rights Reserved</p>
        </div>
    );
};

export default MemoryManagement;
