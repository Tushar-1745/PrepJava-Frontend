import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FileHandlingJava = () => {
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
            borderBottom: '2px solid black',
            display: 'inline-block',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '1.1rem',
            margin: '10px 0',
        },
        codeBlock: {
            width: '100%',
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1rem",
            marginBottom: "20px",
            overflow: "auto",
        },
        details: {
            backgroundColor: "#f9f9f9", // Light gray background for contrast
            padding: "15px",
            borderRadius: "5px",
            marginTop: "5px",
            width: "100%",  // Makes it align with the list item width
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        },

        description: {
            textAlign: "left",  // Align text to left
            fontSize: "1rem",
            color: "#333",  // Darker color for better readability
            marginBottom: "10px",
        },

        list: {
            fontSize: '1.1rem',
            margin: '10px 0',
            paddingLeft: '20px',
        },
        subSectionHeader: {
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginTop: '15px',
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
        list: {
            listStyle: "none",
            padding: 0,
        },
        listItem: {
            backgroundColor: "#fff",
            padding: "1px 16px",
            borderRadius: "5px",
            fontSize: '20px',
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
        dropdownContent: {
            padding: "10px",
            fontSize: '20px',
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            marginTop: "5px",
            width: "100%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        arrow: {
            fontSize: "28px",
            transition: "transform 0.3s",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
        },
        th: {
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            textAlign: "left",
        },
        td: {
            padding: "10px",
            borderBottom: "1px solid #ddd",
        },
    };

    const [openItem, setOpenItem] = useState(null);

    const toggleDropdown = (index) => {
        setOpenItem(openItem === index ? null : index);
    };


    const operations = [
        {
            title: "Creating a File",
            description: "Use the `File` class and its `createNewFile()` method to create a new file.",
            code: `import java.io.File;
import java.io.IOException;

public class CreateFile {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}`,
        },
        {
            title: "Writing to a File",
            description: "Use `FileWriter` to write text to a file efficiently.",
            code: `import java.io.FileWriter;
import java.io.IOException;

public class WriteFile {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("example.txt");
            writer.write("Hello, this is a test file.");
            writer.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}`,
        },
        {
            title: "Reading a File",
            description: "Use `BufferedReader` or `Scanner` to read text from a file.",
            code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFile {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            reader.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}`,
        },
        {
            title: "Appending to a File",
            description: "Use the `FileWriter` class with `true` as the second argument to append content to an existing file.",
            code: `import java.io.FileWriter;
        import java.io.IOException;
        
        public class AppendFile {
            public static void main(String[] args) {
                try {
                    FileWriter writer = new FileWriter("example.txt", true); // true enables append mode
                    writer.write("\\nThis is an appended text.");
                    writer.close();
                    System.out.println("Successfully appended to the file.");
                } catch (IOException e) {
                    System.out.println("An error occurred.");
                    e.printStackTrace();
                }
            }
        }`
        },
        {
            title: "Deleting a File",
            description: "Use the `delete()` method of the `File` class to delete a file.",
            code: `import java.io.File;

public class DeleteFile {
    public static void main(String[] args) {
        File file = new File("example.txt");
        if (file.delete()) {
            System.out.println("Deleted the file: " + file.getName());
        } else {
            System.out.println("Failed to delete the file.");
        }
    }
}`,
        },
    ];

    const exceptions = [
        { method: "File.createNewFile()", exception: "IOException" },
        { method: "FileReader", exception: "FileNotFoundException (subclass of IOException)" },
        { method: "FileWriter", exception: "IOException" },
        { method: "BufferedReader.readLine()", exception: "IOException" },
        { method: "BufferedWriter.write()", exception: "IOException" },
        { method: "FileInputStream", exception: "FileNotFoundException, IOException" },
        { method: "FileOutputStream", exception: "FileNotFoundException, IOException" },
        { method: "RandomAccessFile", exception: "IOException" },
    ];


    return (
        <div style={styles.container}>
            <h1 style={styles.header}>File Handling in Java</h1>

            <p style={styles.paragraph}>
                File handling in Java allows programs to create, read, write, update, and delete files. Java provides various classes and methods for performing file operations efficiently.
            </p>

            <h2 style={styles.sectionHeader}>File Handling Packages</h2>
            <p>Java provides two main packages for file handling:</p>
            <ul style={styles.paragraph}>
                <li><strong>java.io - </strong>Provides basic input and output operations.</li>
                <li><strong>java.nio (New Input/Output) - </strong>Provides advanced file handling capabilities with better performance.
                </li>
            </ul>

            <h2 style={styles.sectionHeader}>Common File Handling Classes</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>Class</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>File</strong></td>
                        <td>Represents a file or directory.</td>
                    </tr>
                    <tr>
                        <td><strong>FileReader</strong></td>
                        <td>Reads character files.</td>
                    </tr>
                    <tr>
                        <td><strong>FileWriter</strong></td>
                        <td>Writes character files.</td>
                    </tr>
                    <tr>
                        <td><strong>BufferedReader</strong></td>
                        <td>Reads text efficiently.</td>
                    </tr>
                    <tr>
                        <td><strong>BufferedWriter</strong></td>
                        <td>Writes text efficiently.</td>
                    </tr>
                    <tr>
                        <td><strong>FileInputStream</strong></td>
                        <td>Reads binary files.</td>
                    </tr>
                    <tr>
                        <td><strong>FileOutputStream</strong></td>
                        <td>Writes binary files.</td>
                    </tr>
                </tbody>
            </table>

            <section style={styles.section}>
                <h2 style={styles.sectionHeader}>File Handling Exceptions in Java</h2>
                <p style={styles.paragraph}>
                    Most file handling operations in Java involve I/O operations, which can lead to various exceptions such as:
                </p>
                <ul>
                    <li><strong>File not found</strong> (trying to read a non-existing file)</li>
                    <li><strong>Permission issues</strong> (no write access)</li>
                    <li><strong>Disk full</strong> (unable to write)</li>
                    <li><strong>Invalid path</strong> (incorrect file path format)</li>
                </ul>

                <h3>Common Classes & Their Exception Handling</h3>
                <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", marginTop: "10px" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f2f2f2" }}>
                            <th>Method / Class</th>
                            <th>Exception</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exceptions.map((item, index) => (
                            <tr key={index}>
                                <td><strong>{item.method}</strong></td>
                                <td>{item.exception}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionHeader}>Common Operations of File Handling</h2>
                <ul style={styles.list}>
                    {operations.map((operation, index) => (
                        <li key={index} style={styles.listItem} onClick={() => toggleDropdown(index)}>
                            {/* Operation Name & Arrow in one row */}
                            <div style={styles.listItemHeader}>
                                <span>{operation.title}</span>
                                <span style={styles.arrow}>
                                    {openItem === index ? "˅" : "›"} {/* Right arrow changes to down */}
                                </span>
                            </div>

                            {openItem === index && (
                                <div style={styles.details}>
                                    {/* Description */}
                                    <p style={styles.description}>{operation.description}</p>

                                    {/* Code Block */}
                                    <div style={styles.codeBlock}>
                                        <pre>
                                            <code>{operation.code}</code>
                                        </pre>
                                    </div>
                                </div>
                            )}


                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FileHandlingJava;
