import React from 'react';

const String = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#f9f9f9', // Light background
      color: '#333333', // Dark text
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
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
    },
    codeBox: {
      backgroundColor: '#212121', // Black background for code
      color: '#ffffff', // White text
      padding: '20px',
      borderRadius: '8px',
      fontFamily: "'Source Code Pro', monospace",
      fontSize: '1rem',
      overflowX: 'auto',
      marginBottom: '20px',
    },
    codeButton: {
      backgroundColor: '#1565c0', // Bluish button color
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      float: 'right',
      padding: '5px 10px'
    },
    practiceButton: {
      margin: '25px auto',
      color: 'black',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'inline-block',
      backgroundColor: '#89CFF0'
    },

    list: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    listItem: {
      marginBottom: '10px',
    },
  };

  const handleCopy = (codeId) => {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.header}>Strings in Java</h1>

      {/* Definition Section */}
      <h2 style={styles.sectionHeader}>What is a String?</h2>
      <p style={styles.paragraph}>
        In Java, a <strong>String</strong> is an object that represents a sequence of characters. Strings are immutable, meaning once created, they cannot be changed. Strings are widely used for handling text and are stored in a special memory region known as the <strong>String Pool</strong>.
      </p>

      {/* Example Section */}
      <h2 style={styles.sectionHeader}>Example</h2>
      <p style={styles.paragraph}>Here’s a simple example of creating and printing a String:</p>

      <pre id="exampleCode" style={styles.codeBox}>
        {`public class StringExample {
    public static void main(String[] args) {
        String greeting = "Hello, World!";
        System.out.println(greeting); // Output: Hello, World!
    }
}`}
      </pre>

      {/* Common Operations */}
      <h2 style={styles.sectionHeader}>Common String Operations</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>length()</strong>: Returns the length of the String.
        </li>
        <li style={styles.listItem}>
          <strong>charAt(int index)</strong>: Retrieves the character at the specified index.
        </li>
        <li style={styles.listItem}>
          <strong>substring(int start, int end)</strong>: Extracts a substring.
        </li>
        <li style={styles.listItem}>
          <strong>equals()</strong>: Compares two Strings for equality.
        </li>
        <li style={styles.listItem}>
          <strong>toLowerCase()</strong>: Converts the String to lowercase.
        </li>
        <li style={styles.listItem}>
          <strong>toUpperCase()</strong>: Converts the String to uppercase.
        </li>
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Code Example with Copy Button */}
        <h2 style={styles.sectionHeader}>Code Example</h2>
        {/* Practice Button */}
        <div>
          <a href="/practice" style={styles.practiceButton}>
            Practice Here
          </a>
        </div>
      </div>
      <pre id="operationsCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy("operationsCode")}
        >
          Copy
        </button>
        {`public class StringOperations {
    public static void main(String[] args) {
        String str = "Java Strings";

        System.out.println(str.length()); // Output: 12
        System.out.println(str.charAt(0)); // Output: J
        System.out.println(str.substring(5, 11)); // Output: Strings
        System.out.println(str.toLowerCase()); // Output: java strings
        System.out.println(str.toUpperCase()); // Output: JAVA STRINGS
    }
}`}
      </pre>

      {/* Memory Management */}
      <h2 style={styles.sectionHeader}>Memory Management</h2>
      <p style={styles.paragraph}>
        Strings in Java are immutable, meaning once created, their values cannot be changed. This immutability is tightly linked with how Strings are managed in memory.
      </p>

      <h3 style={{ fontSize: '1.5rem', color: '#333', marginTop: '10px' }}>String Pool</h3>
      <p style={styles.paragraph}>
        Java maintains a <strong>String Pool</strong> in memory, which is part of the heap. This pool is a cache of String literals to optimize memory usage.
      </p>
      <p style={styles.paragraph}>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>
            When a String literal is created (e.g., <code style={{ color: '#d32f2f' }}>String s1 = "Hello";</code>), Java checks if an identical String already exists in the String Pool.
          </li>
          <li>
            If it exists, the reference to the existing object is returned, saving memory.
          </li>
          <li>
            If it doesn’t exist, the literal is added to the String Pool.
          </li>
          <li>
            However, when you use <code style={{ color: '#d32f2f' }}>new String()</code>, a new object is created in the heap, even if the same value exists in the String Pool.
          </li>
        </ul>
      </p>

      <h3 style={{ fontSize: '1.5rem', color: '#333', marginTop: '10px' }}>Key Points</h3>
      <p style={styles.paragraph}>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>String literals are stored in the String Pool.</li>
          <li>
            <code style={{ color: '#d32f2f' }}>String s1 = "Hello";</code> creates one object in the String Pool.
          </li>
          <li>
            <code style={{ color: '#d32f2f' }}>String s3 = new String("Hello");</code> creates a new object in the heap, separate from the String Pool.
          </li>
          <li>The <code style={{ color: '#d32f2f' }}>intern()</code> method can be used to add a String explicitly to the String Pool.</li>
        </ul>
      </p>

      {/* Example Code */}
      <div style={{ display: 'flex', justifyContent: 'space-between', }}>
        <h3 style={styles.sectionHeader}>Code Example</h3>
        <div>
          <a href="/practice" style={styles.practiceButton}>
            Practice Here
          </a>
        </div>
      </div>
      <pre id="memoryCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy("memoryCode")}
        >
          Copy
        </button>
        {`public class StringMemoryExample {
    public static void main(String[] args) {
        // Stored in String Pool
        String s1 = "Hello";
        String s2 = "Hello";

        // New object in Heap memory
        String s3 = new String("Hello");

        // Comparison
        System.out.println(s1 == s2); // true, same object in String Pool
        System.out.println(s1 == s3); // false, different objects in memory
        System.out.println(s1.equals(s3)); // true, same content

        // Interning s3 to String Pool
        String s4 = s3.intern();
        System.out.println(s1 == s4); // true, both refer to the String Pool object
    }
}`}
      </pre>

      <h3 style={{ fontSize: '1.5rem', color: '#333', marginTop: '10px' }}>Why String Pool is Efficient</h3>
      <p style={styles.paragraph}>
        The String Pool helps save memory by avoiding duplicate objects. For example, in a program with many String literals having the same value, only one instance is kept in the pool, and all variables share the reference to that instance.
      </p>

      <h3 style={{ fontSize: '1.5rem', color: '#333', marginTop: '10px' }}>DSA Relevance</h3>
      <p style={styles.paragraph}>
        Efficient String handling is crucial in many algorithms, especially in scenarios involving large datasets, such as:
      </p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>Pattern matching (e.g., substring search).</li>
        <li>Hashing (e.g., calculating hash codes).</li>
        <li>Dynamic programming with Strings (e.g., longest common subsequence).</li>
      </ul>

      {/* Intern Method */}
      <h2 style={styles.sectionHeader}>Intern Method</h2>
      <p style={styles.paragraph}>
        The <strong>intern()</strong> method ensures that the String is added to the <strong>String Pool</strong>.
        If the String already exists in the pool, it returns the reference to the existing String,
        saving memory and making comparison efficient.
      </p>
      <pre id="internCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy("internCode")}
        >
          Copy
        </button>
        {`public class StringInternExample {
    public static void main(String[] args) {
        String s1 = new String("Java"); // Creates a new String object in the heap
        String s2 = "Java"; // Points to the literal in the String Pool

        // Before interning
        System.out.println(s1 == s2); // false (different memory locations)

        // Interning s1
        String s3 = s1.intern(); // Adds "Java" to the String Pool if not already present
        System.out.println(s2 == s3); // true (both refer to the same String in the pool)
    }
}`}
      </pre>

      {/* == vs .equals() */}
      <h2 style={styles.sectionHeader}>Difference Between == and .equals()</h2>
      <p style={styles.paragraph}>
        <strong>`==`</strong> is a reference comparison that checks whether two references point to the same object in memory,
        while <strong>.equals()</strong> is a method that checks for content equality of two objects.
      </p>
      <p style={styles.paragraph}>
        For Strings in Java:
      </p>
      <ul style={styles.list}>
        <li><strong>`==`:</strong> Compares memory addresses of String objects.</li>
        <li><strong>.equals():</strong> Compares the actual content of the Strings.</li>
      </ul>
      <pre id="comparisonCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy("comparisonCode")}
        >
          Copy
        </button>
        {`public class StringComparisonExample {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = "Java"; // Points to the same object in String Pool
        String s3 = new String("Java"); // Creates a new object in heap memory

        // Using ==
        System.out.println(s1 == s2); // true (both refer to the same object)
        System.out.println(s1 == s3); // false (different memory locations)

        // Using .equals()
        System.out.println(s1.equals(s2)); // true (contents are the same)
        System.out.println(s1.equals(s3)); // true (contents are the same)
    }
}`}
      </pre>


      {/* DSA Problems */}
      <h2 style={styles.sectionHeader}>String-Based DSA Problems</h2>
      <p style={styles.paragraph}>
        Practice these problems to strengthen your skills in working with Strings:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Reverse a String (Beginner)
        </li>
        <li style={styles.listItem}>
          Check if a String is a Palindrome (Beginner)
        </li>
        <li style={styles.listItem}>
          Longest Substring Without Repeating Characters (Intermediate)
        </li>
        <li style={styles.listItem}>
          String Compression (Intermediate)
        </li>
        <li style={styles.listItem}>
          Minimum Number of Operations to Convert One String to Another (Advanced)
        </li>
      </ul>
    </div>
  );
};

export default String;
