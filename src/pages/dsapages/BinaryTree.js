import React, { useState } from "react";
import DisplayBinaryTree from './BinaryTreeOperations/DisplayBinaryTree'
import MinMax from "./BinaryTreeOperations/MinMax";
import Height from "./BinaryTreeOperations/Height";
import Traversals from "./BinaryTreeOperations/Traversal";
import LevelOrderTraversal from "./BinaryTreeOperations/LevelOrderTraversal";
import GetNodeLevelwise from "./BinaryTreeOperations/GetNodesLevelwise";
import RemoveLeaves from "./BinaryTreeOperations/RemoveLeaves";

const BinaryTree = () => {
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
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px",
      borderRadius: "5px",
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: "1rem",
      marginBottom: "20px",
    },
    copyButton: {
      position: "relative",
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
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#fff",
      padding: "1px 16px",
      borderRadius: "5px",
      fontSize:'20px',
      marginBottom: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s",
      flexDirection: "column", // Makes sure description appears below
    },
    listItemHeader: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
    },
    dropdownContent: {
      padding: "10px",
      fontSize:'20px',
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
      marginTop: "5px",
      width: "100%",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    arrow: {
      fontSize: "28px",
      transition: "transform 0.3s",
    },
  };

  const [openItem, setOpenItem] = useState(null);

  const toggleDropdown = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const operations = [
    { title: "Display Binary Tree", component: <DisplayBinaryTree /> },
    { title:'Min and Max element of Binary Tree', component: <MinMax/>},
    { title: "Height of Binary Tree", component: <Height /> },
    { title: "Pre, Post and InOrder of Binary Tree", component: <Traversals /> },
    { title: 'Level Order Traversal', component: <LevelOrderTraversal /> },
    { title: 'Get Nodes Levelwise', component: <GetNodeLevelwise /> },
    { title: 'Remove Leaves', component: <RemoveLeaves/> }
    
  ];

  const binaryTreeNode = `class Node {
    int data;
    Node left,
    Node right;

    public Node(int data, Node left, Node right) {
        this.data=data;
        this.left=left;
        this.right=right;
    }
}
`;

  const binaryTreePairClass = `class Node {

  Node node;
  int state;

  public Node(Node node, int state) {
      this.node=node;
      this.state=state;
  }
}
`;

