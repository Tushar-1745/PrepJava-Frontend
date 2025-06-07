import React, { useState } from "react";

const MinMax = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied("MinandMaxofBinaryTree");
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

  const MinandMaxofBinaryTree = ` 
    // to get the Minimum value element from Binary Tree
    public static int minOfBinaryTree(Node node){
        if(node == null){
            return Integer.MAX_VALUE;
        }
        int minOfLeft = minOfBinaryTree(node.left);
        int minOfRight = minOfBinaryTree(node.right);

        int realMin = Math.min(node.data, Math.min(minOfLeft, minOfRight));

        return realMin;
    }
        

    // to get the Maximum value element from Binary Tree
    public static int maxOfBinaryTree(Node node){
        if(node == null){
            return Integer.MIN_VALUE;
        }
        int maxOfLeft = maxOfBinaryTree(node.left);
        int maxOfRight = maxOfBinaryTree(node.right);

        int realMax = Math.max(node.data, Math.max(maxOfLeft, maxOfRight));

        return realMax;
    }
        
    `;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Find Min and Max in a Binary Tree</h2>
      <p style={styles.paragraph}>
        We will use a recursive approach to determine the minimum and maximum values in a binary tree.
      </p>

      <h3 style={styles.sectionHeader}>Approach</h3>
      <ul style={styles.list}>
        <li>
          Recursively call the function on the left child to find the minimum or maximum in its subtree.
        </li>
        <li>Similarly, call the function on the right child.</li>
        <li>Compare the values from both sides to determine the maximum or minimum.</li>
        <li>Finally, compare the result with the root node's data to get the final minimum or maximum.</li>
        <li>
          <strong>Base Case Handling:</strong> If a subtree is empty (i.e., the node is null), return an appropriate value (e.g., positive/negative infinity).
        </li>
      </ul>

      <h3 style={styles.sectionHeader}>Example Binary Tree</h3>
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
      <pre style={styles.codeBlock}>
        {`
            The min element in the Binary Tree is: 12
            The max element in the Binary Tree is: 87
        `}
      </pre>

      <h3 style={styles.sectionHeader}>Dry Run</h3>
      <p style={styles.paragraph}>Let's walk through the process of finding the minimum and maximum values:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Finding Minimum:</strong>
          <ul>
            <li>Start at root (50). Recursively go left (25), then left (12).</li>
            <li>12 is a leaf; return 12. Go back to 25, then right (37).</li>
            <li>Recursively go left (30). 30 is a leaf, return 30.</li>
            <li>Compare 30 and 37; return 30. Compare 25 subtree min (12) and 37 subtree min (30); return 12.</li>
            <li>Repeat for right subtree (75, 62, 70, 87).</li>
            <li>Finally, compare left subtree min (12) and right subtree min (62); return 12.</li>
          </ul>
        </li>
        <li style={styles.listItem}>
          <strong>Finding Maximum:</strong>
          <ul>
            <li>Similar process, but comparing maximum values.</li>
            <li>Starting at root (50), find maximums in left (37) and right (87) subtrees.</li>
            <li>Compare 37, 87, and 50; return 87 as the maximum.</li>
          </ul>
        </li>
      </ul>

      <div style={styles.codeBlock}>
        <p style={styles.paragraph}>
          <strong>Minimum and Maximum value element of Binary Tree</strong>
        </p>
        <button style={styles.copyButton} onClick={() => handleCopy(MinandMaxofBinaryTree)}>
          {copied === "MinandMaxofBinaryTree" ? "Copied!" : "Copy"}
        </button>
        <pre>{MinandMaxofBinaryTree}</pre>
      </div>
    </section>
  );
};

export default MinMax;