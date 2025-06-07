// import React, { useState } from "react";

// const Tree = () => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = (code) => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const styles = {
//     container: {
//       padding: "10px 20px",
//       fontFamily: "'Poppins', sans-serif",
//       backgroundColor: "#f9f9f9",
//       color: "#333333",
//       lineHeight: "1.5",
//     },
//     header: {
//       fontSize: "2.5rem",
//       textAlign: "left",
//       color: "black",
//     },
//     sectionHeader: {
//       fontSize: "1.5rem",
//       color: "black",
//       borderBottom: "1px solid black",
//       display: "inline-block",
//       marginBottom: "10px",
//     },
//     paragraph: {
//       fontSize: "1.1rem",
//       margin: "10px 0",
//     },
//     codeBlock: {
//       backgroundColor: "#000",
//       color: "#fff",
//       padding: "10px",
//       borderRadius: "5px",
//       fontFamily: "'Courier New', Courier, monospace",
//       fontSize: "1rem",
//       marginBottom: "20px",
//     },
//     copyButton: {
//       position: "absolute",
//       top: "10px",
//       right: "10px",
//       backgroundColor: "#4A90E2",
//       color: "#fff",
//       border: "none",
//       borderRadius: "4px",
//       padding: "5px 10px",
//       cursor: "pointer",
//       fontSize: "0.8rem",
//     },
//     list: {
//       listStyle: "none",
//       padding: 0,
//     },
//     listItem: {
//       backgroundColor: "#fff",
//       padding: "12px 16px",
//       borderRadius: "5px",
//       marginBottom: "8px",
//       cursor: "pointer",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//       transition: "background-color 0.3s",
//       flexDirection: "column",
//     },
//     listItemHeader: {
//       display: "flex",
//       width: "100%",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "12px 0",
//     },
//     dropdownContent: {
//       padding: "10px",
//       backgroundColor: "#f1f1f1",
//       borderRadius: "5px",
//       marginTop: "5px",
//       width: "100%",
//       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     },
//     arrow: {
//       fontSize: "28px",
//       transition: "transform 0.3s",
//     },
//   };

//   const binaryTreeDisplayMethod = `
//     public static void displayBinaryTree(Node node){
//         if(node==null){
//             return;
//         }
      
//         String str ="";
      
//         str += node.left == null? "null": node.left.data + " ";
//         str += " <- " + node.data + " -> ";
//         str += node.right == null? "null": node.right.data + " ";
//         System.out.println(str);
      
//         displayBinaryTree(node.left);
//         displayBinaryTree(node.right);
//         }
//     }
//       `;

//   return (
//     <section>
//       <h2>Display Binary Tree</h2>
//       <p>We will use recursion technique to print the binary tree.</p>
//       <p>Here's how: </p>
//       <ul>
//         <li>We will get the data of left and right children of rootNode</li>
//         <li>Then we will make a recursive call to the left child of rootNode assuming it as rootNode</li>
//         <li>Same goes for the right child</li>
//       </ul>

//       <h3>Input Example</h3>
//       <pre>
//         {`
//                       50
//                      /  \
//                     25   75
//                    / \   / \
//                   12 37 62 87
//                     /    \
//                    30     70
//                 `}
//       </pre>

//       <h3>Expected Output</h3>
//       <pre>
//         {`                25   <- 50 -> 75
//                 12   <- 25 -> 37
//                 null <- 12 -> null
//                 30   <- 37 -> null
//                 null <- 30 -> null
//                 62   <- 75 -> 87
//                 null <- 62 -> 70
//                 null <- 70 -> null
//                 null <- 87 -> null`}
//       </pre>

//       <h3>Dry Run</h3>
//       <p>Let's consider the first few recursive calls:</p>
//       <ul>
//         <li>Function is called with root node 50.</li>
//         <li>{`Prints "25 <- 50 -> 75".`}</li>
//         <li>Recursively calls for left child (25).</li>
//         <li>{`Prints "12 <- 25 -> 37".`}</li>

//         <li>Recursively calls for left child (12) → {`prints "null <- 12 -> null".`}</li>
//         <li>Returns and processes right child (37) →{`prints "30 <- 37 -> null".`}</li>
//         <li>Recursively calls for left child (30) → {`prints "null <- 30 -> null".`}</li>
//         <li>Repeats the process for right subtree.</li>
//       </ul>

//       <div style={styles.codeBlock}>
//         <button style={styles.copyButton} onClick={() => handleCopy(binaryTreeDisplayMethod)}>
//           {copied ? "Copied!" : "Copy"}
//         </button>
//         <pre>{binaryTreeDisplayMethod}</pre>
//       </div>
//     </section>
//   );
// };

// export default Tree;

import React, { useState } from "react";

const Tree = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied("binaryTreeDisplayMethod");
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
      marginLeft: "20px",
      fontSize: "1rem",
    },
  };

  const binaryTreeDisplayMethod = `
    public static void displayBinaryTree(Node node){
        if(node==null){          
            return;
        }
    
        String str ="";
    
        str += node.left == null? "null": node.left.data + " ";
        str += " <- " + node.data + " -> ";
        str += node.right == null? "null": node.right.data + " ";
        System.out.println(str);
    
        displayBinaryTree(node.left);
        displayBinaryTree(node.right);
    }
  `;

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Display Binary Tree</h2>
      <p style={styles.paragraph}>We will use recursion technique to print the binary tree.</p>
      <p style={styles.paragraph}>Here's how: </p>
      <ul style={styles.list}>
        <li>We will get the data of left and right children of rootNode</li>
        <li>Then we will make a recursive call to the left child of rootNode assuming it as rootNode</li>
        <li>Same goes for the right child</li>
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
      <pre style={styles.codeBlock}>
        {`
                            25  <- 50 -> 75
                            12  <- 25 -> 37
                           null <- 12 -> null
                            30  <- 37 -> null
                           null <- 30 -> null
                            62  <- 75 -> 87
                           null <- 62 -> 70
                           null <- 70 -> null
                           null <- 87 -> null
        `}
      </pre>

      <h3 style={styles.sectionHeader}>Dry Run</h3>
      <p style={styles.paragraph}>Let's consider the first few recursive calls:</p>
      <ul style={styles.list}>
        <li>Function is called with root node 50.</li>
        <li>{`Prints "25 <- 50 -> 75".`}</li>
        <li>Recursively calls for left child (25).</li>
        <li>{`Prints "12 <- 25 -> 37".`}</li>
        <li>Recursively calls for left child (12) → {`prints "null <- 12 -> null".`}</li>
        <li>Returns and processes right child (37) →{`prints "30 <- 37 -> null".`}</li>
        <li>Recursively calls for left child (30) → {`prints "null <- 30 -> null".`}</li>
        <li>Repeats the process for right subtree.</li>
      </ul>

      <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy(binaryTreeDisplayMethod)}>
          {copied === "binaryTreeDisplayMethod" ? "Copied!" : "Copy"}
        </button>
        <pre>{binaryTreeDisplayMethod}</pre>
      </div>
    </section>
  );
};

export default Tree;
