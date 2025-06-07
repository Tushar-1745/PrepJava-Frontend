import React, { useState } from "react";

const BinarySearch = () => {
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

  const binarySearchCode = `
  /**
   * Performs Binary Search on a sorted array.
   * @param arr - The sorted array.
   * @param target - The element to search for.
   * @return Index of the target element, or -1 if not found.
   */
  public static int binarySearch(int[] arr, int target) {
      int left = 0, right = arr.length - 1;
      while (left <= right) {
          int mid = left + (right - left) / 2;
          if (arr[mid] == target) return mid;
          else if (arr[mid] < target) left = mid + 1;
          else right = mid - 1;
      }
      return -1;
  }`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Binary Search in Java</h2>
      <p style={styles.paragraph}>
        Binary Search is an efficient algorithm for finding an element in a
        sorted array. It works by repeatedly dividing the search space in half.
      </p>

      <section>
        <h3 style={styles.sectionHeader}>Binary Search Implementation</h3>
        <p>This function performs Binary Search on a sorted array.</p>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(binarySearchCode, "binarySearchCode")}
          >
            {copied === "binarySearchCode" ? "Copied!" : "Copy"}
          </button>
          <pre>{binarySearchCode}</pre>
        </div>
      </section>
    </section>
  );
};

export default BinarySearch;
