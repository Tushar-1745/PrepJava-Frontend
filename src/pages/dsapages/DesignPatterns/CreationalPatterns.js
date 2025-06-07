import React, { useState } from "react";

const CreationalPatterns = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = {
    container: {
      padding: "10px 20px",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333333",
      lineHeight: "1.5",
    },
    header: {
      fontSize: "2.5rem",
      textAlign: "left",
      color: "black",
    },
    sectionHeader: {
      fontSize: "1.5rem",
      color: "black",
      borderBottom: "1px solid black",
      display: "inline-block",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      margin: "10px 0",
    },
    codeBlock: {
      position: "relative",
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px",
      borderRadius: "5px",
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: "1rem",
      marginBottom: "20px",
    },
    copyButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#4A90E2",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "5px 10px",
      cursor: "pointer",
      fontSize: "0.8rem",
    },
    list: {
      marginLeft: "20px",
      fontSize: "1rem",
    },
  };

  const singletonCode = `class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Creational Design Patterns</h1>

      <section>
        <h2 style={styles.sectionHeader}>What are Creational Patterns?</h2>
        <p style={styles.paragraph}>
          Creational design patterns focus on the best ways to create objects.
          They provide flexible object creation mechanisms, increasing code
          maintainability and scalability.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Types of Creational Patterns</h2>
        <ul style={styles.list}>
          <li><strong>Singleton:</strong> Ensures a class has only one instance.</li>
          <li><strong>Factory Method:</strong> Creates objects without specifying the exact class.</li>
          <li><strong>Abstract Factory:</strong> Provides an interface for creating families of related objects.</li>
          <li><strong>Builder:</strong> Constructs complex objects step by step.</li>
          <li><strong>Prototype:</strong> Creates new objects by copying an existing object.</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Singleton Pattern Example</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(singletonCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{singletonCode}</pre>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>When to Use Creational Patterns?</h2>
        <ul style={styles.list}>
          <li>When object creation is complex or varies based on conditions.</li>
          <li>To enforce constraints on object instantiation.</li>
          <li>To improve flexibility in object creation.</li>
        </ul>
      </section>
    </div>
  );
};

export default CreationalPatterns;
