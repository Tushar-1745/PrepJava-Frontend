import React, { useState } from "react";

const GetNodeLevelwise = () => {
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

  const kAllLevelsDownNodes = `
  public static List<List<Integer>> kAllLevelsDownNodes(Node node, int k) {
      List<List<Integer>> result = new ArrayList<>();
  
      if (node == null || k < 0) {
          return result;
      }
  
      Queue<Node> queue = new ArrayDeque<>();
      queue.offer(node);
      int level = 0;
  
      while (!queue.isEmpty()) {
          int size = queue.size();
          List<Integer> list = new ArrayList<>();
  
          for (int i = 0; i < size; i++) {
              Node currentNode = queue.poll();
              list.add(currentNode.data);
  
              if (currentNode.left != null) {
                  queue.offer(currentNode.left);
              }
              if (currentNode.right != null) {
                  queue.offer(currentNode.right);
              }
          }
  
          if (level <= k) {
              result.add(list);
          } else {
              break;
          }
          level++;
      }
      return result;
  }`;

  const kLevelsDownNodes = `
  public static List<Integer> kLevelsDownNodes(Node node, int k) {
      List<Integer> list = new ArrayList<>();
      if (node == null || k < 0) return list;
  
      Queue<Node> queue = new LinkedList<>();
      queue.offer(node);
  
      int level = 0;
      while (!queue.isEmpty()) {
          int size = queue.size();
          if (level == k) {
              for (int i = 0; i < size; i++) {
                  list.add(queue.poll().data);
              }
              return list;
          }
  
          for (int i = 0; i < size; i++) {
              Node currentNode = queue.poll();
              if (currentNode.left != null) queue.offer(currentNode.left);
              if (currentNode.right != null) queue.offer(currentNode.right);
          }
          level++;
      }
      return list;
  }`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Get Nodes Levelwise</h2>
      <p style={styles.paragraph}>
        This algorithm finds all nodes up to a given level in a binary tree using <strong>Breadth-First Search (BFS)</strong>.
        <div>There can be 3 variations of this question: </div>
        <ul>
          <li>Get the nodes Levelwise</li>
          <li>Get the nodes of k level</li>
          <li> get all the nodes upto k levels</li>
        </ul>
      </p>

      <h3 style={styles.sectionHeader}>Approach</h3>
      <ul>
        <li>We use a <strong>queue</strong> data structure to process nodes level by level.</li>
        <li>Start by enqueuing the root node. i.e. adding its left and right child by checking null availability</li>
        <li>Process nodes until condition is reached.</li>
      </ul>

      <h3 style={styles.sectionHeader}>Dry Run</h3>
      <pre style={styles.codeBlock}>
        {`
        Tree Structure:

                50
               /  \ 
              25   75
             / \   /  \ 
            12 37 62  87
              /    \ 
             30     70

        k = 2

        Iteration 1 (Level 0): [50]
        Iteration 2 (Level 1): [25, 75]
        Iteration 3 (Level 2): [12, 37, 62, 87] (Output)
        `}
      </pre>

      <section>
        <h3 style={styles.sectionHeader}>Get all the nodes levelwise</h3>
        <p>In this question, we are told to get the all the nodes of binay tree.
        </p>
        <p>Expected output: </p>
        <div style={styles.codeBlock}>
          <div>"[50],
            [25, 75],
            [12, 37, 62, 87],
            [30, 70]"</div>
        </div>
        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(kAllLevelsDownNodes, "kAllLevelsDownNodes")}>
            {copied === "kAllLevelsDownNodes" ? "Copied!" : "Copy"}
          </button>
          <pre>{kAllLevelsDownNodes}</pre>
        </div>
      </section>

      <section>
        <h3 style={styles.sectionHeader}>Get all nodes upto k specific level</h3>
        <p>In this type of question, We are told to get all the nodes levelwise upto k specific level</p>
        <p>Expected output: </p>
        <div style={styles.codeBlock}>
          <div>"
            int k=2
            [50],
            [25, 75],
            [12, 37, 62, 87]"</div>
        </div>
        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(kAllLevelsDownNodes, "kAllLevelsDownNodes")}>
            {copied === "kAllLevelsDownNodes" ? "Copied!" : "Copy"}
          </button>
          <pre>{kAllLevelsDownNodes}</pre>
        </div>
      </section>

      <section>
        <h3 style={styles.sectionHeader}>Get all nodes of specific level of binary tree</h3>
        <p>In this type of question, We are told to get all the nodes of  specific level</p>
        <p>Expected output: </p>
        <div style={styles.codeBlock}>
          <div>"
            int k=2
            
            [12, 37, 62, 87]"</div>
        </div>
        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(kLevelsDownNodes, "kLevelsDownNodes")}>
            {copied === "kLevelsDownNodes" ? "Copied!" : "Copy"}
          </button>
          <pre>{kLevelsDownNodes}</pre>
        </div>
      </section>
    </section>
  );
};

export default GetNodeLevelwise;
