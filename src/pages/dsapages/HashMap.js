import React, { useState } from "react";

const HashMap = () => {
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

  const hashMapCode = `import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        // Creating a HashMap
        HashMap<String, Integer> map = new HashMap<>();

        // Adding key-value pairs
        map.put("Alice", 25);
        map.put("Bob", 30);
        map.put("Charlie", 35);

        // Accessing a value
        System.out.println("Age of Bob: " + map.get("Bob"));

        // Removing a key-value pair
        map.remove("Alice");
        System.out.println("Updated HashMap: " + map);

        // Iterating over entries
        for (HashMap.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }
}`;
  
  const questions = {
    basic: [
      "What is a HashMap?",
      "How does a HashMap work in Java?",
      "What are key-value pairs in a HashMap?",
    ],
    intermediate: [
      "What is the time complexity of HashMap operations?",
      "How is hashing used in HashMap?",
      "What is the difference between HashMap and HashTable?",
    ],
    advanced: [
      "Explain the internal working of HashMap in Java 8.",
      "How does a HashMap handle collisions?",
      "What is the role of the hashCode() and equals() methods in HashMap?",
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>HashMap</h1>

      {/* Definition */}
      <section>
        <h2 style={styles.sectionHeader}>What is a HashMap?</h2>
        <p style={styles.paragraph}>
          A <strong>HashMap</strong> is a part of Java's <code>java.util</code> package that implements the <code>Map</code> interface. 
          It is a data structure used to store key-value pairs, where each key is unique, and values can be accessed using their respective keys.
        </p>
      </section>

      {/* Origin */}
      <section>
        <h2 style={styles.sectionHeader}>Origin of HashMap</h2>
        <p style={styles.paragraph}>
          The concept of hashing dates back to the 1950s, and HashMap was introduced in Java 1.2 as part of the Java Collections Framework. 
          Over the years, HashMap has undergone significant improvements, especially in Java 8, where collision resolution shifted from linked lists to balanced trees for better performance.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 style={styles.sectionHeader}>Key Features of HashMap</h2>
        <ul style={styles.list}>
          <li>Allows null values and one null key.</li>
          <li>Not synchronized, making it faster but not thread-safe.</li>
          <li>Uses hashing for quick retrieval of values.</li>
          <li>Time complexity of O(1) for basic operations like get and put.</li>
        </ul>
      </section>

      {/* Working */}
      <section>
        <h2 style={styles.sectionHeader}>How Does HashMap Work?</h2>
        <p style={styles.paragraph}>
          HashMap uses an internal array of buckets to store key-value pairs. 
          The key's <code>hashCode()</code> determines the bucket location. If multiple keys map to the same bucket (collision), 
          a linked list or balanced tree (since Java 8) is used to store them.
        </p>
      </section>

      {/* Code Example */}
      <section>
        <h2 style={styles.sectionHeader}>HashMap Implementation in Java</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(hashMapCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{hashMapCode}</pre>
        </div>
      </section>

      {/* Common Issues */}
      <section>
        <h2 style={styles.sectionHeader}>Common Issues with HashMap</h2>
        <ul style={styles.list}>
          <li>Not thread-safe; use <code>ConcurrentHashMap</code> in multi-threaded environments.</li>
          <li>Performance degrades if hash collisions are frequent.</li>
          <li>Incorrect implementation of <code>hashCode()</code> and <code>equals()</code> can lead to issues.</li>
        </ul>
      </section>

      {/* Use Cases */}
      <section>
        <h2 style={styles.sectionHeader}>Use Cases of HashMap</h2>
        <ul style={styles.list}>
          <li>Implementing caches for quick data retrieval.</li>
          <li>Storing configuration settings or lookup tables.</li>
          <li>Indexing data for search and retrieval operations.</li>
        </ul>
      </section>

      {/* HashMap Questions */}
      <section>
        <h2 style={styles.sectionHeader}>HashMap Interview Questions</h2>

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

export default HashMap;
