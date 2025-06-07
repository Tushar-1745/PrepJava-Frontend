import React from 'react';

const Constraints = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white',
      color: 'black',
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
    codeBlock: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '1rem',
      margin: '10px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Constraints in MySQL</h1>
      <p style={styles.paragraph}>
        In MySQL, <strong>constraints</strong> are rules enforced on table columns to ensure the accuracy and reliability of data. They help maintain data integrity by restricting what values can be entered into a column. Constraints can be applied at the column level (affecting a single column) or the table level (affecting multiple columns).
          </p>
          <h2 style={styles.sectionHeader}>Common MySQL Clauses</h2>
          <constraint>
        <h3>1. NOT NULL</h3>
        <div style={{ marginLeft: "50px" }}>
          <p><strong>Purpose: </strong>Ensures that a column cannot have a NULL value.</p>
          <strong>Syntax: </strong><br />
          <pre style={styles.codeBlock}>column_name data_type NOT NULL;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>CREATE TABLE Students (ID INT NOT NULL, Name VARCHAR(50));</pre>
        </div>
      </constraint>

      <constraint>
        <h3>2. UNIQUE</h3>
        <div style={{ marginLeft: "50px" }}>
          <p><strong>Purpose: </strong>Ensures that all values in a column are unique.</p>
          <strong>Syntax: </strong><br />
          <pre style={styles.codeBlock}>column_name data_type UNIQUE;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>CREATE TABLE Students (ID INT UNIQUE, Name VARCHAR(50));</pre>
        </div>
      </constraint>

      <constraint>
        <h3>3. PRIMARY KEY</h3>
        <div style={{ marginLeft: "50px" }}>
          <p><strong>Purpose: </strong>Uniquely identifies each record in a table.</p>
          <strong>Syntax: </strong><br />
          <pre style={styles.codeBlock}>PRIMARY KEY (column_name);</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>CREATE TABLE Students (ID INT PRIMARY KEY, Name VARCHAR(50));</pre>
        </div>
      </constraint>

      <constraint>
        <h3>4. FOREIGN KEY</h3>
        <div style={{ marginLeft: "50px" }}>
          <p><strong>Purpose: </strong>Ensures referential integrity between two tables.</p>
          <strong>Syntax: </strong><br />
          <pre style={styles.codeBlock}>FOREIGN KEY (column_name) REFERENCES table_name(column_name);</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>CREATE TABLE Orders (OrderID INT, StudentID INT, FOREIGN KEY (StudentID) REFERENCES Students(ID));</pre>
        </div>
      </constraint>

      <constraint>
        <h3>5. CHECK</h3>
        <div style={{ marginLeft: "50px" }}>
          <p><strong>Purpose: </strong>Ensures that all values in a column satisfy a specific condition.</p>
          <strong>Syntax: </strong><br />
          <pre style={styles.codeBlock}>CHECK (condition);</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>CREATE TABLE Students (ID INT, Age INT CHECK (Age `{'>'}`= 18));</pre>
        </div>
      </constraint>

      <constraint>
        <h3>6. DEFAULT</h3>
        <div style={{ marginLeft: "50px" }}>
          <p><strong>Purpose: </strong>Assigns a default value to a column if no value is specified.</p>
          <strong>Syntax: </strong><br />
          <pre style={styles.codeBlock}>column_name data_type DEFAULT value;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>CREATE TABLE Students (ID INT, Status VARCHAR(20) DEFAULT 'Active');</pre>
        </div>
      </constraint>
          
    </div>
  );
};

export default Constraints;
