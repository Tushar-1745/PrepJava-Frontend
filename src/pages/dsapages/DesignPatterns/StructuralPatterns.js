import React, { useState } from "react";

const StructuralPatterns = () => {
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
  };

  const adapterPatternCode = `// Adapter Pattern Example
interface MediaPlayer {
    void play(String audioType, String fileName);
}

class Mp3Player implements MediaPlayer {
    public void play(String audioType, String fileName) {
        System.out.println("Playing MP3 file: " + fileName);
    }
}

class MediaAdapter implements MediaPlayer {
    AdvancedMediaPlayer advancedMusicPlayer;
    
    public MediaAdapter(String audioType) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedMusicPlayer = new VlcPlayer();
        }
    }

    public void play(String audioType, String fileName) {
        advancedMusicPlayer.playVlc(fileName);
    }
}`;

  const patterns = {
    Adapter: "Allows incompatible interfaces to work together.",
    Bridge: "Decouples abstraction from implementation, allowing them to vary independently.",
    Composite: "Lets clients treat individual objects and compositions of objects uniformly.",
    Decorator: "Attaches additional responsibilities to an object dynamically.",
    Facade: "Provides a simplified interface to a larger body of code.",
    Flyweight: "Minimizes memory usage by sharing as much data as possible.",
    Proxy: "Acts as a substitute or placeholder for another object to control access.",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Structural Design Patterns</h1>

      {/* Definition */}
      <section>
        <h2 style={styles.sectionHeader}>What are Structural Design Patterns?</h2>
        <p style={styles.paragraph}>
          Structural Design Patterns deal with class and object composition. They help to ensure that different parts
          of a system work together efficiently.
        </p>
      </section>

      {/* Patterns Overview */}
      <section>
        <h2 style={styles.sectionHeader}>Types of Structural Patterns</h2>
        <ul style={styles.list}>
          {Object.entries(patterns).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </section>

      {/* Code Example */}
      <section>
        <h2 style={styles.sectionHeader}>Adapter Pattern Example</h2>
        <div style={styles.codeBlock}>
          <button style={styles.copyButton} onClick={() => handleCopy(adapterPatternCode)}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre>{adapterPatternCode}</pre>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2 style={styles.sectionHeader}>Use Cases of Structural Patterns</h2>
        <ul style={styles.list}>
          <li>When different parts of a system need to work together efficiently.</li>
          <li>To improve code maintainability by decoupling components.</li>
          <li>When adding new functionality dynamically without modifying existing code.</li>
        </ul>
      </section>
    </div>
  );
};

export default StructuralPatterns;
