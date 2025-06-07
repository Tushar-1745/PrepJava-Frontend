import React from 'react';

const TypeCasting = () => {
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
            <h1 style={styles.header}>Type Casting in Java</h1>
            <p style={styles.paragraph}>
                Type casting in Java refers to converting a variable from one data type to another.
                There are two types of type casting: <strong>Implicit (Widening)</strong> and <strong>Explicit (Narrowing)</strong>.
            </p>

            <h2 style={styles.sectionHeader}>Implicit Type Casting (Widening)</h2>
            <p style={styles.paragraph}>
                Widening occurs when a smaller data type is automatically converted into a larger data type.
                This happens because the larger type can accommodate all values of the smaller type.
            </p>
            {renderCodeExample(`public class WideningExample {
    public static void main(String[] args) {
        int num = 100;
        double d = num; // Implicit casting
        System.out.println("Integer value: " + num);
        System.out.println("Double value: " + d);
    }
}`)}

            <h2 style={styles.sectionHeader}>Explicit Type Casting (Narrowing)</h2>
            <p style={styles.paragraph}>
                Narrowing occurs when a larger data type is explicitly converted into a smaller data type.
                This requires manual intervention using type casting syntax.
            </p>
            {renderCodeExample(`public class NarrowingExample {
    public static void main(String[] args) {
        double d = 9.78;
        int num = (int) d; // Explicit casting
        System.out.println("Double value: " + d);
        System.out.println("Integer value: " + num);
    }
}`)}

            <h2 style={styles.sectionHeader}>Type Casting with Objects</h2>
            <p style={styles.paragraph}>
                Java allows object type casting between parent and child classes using <code>upcasting</code> and <code>downcasting</code>.
            </p>
            {renderCodeExample(`class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class TypeCastingObjects {
    public static void main(String[] args) {
        Animal a = new Dog(); // Upcasting (implicit)
        a.makeSound();
        
        Dog d = (Dog) a; // Downcasting (explicit)
        d.bark();
    }
}`)}
        </div>
    );
};

export default TypeCasting;
