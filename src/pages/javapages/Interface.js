import React from 'react';

const Interface = () => {
    const styles = {
        container: {
            padding: '10px 20px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: 'white',
            color: '#333333',
            lineHeight: '1.6',
        },
        header: {
            fontSize: '2.5rem',
            textAlign: 'left',
            color: 'black',
        },
        sectionHeader: {
            fontSize: '1.5rem',
            color: 'black',
            borderBottom: '1px solid black',
            display: 'inline-block',
            marginTop: '20px',
        },
        paragraph: {
            fontSize: '1.1rem',
            margin: '10px 0',
        },
        codeBox: {
            backgroundColor: '#212121',
            color: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            fontFamily: "'Source Code Pro', monospace",
            fontSize: '1rem',
            overflowX: 'auto',
            position: 'relative',
            marginBottom: '20px',
        },
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Interface in Java</h1>
            
            <p style={styles.paragraph}>
                An <strong>interface</strong> in Java is a blueprint of a class that defines a set of abstract methods 
                that a class must implement. It provides a way to achieve abstraction and multiple inheritance.
            </p>
            
            <h2 style={styles.sectionHeader}>Interface Syntax</h2>
            {renderCodeExample(`interface InterfaceName {
    // Abstract methods
    returnType methodName(parameters);
}`)}
            
            <h2 style={styles.sectionHeader}>Example of an Interface</h2>
            {renderCodeExample(`interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Bark! Bark!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound();
    }
}`)}
            
            <h2 style={styles.sectionHeader}>Key Characteristics of an Interface</h2>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li>Interfaces cannot have instance variables, only constants (public, static, final).</li>
                <li>All methods in an interface are implicitly public and abstract.</li>
                <li>A class implements an interface using the <code>implements</code> keyword.</li>
                <li>Interfaces allow multiple inheritance in Java.</li>
            </ul>
            
            <h2 style={styles.sectionHeader}>Java 8 and 9 Features in Interfaces</h2>
            <h3 style={styles.sectionHeader}>1. Default Methods (Java 8)</h3>
            <p style={styles.paragraph}>Java 8 introduced default methods that provide method implementation inside interfaces.</p>
            {renderCodeExample(`interface Vehicle {
    default void start() {
        System.out.println("Vehicle is starting...");
    }
}

class Car implements Vehicle {}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start(); // Uses default method from interface
    }
}`)}
            
            <h3 style={styles.sectionHeader}>2. Static Methods (Java 8)</h3>
            <p style={styles.paragraph}>Static methods can be defined inside an interface and called using the interface name.</p>
            {renderCodeExample(`interface Utility {
    static void display() {
        System.out.println("Static method in an interface");
    }
}

public class Main {
    public static void main(String[] args) {
        Utility.display();
    }
}`)}
            
            <h3 style={styles.sectionHeader}>3. Private Methods (Java 9)</h3>
            <p style={styles.paragraph}>Java 9 introduced private methods inside interfaces for internal logic reuse.</p>
            {renderCodeExample(`interface Helper {
    private void log() {
        System.out.println("Logging information...");
    }
    
    default void show() {
        log();
        System.out.println("Displaying details");
    }
}

class User implements Helper {}

public class Main {
    public static void main(String[] args) {
        User user = new User();
        user.show();
    }
}`)}
        </div>
    );
};

export default Interface;
