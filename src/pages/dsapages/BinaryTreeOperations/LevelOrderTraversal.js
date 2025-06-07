import React, { useState } from "react";

const LevelOrderTraversal = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied("levelOrder");
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
    list: {
      marginLeft: "20px",
      fontSize: "1rem",
    },
  };

  const levelOrderTraversal = `
  public static List<List<Integer>> levelOrderTraversal(Node node, List<List<Integer>> list){
      Queue<Node> queue = new ArrayDeque<>();
      queue.offer(node);

      while(queue.size()>0){
          int loopSize = queue.size();
          List<Integer> subList = new ArrayList<>();

          for(int i=0;i<loopSize;i++){
              Node temp = queue.poll();
              subList.add(temp.data);

              if(temp.left!=null){
                  queue.offer(temp.left);
              }
              if(temp.right!=null){
                  queue.offer(temp.right);
              }
          }

          list.add(subList);
      }
      return list;
  }`;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Level Order Traversal</h2>
      <p style={styles.paragraph}>
        Level Order Traversal processes tree nodes **level by level**, from left to right. It is also known as **Breadth-First Search (BFS)**.
      </p>

      <h3 style={styles.sectionHeader}>Approach</h3>
      <ul style={styles.list}>
        <li>We use a **queue** to process nodes in FIFO (First-In-First-Out) order.</li>
        <li>Start by enqueuing the **root node** into the queue.</li>
        <li>While the queue is **not empty**, do the following:</li>
        <ul>
          <li>Determine the **size** of the current level.</li>
          <li>Process each node in the level:</li>
          <ul>
            <li>Dequeue a node.</li>
            <li>Add its value to a **subList**.</li>
            <li>Enqueue its **left and right** children (if any).</li>
          </ul>
          <li>After processing all nodes in the level, add the **subList** to the final list.</li>
        </ul>
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

        Queue (initial): [50]

        Iteration 1: Process level with 1 node → [50]
        Queue after processing: [25, 75]

        Iteration 2: Process level with 2 nodes → [25, 75]
        Queue after processing: [12, 37, 62, 87]

        Iteration 3: Process level with 4 nodes → [12, 37, 62, 87]
        Queue after processing: [30, 70]

        Iteration 4: Process level with 2 nodes → [30, 70]
        Queue after processing: [] (empty)

        Final Output: [[50], [25, 75], [12, 37, 62, 87], [30, 70]]
        `}
      </pre>

      <h3 style={styles.sectionHeader}>Java Code</h3>
      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(levelOrderTraversal)}>
          {copied === "levelOrder" ? "Copied!" : "Copy"}
        </button>
        <pre>{levelOrderTraversal}</pre>
      </div>
    </section>
  );
};

export default LevelOrderTraversal;
