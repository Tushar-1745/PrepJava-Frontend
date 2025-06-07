// import React, { useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// const BubbleSortPage = () => {
//   const javaCode = `
// public class BubbleSort {
//     public static void bubbleSort(int[] arr) {
//         int n = arr.length;
//         for (int i = 0; i < n - 1; i++) {
//             for (int j = 0; j < n - i - 1; j++) {
//                 if (arr[j] > arr[j + 1]) {
//                     // Swap arr[j] and arr[j+1]
//                     int temp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                 }
//             }
//         }
//     }

//     public static void main(String[] args) {
//         int[] arr = {5, 2, 9, 1, 5, 6};
//         bubbleSort(arr);
//         System.out.println("Sorted array:");
//         for (int num : arr) {
//             System.out.print(num + " ");
//         }
//     }
// }
//   `;

//   const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
//   const [isSorting, setIsSorting] = useState(false);
//   const [message, setMessage] = useState("");

//   const bubbleSort = async () => {
//     setIsSorting(true);
//     const arr = [...array];
//     const n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//       setArray([...arr]);
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause for visualization

//       setMessage(
//         `After iteration ${i + 1}: The ${
//           i + 1 === 1 ? "largest" : `${i + 1}th largest`
//         } element is in its correct position.`
//       );
//     }

//     setMessage("Sorting completed! The array is now fully sorted.");
//     setIsSorting(false);
//   };

//   const styles = {
//     page: {
//       fontFamily: "Arial, sans-serif",
//       backgroundColor: "#f4f4f9",
//       color: "#333",
//       padding: "20px",
//       lineHeight: "1.6",
//     },
//     header: {
//       textAlign: "center",
//       backgroundColor: "#0066cc",
//       color: "#fff",
//       padding: "30px 0",
//       borderRadius: "10px",
//     },
//     section: {
//       margin: "20px 0",
//       padding: "20px",
//       backgroundColor: "#fff",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     button: {
//       display: "block",
//       margin: "20px auto",
//       padding: "10px 20px",
//       backgroundColor: "#0066cc",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "16px",
//     },
//     arrayContainer: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "flex-end", // Ensures bars grow upwards
//       gap: "10px",
//       margin: "20px 0",
//     },
//     arrayBar: (value) => ({
//       width: "40px",
//       height: `${value * 3}px`,
//       backgroundColor: "#66ccff",
//       color: "#fff",
//       textAlign: "center",
//       lineHeight: "40px",
//       borderRadius: "5px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "flex-end",
//     }),
//     message: {
//       textAlign: "center",
//       fontSize: "18px",
//       margin: "10px 0",
//       color: "#0066cc",
//     },
//     footer: {
//       textAlign: "center",
//       marginTop: "40px",
//       color: "#666",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <header style={styles.header}>
//         <h1>Bubble Sort</h1>
//         <p>Learn and visualize the basics of Bubble Sort.</p>
//       </header>

//       <section style={styles.section}>
//         <h2>What is Bubble Sort?</h2>
//         <p>
//           Bubble Sort is a simple sorting algorithm that repeatedly compares
//           adjacent elements in an array and swaps them if they are in the wrong
//           order. The process is repeated until the array is completely sorted.
//         </p>
//         <p>
//           It is called "Bubble Sort" because smaller elements "bubble" up to
//           their correct positions.
//         </p>
//       </section>

      

//       <section style={styles.section}>
//         <h2>Advantages and Disadvantages</h2>
//         <h3>Advantages</h3>
//         <ul>
//           <li>Easy to implement and understand.</li>
//           <li>Useful for small datasets or nearly sorted data.</li>
//         </ul>
//         <h3>Disadvantages</h3>
//         <ul>
//           <li>Highly inefficient for large datasets.</li>
//           <li>Time complexity of O(n²) in the worst and average cases.</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2>Applications</h2>
//         <ul>
//           <li>Teaching sorting concepts due to its simplicity.</li>
//           <li>Small data sorting where performance is not a concern.</li>
//         </ul>
//       </section>

//       <section style={styles.section}>
//         <h2>Java Code Implementation</h2>
//         <SyntaxHighlighter language="java" style={atomOneDark}>
//           {javaCode}
//         </SyntaxHighlighter>
//       </section>

//       <section style={styles.section}>
//         <h2>Interactive Visualization</h2>
//         <div style={{ ...styles.arrayContainer, alignItems: "flex-end" }}>
//           {array.map((value, index) => (
//             <div key={index} style={styles.arrayBar(value)}>
//               {value}
//             </div>
//           ))}
//         </div>
//         <button onClick={bubbleSort} style={styles.button} disabled={isSorting}>
//           {isSorting ? "Sorting..." : "Sort Array"}
//         </button>
//         <p style={styles.message}>{message}</p>
//       </section>

//       <footer style={styles.footer}>
//         <p>&copy; 2024 Prep Java | Bubble Sort Visualization</p>
//       </footer>
//     </div>
//   );
// };

