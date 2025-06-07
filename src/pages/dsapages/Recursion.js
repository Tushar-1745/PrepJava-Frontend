import React, { useState } from "react";
import PrintIncreasingandDecreasing from "./RecursionOperations/PrintIncreasingandDecreasing";
import Factorial from "./RecursionOperations/Factorial";
import DisplayArray from "./RecursionOperations/DisplayArray";
import FirstandLastIndex from "./RecursionOperations/FirstandLastIndex";

const Recursion = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [openItem, setOpenItem] = useState(null);

  const toggleDropdown = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const operations = [
    { title: "Print Increasing and Decreasing", component: <PrintIncreasingandDecreasing /> },
    { title: 'Factorial of a number', component: <Factorial /> },
    { title: 'Display Array', component: <DisplayArray /> },
    { title: 'First and Last Index of element', component: <FirstandLastIndex/>}
    
  ];

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      lineHeight: "1.5",
    },
    header: {
      fontSize: "2.5rem",
      textAlign: "center",
      color: "#222",
      marginBottom: "20px",
    },
    sectionHeader: {
      fontSize: "1.5rem",
      color: "black",
      borderBottom: "2px solid black",
      display: "inline-block",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      margin: "10px 0",
    },
    codeBlock: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px",
      borderRadius: "5px",
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: "1rem",
      marginBottom: "20px",
    },
    copyButton: {
      backgroundColor: "#4A90E2",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "5px 10px",
      cursor: "pointer",
      fontSize: "0.8rem",
      marginBottom: "5px",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#fff",
      padding: "1px 16px",
      borderRadius: "5px",
      fontSize:'20px',
      marginBottom: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s",
      flexDirection: "column", // Makes sure description appears below
    },
    listItemHeader: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
    },
    dropdownContent: {
      padding: "10px",
      fontSize:'20px',
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
      marginTop: "5px",
      width: "100%",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    arrow: {
      fontSize: "28px",
      transition: "transform 0.3s",
    },
  };

  const recursionFactorialCode = `
public class RecursionExample {
    public static int factorial(int n) {
        if (n == 0) { // Base case
            return 1;
        }
        return n * factorial(n - 1); // Recursive case
    }

    public static void main(String[] args) {
        int result = factorial(5);
        System.out.println("Factorial of 5: " + result); // Output: 120
    }
}`;

  const recursionFibonacciCode = `
public class FibonacciExample {
    public static int fibonacci(int n) {
        if (n <= 1) { // Base case
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }

    public static void main(String[] args) {
        int result = fibonacci(10);
        System.out.println("Fibonacci of 10: " + result); // Output: 55
    }
}`;

  const backtrackingPermutationCode = `
import java.util.ArrayList;
import java.util.List;

public static void permute(char[] s, int l, int r, List<String> result) {
    if (l == r) {
        result.add(new String(s));
    } else {
        for (int i = l; i <= r; i++) {
            swap(s, l, i);
            permute(s, l + 1, r, result);
            swap(s, l, i); // Backtrack
        }
    }
}

public static List<String> getPermutations(String str) {
    List<String> result = new ArrayList<>();
    char[] s = str.toCharArray();
    permute(s, 0, s.length - 1, result);
    return result;
}

public static void swap(char[] s, int i, int j) {
    char temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Recursion and Backtracking</h1>

      <h2 style={styles.sectionHeader}>What is Recursion?</h2>
      <p style={styles.paragraph}>
        Recursion is a programming technique where a function calls itself, either directly or indirectly. It's a powerful tool for solving problems that can be broken down into smaller, self-similar subproblems.
      </p>

      <h3>Key Components of a Recursive Function:</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <h4>Base Case</h4>
          <p>
            This is the terminating condition that stops the recursive calls. Without a base case, the function would call itself indefinitely, leading to a stack overflow error.
            It's the simplest form of the problem, for which the solution is known.
          </p>
        </li>
        <li style={styles.listItem}>
          <h4>Recursive Case</h4>
          <p>
            This is where the function calls itself with a modified input. The input is modified in a way that brings it closer to the base case.
          </p>
        </li>
      </ul>

      <h3 style={styles.sectionHeader}>How Recursion Works (The Stack):</h3>
      <p style={styles.paragraph}>
        When a function is called, a new frame is pushed onto the call stack. This frame contains the function's local variables, parameters, and return address. In a recursive function, each recursive call creates a new stack frame. When the base case is reached, the function returns, and the stack frames are popped one by one, executing the remaining code in each frame.
      </p>

      <h3 style={styles.sectionHeader}>Example 1: Factorial Calculation</h3>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(recursionFactorialCode)}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre>{recursionFactorialCode}</pre>
      </div>
      <p style={styles.paragraph}>
        <strong>Explanation:</strong> The base case is when n is 0, where the function returns 1. The recursive case multiplies n by the factorial of n-1. Each recursive call reduces n until it reaches the base case.
      </p>

      <h3 style={styles.sectionHeader}>Example 2: Fibonacci Sequence</h3>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(recursionFibonacciCode)}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre>{recursionFibonacciCode}</pre>
      </div>
      <p style={styles.paragraph}>
        <strong>Explanation:</strong> The base case is when n is 0 or 1. The recursive case calculates the Fibonacci number by summing the previous two Fibonacci numbers.
      </p>

      <h2 style={styles.sectionHeader}>Advantages of Recursion:</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Readability:</strong> Recursive solutions can be more concise and easier to understand for certain problems.</li>
        <li style={styles.listItem}><strong>Problem Decomposition:</strong> Recursion naturally breaks down complex problems into smaller, manageable subproblems.</li>
        <li style={styles.listItem}><strong>Elegant Solutions:</strong> For some problems, recursion provides elegant and intuitive solutions.</li>
      </ul>

      <h2 style={styles.sectionHeader}>Disadvantages of Recursion:</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Stack Overflow:</strong> Excessive recursive calls can lead to a stack overflow error.</li>
        <li style={styles.listItem}><strong>Performance Overhead:</strong> Recursive calls involve overhead due to function calls and stack management, which can be slower than iterative solutions.</li>
        <li style={styles.listItem}><strong>Redundant Calculations:</strong> In some recursive algorithms (like the naive Fibonacci example), the same subproblems are calculated multiple times, leading to inefficiency.</li>
      </ul>

      <h2 style={styles.sectionHeader}>Tail Recursion (and Java's Limitation):</h2>
      <p style={styles.paragraph}>
        Tail recursion occurs when the recursive call is the last operation in the function. In languages that support tail call optimization, tail recursion can be as efficient as iteration. Java does not perform tail call optimization. Therefore, even tail recursive functions in Java will still use stack space for each call.
      </p>

      <h2 style={styles.sectionHeader}>When to Use Recursion:</h2>
      <ul style={styles.list}>
      </ul>

      <section style={styles.section}>
      <h2 style={styles.sectionHeader}>Some Operations of Binary Tree</h2>
      <ul style={styles.list}>
        {operations.map((operation, index) => (
          <li key={index} style={styles.listItem} onClick={() => toggleDropdown(index)}>
            {/* Operation Name & Arrow in one row */}
            <div style={styles.listItemHeader}>
              <span>{operation.title}</span>
              <span style={styles.arrow}>
                {openItem === index ? "˅" : "›"} {/* Right arrow changes to down */}
              </span>
            </div>

            {/* Description appears below when open */}
            {openItem === index && <div style={styles.dropdownContent}>{operation.component}</div>}
          </li>
        ))}
      </ul>
      </section>
    </div>
  );
};

export default Recursion;
