import React, { useState } from "react";

const Queue = () => {
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
      height: "auto",
      marginBottom: "20px",
      borderRadius: "5px",
    },
  };

  const javaQueueCode = `import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        // Create a Queue using LinkedList
        Queue<Integer> queue = new LinkedList<>();

        // Add elements to the queue
        queue.add(10);
        queue.add(20);
        queue.add(30);

        // Display the queue
        System.out.println("Queue: " + queue);

        // Remove and display the front element
        System.out.println("Removed: " + queue.remove());

        // Peek at the front element
        System.out.println("Front element: " + queue.peek());

        // Check if the queue is empty
        System.out.println("Is the queue empty? " + queue.isEmpty());
    }
}`;

  const questions = {
    basic: [
      "What is a queue in Java, and how is it implemented?",
      "What are the key operations of a queue?",
      "Explain the difference between a queue and a stack.",
    ],
    intermediate: [
      "How do you implement a circular queue using an array?",
      "What is the use of PriorityQueue in Java?",
      "How can a queue be used in breadth-first search (BFS)?",
    ],
    advanced: [
      "How would you implement a queue using two stacks?",
      "Discuss the time complexity of queue operations in different implementations (LinkedList vs ArrayDeque).",
      "How is a BlockingQueue used in multithreading?",
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Queue</h1>

      {/* Definition */}
      <section>
        <h2 style={styles.sectionHeader}>What is a Queue?</h2>
        <p style={styles.paragraph}>
          A <strong>Queue</strong> is a linear data structure that follows the First In First Out (FIFO) principle, where the first element added is the first to be removed. Java provides the <code>Queue</code> interface, implemented by classes like <code>LinkedList</code> and <code>PriorityQueue</code>.
        </p>
      </section>

      {/* Queue Operations */}
      <section>
        <h2 style={styles.sectionHeader}>Queue Operations</h2>
        <ul style={styles.list}>
          <li><strong>add(element)</strong>: Inserts an element to the queue, throws an exception if the queue is full.</li>
          <li><strong>offer(element)</strong>: Inserts an element to the queue, returns false if the queue is full.</li>
          <li><strong>remove()</strong>: Removes and returns the head of the queue, throws an exception if the queue is empty.</li>
          <li><strong>poll()</strong>: Removes and returns the head of the queue, returns null if the queue is empty.</li>
          <li><strong>peek()</strong>: Returns the head of the queue without removing it, returns null if the queue is empty.</li>
        </ul>
      </section>

      {/* Image Representation */}
      <section>
        <h2 style={styles.sectionHeader}>Visual Representation</h2>
        <img
          style={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg"
          alt="Queue visual representation"
        />
      </section>

      {/* Queue Implementation Code */}
      <section>
        <h2 style={styles.sectionHeader}>Queue Implementation in Java</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(javaQueueCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{javaQueueCode}</pre>
        </div>
      </section>

      {/* Queue-Based Interview Questions */}
      <section>
        <h2 style={styles.sectionHeader}>Queue-Based Interview Questions</h2>
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

export default Queue;
