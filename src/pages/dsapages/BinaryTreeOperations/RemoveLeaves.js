import React, { useState } from "react";

const RemoveLeaves = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied("removeLeaves");
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
      overflow: "auto", // Added to handle overflow
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
  };

  const removeLeavesCode = `
public static Node removeLeaves(Node node) {
    if (node == null) {
        return null; // Base case: Empty tree, nothing to remove
    }

    if (node.left == null && node.right == null) {
        return null; // Base case: Leaf node, remove it
    }

    Node leftVal = removeLeaves(node.left); // Recursively remove leaves from left subtree
    Node rightVal = removeLeaves(node.right); // Recursively remove leaves from right subtree

    node.left = leftVal; // Update left child with the modified subtree
    node.right = rightVal; // Update right child with the modified subtree

    return node; // Return the modified node
}
  `;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Remove Leaves from a Binary Tree</h2>
      <p style={styles.paragraph}>
        This algorithm removes all leaf nodes from a binary tree. A leaf node is a node that has no children (both left and right children are null).
      </p>

      <h3 style={styles.sectionHeader}>Approach</h3>
      <ul style={styles.list}>
        <li>We use a **recursive** approach to traverse the tree.</li>
        <li>**Base Cases:**
          <ul>
            <li>If the current node is `null`, return `null` (empty tree or subtree).</li>
            <li>If the current node is a leaf (both children are `null`), return `null` (remove the leaf).</li>
          </ul>
        </li>
        <li>**Recursive Steps:**
          <ul>
            <li>Recursively call `removeLeaves` on the left child and store the result in `leftVal`.</li>
            <li>Recursively call `removeLeaves` on the right child and store the result in `rightVal`.</li>
            <li>Update the current node's left child with `leftVal` and right child with `rightVal`.</li>
            <li>Return the current node (which may now have fewer children).</li>
          </ul>
        </li>
      </ul>

      <h3 style={styles.sectionHeader}>Dry Run</h3>
      <pre style={styles.codeBlock}>
        {`
Tree Structure:

        50
       /  \\ 
      25   75
     / \\   /  \\ 
    12 37 62  87
      /    \\ 
     30     70

1. Call removeLeaves(50)
2. 50 is not a leaf.
3. Call removeLeaves(25)
4. 25 is not a leaf.
5. Call removeLeaves(12)
6. 12 is a leaf, return null.
7. Call removeLeaves(37)
8. 37 is not a leaf.
9. Call removeLeaves(30)
10. 30 is a leaf, return null.
11. 37's left is now null. Return 37.
12. 25's left is now null, 25's right is now 37. Return 25.
13. Call removeLeaves(75)
14. 75 is not a leaf.
15. Call removeLeaves(62)
16. 62 is not a leaf.
17. Call removeLeaves(70)
18. 70 is a leaf, return null.
19. 62's right is now null. Return 62.
20. Call removeLeaves(87)
21. 87 is a leaf, return null.
22. 75's left is 62, 75's right is now null. Return 75.
23. 50's left is now 25, 50's right is 75. Return 50.

Resulting Tree:

        50
       /  \\ 
      25   75
       \\   /
       37  62

        `}
      </pre>

      <h3 style={styles.sectionHeader}>Java Code</h3>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(removeLeavesCode)}>
          {copied === "removeLeaves" ? "Copied!" : "Copy"}
        </button>
        <pre>{removeLeavesCode}</pre>
      </div>
    </section>
  );
};

export default RemoveLeaves;