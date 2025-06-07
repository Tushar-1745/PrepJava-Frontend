import React, { useState } from "react";

const PrintIncreasingandDecreasing = () => {
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

  const printIncreasingCode = `
  public class PrintIncreasing {
      public static void main(String[] args) {
          int n=5;
          pi(n);
      }

      public static void pi(int n){
          if(n==0){
              return;
          }
          pi(n-1);
          System.out.println(n);
      }
  }`;

  const printDecreasingCode = `
  public class PrintDecreasing {
      public static void main(String[] args) {
          int n=5;
          pd(n);
      }
      public static void pd(int n){
          if(n==0){
              return;
          }
          System.out.println(n);
          pd(n-1);
      }
  }`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Print Increasing and Decreasing</h2>
      <p style={styles.paragraph}>
        These recursive functions print numbers in increasing and decreasing order.
      </p>

      <h3 style={styles.sectionHeader}>Print Increasing</h3>
      <p style={styles.paragraph}>
        This function prints numbers from **1 to n** using recursion.
        It first makes a recursive call, then prints the number.
      </p>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(printIncreasingCode, "increasing")}>
          {copied === "increasing" ? "Copied!" : "Copy"}
        </button>
        <pre>{printIncreasingCode}</pre>
      </div>

      <h3 style={styles.sectionHeader}>Print Decreasing</h3>
      <p style={styles.paragraph}>
        This function prints numbers from **n to 1** using recursion.
        It first prints the number, then makes a recursive call.
      </p>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(printDecreasingCode, "decreasing")}>
          {copied === "decreasing" ? "Copied!" : "Copy"}
        </button>
        <pre>{printDecreasingCode}</pre>
      </div>
    </section>
  );
};

export default PrintIncreasingandDecreasing;
