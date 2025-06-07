import React from 'react';

const ConditionalStatement = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white', // Light background
      color: '#333333', // Dark text
      lineHeight: '1.5',
    },
    header: {
      fontSize: '2.5rem',
      textAlign: 'left',
      color: 'black',
      marginTop: '-100px'
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
      <h1 style={styles.header}>Conditional Statements in Java</h1>

      {/* Definition Section */}
      <h2 style={styles.sectionHeader}>What is a Conditional Statement?</h2>
      <p style={styles.paragraph}>
        A <strong>conditional statement</strong> in Java allows a program to execute different actions based on whether a specific condition is true or false. Common types of conditional statements include <strong>if</strong>, <strong>else if</strong>, and <strong>switch</strong>.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Code Example with Copy Button */}
        
      </div>
      <h2 style={styles.sectionHeader}>if, else if, else</h2>
        <p style={styles.paragraph}>
          The <strong>if, else if</strong> and <strong>else</strong> statements in Java (or most programming languages) are used for conditional execution, where <strong>if checks a condition </strong>, <strong>else if handles additional conditions</strong>, and <strong>else executes when none of the previous conditions are met</strong>.<br></br>
          <ul>
            <li>You can have one if block, one or more else if block and only one else block or no else block.</li>
            <li>And only one of the blocks will be executed.</li>
          </ul>
        </p>
      <pre id="conditionalCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy("conditionalCode")}
        >
          Copy
        </button>
        {`public class ConditionalOperations {
    public static void main(String[] args) {
        int number = 7;

        if (number > 10) {
            System.out.println("Greater than 10");
        } else if (number == 7) {
            System.out.println("Equal to 7");
        } else {
            System.out.println("Less than 7");
        }
    }
}`}
      </pre>

      {/* Switch Example */}
      <h2 style={styles.sectionHeader}>Switch Statement</h2>
      <p style={styles.paragraph}>
        A <strong>switch</strong> statement is an alternative to using multiple <strong>if-else</strong> conditions when you have many possibilities for a single variable.
      </p>

      <pre id="switchCode" style={styles.codeBox}>
        <button
          style={styles.codeButton}
          onClick={() => handleCopy("switchCode")}
        >
          Copy
        </button>
        {`public class SwitchExample {
    public static void main(String[] args) {
        String day = "Monday";

        switch(day) {
            case "Monday":
                System.out.println("Start of the week");
                break;
            case "Friday":
                System.out.println("End of the week");
                break;
            default:
                System.out.println("Midweek");
        }
    }
}`}
      </pre>


    </div>
  );
};

export default ConditionalStatement;
