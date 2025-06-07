import React from 'react';

const Packages = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white', // Light background
      color: '#333333', // Dark text
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
      backgroundColor: '#212121', // Black background for code
      color: '#ffffff', // White text
      padding: '20px',
      borderRadius: '8px',
      fontFamily: "'Source Code Pro', monospace",
      fontSize: '1rem',
      overflowX: 'auto',
      marginBottom: '20px',
    },
    codeButton: {
      backgroundColor: '#1565c0', // Bluish button color
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      float: 'right',
      padding: '5px 10px',
    },
    practiceButton: {
      margin: '25px auto',
      color: 'black',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'inline-block',
      backgroundColor: '#89CFF0',
    },
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    listItem: {
      marginBottom: '10px',
    },
  };

  const handleCopy = (codeId) => {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.header}>Packages in Java</h1>

      {/* Definition Section */}
      <h2 style={styles.sectionHeader}>What are Packages?</h2>
      <p style={styles.paragraph}>
        In Java, a <strong>package</strong> is a namespace that organizes classes and interfaces. Packages help avoid name conflicts, control access, and bundle related classes together for better code management.
      </p>

      {/* Key Points Section */}
      <h2 style={styles.sectionHeader}>Key Points about Packages</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Packages prevent naming conflicts by grouping classes into namespaces.</li>
        <li style={styles.listItem}>They provide controlled access using access modifiers.</li>
        <li style={styles.listItem}>
          Java comes with built-in packages like <code>java.util</code>, <code>java.io</code>, etc.
        </li>
        <li style={styles.listItem}>Developers can create custom packages to organize code.</li>
        <li style={styles.listItem}>The <code>import</code> statement is used to access classes from a package.</li>
      </ul>

      {/* Built-in and User-defined Packages */}
      <h2 style={styles.sectionHeader}>Types of Packages</h2>
      <p style={styles.paragraph}>
        Java has two types of packages:
        <strong> Built-in Packages</strong> (predefined by Java) and <strong>User-defined Packages</strong> (created by developers).
      </p>
      <pre id="exampleBuiltIn" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy('exampleBuiltIn')}
        >
          Copy
        </button>
        {`import java.util.ArrayList;

public class Example {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        System.out.println(list); // Output: [Java]
    }
}`}
      </pre>

      <h2 style={styles.sectionHeader}>Creating a User-defined Package</h2>
      <pre id="userDefinedCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy('userDefinedCode')}
        >
          Copy
        </button>
        {`package mypackage;

public class MyClass {
    public void display() {
        System.out.println("Hello from mypackage!");
    }
}`}
      </pre>

      {/* How to Use a Package */}
      <h2 style={styles.sectionHeader}>How to Use a Package</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Create a package using the <code>package</code> keyword at the top of your file.
        </li>
        <li style={styles.listItem}>
          Compile the file with <code>javac -d . MyClass.java</code> to generate the proper directory structure.
        </li>
        <li style={styles.listItem}>
          Import and use the package in another file with <code>import</code>.
        </li>
      </ul>
      <pre id="importCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy('importCode')}
        >
          Copy
        </button>
        {`import mypackage.MyClass;

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.display();
    }
}`}
      </pre>

    </div>
  );
};

export default Packages;
