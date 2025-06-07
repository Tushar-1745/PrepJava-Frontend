import React from 'react';

const Encapsulation = () => {
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
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Encapsulation in Java</h1>

            <p style={styles.paragraph}>
                **Encapsulation** is a principle of object-oriented programming that restricts direct access to an object's data and only allows manipulation through defined methods.
            </p>

            <h2 style={styles.sectionHeader}>Why Use Encapsulation?</h2>
            <ul>
                <li>Protects data from unintended modification.</li>
                <li>Encapsulated code is more modular and reusable.</li>
                <li>Makes debugging and maintenance easier.</li>
            </ul>

            <h2 style={styles.sectionHeader}>Encapsulation Example</h2>
            {renderCodeExample(`class Student {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setName("Tushar");
        System.out.println(student.getName());
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`Tushar`)}

            <h2 style={styles.sectionHeader}>Key Features of Encapsulation</h2>
            <ul>
                <li>All data members should be **private**.</li>
                <li>Use **getter and setter methods** to access and modify private data.</li>
                <li>Encapsulation ensures **data hiding** and **data security**.</li>
            </ul>
        </div>
    );
};

export default Encapsulation;