const binaryTreeImplementation = `import java.util.Stack;

public class BTpractice {
    public static class Node {
        int data;
        Node left, right;

        Node(int data, Node left, Node right) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    public static class Pair {
        Node node;
        int state;

        Pair(Node node, int state) {
            this.node = node;
            this.state = state;
        }
    }

    public static void main(String[] args) {
        Integer[] arr = {50, 25, 12, null, null, 37, 30, null, null, null,
                         75, 62, null, 70, null, null, 87, null, null};

        Node rootNode = new Node(arr[0], null, null);
        Pair rootPair = new Pair(rootNode, 1);

        Stack<Pair> st = new Stack<>();
        st.push(rootPair);

        int idx = 0;
        while (!st.isEmpty()) {
            Pair top = st.peek();

            if (top.state == 1) {
                idx++;
                if (idx < arr.length && arr[idx] != null) {
                    Node leftNode = new Node(arr[idx], null, null);
                    top.node.left = leftNode;

                    Pair leftPair = new Pair(leftNode, 1);
                    st.push(leftPair);
                }
                top.state++;
            } else if (top.state == 2) {
                idx++;
                if (idx < arr.length && arr[idx] != null) {
                    Node rightNode = new Node(arr[idx], null, null);
                    top.node.right = rightNode;

                    Pair rightPair = new Pair(rightNode, 1);
                    st.push(rightPair);
                }
                top.state++;
            } else if (top.state == 3) {
                st.pop();
            }
        }
    }
}`;




  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Binary Tree</h1>

      <section>
        <h2 style={styles.sectionHeader}>What is a Binary Tree?</h2>
        <p style={styles.paragraph}>
          A <strong>Binary Tree</strong> is a non-linear and hierarchical data structure where each node has at most two children:
          <strong>left child</strong> and <strong>right child</strong>.
        </p>
        <img src="/Images/binarytreeintro.webp" alt="Binary Tree Structure" style={{ width: "400px", height: "350px", display: "block", margin: "20px auto" }} />

      </section>

      <section>
        <h2 style={styles.sectionHeader}>Key Features</h2>
        <ul style={styles.list}>
          <li>Each node has at most two children. i.e. <strong>left child </strong> and <strong>right child</strong></li>
          <li>topmost node in a binary tree is called the <strong>root </strong>, and the bottom-most nodes are called <strong>leaves </strong>.</li>
          <li>Common types include full, complete, and perfect binary trees.</li>
          <li>Used in searching, sorting, and hierarchical representations.</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Representation of Binary Tree</h2>

        <p style={styles.paragraph}>
          A <strong>Node</strong> in a binary tree consists of:
          <ul>
            <li><strong>Data</strong> - The value stored in the node.</li>
            <li><strong>Left Reference</strong> - A pointer to the left child node.</li>
            <li><strong>Right Reference</strong> - A pointer to the right child node.</li>
          </ul>
        </p>

        <img
          src="/Images/binarytreerepresentation.webp"
          alt="Binary Tree Structure"
          style={{ width: "400px", height: "350px", display: "block", margin: "20px auto" }}
        />

      </section>

      <section>
        <h2 style={styles.sectionHeader}>Binary Tree Implementation in Java</h2>
        <p>Here, we will implement a Binary Tree using an array of values as input.</p>
        <p>
          <strong>
            {"Integer[] arr = {50, 25, 12, null, null, 37, 30, null, null, null, 75, 62, null, 70, null, null, 87, null, null};"}
          </strong>
        </p>
        <img
          src="/Images/binarytreeimplementationexample.webp"
          alt="Binary Tree Structure"
          style={{ width: "400px", height: "350px", display: "block", margin: "20px auto" }}
        />
      </section>


      <section>
        <h2 style={styles.sectionHeader}>1. Node Class</h2>
        <p>
          A <strong>Node</strong> is the fundamental building block of a Binary Tree.
          Each node contains:
          <ul>
            <li>A **value** (data stored in the node).</li>
            <li>A reference to the <strong>left child</strong> (which may be another node or null).</li>
            <li>A reference to the <strong>right child</strong> (which may be another node or null).</li>
          </ul>
          The <strong>root node</strong> is the starting point of the tree, and every other node is a descendant of it.
        </p>

        <div style={styles.codeBlock}>
          <p><strong>Example: Node Class in Java</strong></p>
          <button style={styles.copyButton} onClick={() => handleCopy(binaryTreeNode)}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{binaryTreeNode}</pre>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Approach for Implementing a Binary Tree</h2>

        <div style={styles.infoBox}>
          <p><strong>Binary Tree Construction Strategy</strong></p>
          <p>We will construct the tree using a <strong>stack-based iterative approach</strong>, where each node follows a predefined state transition.</p>
        </div>

        <ol>
          <li>
            <strong>Step 1: Create the Root Node</strong>
            <p>We initialize the root node using the first element of the array.</p>
            <div style={styles.codeBlock}>
              <pre>
                <strong>{`Node rootNode = new Node(arr[0], null, null);`}</strong>
              </pre>
            </div>
          </li>

          <li>
            <strong>Step 2: Define a Pair Class</strong>
            <p>The <strong>Pair class</strong> stores:</p>
            <ul>
              <li>A <strong>node</strong> (current tree node).</li>
              <li>Its <strong>state</strong> (indicating the next operation).</li>
            </ul>
            <div style={styles.codeBlock}>
              <p><strong>Pair Class in Java</strong></p>
              <pre>{binaryTreePairClass}</pre>
            </div>
          </li>

          <li>
            <strong>Step 3: Understanding Node States</strong>
            <p>Each node follows these state transitions:</p>
            <ul>
              <li><strong>state == 1</strong>: Add the left child.</li>
              <li><strong>state == 2</strong>: Add the right child.</li>
              <li><strong>state == 3</strong>: Both children are added.</li>
              <li>move to the next node.</li>
            </ul>
          </li>

          <li>
            <strong>Step 4: Use a Stack for Construction</strong>
            <p>We manage nodes and their states using a <strong>stack</strong>.</p>
            <div style={styles.codeBlock}>
              <p><strong>Stack Implementation in Java</strong></p>
              <pre>
                {`
Node rootNode = new Node(arr[0], null, null);
Pair rootPair = new Pair(rootNode, 1);

Stack<Pair> st = new Stack<>();
st.push(rootPair);
          `}
              </pre>
            </div>
          </li>

          <li>
            <strong>Step 5: Process the Entire Input Array</strong>
            <p>Repeat steps for each element in the array to construct the binary tree.</p>
          </li>
        </ol>

      </section>

      <section>
        <h2 style={styles.sectionHeader}>Final Implementation</h2>
        <div style={styles.codeBlock}>
          <p><strong>Example: Node Class in Java</strong></p>
          <button style={styles.copyButton} onClick={() => handleCopy(binaryTreeImplementation)}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{binaryTreeImplementation}</pre>
        </div>
      </section>

      <section style={styles.section}>
      <h2 style={styles.sectionHeader}>Some Operations of Binary Tree</h2>
      <ul style={styles.list}>
        {operations.map((operation, index) => (
          <li key={index} style={styles.listItem} onClick={() => toggleDropdown(index)}>
            {/* Operation Name & Arrow in one row */}
            <div style={styles.listItemHeader}>
              <span>{operation.title}</span>
              <span style={styles.arrow}>
                {openItem === index ? "˅" : "›"} {/* Right arrow changes to down */}
              </span>
            </div>

            {/* Description appears below when open */}
            {openItem === index && <div style={styles.dropdownContent}>{operation.component}</div>}
          </li>
        ))}
      </ul>
      </section>

      
    </div>
  );
};

export default BinaryTree;
