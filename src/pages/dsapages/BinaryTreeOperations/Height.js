import React, { useState } from "react";

const Height = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied("binaryTreeHeight");
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
      overflow: "auto",
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
      fontSize: "1rem",
    },
    listItem: {
      backgroundColor: "#fff",
      padding: "12px 16px",
      borderRadius: "5px",
      marginBottom: "8px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s",
      flexDirection: "column",
    },
  };

  const binaryTreeHeight = `
    public static int heightOfBinaryTree(Node node){
        if(node == null){
            return 0;
        }
        int leftHeight = heightOfBinaryTree(node.left);
        int rightHeight = heightOfBinaryTree(node.right);

        int totalHeight = Math.max(leftHeight, rightHeight) + 1;
        return totalHeight;
    }
  `;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Height of Binary Tree</h2>
      <p style={styles.paragraph}>
        We will use recursion to calculate the height of the binary tree.
      </p>

      <h3 style={styles.sectionHeader}>Steps:</h3>
      <ul style={styles.list}>
        <li>Recursively calculate the height of left and right subtrees.</li>
        <li>Add 1 to the maximum of both to get the total height.</li>
        <li>Base case: If the node is null, return 0.</li>
      </ul>

      <h3 style={styles.sectionHeader}>Input Example</h3>
      <pre style={styles.codeBlock}>
        {`
                            50
                           /  \\
                          25   75
                         / \\   / \\
                        12 37 62 87
                          /    \\
                         30     70
        `}
      </pre>

      <h3 style={styles.sectionHeader}>Expected Output</h3>
      <pre style={styles.codeBlock}>{`The height of given Binary tree is: 4`}</pre>

      <h3 style={styles.sectionHeader}>Code Implementation</h3>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(binaryTreeHeight)}>
          {copied === "binaryTreeHeight" ? "Copied!" : "Copy"}
        </button>
        <pre>{binaryTreeHeight}</pre>
      </div>

      <h3 style={styles.sectionHeader}>Dry Run</h3>
      <p style={styles.paragraph}>Let's walk through the process of calculating the height:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Step 1:</strong> Call `heightOfBinaryTree(50)`
        </li>
        <li style={styles.listItem}>
          <strong>Step 2:</strong> Recursive calls for `heightOfBinaryTree(25)` and `heightOfBinaryTree(75)`
        </li>
        <li style={styles.listItem}>
          <strong>Step 3:</strong> Further recursive calls for `heightOfBinaryTree(12)`, `heightOfBinaryTree(37)`, etc.
        </li>
        <li style={styles.listItem}>
          <strong>Step 4:</strong> Base case reached (null nodes return 0).
        </li>
        <li style={styles.listItem}>
          <strong>Step 5:</strong> Heights are calculated recursively and combined.
        </li>
        <li style={styles.listItem}>
          <strong>Final Calculation:</strong> `max(3, 2) + 1 = 4`
        </li>
      </ul>
    </section>
  );
};

export default Height;