import React, { useState } from "react";

const ArrayList = () => {
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
    copySuccess: {
      fontSize: "0.8rem",
      color: "green",
      marginTop: "5px",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "10px",
      margin: "20px 0",
    },
  };

  const arrayListCode = `import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<String> list = new ArrayList<>();

        // Adding elements
        list.add("Alice");
        list.add("Bob");
        list.add("Charlie");

        // Accessing elements
        System.out.println("First element: " + list.get(0));

        // Removing an element
        list.remove("Bob");
        System.out.println("Updated ArrayList: " + list);

        // Iterating over elements
        for (String name : list) {
            System.out.println(name);
        }
    }
}`;

  const questions = {
    basic: [
      "What is an ArrayList?",
      "How does ArrayList differ from an array?",
      "How do you add, remove, and access elements in an ArrayList?",
    ],
    intermediate: [
      "What is the time complexity of ArrayList operations?",
      "What is the difference between ArrayList and LinkedList?",
      "When would you use an ArrayList instead of a LinkedList?",
    ],
    advanced: [
      "How does ArrayList handle resizing?",
      "What are the internal details of ArrayList implementation?",
      "What are some common performance issues with ArrayList?",
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>ArrayList</h1>

      {/* Definition */}
      <section>
        <h2 style={styles.sectionHeader}>What is an ArrayList?</h2>
        <p style={styles.paragraph}>
          An <strong>ArrayList</strong> is a part of Java's <code>java.util</code> package and implements the <code>List</code> interface. 
          It allows dynamic resizing, meaning the size can grow and shrink as needed, unlike arrays.
        </p>
      </section>

      {/* Origin */}
      <section>
        <h2 style={styles.sectionHeader}>Origin of ArrayList</h2>
        <p style={styles.paragraph}>
          ArrayList was introduced in Java 1.2 as part of the Java Collections Framework. 
          It provides a simple way to store and manipulate a dynamically sized collection of elements.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 style={styles.sectionHeader}>Key Features of ArrayList</h2>
        <ul style={styles.list}>
          <li>Resizable array that grows as needed.</li>
          <li>Allows duplicate elements.</li>
          <li>Elements are ordered by insertion index.</li>
          <li>Faster for random access compared to LinkedList.</li>
        </ul>
      </section>

      {/* Working */}
      <section>
        <h2 style={styles.sectionHeader}>How Does ArrayList Work?</h2>
        <p style={styles.paragraph}>
          ArrayList internally uses an array to store the elements. When the array is full and more elements are added, 
          a new larger array is created, and the elements are copied to it.
        </p>
      </section>

      {/* Code Example */}
      <section>
        <h2 style={styles.sectionHeader}>ArrayList Implementation in Java</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(arrayListCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{arrayListCode}</pre>
        </div>
      </section>

      {/* Common Issues */}
      <section>
        <h2 style={styles.sectionHeader}>Common Issues with ArrayList</h2>
        <ul style={styles.list}>
          <li>Performance degradation when resizing frequently.</li>
          <li>Slow for insertions or deletions at the beginning or middle of the list.</li>
          <li>Not synchronized, so not thread-safe.</li>
        </ul>
      </section>

      {/* Use Cases */}
      <section>
        <h2 style={styles.sectionHeader}>Use Cases of ArrayList</h2>
        <ul style={styles.list}>
          <li>Storing a collection of items that need frequent access.</li>
          <li>When the size of the collection is unknown or changes frequently.</li>
          <li>For applications where order matters, like in queues or stacks.</li>
        </ul>
      </section>

      {/* ArrayList Questions */}
      <section>
        <h2 style={styles.sectionHeader}>ArrayList Interview Questions</h2>

        <div>
          <h3>Basic</h3>
          <ul style={styles.list}>
            {questions.basic.map((q, index) => (
              <li key={`basic-${index}`}>{q}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Intermediate</h3>
          <ul style={styles.list}>
            {questions.intermediate.map((q, index) => (
              <li key={`intermediate-${index}`}>{q}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Advanced</h3>
          <ul style={styles.list}>
            {questions.advanced.map((q, index) => (
              <li key={`advanced-${index}`}>{q}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ArrayList;
