import React, { useState } from "react";

const Traversals = () => {
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

  const inOrderTraversal = `
  public static List<Integer> inOrderTraversal(Node node, ArrayList<Integer> inList){
      if(node == null) {
          return inList;
      }
      inOrderTraversal(node.left, inList);
      inList.add(node.data);
      inOrderTraversal(node.right, inList);
      return inList;
  }`;

  const preOrderTraversal = `
  public static List<Integer> preOrderTraversal(Node node, ArrayList<Integer> preList){
      if(node == null) {
          return preList;
      }
      preList.add(node.data);
      preOrderTraversal(node.left, preList);
      preOrderTraversal(node.right, preList);
      return preList;
  }`;

  const postOrderTraversal = `
  public static List<Integer> postOrderTraversal(Node node, ArrayList<Integer> postList){
      if(node == null) {
          return postList;
      }
      postOrderTraversal(node.left, postList);
      postOrderTraversal(node.right, postList);
      postList.add(node.data);
      return postList;
  }`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Binary Tree Traversals</h2>
      <p style={styles.paragraph}>
        Tree traversal is a method of visiting all nodes of a tree systematically. There are three main types:
      </p>
      <ul style={styles.list}>
        <li><strong>Inorder Traversal (Left → Root → Right)</strong></li>
        <li><strong>Preorder Traversal (Root → Left → Right)</strong></li>
        <li><strong>Postorder Traversal (Left → Right → Root)</strong></li>
      </ul>

      <h3 style={styles.sectionHeader}>Example Tree</h3>
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

      <h3 style={styles.sectionHeader}>Expected Outputs</h3>
      <ul style={styles.list}>
        <li><strong>Inorder:</strong> [12, 25, 30, 37, 50, 62, 70, 75, 87]</li>
        <li><strong>Preorder:</strong> [50, 25, 12, 37, 30, 75, 62, 70, 87]</li>
        <li><strong>Postorder:</strong> [12, 30, 37, 25, 70, 62, 87, 75, 50]</li>
      </ul>

      {/* Preorder Traversal */}
      <section>
        <h3 style={styles.sectionHeader}>Preorder Traversal</h3>

        <h4>Approach</h4>
        <ul>
          <li>We use a **recursive** approach to traverse the tree.</li>
          <li><strong>Base Case:</strong> If the node is <code>null</code>, return the list as it is.</li>
          <li>Since Preorder traversal follows **Root → Left → Right**, we process the **node first**.</li>
          <li>Then, recursively call the function for the **left child**.</li>
          <li>After that, recursively call the function for the **right child**.</li>
        </ul>

        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(preOrderTraversal, "preOrder")}>
            {copied === "preOrder" ? "Copied!" : "Copy"}
          </button>
          <pre>{preOrderTraversal}</pre>
        </div>
      </section>

      {/* Inorder Traversal */}
      <section>
        <h3 style={styles.sectionHeader}>Inorder Traversal</h3>

        <h4>Approach</h4>
        <ul>
          <li>We use a **recursive** approach to traverse the tree.</li>
          <li><strong>Base Case:</strong> If the node is <code>null</code>, return the list as it is.</li>
          <li>Since Inorder traversal follows **Left → Root → Right**, we start with the **left child**.</li>
          <li>Once the left subtree is fully processed, we add the **node's data** to the list.</li>
          <li>Finally, recursively call the function for the **right child**.</li>
        </ul>

        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(inOrderTraversal, "inOrder")}>
            {copied === "inOrder" ? "Copied!" : "Copy"}
          </button>
          <pre>{inOrderTraversal}</pre>
        </div>
      </section>

      {/* Postorder Traversal */}
      <section>
        <h3 style={styles.sectionHeader}>Postorder Traversal</h3>

        <h4>Approach</h4>
        <ul>
          <li>We use a **recursive** approach to traverse the tree.</li>
          <li><strong>Base Case:</strong> If the node is <code>null</code>, return the list as it is.</li>
          <li>Since Postorder traversal follows **Left → Right → Root**, we first process the **left child**.</li>
          <li>Then, recursively call the function for the **right child**.</li>
          <li>Finally, after both subtrees are processed, we add the **node's data** to the list.</li>
        </ul>

        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(postOrderTraversal, "postOrder")}>
            {copied === "postOrder" ? "Copied!" : "Copy"}
          </button>
          <pre>{postOrderTraversal}</pre>
        </div>
      </section>

    </section>
  );
};

export default Traversals;
