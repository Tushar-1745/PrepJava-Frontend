import React, { useState } from "react";

const FirstandLastIndex = () => {
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

  const firstAndLastIndexCode = `
  public class FirstAndLastIndex {
      public static void main(String[] args) {
          int[] arr = {2, 4, 6, 8, 4, 10};
          int firstIndex = first(arr, 0, 4);
          int lastIndex = last(arr, 0, 4);
          System.out.println("First Index: " + firstIndex);
          System.out.println("Last Index: " + lastIndex);
      }
      public static int first(int[] arr, int idx, int target) {
          if (idx == arr.length) {
              return -1;
          }
          if (arr[idx] == target) {
              return idx;
          }
          return first(arr, idx + 1, target);
      }
      public static int last(int[] arr, int idx, int target) {
          if (idx == arr.length) {
              return -1;
          }
          int li = last(arr, idx + 1, target);
          return (li == -1 && arr[idx] == target) ? idx : li;
      }
  }`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Recursion Examples</h2>
      <p style={styles.paragraph}>
        Below is an example of recursive functions to find the first and last index of a target element in an array.
      </p>

      <h3 style={styles.sectionHeader}>First and Last Index</h3>
      <p style={styles.paragraph}>
        The first function finds the first occurrence of a target element in an array, while the second function finds the last occurrence using recursion.
      </p>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(firstAndLastIndexCode, "firstAndLastIndex")}> 
          {copied === "firstAndLastIndex" ? "Copied!" : "Copy"}
        </button>
        <pre>{firstAndLastIndexCode}</pre>
      </div>
    </section>
  );
};

export default FirstandLastIndex;
