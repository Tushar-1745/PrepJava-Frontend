import React, { useState } from "react";
import LinkedListCode from './LinkedListCode'

const LinkedList = () => {
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
    imageContainer: {
      textAlign: "center",
      margin: "20px 0",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      border: "1px solid #ccc",
      borderRadius: "10px",
    },
    caption: {
      fontSize: "0.9rem",
      color: "#555",
      marginTop: "5px",
    },
  };

  const nodeClassCode = `class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}`;

  const addAtBeginningCode = `public void addAtBeginning(int data) {
    Node newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}`;

const inBuiltLinkedList = `
    import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        // Creating a LinkedList
        LinkedList<Integer> list = new LinkedList<>();

        // Adding elements
        list.add(10);
        list.add(20);
        list.add(30);
        list.addFirst(5);  // Add at the beginning
        list.addLast(40);   // Add at the end

        System.out.println("LinkedList after additions: " + list);

        // Accessing elements
        System.out.println("First Element: " + list.getFirst());
        System.out.println("Last Element: " + list.getLast());
        System.out.println("Element at index 2: " + list.get(2));

        // Removing elements
        list.removeFirst(); // Removes first element
        list.removeLast();  // Removes last element
        list.remove(1);     // Removes element at index 1

        System.out.println("LinkedList after deletions: " + list);

        // Checking if an element exists
        System.out.println("Contains 20? " + list.contains(20));

        // Iterating over elements
        System.out.print("LinkedList elements: ");
        for (Integer num : list) {
            System.out.print(num + " ");
        }

        // Clearing the LinkedList
        list.clear();
        System.out.println("\nLinkedList after clearing: " + list);
    }
}

    `

  const addAtEndCode = `public void addAtEnd(int data) {
    Node newNode = new Node(data);
    if (head == null) {
        head = newNode;
        return;
    }
    Node temp = head;
    while (temp.next != null) {
        temp = temp.next;
    }
    temp.next = newNode;
}`;

  const addAtIndexCode = `public void addAtIndex(int index, int data) {
    if (index < 0) {
        throw new IllegalArgumentException("Index cannot be negative");
    }
    Node newNode = new Node(data);
    if (index == 0) {
        addAtBeginning(data);
        return;
    }
    Node temp = head;
    for (int i = 0; i < index - 1 && temp != null; i++) {
        temp = temp.next;
    }
    if (temp == null) {
        throw new IllegalArgumentException("Index out of bounds");
    }
    newNode.next = temp.next;
    temp.next = newNode;
}`;

  const removeCode = `public void removeAtIndex(int index) {
    if (index < 0 || head == null) {
        throw new IllegalArgumentException("Invalid index");
    }
    if (index == 0) {
        head = head.next;
        return;
    }
    Node temp = head;
    for (int i = 0; i < index - 1 && temp != null; i++) {
        temp = temp.next;
    }
    if (temp == null || temp.next == null) {
        throw new IllegalArgumentException("Index out of bounds");
    }
    temp.next = temp.next.next;
}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Linked List</h1>

      {/* Definition */}
      <section>
        <h2 style={styles.sectionHeader}>Definition</h2>
        <p style={styles.paragraph}>
          A <strong>Linked List</strong> is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
          Unlike arrays, linked lists are dynamic in size and allow efficient insertions and deletions at any position.
        </p>
        <p style={styles.paragraph}>
          It consists of:
        </p>
        <ul style={styles.list}>
          <li>A data part to store information.</li>
          <li>A reference (or pointer) to the next node in the list.</li>
        </ul>

        <div style={styles.imageContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg"
            alt="Node structure in a Linked List"
            style={styles.image}
          />
          <p style={styles.caption}>
            Illustration of a node in a singly linked list. Each node contains
            data and a reference to the next node.
          </p>
        </div>

      </section>

      <section>
        

        <h2 style={styles.sectionHeader}>Key Features</h2>
        <ul style={styles.paragraph}>
          <li>
            It is a <strong>linear data structure</strong>, but unlike arrays, it does not store elements in contiguous memory locations, making it more flexible and preventing memory wastage.
          </li>
          <li>
            <strong>Implementation:</strong> Java’s <code>LinkedList</code> class implements the <code>List</code> and <code>Deque</code> interfaces, meaning it can function both as a <strong>list</strong> (like <code>ArrayList</code>) and a <strong>queue</strong>.
          </li>
          <li>
            Elements in a <code>LinkedList</code> are connected through <strong>nodes</strong>, each containing data and a reference to the next (or previous) node.
          </li>
          <li>
            Java’s <code>LinkedList</code> is a <strong>doubly linked list</strong>, meaning each node points to both its previous and next node, allowing <strong>efficient insertion and deletion</strong>.
          </li>
          <li>
            Unlike <code>ArrayList</code>, <code>LinkedList</code> provides faster insertions and deletions (O(1) in some cases) but slower random access (O(n)).
          </li>
        </ul>
      </section>

      <h3>LinkedList can be used in two ways: </h3> 
<ul>
  <li>By using in-built LinkedList provided by Java</li>
  <li>You can implement a custom LinkedList data structure (this is the best option while giving an interview)</li>
</ul>

      

      <h3>LinkedList: In-Built</h3>
      <p style={styles.paragraph}>
          The <strong>LinkedList</strong> class is a part of the <strong style={{ color: "#16a085" }}>Java Collection Framework</strong> and is located in the <code style={{ color: "#16a085" }}>java.util</code> package.
          </p>
        <code style={{
    display: 'inline-block', 
    backgroundColor: 'black', 
    color: 'white', 
    padding: '5px', 
    width: 'max-content' // Ensures the width is only as much as the content inside
  }}>
    import java.util.LinkedList;
  </code>

      <section>
        <h3>Important Methods of LinkedList</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
          <thead>
            <tr style={{ backgroundColor: "#2c3e50", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Method</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>add(E e)</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Adds an element to the end of the list.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>addFirst(E e)</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Inserts the element at the beginning of the list.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>addLast(E e)</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Appends the element at the end (same as add()).</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>remove()</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Removes the first element of the list.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>removeFirst()</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Removes and returns the first element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>removeLast()</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Removes and returns the last element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>getFirst()</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Returns the first element without removing it.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>getLast()</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Returns the last element without removing it.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>size()</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Returns the number of elements in the list.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>contains(Object o)</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Checks if the list contains a specific element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}><code>clear()</code></td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>Removes all elements from the list.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Add Methods */}
      <section>
      <h2 style={styles.sectionHeader}>Java Code</h2>

        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(inBuiltLinkedList)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{inBuiltLinkedList}</pre>
        </div>
        </section>



      {/* Node Class */}
      <section>
        <h2>Implementation of Custom LinkedList</h2>
        <h2 style={styles.sectionHeader}>Node Class</h2>
        <p style={styles.paragraph}>
          The <strong>Node</strong> class is the building block of a linked list. It contains two components: the data and a reference to the next node.
        </p>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(nodeClassCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{nodeClassCode}</pre>
        </div>
      </section>

      {/* Add Methods */}
      <section>
        <h2 style={styles.sectionHeader}>Adding Elements</h2>

        {/* Add at Beginning */}
        <h3>Add at Beginning</h3>
        <p style={styles.paragraph}>
          This method inserts a new node at the start of the linked list.
        </p>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(addAtBeginningCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{addAtBeginningCode}</pre>
        </div>

        {/* Add at End */}
        <h3>Add at End</h3>
        <p style={styles.paragraph}>
          This method appends a new node to the end of the linked list.
        </p>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(addAtEndCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{addAtEndCode}</pre>
        </div>

        {/* Add at Index */}
        <h3>Add at Index</h3>
        <p style={styles.paragraph}>
          This method inserts a new node at the specified index in the linked list.
        </p>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(addAtIndexCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{addAtIndexCode}</pre>
        </div>
      </section>

      {/* Remove Methods */}
      <section>
        <h2 style={styles.sectionHeader}>Removing Elements</h2>
        <p style={styles.paragraph}>
          This method removes a node from the linked list at a specified index.
        </p>
        <div style={styles.codeBlock}>
          <button
            style={styles.copyButton}
            onClick={() => handleCopy(removeCode)}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{removeCode}</pre>
        </div>
      </section>

      <LinkedListCode/>

      {/* Interview Questions */}
      <section>
        <h2 style={styles.sectionHeader}>Important Interview Questions</h2>
        <ul style={styles.list}>
          <li>What is the difference between a Linked List and an Array?</li>
          <li>What are the different types of Linked Lists?</li>
          <li>How do you reverse a Linked List?</li>
          <li>How do you detect a cycle in a Linked List?</li>
          <li>What is the time complexity of insertion and deletion in a Linked List?</li>
          <li>How would you merge two sorted Linked Lists?</li>
          <li>What are the advantages and disadvantages of using Linked Lists?</li>
        </ul>
      </section>
    </div>
  );
};

export default LinkedList;
