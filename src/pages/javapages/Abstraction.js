import React from 'react';
import { useNavigate } from 'react-router-dom';

const Abstraction = () => {
    const navigate = useNavigate();

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
            borderBottom: '1px solid black',
            display: 'inline-block',
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
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '15px',
        },
        th: {
            border: '1px solid black',
            padding: '8px',
            textAlign: 'left',
            backgroundColor: '#f2f2f2',
        },
        td: {
            border: '1px solid black',
            padding: '8px',
            textAlign: 'left',
        },
        quizButton: {
            marginTop: '30px',
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        }
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    const handleTakeQuiz = () => {
        navigate('/java/abstraction/test');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Abstraction in Java</h1>

            <p style={styles.paragraph}>
                <strong>Abstraction</strong> is a principle in Java that hides the implementation details and shows only the essential features of an object.
            </p>

            <h2 style={styles.sectionHeader}>Why Use Abstraction?</h2>
            <ul>
                <li>Reduces code complexity by hiding implementation details.</li>
                <li>Enhances security by restricting direct access to implementation.</li>
                <li>Increases flexibility for future modifications.</li>
            </ul>

            <h2 style={styles.sectionHeader}>Abstract Class Example</h2>
            {renderCodeExample(`abstract class Vehicle {
    abstract void start();
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car starts with a key.");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car();
        myCar.start();
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`Car starts with a key.`)}

            <h2 style={styles.sectionHeader}>Interface Example</h2>
            {renderCodeExample(`interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound();
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`Dog barks`)}

            <h2 style={styles.sectionHeader}>Abstract Class vs. Interface</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Abstract Class</th>
                        <th style={styles.th}>Interface</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>Can have both abstract and concrete methods.</td>
                        <td style={styles.td}>Only abstract methods (until Java 8, after which default methods are allowed).</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Can have constructors.</td>
                        <td style={styles.td}>Cannot have constructors.</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Can have instance variables.</td>
                        <td style={styles.td}>Only static and final variables.</td>
                    </tr>
                </tbody>
            </table>

            <button style={styles.quizButton} onClick={handleTakeQuiz}>
                Take Quiz on Abstraction
            </button>
        </div>
    );
};

export default Abstraction;
