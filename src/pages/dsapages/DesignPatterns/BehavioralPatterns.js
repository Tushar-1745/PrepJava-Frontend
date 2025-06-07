import React, { useState } from "react";

const BehavioralPatterns = () => {
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
  };

  const behavioralPatterns = [
    "Chain of Responsibility",
    "Command",
    "Interpreter",
    "Iterator",
    "Mediator",
    "Memento",
    "Observer",
    "State",
    "Strategy",
    "Template Method",
    "Visitor",
  ];

  const strategyPatternCode = `interface Strategy {
    void execute();
}

class ConcreteStrategyA implements Strategy {
    public void execute() {
        System.out.println("Executing Strategy A");
    }
}

class ConcreteStrategyB implements Strategy {
    public void execute() {
        System.out.println("Executing Strategy B");
    }
}

class Context {
    private Strategy strategy;

    public void setStrategy(Strategy strategy) {
        this.strategy = strategy;
    }

    public void executeStrategy() {
        strategy.execute();
    }
}

public class StrategyPatternExample {
    public static void main(String[] args) {
        Context context = new Context();
        context.setStrategy(new ConcreteStrategyA());
        context.executeStrategy();

        context.setStrategy(new ConcreteStrategyB());
        context.executeStrategy();
    }
}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Behavioral Design Patterns</h1>

      <section>
        <h2 style={styles.sectionHeader}>What are Behavioral Design Patterns?</h2>
        <p style={styles.paragraph}>
          Behavioral patterns focus on how objects interact and communicate with each other. 
          They help in defining efficient communication and responsibility sharing between objects.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>List of Behavioral Patterns</h2>
        <ul style={styles.list}>
          {behavioralPatterns.map((pattern, index) => (
            <li key={index}>{pattern}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Example: Strategy Pattern</h2>
        <p style={styles.paragraph}>
          The Strategy Pattern allows selecting an algorithm at runtime.
        </p>
        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(strategyPatternCode)}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{strategyPatternCode}</pre>
        </div>
      </section>

      <section>
        <h2 style={styles.sectionHeader}>Use Cases</h2>
        <ul style={styles.list}>
          <li>Decoupling behaviors from the main object logic.</li>
          <li>Providing multiple execution strategies.</li>
          <li>Reducing conditional statements in code.</li>
        </ul>
      </section>
    </div>
  );
};

export default BehavioralPatterns;
