import React, { useState } from 'react';

const Variables = () => {

  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white',
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
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
    },
    codeBox: {
      backgroundColor: '#212121',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      fontFamily: "'Source Code Pro', monospace",
      fontSize: '1rem',
      overflowX: 'auto',
      position: 'relative',
      marginBottom: '20px',
    },
    buttonRow: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
    },
  };


  const renderCodeExample = (code, practiceLink) => (
    <div style={styles.codeBox}>
      <pre>{code}</pre>
      {practiceLink && (
        <a href={practiceLink} target="_blank" rel="noopener noreferrer">
          <button style={styles.practiceButton}>Practice Here</button>
        </a>
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.header}>Variables in Java</h1>

      <p style={styles.paragraph}>
        In Java, a variable is a container that holds data that can be changed during the execution of a program. 
        There are three types of variables:
      </p>

      {/* Instance Variables */}
      <h2 style={styles.sectionHeader}>1. Instance Variables</h2>
      <p style={styles.paragraph}>
        Instance variables are non-static fields declared within a class but outside any method, constructor, or block. 
        Each instance (object) of the class has its own copy of these variables.
      </p>
      <ul>
        <li>Can have access modifiers.</li>
        <li>Their lifetime is bound to the object.</li>
        <li>Instance variables are serializable.</li>
        <li>Stored in heap memory.</li>
      </ul>
      <h4 style={styles.sectionHeader}>
        Code Example:
      </h4>
      {renderCodeExample(
        `class Person {
  String name; // Instance variable
  int age;     // Instance variable

  void display() {
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
  }
}

public class Main {
  public static void main(String[] args) {
    Person person1 = new Person();
    person1.name = "John";
    person1.age = 30;
    person1.display();
  }
}`,
      )}

      {/* Static Variables */}
      <h2 style={styles.sectionHeader}>2. Static Variables</h2>
      <p style={styles.paragraph}>
        Declared with the static keyword. Also known as class variables, they can be accessed by the class name rather than 
        creating an instance of the class.
      </p>
      <ul>
        <li>Cannot be serializable.</li>
        <li>The default values are the same as for instance variables.</li>
      </ul>
      <h4 style={styles.sectionHeader}>
        Code Example:
      </h4>
      {renderCodeExample(
        `class Company {
  static String companyName = "Tech Solutions"; // Static variable

  static void displayCompany() {
    System.out.println("Company Name: " + companyName);
  }
}

public class Main {
  public static void main(String[] args) {
    Company.displayCompany(); // Accessing static method
  }
}`,
      )}

      {/* Local Variables */}
      <h2 style={styles.sectionHeader}>3. Local Variables</h2>
      <p style={styles.paragraph}>
        A local variable is a variable declared within a method, constructor, or block. These variables are created when 
        the block of code in which they are defined is executed and destroyed once the block is exited.
      </p>
      <ul>
        <li>Only accessible within the method, constructor, or block in which they are declared.</li>
        <li>No default initialization.</li>
        <li>Cannot have access modifiers due to their local scope.</li>
        <li>Cannot be static variables.</li>
        <li>Stored in stack memory, making them faster to access than instance variables.</li>
        <li>Cannot be serialized.</li>
      </ul>
      {renderCodeExample(
        `class Calculator {
  void addNumbers() {
    int a = 5; // Local variable
    int b = 10; // Local variable
    int sum = a + b;
    System.out.println("Sum: " + sum);
  }
}

public class Main {
  public static void main(String[] args) {
    Calculator calc = new Calculator();
    calc.addNumbers();
  }
}`,
      )}
    </div>
  );
};

export default Variables;
