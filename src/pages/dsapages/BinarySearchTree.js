import React, { useState } from "react";

const BinarySearchTree = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      position: "relative",
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
    copySuccess: {
      fontSize: "0.8rem",
      color: "green",
      marginTop: "5px",
    },
  };

  const bstCode = `class Node {
    int key;
    Node left, right;

    public Node(int item) {
        key = item;
        left = right = null;
    }
}

class BinarySearchTree {
    Node root;

    BinarySearchTree() {
        root = null;
    }

    void insert(int key) {
        root = insertRec(root, key);
    }

    Node insertRec(Node root, int key) {
        if (root == null) {
            root = new Node(key);
            return root;
        }
        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);

        return root;
    }

    void inorder() {
        inorderRec(root);
    }

    void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.key + " ");
            inorderRec(root.right);
        }
    }

    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();
        tree.insert(50);
        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(70);
        tree.insert(60);
        tree.insert(80);

        tree.inorder();
    }
}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Binary Search Tree</h1>

      <section>
        <h2 style={styles.sectionHeader}>What is a Binary Search Tree?</h2>
        <p style={styles.paragraph}>
          A <strong>Binary Search Tree (BST)</strong> is a tree data structure where each node has at most two children, 
          and the left subtree contains nodes with values less than the parent node, while the right subtree contains 
          nodes with values greater than the parent node.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>BST Properties</h2>
        <ul style={styles.list}>
          <li>Each node has at most two children.</li>
          <li>Left child values are smaller than the parent.</li>
          <li>Right child values are greater than the parent.</li>
          <li>Inorder traversal results in sorted order.</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Binary Search Tree Implementation</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(bstCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{bstCode}</pre>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Common Operations in BST</h2>
        <ul style={styles.list}>
          <li>Insertion</li>
          <li>Deletion</li>
          <li>Searching</li>
          <li>Traversal (Inorder, Preorder, Postorder)</li>
        </ul>
      </section>
    </div>
  );
};

export default BinarySearchTree;
