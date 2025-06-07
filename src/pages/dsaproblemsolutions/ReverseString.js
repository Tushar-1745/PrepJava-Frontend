import React, { useState } from "react";

export default function ReverseString() {
  const [input, setInput] = useState("hello");

  const containerStyle = {
    width: "95%",
    maxWidth: "900px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#f8f9fa",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const sectionStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "left",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#333",
    fontSize: "18px",
    marginBottom: "20px",
  };

  const codeStyle = {
    background: "#000",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    fontSize: "16px",
    overflowX: "auto",
    textAlign: "left",
    position: "relative",
  };

  const copyButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#007bff", fontSize: "26px" }}>Reverse String Problem</h1>

      {[{
        title: "Approach 1: Iterative Method",
        description: "Using a loop to iterate through the string in reverse order.",
        complexity: "Time Complexity: O(n), Space Complexity: O(1)",
        code: `public class ReverseStringIterative {\n  public static String reverse(String str) {\n    StringBuilder reversed = new StringBuilder();\n    for (int i = str.length() - 1; i >= 0; i--) {\n      reversed.append(str.charAt(i));\n    }\n    return reversed.toString();\n  }\n}`
      }, {
        title: "Approach 2: Recursive Method",
        description: "Using recursion to reverse the string.",
        complexity: "Time Complexity: O(n), Space Complexity: O(n) due to recursion stack.",
        code: `public class ReverseStringRecursive {\n  public static String reverse(String str) {\n    if (str.isEmpty()) {\n      return str;\n    }\n    return str.charAt(str.length() - 1) + reverse(str.substring(0, str.length() - 1));\n  }\n}`
      }, {
        title: "Approach 3: Built-in Method",
        description: "Using Java built-in functions.",
        complexity: "Time Complexity: O(n), Space Complexity: O(n).",
        code: `import java.util.Collections;\nimport java.util.List;\nimport java.util.Arrays;\n\npublic class ReverseStringBuiltIn {\n  public static String reverse(String str) {\n    List<String> list = Arrays.asList(str.split(\"\"));\n    Collections.reverse(list);\n    return String.join(\"\", list);\n  }\n}`
      }].map((approach, index) => (
        <section key={index} style={sectionStyle}>
          <h2>{approach.title}</h2>
          <p>{approach.description}</p>
          <p><strong>{approach.complexity}</strong></p>
          <pre style={codeStyle}>
            <button style={copyButtonStyle} onClick={() => copyToClipboard(approach.code)}>Copy</button>
            {approach.code}
          </pre>
        </section>
      ))}
    </div>
  );
}
