import React, { useState } from "react";

const Stack = () => {
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

  const stackCode = `import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        // Push operation
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack after pushes: " + stack);

        // Peek operation
        System.out.println("Top element: " + stack.peek());

        // Pop operation
        System.out.println("Popped element: " + stack.pop());
        System.out.println("Stack after pop: " + stack);

        // Check if stack is empty
        System.out.println("Is stack empty? " + stack.isEmpty());
    }
}`;
  
  const questions = {
    basic: [
      "What is a stack?",
      "How do you implement a stack in Java?",
      "What are the operations of a stack?",
    ],
    intermediate: [
      "Explain how to reverse a stack using recursion.",
      "What is the difference between stack and queue?",
      "How do you implement a stack using arrays?",
    ],
    advanced: [
      "How do you implement a stack using two queues?",
      "Explain the time complexity of stack operations.",
      "What are some real-world use cases of stacks?",
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Stack</h1>

      {/* Definition */}
      <section>
        <h2 style={styles.sectionHeader}>What is a Stack?</h2>
        <p style={styles.paragraph}>
          A <strong>Stack</strong> is a linear data structure that follows the Last In First Out (LIFO) principle, 
          where the last element added is the first to be removed.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Data_stack.svg"
          alt="Stack Diagram"
          style={styles.image}
        />
      </section>

      {/* Stack Operations */}
      <section>
        <h2 style={styles.sectionHeader}>Stack Operations</h2>
        <ul style={styles.list}>
          <li><strong>push(element)</strong>: Adds an element to the top of the stack (O(1)).</li>
          <li><strong>pop()</strong>: Removes and returns the top element of the stack (O(1)).</li>
          <li><strong>peek()</strong>: Returns the top element without removing it (O(1)).</li>
          <li><strong>isEmpty()</strong>: Checks if the stack is empty (O(1)).</li>
        </ul>
      </section>

      {/* Stack Implementation Code */}
      <section>
        <h2 style={styles.sectionHeader}>Stack Implementation in Java</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(stackCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{stackCode}</pre>
        </div>
      </section>

      {/* Use Cases of Stacks */}
      <section>
        <h2 style={styles.sectionHeader}>Use Cases of Stacks</h2>
        <ul style={styles.list}>
          <li>Expression evaluation and conversion (e.g., infix to postfix).</li>
          <li>Backtracking (e.g., maze solving, recursion).</li>
          <li>Undo functionality in text editors.</li>
        </ul>
      </section>

      {/* Stack Questions */}
      <section>
        <h2 style={styles.sectionHeader}>Stack Interview Questions</h2>

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

export default Stack;
