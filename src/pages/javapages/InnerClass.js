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

const InnerClass = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Inner Classes in Java</h1>
            <p style={styles.paragraph}>
                Inner classes are classes that are declared within another class. They provide a way to logically group classes and increase encapsulation. Java supports several types of inner classes:
            </p>
            <ul style={styles.list}>
                <li>
                    <strong>Non-static Nested Class:</strong> Also known as an inner class, it is associated with an instance of the outer class.
                </li>
                <li>
                    <strong>Static Nested Class:</strong> A nested class that is declared static.
                </li>
                <li>
                    <strong>Local Inner Class:</strong> Defined within a block, such as a method or constructor.
                </li>
                <li>
                    <strong>Anonymous Inner Class:</strong> A class without a name, instantiated and declared at the same time.
                </li>
            </ul>

            <h2 style={styles.subHeader}>1. Non-static Nested Class</h2>
            <p style={styles.paragraph}>
                A non-static nested class (inner class) can access all members of its outer class, including private members.
            </p>
            <div style={styles.codeBlock}>
                {`class OuterClass {
    private String message = "Hello from OuterClass";

    class InnerClass {
        void displayMessage() {
            System.out.println(message);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.displayMessage(); // Output: Hello from OuterClass
    }
}`}
            </div>

            <h2 style={styles.subHeader}>2. Static Nested Class</h2>
            <p style={styles.paragraph}>
                A static nested class does not require an instance of the outer class. It can only access static members of the outer class.
            </p>
            <div style={styles.codeBlock}>
                {`class OuterClass {
    static String message = "Static message";

    static class StaticNestedClass {
        void displayMessage() {
            System.out.println(message);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        OuterClass.StaticNestedClass nested = new OuterClass.StaticNestedClass();
        nested.displayMessage(); // Output: Static message
    }
}`}
            </div>

            <h2 style={styles.subHeader}>3. Anonymous Inner Class</h2>
            <p style={styles.paragraph}>
                Anonymous inner classes are used when a class needs to be used only once. They are defined and instantiated at the same time.
            </p>
            <div style={styles.codeBlock}>
                {`interface Greeting {
    void sayHello();
}

public class Main {
    public static void main(String[] args) {
        Greeting greeting = new Greeting() {
            @Override
            public void sayHello() {
                System.out.println("Hello from Anonymous Inner Class");
            }
        };
        greeting.sayHello(); // Output: Hello from Anonymous Inner Class
    }
}`}
            </div>

            <h2 style={styles.subHeader}>Advantages of Inner Classes</h2>
            <ul style={styles.list}>
                <li>Improves encapsulation by grouping related classes together.</li>
                <li>Increases readability and maintainability of the code.</li>
                <li>Allows for more flexible and modular code design.</li>
            </ul>

            <h2 style={styles.subHeader}>Key Points</h2>
            <ul style={styles.list}>
                <li>Inner classes can access all members of their outer class.</li>
                <li>Static nested classes cannot access non-static members of the outer class.</li>
                <li>Anonymous inner classes are widely used in event handling.</li>
            </ul>

            <p style={styles.footerNote}>© 2024 Prep Java - All Rights Reserved</p>
        </div>
    );
};

export default InnerClass;
