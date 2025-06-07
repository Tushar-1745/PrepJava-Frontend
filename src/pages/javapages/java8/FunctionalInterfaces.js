import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FunctionalInterfaces = () => {
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
      <h1 style={styles.header}>Functional Interface</h1>

      <p style={styles.paragraph}>
        A <strong>functional interface</strong> in Java is an interface that <strong>contains exactly one abstract method.</strong> It can have multiple default and static methods, but only one abstract method.
      </p>
      <p style={styles.paragraph}>Functional interfaces are the foundation of <strong>lambda expressions</strong> and are widely used in <strong>functional programming.</strong></p>
      
      <h2 style={styles.sectionHeader}>Key Features of Functional Interfaces</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Single Abstract Method (SAM)</strong> → It must have only one abstract method.</li>
        <li style={styles.listItem}><strong>Can have default and static methods</strong> → Default methods (with <code>default</code> keyword) and static methods (with <code>static</code> keyword) are allowed.</li>
        <li style={styles.listItem}><strong>Supports Lambda Expressions</strong> → Functional interfaces enable lambda expressions and method references.</li>
        <li style={styles.listItem}><strong>@FunctionalInterface Annotation</strong> → Used to indicate that an interface is functional (though it's optional).</li>
      </ul>

      <h2 style={styles.sectionHeader}>Example: Functional Interface in Java</h2>
      <pre style={styles.codeBlock}>
{`// Defining a Functional Interface
@FunctionalInterface
interface MyFunctionalInterface {
    void display(String message);
}

// Implementing using Anonymous Class
class Main {
    public static void main(String[] args) {
        MyFunctionalInterface obj1 = new MyFunctionalInterface() {
            @Override
            public void display(String message) {
                System.out.println("Message: " + message);
            }
        };
        obj1.display("Hello from Anonymous Class");

        // Implementing using Lambda Expression
        MyFunctionalInterface obj2 = (message) -> System.out.println("Message: " + message);
        obj2.display("Hello from Lambda Expression");
    }
}`}
      </pre>

      <h2 style={styles.sectionHeader}>Example: Runnable Interface</h2>
      <p style={styles.paragraph}>
        The <code>Runnable</code> interface is a functional interface in Java, used to represent a task that can be executed by a thread. It contains a single abstract method <code>run()</code>.
      </p>
      <pre style={styles.codeBlock}>
{`// Implementing Runnable using Anonymous Class
class Main {
    public static void main(String[] args) {
        Runnable task1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("Task executed using Anonymous Class");
            }
        };
        new Thread(task1).start();

        // Implementing Runnable using Lambda Expression
        Runnable task2 = () -> System.out.println("Task executed using Lambda Expression");
        new Thread(task2).start();
    }
}`}
      </pre>
    </div>
  );
};

export default FunctionalInterfaces;
