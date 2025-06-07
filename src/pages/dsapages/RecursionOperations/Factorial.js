import React, { useState } from "react";

const Factorial = () => {
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

  const factorialCode = `
  public class Factorial {
      public static void main(String[] args) {
          int n=5;
          int ans = factoria(n);
          System.out.println(ans);
      }
      public static int factoria(int n){
          if(n==1){
              return 1;
          }
          int fact1 = factoria(n-1);
          return n * fact1;
      }
  }`;

  const dryRun = `
  Factorial(5)
  -> 5 * Factorial(4)
     -> 4 * Factorial(3)
        -> 3 * Factorial(2)
           -> 2 * Factorial(1)
              -> 1 (Base Case)
           -> return 2 * 1 = 2
        -> return 3 * 2 = 6
     -> return 4 * 6 = 24
  -> return 5 * 24 = 120
  Output: 120`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Recursion Examples</h2>
      <p style={styles.paragraph}>
        Below is an example of a recursive function to calculate the factorial of a number.
      </p>

      <h3 style={styles.sectionHeader}>Factorial</h3>
      <p style={styles.paragraph}>
        The factorial of a number n is the product of all positive integers from 1 to n.
        It is defined recursively as:
      </p>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(factorialCode, "factorial")}>
          {copied === "factorial" ? "Copied!" : "Copy"}
        </button>
        <pre>{factorialCode}</pre>
      </div>
      
      <h3 style={styles.sectionHeader}>Dry Run</h3>
      <p style={styles.paragraph}>
        Below is the dry run of the factorial function for n = 5:
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

export default Factorial;
