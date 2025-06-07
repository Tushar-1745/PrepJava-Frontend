import React from 'react';

const Operators = () => {
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
            <h1 style={styles.header}>Operators in Java</h1>

            <p style={styles.paragraph}>
                Operators in Java are symbols that perform operations on variables and values. Java provides various types of operators to perform different operations.
            </p>

            <h2 style={styles.sectionHeader}>1. Arithmetic Operators</h2>
            <p style={styles.paragraph}>These operators are used to perform mathematical calculations.</p>
            {renderCodeExample(`int a = 10, b = 5;
System.out.println(a + b); // Addition
System.out.println(a - b); // Subtraction
System.out.println(a * b); // Multiplication
System.out.println(a / b); // Division
System.out.println(a % b); // Modulus`)}

            <h2 style={styles.sectionHeader}>2. Relational (Comparison) Operators</h2>
            <p style={styles.paragraph}>These operators compare values and return a boolean result.</p>
            {renderCodeExample(`int a = 10, b = 5;
System.out.println(a == b); // false
System.out.println(a != b); // true
System.out.println(a > b);  // true
System.out.println(a < b);  // false
System.out.println(a >= b); // true
System.out.println(a <= b); // false`)}

            <h2 style={styles.sectionHeader}>3. Logical Operators</h2>
            <p style={styles.paragraph}>These operators are used to perform logical operations.</p>
            {renderCodeExample(`boolean x = true, y = false;
System.out.println(x && y); // false (Logical AND)
System.out.println(x || y); // true (Logical OR)
System.out.println(!x);    // false (Logical NOT)`)}

            <h2 style={styles.sectionHeader}>4. Bitwise Operators</h2>
            <p style={styles.paragraph}>These operators perform bit-level operations on integer values.</p>
            {renderCodeExample(`int a = 5, b = 3;
System.out.println(a & b); // Bitwise AND
System.out.println(a | b); // Bitwise OR
System.out.println(a ^ b); // Bitwise XOR
System.out.println(~a);    // Bitwise Complement
System.out.println(a << 1); // Left Shift
System.out.println(a >> 1); // Right Shift`)}

            <h2 style={styles.sectionHeader}>5. Assignment Operators</h2>
            <p style={styles.paragraph}>These operators assign values to variables.</p>
            {renderCodeExample(`int a = 10;
a += 5;  // a = a + 5;
a -= 5;  // a = a - 5;
a *= 5;  // a = a * 5;
a /= 5;  // a = a / 5;
a %= 5;  // a = a % 5;`)}

            <h2 style={styles.sectionHeader}>6. Unary Operators</h2>
            <p style={styles.paragraph}>These operators perform operations on a single operand.</p>
            {renderCodeExample(`int a = 10;
System.out.println(++a); // Pre-increment
System.out.println(a++); // Post-increment
System.out.println(--a); // Pre-decrement
System.out.println(a--); // Post-decrement`)}

            <h2 style={styles.sectionHeader}>7. Ternary Operator</h2>
            <p style={styles.paragraph}>A shorthand for an if-else statement.</p>
            {renderCodeExample(`int a = 10, b = 5;
int min = (a < b) ? a : b;
System.out.println(min); // 5`)}
        </div>
    );
};

export default Operators;
