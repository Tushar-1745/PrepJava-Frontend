import React from 'react';

const MySQLClauses = () => {
  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#f9f9f9',
      color: '#333',
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
      <h1 style={styles.header}>MySQL Clauses</h1>
      <p style={styles.paragraph}>
        Clauses in MySQL are used to filter, sort, group, and manipulate the results of an SQL query. They define conditions and constraints to retrieve specific data efficiently.
      </p>

      <h2 style={styles.sectionHeader}>Common MySQL Clauses</h2>
      <p style={styles.paragraph}>Below are the most commonly used clauses in MySQL queries:</p>

      <clause>
        <h3>1. SELECT</h3>
        <div style={{ marginLeft: '50px' }}>
          <p><strong>Purpose: </strong>Specifies the columns to retrieve from a table.</p>
          <strong>Syntax: </strong><br></br>
          <pre style={styles.codeBlock}>SELECT column1, column2 FROM Employee;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT firstName, lastName FROM Employee;</pre>
          <pre style={styles.codeBlock}>SELECT * FROM Employee;             // * is used to specify all the columns</pre>
        </div>
      </clause>

      <clause>
        <h3>2. FROM</h3>
        <div style={{ marginLeft: '50px' }}>
          <p><strong>Purpose: </strong>Specifies the table or tables from which to retrieve data.</p>
          <strong>Syntax: </strong><br></br>
          <pre style={styles.codeBlock}>SELECT column1, column2... FROM Employee;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT firstName, lastName <br></br>FROM Employee;</pre>
        </div>
      </clause>

      <clause>
        <h3>3. WHERE</h3>
        <div style={{ marginLeft: '50px' }}>
          <p>
            <strong>Purpose: </strong>Filters rows of a table based on specified conditions.
          </p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>
            SELECT column1, column2, ... <br></br>FROM table_name<br></br>WHERE condition;
          </pre>
          <strong>Example:</strong>
          <pre style={styles.codeBlock}>
            SELECT name, age <br></br>FROM employees<br></br>WHERE age {'>'} 30;
          </pre>
        </div>
      </clause>

      <clause>
        <h3>4. ORDER BY</h3>
        <div style={{ marginLeft: '50px' }}>
          <p><strong>Purpose: </strong>Sorts the result set based on one or more columns.</p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>SELECT column1, column2, ...<br></br>FROM table_name <br></br>ORDER BY column1 [ASC|DESC];</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT name, age <br></br>FROM employees<br></br>ORDER BY age DESC;</pre>
        </div>
      </clause>

      <clause>
        <h3>5. GROUP BY</h3>
        <div style={{ marginLeft: '50px' }}>
          <p>The GROUP BY clause in SQL is used to group rows that have the same values in specified columns into summary rows, like aggregating data using functions like COUNT, SUM, AVG, MAX, MIN, etc.</p>
          <p><strong>Purpose: </strong>Groups rows that have the same values into summary rows.</p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>SELECT column1, aggregate_function(column2) <br></br>FROM table_name<br></br>GROUP BY column1;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT department, COUNT(*)<br></br>FROM employees<br></br>GROUP BY department;</pre>
        </div>
      </clause>

      <clause>
        <h3>6. HAVING</h3>
        <div style={{ marginLeft: '50px' }}>
          <p><strong>Purpose: </strong>Filters groups based on a condition, similar to WHERE but for grouped data.</p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>SELECT column1, aggregate_function(column2)<br></br>FROM table_name <br></br>GROUP BY column1<br></br>HAVING condition;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT department, COUNT(*)<br></br>FROM employees<br></br>GROUP BY department<br></br>HAVING COUNT(*) `{'>'}` 5;<br></br></pre>
        </div>
      </clause>

      <clause>
        <h3>7. DISTINCT</h3>
        <div style={{ marginLeft: '50px' }}>
          <p>DISTINCT keyword is used in a SELECT query to remove duplicate rows from the result set, returning only unique rows.</p>
          <p><strong>Purpose: </strong>Removes duplicate rows from the result set.</p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>SELECT DISTINCT column1, column2, ... <br></br>FROM table_name</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>	SELECT DISTINCT department <br></br>FROM employees;</pre>
        </div>
      </clause>

      <clause>
        <h3>7. LIMIT</h3>
        <div style={{ marginLeft: '50px' }}>
          <p>The LIMIT clause in SQL is used to specify the number of records to return in the result set of a query.</p>
          <p><strong>Purpose: </strong>Limits the number of rows returned and skips a number of rows.</p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>SELECT column1, column2, ...<br></br>FROM table_name<br></br>LIMIT number_of_rows;</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT * FROM employees <br></br>LIMIT 5;</pre>
        </div>
      </clause>

      <clause>
        <h3>8. BETWEEN</h3>
        <div style={{ marginLeft: '50px' }}>
          <p><strong>Purpose: </strong>Filter the result set by selecting values that fall within a specified range. This range can be for numbers, text, or dates. The BETWEEN operator includes the start and end values in the range.</p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>SELECT column_name(s)FROM table_name<br></br>WHERE column_name BETWEEN value1 AND value2;</pre>
          <ul>
            <li>value1: The lower bound of the range.</li>
            <li>value2: The upper bound of the range.</li>
          </ul>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT * FROM CUSTOMERS WHERE AGE <br></br>BETWEEN 22 AND 28;</pre>
          <div>** it also includes value1 and value2 in result means ex. Value 22 and value 28.</div>
        </div>
      </clause>

      <clause>
        <h3>9. IN</h3>
        <div style={{ marginLeft: '50px' }}>
          <p>The IN operator allows you to specify multiple values in a WHERE clause, making it easier to filter rows where the column value matches any of the specified values..</p>
          <p><strong>Purpose: </strong>Allows selection of rows where a column's value matches any value in a given list.</p>
          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>SELECT column1, column2, ...<br></br>FROM table_name<br></br>WHERE column_name IN (value1, value2, ...);</pre>
          <strong>Example: </strong>
          <pre style={styles.codeBlock}>SELECT * FROM orders<br></br>WHERE customer_id IN (1, 2, 3);</pre>
          <div>This is equivalent to: </div>
          <pre style={styles.codeBlock}>SELECT * FROM orders<br></br>WHERE customer_id = 1 OR customer_id = 2 OR customer_id = 3;</pre>
          <h3>Key Points:</h3>
          <ul>
            <li>You can use it with both numbers and text values.</li>
            <li>The <strong>IN</strong> clause can be thought of as a instead for <strong>multiple OR</strong> conditions.</li>
          </ul>
        </div>
      </clause>

      <clause>
        <h3>10. LIKE</h3>
        <div style={{ marginLeft: '50px' }}>
          <p>The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.</p>
          <p><strong>Purpose: </strong>Allows pattern matching using wildcard characters (`%` and `_`) to filter results based on partial matches.</p>

          <strong>Syntax:</strong>
          <pre style={styles.codeBlock}>
            SELECT column1, column2, ...<br></br>
            FROM table_name<br></br>
            WHERE column_name LIKE 'pattern';
          </pre>

          <strong>Example: </strong>
          <pre style={styles.codeBlock}>
            SELECT * FROM employees<br></br>
            WHERE name LIKE 'J%';
          </pre>

          <div>This is equivalent to finding names that start with "J".</div>

          <h3>Wildcards in LIKE:</h3>
          <ul>
            <li><strong>" % ":</strong>Represents zero, one, or more characters. </li>
            <h3>Example:</h3>
            <ul>
              <li>LIKE 'a%' will match any string starting with "a" (e.g., "apple", "ant").</li>
              <li>LIKE '%a' will match any string ending with "a" (e.g., "pizza", "pasta").</li>
            </ul><div></div>
            <li><strong>" _ ":</strong> Represents a single character.</li>
            <h3>Example: </h3>
            <ul>
              <li>LIKE 'h_t' will match "hat", "hot", etc.</li>
              <li>LIKE '_at' will match "cat", "bat", etc.</li>
            </ul>
          </ul>
        </div>
      </clause>
    </div>
  );
};

export default MySQLClauses;
