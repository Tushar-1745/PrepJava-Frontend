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

const LegacyClasses = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Legacy Classes in Java</h1>
            <p style={styles.paragraph}>
                In Java, legacy classes refer to the older classes, interfaces, and methods that were part of the original version of Java (pre-Java 1.2).
                These classes are still present for backward compatibility and are found in the `java.util` package. The key legacy classes in Java include:
            </p>

            <h2 style={styles.subHeader}>1. The Enumeration Interface</h2>
            <p style={styles.paragraph}>
                The `Enumeration` interface was part of the original version of Java and was replaced by the more powerful `Iterator` interface in Java 1.2.
                It is still used in some legacy classes like `Vector` and `Stack`.
            </p>
            <div style={styles.codeBlock}>
                {`import java.util.*;

public class EnumerationExample {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();
        vector.add("Java");
        vector.add("Python");
        vector.add("C++");
        
        Enumeration<String> enumeration = vector.elements();
        
        while (enumeration.hasMoreElements()) {
            System.out.println(enumeration.nextElement());
        }
    }
}`}
            </div>

            <h2 style={styles.subHeader}>2. The Vector Class</h2>
            <p style={styles.paragraph}>
                The `Vector` class is a growable array of objects. Unlike regular arrays, it can dynamically resize as more elements are added. 
                It is part of the legacy classes, and although it has been largely replaced by `ArrayList`, it is still in use in some old applications.
            </p>
            <div style={styles.codeBlock}>
                {`import java.util.*;

public class VectorExample {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();
        vector.add("Apple");
        vector.add("Banana");
        vector.add("Cherry");
        
        for (String fruit : vector) {
            System.out.println(fruit);
        }
    }
}`}
            </div>

            <h2 style={styles.subHeader}>3. The Stack Class</h2>
            <p style={styles.paragraph}>
                The `Stack` class represents a last-in, first-out (LIFO) stack of objects. It extends `Vector` and is part of the legacy classes.
                While modern code often uses `Deque` or `LinkedList` for stack operations, `Stack` is still available for backward compatibility.
            </p>
            <div style={styles.codeBlock}>
                {`import java.util.*;

public class StackExample {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        stack.push("Java");
        stack.push("Python");
        stack.push("JavaScript");
        
        System.out.println(stack.pop());  // Output: JavaScript
        System.out.println(stack.pop());  // Output: Python
    }
}`}
            </div>

            <h2 style={styles.subHeader}>4. The Properties Class</h2>
            <p style={styles.paragraph}>
                The `Properties` class is a subclass of `Hashtable` that represents a persistent set of properties that can be loaded from or saved to a stream.
                It's often used to read configuration files in Java applications.
            </p>
            <div style={styles.codeBlock}>
                {`import java.util.*;

public class PropertiesExample {
    public static void main(String[] args) {
        Properties properties = new Properties();
        properties.setProperty("username", "admin");
        properties.setProperty("password", "secret");

        System.out.println("Username: " + properties.getProperty("username"));
        System.out.println("Password: " + properties.getProperty("password"));
    }
}`}
            </div>

            <h2 style={styles.subHeader}>5. The Hashtable Class</h2>
            <p style={styles.paragraph}>
                The `Hashtable` class is a part of the legacy classes used to store key-value pairs. Although `HashMap` is now preferred for most purposes,
                `Hashtable` is still available for backward compatibility. It is synchronized, meaning it is thread-safe, but this can be a performance issue in some cases.
            </p>
            <div style={styles.codeBlock}>
                {`import java.util.*;

public class HashtableExample {
    public static void main(String[] args) {
        Hashtable<String, String> hashtable = new Hashtable<>();
        hashtable.put("name", "John");
        hashtable.put("role", "Developer");
        
        System.out.println("Name: " + hashtable.get("name"));
        System.out.println("Role: " + hashtable.get("role"));
    }
}`}
            </div>

            <h2 style={styles.subHeader}>Key Points</h2>
            <ul style={styles.list}>
                <li>The `Enumeration` interface was replaced by the `Iterator` interface but is still used in legacy classes.</li>
                <li>The `Vector` and `Stack` classes are part of the legacy collections, and while they are still available, `ArrayList` and `Deque` are preferred in modern Java.</li>
                <li>The `Properties` class is used for handling configuration files.</li>
                <li>Legacy classes like `Hashtable` are thread-safe but are generally replaced by `HashMap` in modern Java code.</li>
            </ul>

            <p style={styles.footerNote}>© 2024 Prep Java - All Rights Reserved</p>
        </div>
    );
};

export default LegacyClasses;
