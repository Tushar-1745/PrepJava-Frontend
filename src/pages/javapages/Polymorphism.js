import React from 'react';

const Polymorphism = () => {
    const styles = {
        container: {
            padding: '10px 20px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: 'white',
            color: '#333333',
            lineHeight: '1.5',
        },
        header: {
            fontSize: '2.5rem',
            textAlign: 'left',
            color: 'black',
        },
        sectionHeader: {
            fontSize: '1.5rem',
            color: 'black',
            borderBottom: '2px solid black',
            display: 'inline-block',
            marginBottom: '10px',
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
        list: {
            fontSize: '1.1rem',
            margin: '10px 0',
            paddingLeft: '20px',
        },
        subSectionHeader: {
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginTop: '15px',
        }
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Polymorphism in Java</h1>

            <p style={styles.paragraph}>
                Polymorphism in Java allows a single interface to be used for different types of actions.
                It enables a method to perform different behaviors based on the object that calls it.
            </p>

            <h2 style={styles.sectionHeader}>Method Overloading (Compile-Time Polymorphism)</h2>
            <p style={styles.paragraph}>
                Method overloading allows multiple methods with the same name in the same class but with different parameters.
                It is resolved at compile-time.
            </p>
            <h3 style={styles.subSectionHeader}>Necessary Conditions for Method Overloading:</h3>
            <ul style={styles.list}>
                <li>Return type of methods can be different.</li>
                <li>Types of parameters should be different.</li>
                <li>Number of parameters should be different.</li>
            </ul>
            {renderCodeExample(`class MathOperations {
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperations obj = new MathOperations();
        System.out.println(obj.add(5, 10));
        System.out.println(obj.add(5.5, 2.2));
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`15
7.7`)}

            <h2 style={styles.sectionHeader}>Method Overriding (Runtime Polymorphism)</h2>
            <p style={styles.paragraph}>
                Method overriding allows a subclass to provide a specific implementation of a method defined in its superclass.
                It is resolved at runtime based on the object's actual type.
            </p>
            <h3 style={styles.subSectionHeader}>Important Points:</h3>
            <ul style={styles.list}>
                <li>Method signature must be the same in both superclass and subclass.</li>
                <li>The <code>super</code> keyword is used to call the parent class method.</li>
                <li>Only inherited methods can be overridden (private and static methods cannot be overridden).</li>
            </ul>
            {renderCodeExample(`class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.makeSound();
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`Bark`)}

            <h2 style={styles.sectionHeader}>Key Differences Between Overloading and Overriding</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>Feature</th>
                        <th>Method Overloading</th>
                        <th>Method Overriding</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Binding Type</td>
                        <td>Compile-time</td>
                        <td>Runtime</td>
                    </tr>
                    <tr>
                        <td>Method Signature</td>
                        <td>Can have different parameters</td>
                        <td>Must have the same parameters</td>
                    </tr>
                    <tr>
                        <td>Class Relation</td>
                        <td>Same class</td>
                        <td>Parent-child relationship</td>
                    </tr>
                    <tr>
                        <td>Return Type</td>
                        <td>Can be different</td>
                        <td>Must be the same or covariant</td>
                    </tr>
                </tbody>
            </table>

            <h2 style={styles.sectionHeader}>Benefits of Polymorphism</h2>
            <ul style={styles.list}>
                <li><strong>Code Reusability:</strong> Same method names can be used with different parameters.</li>
                <li><strong>Scalability:</strong> Code can be extended without modification.</li>
                <li><strong>Flexibility:</strong> Objects of different types can be treated as a single type.</li>
                <li><strong>Maintainability:</strong> Enhances readability and maintainability of code.</li>
            </ul>
        </div>
    );
};

export default Polymorphism;
