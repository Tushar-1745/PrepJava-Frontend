import React from "react";

const Constructor = () => {
  const styles = {
    container: {
      padding: "10px 20px",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "white",
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
    },
    paragraph: {
      fontSize: "1.1rem",
      margin: "10px 0",
    },
    codeBox: {
      backgroundColor: "#212121",
      color: "#ffffff",
      padding: "20px",
      borderRadius: "8px",
      fontFamily: "'Source Code Pro', monospace",
      fontSize: "1rem",
      overflowX: "auto",
      position: "relative",
      marginBottom: "20px",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#fff",
      padding: "1px 16px",
      borderRadius: "5px",
      fontSize:'20px',
      marginBottom: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s",
      flexDirection: "column", // Makes sure description appears below
    },
    listItemHeader: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
    },
  };

  const renderCodeExample = (code) => (
    <div style={styles.codeBox}>
      <pre>{code}</pre>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.header}>Constructors in Java</h1>

      <p style={styles.paragraph}>
        A constructor is a special method in Java used to initialize objects. It is invoked automatically when an object is created. Constructor method does not have return type not even <strong>void</strong>.
      </p>

      <section>
        <h2 style={styles.sectionHeader}>Features : </h2>
        <ul style={{fontSize:'1.1rem', lineHeight: "1.5",}}>
          <li>A constructor has the same name as the class.</li>
          <li>It does not have a return type.</li>
          <li>It is automatically invoked when an object is created.</li>
          <li>It is used to initialize the state of an object.</li>
          <li>Overloading is allowed in constructors.</li>
          <li>If no constructor is defined, Java provides a default constructor.</li>
          <li>A constructor can call another constructor using <code>this()</code>.</li>
          <li>A constructor can call the parent class's constructor using <code>super()</code>.</li>
        </ul>

      </section>   
      {/* Default Constructor */}
      <h2 style={styles.sectionHeader}>1. Default Constructor</h2>
      <p style={styles.paragraph}>
        A default constructor is a constructor that does not accept any parameters. It initializes an object with default values.
      </p>
      {renderCodeExample(
        `class Student {
  String name;
  int age;

  // Default Constructor
  public Student() {
    this.name = "Unknown";
    this.age = 0;
  }

  public void display() {
    System.out.println("Name: " + name + ", Age: " + age);
  }
}

public class Main {
  public static void main(String[] args) {
    Student s1 = new Student();
    s1.display(); // Output: Name: Unknown, Age: 0
  }
}`
      )}

      {/* Parameterized Constructor */}
      <h2 style={styles.sectionHeader}>2. Parameterized Constructor</h2>
      <p style={styles.paragraph}>
        A parameterized constructor allows passing arguments to initialize object properties.
      </p>
      {renderCodeExample(
        `class Student {
  String name;
  int age;

  // Parameterized Constructor
  public Student(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public void display() {
    System.out.println("Name: " + name + ", Age: " + age);
  }
}

public class Main {
  public static void main(String[] args) {
    Student s1 = new Student("Tushar", 22);
    s1.display(); // Output: Name: Tushar, Age: 22
  }
}`
      )}

      {/* Constructor Overloading */}
      <h2 style={styles.sectionHeader}>3. Constructor Overloading</h2>
      <p style={styles.paragraph}>
        Constructor overloading allows a class to have multiple constructors with different parameters.
      </p>
      {renderCodeExample(
        `class Student {
  String name;
  int age;

  // Default Constructor
  public Student() {
    this.name = "Unknown";
    this.age = 0;
  }

  // Parameterized Constructor
  public Student(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public void display() {
    System.out.println("Name: " + name + ", Age: " + age);
  }
}

public class Main {
  public static void main(String[] args) {
    Student s1 = new Student();
    Student s2 = new Student("Tushar", 22);
    s1.display(); // Output: Name: Unknown, Age: 0
    s2.display(); // Output: Name: Tushar, Age: 22
  }
}`
      )}
    </div>
  );
};

export default Constructor;
