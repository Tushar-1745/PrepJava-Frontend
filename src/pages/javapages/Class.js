import React from 'react';

const Class = () => {
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
            <h1 style={styles.header}>Class in Java</h1>

            <p style={styles.paragraph}>
                In Java, a <strong>class</strong> is the blueprint or template for creating objects. It defines <strong>fields (variables)</strong> and <strong>methods (functions)</strong> that describe the behavior and properties of an object.
            </p>

            <h2 style={styles.sectionHeader}>Class Syntax</h2>
            <p style={styles.paragraph}>A class is defined using the <code>class</code> keyword, followed by the class name.</p>
            {renderCodeExample(`class ClassName {
    // Fields (variables)
    dataType variableName;

    // Constructor
    ClassName() {
        // Initialization code
    }

    // Methods (functions)
    returnType methodName(parameters) {
        // Method body
    }
}`)}

            <h2 style={styles.sectionHeader}>Example of a Class</h2>
            {renderCodeExample(`class Car {
    String brand;
    int speed;

    Car(String brand, int speed) {
        this.brand = brand;
        this.speed = speed;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand + ", Speed: " + speed + " km/h");
    }
}`)}
            
            <h2 style={styles.sectionHeader}>Access Modifiers for a Class</h2>
            <p style={styles.paragraph}>
                A class in Java can have the following access modifiers:
            </p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li><strong>public</strong> – The class is accessible from anywhere in the program.</li>
                <li><strong>default</strong> (no modifier) – The class is accessible only within the same package.</li>
            </ul>
            <p style={styles.paragraph}>
                A <strong>top-level class</strong> cannot be <code>private</code> or <code>protected</code>, but inner classes can use these modifiers.
            </p>

            <h2 style={styles.sectionHeader}>Types of Classes</h2>

            <h3 style={styles.sectionHeader}>1. Normal Class</h3>
            <p style={styles.paragraph}>
                A regular class that can be instantiated and used to create objects.
            </p>
            {renderCodeExample(`class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}`)}
            
            <h3 style={styles.sectionHeader}>2. Abstract Class</h3>
            <p style={styles.paragraph}>
                An abstract class cannot be instantiated. It may contain abstract methods that must be implemented by subclasses.
            </p>
            {renderCodeExample(`abstract class Animal {
    abstract void makeSound(); // Abstract method
    
    void sleep() { 
        System.out.println("Sleeping...");
    }
}`)}

            <h3 style={styles.sectionHeader}>3. Final Class</h3>
            <p style={styles.paragraph}>
                A class declared as <code>final</code> cannot be extended (inherited) by other classes.
            </p>
            {renderCodeExample(`final class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}`)}

            <h3 style={styles.sectionHeader}>4. Static Inner Class</h3>
            <p style={styles.paragraph}>
                A static nested class is defined inside another class but can be instantiated without an instance of the outer class.
            </p>
            {renderCodeExample(`class Outer {
    static class Inner {
        void display() {
            System.out.println("Inside static inner class");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer.Inner obj = new Outer.Inner();
        obj.display();
    }
}`)}

            <h3 style={styles.sectionHeader}>5. Inner Class (Non-Static Nested Class)</h3>
            <p style={styles.paragraph}>
                An inner class is a non-static class defined inside another class. It needs an instance of the outer class to be created.
            </p>
            {renderCodeExample(`class Outer {
    class Inner {
        void display() {
            System.out.println("Inside inner class");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.display();
    }
}`)}

            <h3 style={styles.sectionHeader}>6. Anonymous Class</h3>
            <p style={styles.paragraph}>
                An anonymous class is a class without a name that is declared and instantiated in a single step. It is commonly used with interfaces or abstract classes.
            </p>
            {renderCodeExample(`abstract class Animal {
    abstract void makeSound();
}

public class Main {
    public static void main(String[] args) {
        Animal obj = new Animal() {
            void makeSound() {
                System.out.println("Meow! Meow!");
            }
        };
        obj.makeSound();
    }
}`)}

        </div>
    );
};

export default Class;
