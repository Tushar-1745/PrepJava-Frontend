import React, { useState } from "react";

const DisplayArray = () => {
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

  const displayArrayCode = `
  public class DisplayArray {
      public static void main(String[] args) {
          int[] arr = {2,4,6,8,10};
          display(arr, 0);
      }
      public static void display(int[] arr, int idx){
          if(idx == arr.length){
              return;
          }
          System.out.println(arr[idx]);
          display(arr, idx+1);
      }
  }`;

  const dryRun = `
  display(arr, 0) -> prints 2 -> calls display(arr, 1)
  display(arr, 1) -> prints 4 -> calls display(arr, 2)
  display(arr, 2) -> prints 6 -> calls display(arr, 3)
  display(arr, 3) -> prints 8 -> calls display(arr, 4)
  display(arr, 4) -> prints 10 -> calls display(arr, 5)
  display(arr, 5) -> returns (base case)
  Output: 2 4 6 8 10`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Recursion Examples</h2>
      <p style={styles.paragraph}>
        Below is an example of a recursive function to display an array.
      </p>

      <h3 style={styles.sectionHeader}>Display Array</h3>
      <p style={styles.paragraph}>
        This function recursively prints each element of an array.
      </p>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(displayArrayCode, "displayArray")}> 
          {copied === "displayArray" ? "Copied!" : "Copy"} 
        </button>
        <pre>{displayArrayCode}</pre>
      </div>
      
      <h3 style={styles.sectionHeader}>Dry Run</h3>
      <p style={styles.paragraph}>
        Below is the dry run of the display function for the given array.
      </p>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(dryRun, "dryRun")}> 
          {copied === "dryRun" ? "Copied!" : "Copy"} 
        </button>
        <pre>{dryRun}</pre>
      </div>
    </section>
  );
};

export default DisplayArray;