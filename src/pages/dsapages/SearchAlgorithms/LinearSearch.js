import React, { useState } from "react";

const LinearSearch = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (code, type) => {
    navigator.clipboard.writeText(code);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
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
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px",
      borderRadius: "5px",
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: "1rem",
      marginBottom: "20px",
      position: "relative",
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
  };

  const linearSearchCode = `
  /**
   * This method implements the Linear Search algorithm.
   * It searches for a target value in an array by checking each element sequentially.
   * @param arr The array in which to search.
   * @param target The value to find.
   * @return The index of the target if found, otherwise -1.
   */
  public static int linearSearch(int[] arr, int target) {
      for (int i = 0; i < arr.length; i++) {
          if (arr[i] == target) {
              return i; // Return index if found
          }
      }
      return -1; // Return -1 if not found
  }`;

  const dryRun = `
  Given array: [10, 20, 30, 40, 50]
  Target: 30
  
  Iteration 1: Compare 10 with 30 -> Not found
  Iteration 2: Compare 20 with 30 -> Not found
  Iteration 3: Compare 30 with 30 -> Found at index 2
  
  Output: 2
  `;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Linear Search Algorithm</h2>
      <p style={styles.paragraph}>
        Linear search is a simple searching algorithm that checks each element in a list sequentially until the target value is found or the end of the list is reached.
      </p>
      
      <section>
        <h3 style={styles.sectionHeader}>Java Implementation</h3>
        <p>This function performs a linear search on an array.</p>
        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(linearSearchCode, "linearSearchCode")}>
            {copied === "linearSearchCode" ? "Copied!" : "Copy"}
          </button>
          <pre>{linearSearchCode}</pre>
        </div>
      </section>

      <section>
        <h3 style={styles.sectionHeader}>Dry Run Example</h3>
        <p>Step-by-step execution of the algorithm:</p>
        <div style={styles.codeBlock}>
          <pre>{dryRun}</pre>
        </div>
      </section>
    </section>
  );
};

export default LinearSearch;
