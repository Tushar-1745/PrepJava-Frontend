import React from 'react';
import { FaJava, FaCogs, FaCloud } from 'react-icons/fa';

const JdkJreJvm = () => {
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
      marginBottom: '20px',
    },
    sectionHeader: {
      fontSize: '1.5rem',
      color: 'black',
      borderBottom: '2px solid black',
      display: 'inline-block',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1.1rem',
      margin: '10px 0',
      lineHeight:'30px'
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: '20px 0',
    },
    iconBox: {
      textAlign: 'center',
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
    circleBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '30px 0',
    },
    circle: {
      backgroundColor: '#3498db',
      color: 'white',
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    arrow: {
      fontSize: '2rem',
      color: 'black',
    },
    footerNote: {
      marginTop: '30px',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Understanding JDK, JRE, and JVM</h1>
      <p style={styles.paragraph}>
        The JDK, JRE, and JVM are key components of the Java ecosystem. Each has a specific role in the development and execution of Java applications.
      </p>

      <h1 style={styles.sectionHeader}>What is JDK?</h1>
      <p style={styles.paragraph}>
        The Java Development Kit (JDK) is a software development environment that provides the tools and resources necessary for developers to create, compile and run java applications, applets and components.
        <br></br>
        The JDK includes JRE which allows users to run Java applications and various development tools such as Java Compiler (JAVAC), debugger(JDB) and other utilities.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '50px auto' }}>
  <img src='Images/JdkJreJvm.png' alt='not found' />
</div>

      

      <ul>
        <li>
          <h3>Java Compiler (JavaC)</h3>
          <p>
            Java Compiler is responsible for translating human readable java source code(.java file) into platform independent bytecode (.class file) that can be executed by Java Virtual Machine (JVM).          </p>
        </li>

        <li>
          <h3>Java</h3>
          <p>The Java runtime launcher is used to execute java pplications. It loads and runs java bytecode files on Java Virtual Machine.</p>
        </li>

        <li>
          <h3>Javadoc</h3>
          <p>Javadoc tool is used to generate API documentation in HTML format from specially formatted comments in  java source code. It helps developers to create clear and well-organized documentation of their code.</p>
        </li>

        <li>
          <h3>JDB</h3>
          <p>Java Debugger is command-line tool used for debugging java programs. It allows developers to set breadkpoints, inspect variables and sthep througn the code to identify and fix issue.</p>
    
        </li>

        <li>
          <h3>Jar</h3>
          <p> Jar tool is used for working with Java Archive (JAR) files. It allows developers to create JAR files, extract files from existing JARs and perform other operations like adding or updating files in an existing JAR.</p>
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>What is JRE?</h2>
      <p style={styles.paragraph}>
        The Java Runtime Environment (JRE) provides libraries and the JVM for running Java applications. It is a software package that provides the necessary runtime enviornment to execute java applications and applets.
        <br></br>
        When you run java program, JRE is responsible for running the bytecode on the host machine. <br></br>
        The JRE is subset of JDK and includes only the componetns needed to run Java applications without development tools like compiler and debugger.
      </p>

      <ul>
        <li>
          <h2>Java Class Libraries</h2>
          <p>
          JRE includes set of standard java class libraries that provide a wide range of pre-built funtions and API's for common programming tasks.
          <br></br>
          These libraries enable developers to access various functionalitites without havingto implement them.
          </p>
        </li>

        <li>
          <h2>Java Package Classes</h2>
          <p>JRE includes various packages and classes that provide the runtime support for java applications. These classes are part of Java standard edition (java SE) and from the core Java API.
            <br></br>
            <h4>Example: </h4>
            <ul>
              <li>java.lang</li>
              <li>java.io</li>
              <li>java.util</li>
              <li>java.net</li>
              <li>java.math</li>
            </ul>
          </p>
        </li>
      </ul>


      <h2 style={styles.sectionHeader}>What is JVM?</h2>
      <p style={styles.paragraph}>
        The Java Virtual Machine (JVM) is software-based emulation of a computer that allows Java Bytecode to be executed on any platform, making Java a "Write Once, run anywhere" (WORA) programming language.<br></br>
        When you compile java source code using java compiler, it is transformed into java bytecode with .class file. Java bytecode is a platform independent intermediate representation of java program. <br></br>
        When you run java application JVM loads the bytecode into memory and executes it.
      </p>

      <h3>Functions: </h3>
      <ul>
        <li>
          <h4>Bytecode Execution</h4>
          <p>JVM interprets and executes the ava bytecode one instruction at a time.</p>
        </li>

        <li>
          <h4>Memory Management</h4>
          <p>JVM manages memory allocation and deallocation for java objects througha process known as garbage collection which automatically reclaims memory that is no longer in use</p>

        </li>

        <li>
          <h4>Platform independence</h4>
          <p>Java's "WORA" capability is possible due to JVM's ability to run bytecode on any platform that has a compatible JVM installed.</p>
        </li>

        <li>
          <h4>Class Loading</h4>
          <p>JVM dynamically loads Java classes as they are needed during program execution allowing for more efficent memroy usage.</p>
        </li>
      </ul>

      <div style={styles.iconContainer}>
        <div style={styles.iconBox}>
          <FaJava size={50} color="#e67e22" />
          <p>JDK</p>
        </div>
        <div style={styles.iconBox}>
          <FaCogs size={50} color="#3498db" />
          <p>JRE</p>
        </div>
        <div style={styles.iconBox}>
          <FaCloud size={50} color="#2ecc71" />
          <p>JVM</p>
        </div>
      </div>

      <h2 style={styles.sectionHeader}>JDK, JRE, and JVM Hierarchy</h2>
      <div style={styles.circleBox}>
        <div style={styles.circle}>JDK</div>
        <div style={styles.arrow}>↓</div>
        <div style={styles.circle}>JRE</div>
        <div style={styles.arrow}>↓</div>
        <div style={styles.circle}>JVM</div>
      </div>
      <p style={styles.paragraph}>
        The JDK contains the JRE, which in turn contains the JVM. This hierarchy ensures smooth Java application development and execution.
      </p>


    </div>
  );
};

export default JdkJreJvm;
