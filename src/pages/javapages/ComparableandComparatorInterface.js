import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

function ComparableandComparatorInterface() {
  const [showComparable, setShowComparable] = useState(true);
  const [showComparator, setShowComparator] = useState(true);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Comparable vs Comparator in Java</h1>

      {/* Comparable Interface Section */}
      <section style={styles.section}>
        <h2
          style={styles.subHeader}
          onClick={() => setShowComparable(!showComparable)}
        >
          Comparable Interface{" "}
          <span style={styles.toggle}>
            {showComparable ? "▼" : "▶"}
          </span>
        </h2>
        {showComparable && (
          <div>
            <ul style={styles.list}>
              <li>Part of the <code>java.lang</code> package.</li>
              <li>
                Used to impose a natural ordering on the objects of a class.
              </li>
              <li>
                Classes implementing Comparable must override{" "}
                <code>compareTo</code>.
              </li>
              <li>Method signature: <code>public int compareTo(T obj);</code></li>
            </ul>
            <h3 style={styles.codeHeader}>Example Code</h3>
            <SyntaxHighlighter language="java" style={coy}>
              {`import java.util.ArrayList;
import java.util.List;

public class ComparableInterface {
    public static void main(String[] args) {
        Person p1 = new Person(23, "Raj");
        Person p2 = new Person(22, "Kiran");
        Person p3 = new Person(34, "Rajesh");

        List<Person> list = new ArrayList<>();
        list.add(p1);
        list.add(p2);
        list.add(p3);

        System.out.println(list);
    }
}

class Person implements Comparable<Person> {
    int age;
    String name;

    public Person(int age, String name) {
        this.age = age;
        this.name = name;
    }

    public int compareTo(Person other) {
        return Integer.compare(this.age, other.age);
    }

    public String toString() {
        return "Person{" +
               "age=" + age +
               ", name='" + name + '\'' +
               '}';
    }
}`}
            </SyntaxHighlighter>
          </div>
        )}
      </section>

      {/* Comparator Interface Section */}
      <section style={styles.section}>
        <h2
          style={styles.subHeader}
          onClick={() => setShowComparator(!showComparator)}
        >
          Comparator Interface{" "}
          <span style={styles.toggle}>
            {showComparator ? "▼" : "▶"}
          </span>
        </h2>
        {showComparator && (
          <div>
            <ul style={styles.list}>
              <li>Part of the <code>java.util</code> package.</li>
              <li>Provides flexibility for custom sorting.</li>
              <li>Defines sorting outside the class being sorted.</li>
              <li>Method signature: <code>int compare(T o1, T o2);</code></li>
            </ul>
          </div>
        )}
      </section>

      {/* Comparison Table */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Comparison Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>Comparable</th>
              <th style={styles.th}>Comparator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Package</td>
              <td style={styles.td}>java.lang</td>
              <td style={styles.td}>java.util</td>
            </tr>
            <tr>
              <td style={styles.td}>Method</td>
              <td style={styles.td}>compareTo(T obj)</td>
              <td style={styles.td}>compare(T o1, T o2)</td>
            </tr>
            <tr>
              <td style={styles.td}>Purpose</td>
              <td style={styles.td}>Natural order</td>
              <td style={styles.td}>Custom sorting</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    color: "#2c3e50",
    fontSize: "2.5em",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  subHeader: {
    color: "#3498db",
    fontSize: "1.5em",
    cursor: "pointer",
  },
  toggle: {
    fontSize: "0.9em",
    color: "#7f8c8d",
  },
  list: {
    paddingLeft: "20px",
  },
  codeHeader: {
    color: "#8e44ad",
    marginTop: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    padding: "10px",
    backgroundColor: "#34495e",
    color: "#ffffff",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default ComparableandComparatorInterface;
