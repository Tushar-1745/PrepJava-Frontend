import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const MergeSort= () => {
  const javaCode = `
public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            // Sort first and second halves
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) L[i] = arr[left + i];
        for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println("Sorted array:");
        for (int num : arr) System.out.print(num + " ");
    }
}
  `;

  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10]);
  const [isSorting, setIsSorting] = useState(false);

  const mergeSortVisualization = async (arr, left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);

      await mergeSortVisualization(arr, left, mid);
      await mergeSortVisualization(arr, mid + 1, right);
      await merge(arr, left, mid, right);

      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };

  const merge = async (arr, left, mid, right) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k++] = L[i++];
      } else {
        arr[k++] = R[j++];
      }
    }

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
  };

  const startMergeSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    await mergeSortVisualization(arr, 0, arr.length - 1);
    setIsSorting(false);
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
      backgroundColor: "#4CAF50",
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
      backgroundColor: "#4CAF50",
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
      backgroundColor: "#8BC34A",
      color: "#fff",
      textAlign: "center",
      lineHeight: "40px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    }),
    footer: {
      textAlign: "center",
      marginTop: "40px",
      color: "#666",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Merge Sort</h1>
        <p>Learn and visualize the basics of Merge Sort.</p>
      </header>

      <section style={styles.section}>
        <h2>What is Merge Sort?</h2>
        <p>
          Merge Sort is a divide-and-conquer algorithm that splits an array into
          halves, recursively sorts each half, and then merges them into a
          single sorted array.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Steps in Algorithm</h2>
        <ol>
          <li>Divide the array into two halves.</li>
          <li>Recursively sort each half.</li>
          <li>Merge the two sorted halves into one sorted array.</li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2>Advantages and Disadvantages</h2>
        <h3>Advantages</h3>
        <ul>
          <li>Efficient for large datasets.</li>
          <li>Stable sorting algorithm.</li>
        </ul>
        <h3>Disadvantages</h3>
        <ul>
          <li>Requires extra space for merging.</li>
          <li>Can be slower than other algorithms for small datasets.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Applications</h2>
        <ul>
          <li>Sorting linked lists efficiently.</li>
          <li>Handling large datasets.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Java Code Implementation</h2>
        <SyntaxHighlighter language="java" style={atomOneDark}>
          {javaCode}
        </SyntaxHighlighter>
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
        <button
          onClick={startMergeSort}
          style={styles.button}
          disabled={isSorting}
        >
          {isSorting ? "Sorting..." : "Sort Array"}
        </button>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Prep Java | Merge Sort Visualization</p>
      </footer>
    </div>
  );
};

export default MergeSort;
