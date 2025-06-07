import React, { useState } from 'react';

const Array = () => {
  const questions = {
    basic: [
      "What is an array?",
      "How do you declare an array in Java?",
      "What are the limitations of using arrays?",
    ],
    intermediate: [
      "How to find the largest element in an array?",
      "How do you reverse an array in Java?",
      "How to remove duplicates from an array?",
    ],
    advanced: [
      "How to find the subarray with the maximum sum?",
      "Explain and implement an algorithm to rotate an array.",
      "How to merge two sorted arrays without using extra space?",
    ],
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#f9f9f9',
      color: '#333333',
      lineHeight: '1.5',
    },
    header: {
      fontSize: '2.5rem',
      textAlign: 'left',
      color: 'black',
    },
    sectionHeader: {
      fontSize: '1.5rem',
      color: 'black',
      borderBottom: '1px solid black',
      display: 'inline-block',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
    },
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
      fontSize: '1.1rem',
    },
    codeBlock: {
      position: 'relative',
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '1rem',
      marginBottom: '20px',
    },
    copyButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#4A90E2',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '5px 10px',
      cursor: 'pointer',
      fontSize: '0.8rem',
    },
    copySuccess: {
      fontSize: '0.8rem',
      color: 'green',
      marginTop: '5px',
    },
  };

  const codeSnippet = `// Declare and initialize an array
int[] numbers = {10, 20, 30, 40, 50};

// Access an element by index
System.out.println(numbers[2]); // Output: 30

// Iterate over an array using a for loop
for (int i = 0; i < numbers.length; i++) {
    System.out.print(numbers[i] + " ");
}

// Find the largest element
int max = numbers[0];
for (int num : numbers) {
    if (num > max) max = num;
}
System.out.println("\\nLargest element: " + max);

// Reverse an array
for (int i = 0, j = numbers.length - 1; i < j; i++, j--) {
    int temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}
System.out.println(Arrays.toString(numbers));`;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Array</h1>

      {/* What is an Array? */}
      <section>
        <h2 style={styles.sectionHeader}>What is an Array?</h2>
        <p style={styles.paragraph}>
          An array is a data structure that stores a fixed-size sequential collection of elements of the same type. Instead of declaring individual variables, arrays allow you to store multiple values in a single variable, accessed by index.
        </p>
      </section>

      {/* Important Methods */}
      <section>
        <h2 style={styles.sectionHeader}>Important Array Methods</h2>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(codeSnippet)}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <pre>{codeSnippet}</pre>
        </div>
      </section>

      {/* Advantages and Disadvantages */}
      <section>
        <h2 style={styles.sectionHeader}>Advantages and Disadvantages of Arrays</h2>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#4A90E2' }}>Advantages</h3>
        <ul style={styles.list}>
          <li>Efficient random access to elements using an index.</li>
          <li>Compact and straightforward data structure.</li>
          <li>Good for storing fixed-size data collections.</li>
        </ul>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#4A90E2' }}>Disadvantages</h3>
        <ul style={styles.list}>
          <li>Fixed size makes it inflexible for dynamically changing data.</li>
          <li>Insertion and deletion operations (except at the end) are slow due to shifting elements.</li>
          <li>Cannot store heterogeneous data types.</li>
        </ul>
      </section>

      {/* Array Questions */}
      <section>
        <h2 style={styles.sectionHeader}>Array Questions</h2>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4em' }}>Basic</h3>
          <ul style={styles.list}>
            {questions.basic.map((q, index) => (
              <li key={`basic-${index}`}>{q}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4em' }}>Intermediate</h3>
          <ul style={styles.list}>
            {questions.intermediate.map((q, index) => (
              <li key={`intermediate-${index}`}>{q}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ color: '#4A90E2', fontSize: '1.4em' }}>Advanced</h3>
          <ul style={styles.list}>
            {questions.advanced.map((q, index) => (
              <li key={`advanced-${index}`}>{q}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Array;
