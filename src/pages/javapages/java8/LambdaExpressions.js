import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const LambdaExpressions = () => {
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
      borderBottom: '2px solid blue',
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
    list: {
      paddingLeft: '20px',
    },
    listItem: {
      fontSize: '1.1rem',
      marginBottom: '8px',
    },
    codeBlock: {
        width: '100%',
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px",
        borderRadius: "5px",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "1rem",
        marginBottom: "20px",
        overflow: "auto",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Lambda Expressions in Java</h1>

      <p style={styles.paragraph}>
        A <strong>lambda expression</strong> is a concise way to represent an anonymous function.
        It is mainly used to implement <strong>functional interfaces</strong> in Java.
      </p>
      
      <h2 style={styles.sectionHeader}>Key Features of Lambda Expressions</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Concise Syntax</strong> → Reduces boilerplate code.</li>
        <li style={styles.listItem}><strong>No Need for Anonymous Classes</strong> → Simplifies implementation of functional interfaces.</li>
        <li style={styles.listItem}><strong>Enables Functional Programming</strong> → Improves readability and efficiency.</li>
      </ul>

      <h2 style={styles.sectionHeader}>Syntax of Lambda Expressions</h2>
      <pre style={styles.codeBlock}>
{`// General Syntax
(parameters) -> { body }`}
      </pre>

      <h2 style={styles.sectionHeader}>Example: Lambda Expression in Java</h2>
      <pre style={styles.codeBlock}>
{`// Functional Interface
@FunctionalInterface
interface MyFunction {
    void greet(String message);
}

// Using Lambda Expression
class Main {
    public static void main(String[] args) {
        MyFunction lambdaFunc = (message) -> System.out.println("Hello, " + message);
        lambdaFunc.greet("Lambda Expressions");
    }
}`}
      </pre>

      <h2 style={styles.sectionHeader}>Example: Using Lambda with Runnable Interface</h2>
      <pre style={styles.codeBlock}>
{`// Runnable using Lambda Expression
class Main {
    public static void main(String[] args) {
        Runnable task = () -> System.out.println("Running using Lambda");
        new Thread(task).start();
    }
}`}
      </pre>
    </div>
  );
};

export default LambdaExpressions;