// export default BubbleSortPage;
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaClipboard } from "react-icons/fa";

const BubbleSortPage = () => {
  const javaCode = `
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 5, 6};
        bubbleSort(arr);
        System.out.println("Sorted array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
  `;

  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [isSorting, setIsSorting] = useState(false);
  const [message, setMessage] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause for visualization

      setMessage(
        `After iteration ${i + 1}: The ${i + 1 === 1 ? "largest" : `${i + 1}th largest`
        } element is in its correct position.`
      );
    }

    setMessage("Sorting completed! The array is now fully sorted.");
    setIsSorting(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(javaCode).then(() => {
      setCopyMessage("Code copied to clipboard!");
      setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
    });
  };

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f9",
      color: "#333",
      padding: "20px",
      lineHeight: "1.6",
    },
    header: {
      textAlign: "center",
      backgroundColor: "#0066cc",
      color: "#fff",
      padding: "30px 0",
      borderRadius: "10px",
    },
    section: {
      margin: "20px 0",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    button: {
      display: "block",
      margin: "20px auto",
      padding: "10px 20px",
      backgroundColor: "#0066cc",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    arrayContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end", // Ensures bars grow upwards
      gap: "10px",
      margin: "20px 0",
    },
    arrayBar: (value) => ({
      width: "40px",
      height: `${value * 3}px`,
      backgroundColor: "#66ccff",
      color: "#fff",
      textAlign: "center",
      lineHeight: "40px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    }),
    message: {
      textAlign: "center",
      fontSize: "18px",
      margin: "10px 0",
      color: "#0066cc",
    },
    footer: {
      textAlign: "center",
      marginTop: "40px",
      color: "#666",
    },
    codeContainer: {
      position: "relative",
      margin: "20px 0",
    },
    copyIcon: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "24px",
      cursor: "pointer",
      color: "#ccc",
      zIndex: 1,
    },
    copyMessage: {
      textAlign: "center",
      color: "green",
      margin: "10px 0",
    }
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Bubble Sort</h1>
        <p>Learn and visualize the basics of Bubble Sort.</p>
      </header>

      <section style={styles.section}>
        <h2>What is Bubble Sort?</h2>
        <p>
          Bubble Sort is a simple sorting algorithm that repeatedly compares
          adjacent elements in an array and swaps them if they are in the wrong
          order. The process is repeated until the array is completely sorted.
        </p>
        <p>
          It is called "Bubble Sort" because smaller elements "bubble" up to
          their correct positions.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Steps in Algorithm</h2>
        <ol>
          <li>Start from the first element in the array.</li>
          <li>
            Compare the current element with the next element. If it is greater,
            swap them.
          </li>
          <li>Move to the next pair and repeat the comparison and swap.</li>
          <li>
            After each iteration, the largest unsorted element is placed in its
            correct position.
          </li>
          <li>
            Repeat the process for the remaining unsorted portion of the array.
          </li>
          <li>Continue until the entire array is sorted.</li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2>Advantages and Disadvantages</h2>
        <h3>Advantages</h3>
        <ul>
          <li>Easy to implement and understand.</li>
          <li>Useful for small datasets or nearly sorted data.</li>
        </ul>
        <h3>Disadvantages</h3>
        <ul>
          <li>Highly inefficient for large datasets.</li>
          <li>Time complexity of O(n²) in the worst and average cases.</li>
        </ul>
      </section>

      <section style={styles.section}>
         <h2>Applications</h2>
         <ul>
           <li>Teaching sorting concepts due to its simplicity.</li>
           <li>Small data sorting where performance is not a concern.</li>
         </ul>
       </section>

      <section style={styles.section}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Aligns heading and button to opposite ends
            alignItems: "center", // Vertically centers the content
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0 }}>Java Code Implementation</h2>
          <button
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
            }}
            onClick={() => (window.location.href = "/practice-problems")}
          >
            Practice Problem
          </button>
        </div>



        <div style={styles.codeContainer}>
          <FaClipboard
            onClick={copyCode}
            style={styles.copyIcon}
            title="Copy to clipboard"
          />
          <SyntaxHighlighter language="java" style={atomOneDark}>
            {javaCode}
          </SyntaxHighlighter>
        </div>
        <div style={styles.copyMessage}>{copyMessage}</div>
      </section>

      <section style={styles.section}>
        <h2>Interactive Visualization</h2>
        <div style={styles.arrayContainer}>
          {array.map((value, index) => (
            <div key={index} style={styles.arrayBar(value)}>
              {value}
            </div>
          ))}
        </div>
        <button onClick={bubbleSort} style={styles.button} disabled={isSorting}>
          {isSorting ? "Sorting..." : "Sort Array"}
        </button>
        <p style={styles.message}>{message}</p>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Prep Java | Bubble Sort Visualization</p>
      </footer>
    </div>
  );
};

export default BubbleSortPage;
