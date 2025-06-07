import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const QuickSortPage = () => {
  const javaCode = `
public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 80, 30, 90, 40, 50, 70};
        quickSort(arr, 0, arr.length - 1);
        System.out.println("Sorted array:");
        for (int num : arr) System.out.print(num + " ");
    }
}
  `;

  const [array, setArray] = useState([10, 80, 30, 90, 40, 50, 70]);
  const [isSorting, setIsSorting] = useState(false);

  const quickSortVisualization = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);

      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await quickSortVisualization(arr, low, pi - 1);
      await quickSortVisualization(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
  };

  const startQuickSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    await quickSortVisualization(arr, 0, arr.length - 1);
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
        <h1>QuickSort</h1>
        <p>Learn and visualize the basics of QuickSort.</p>
      </header>

      <section style={styles.section}>
        <h2>What is QuickSort?</h2>
        <p>
          QuickSort is a divide-and-conquer algorithm that works by selecting
          a pivot element and partitioning the array into two subarrays: one
          with elements smaller than the pivot and one with elements greater
          than the pivot. The subarrays are then sorted recursively.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Steps in Algorithm</h2>
        <ol>
          <li>Choose a pivot element.</li>
          <li>Partition the array into two subarrays: one with elements smaller than the pivot and one with elements greater than the pivot.</li>
          <li>Recursively apply the same process to both subarrays.</li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2>Advantages and Disadvantages</h2>
        <h3>Advantages</h3>
        <ul>
          <li>In-place sorting algorithm.</li>
          <li>Average time complexity is O(n log n).</li>
        </ul>
        <h3>Disadvantages</h3>
        <ul>
          <li>Worst-case time complexity is O(n²), although this can be avoided with randomized pivot selection.</li>
          <li>Not stable (relative order of equal elements may change).</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Applications</h2>
        <ul>
          <li>Sorting large datasets efficiently.</li>
          <li>Used in data structures like quick select for finding the kth smallest element.</li>
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
          onClick={startQuickSort}
          style={styles.button}
          disabled={isSorting}
        >
          {isSorting ? "Sorting..." : "Sort Array"}
        </button>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Prep Java | QuickSort Visualization</p>
      </footer>
    </div>
  );
};

export default QuickSortPage;
