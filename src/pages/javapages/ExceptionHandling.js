const ExceptionHandling = () => {
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
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
            backgroundColor: "#fff",
        },
        th: {
            backgroundColor: "#4A90E2",
            color: "white",
            padding: "10px",
            border: "1px solid black",
            textAlign: "left",
            fontSize: "1.1rem",
        },
        td: {
            padding: "10px",
            border: "1px solid black",
            fontSize: "1rem",
        },
        list: {
            marginLeft: "20px",
            fontSize: "1rem",
        },
        codeBlock: {
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1rem",
            marginBottom: "20px",
            overflow: "auto",
        },
    };

    return (
        <div>
            <h1 style={styles.sectionHeader}>Exception Handling in Java</h1>
            <p style={styles.paragraph}>
                Exception handling is a mechanism in Java that helps handle runtime errors and prevent abnormal termination of programs. It ensures smooth execution by using **try, catch, finally, throw, and throws** keywords.
            </p>

            <section>
                <h2 style={styles.sectionHeader}>1. What is an Exception?</h2>
                <p style={styles.paragraph}>
                    An **exception** is an event that disrupts the normal flow of a program. Java provides a way to handle these exceptions gracefully.
                </p>

                <h3 style={styles.subHeader}>Exception Hierarchy</h3>
                <ul style={styles.list}>
                    <li><code>Throwable</code> (Superclass of all exceptions)</li>
                    <li><code>Exception</code> (Checked exceptions like IOException, SQLException)</li>
                    <li><code>RuntimeException</code> (Unchecked exceptions like NullPointerException, ArithmeticException)</li>
                    <li><code>Error</code> (Severe problems like OutOfMemoryError, StackOverflowError)</li>
                </ul>

                <div style={styles.codeBlock}>
                    <pre>
{`// Example of Exception Hierarchy
try {
    int num = 5 / 0; // This will throw ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>2. Exception Handling using try-catch</h2>
                <p style={styles.paragraph}>
                    The **try-catch block** is used to catch exceptions and prevent program crashes.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
{`try {
    int arr[] = {1, 2, 3};
    System.out.println(arr[5]); // ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Exception: " + e.getMessage());
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>3. finally Block</h2>
                <p style={styles.paragraph}>
                    The **finally block** executes **whether an exception occurs or not**.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
{`try {
    System.out.println("Inside try block");
} catch (Exception e) {
    System.out.println("Exception caught");
} finally {
    System.out.println("Finally block always executes");
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>4. throw & throws</h2>
                <p style={styles.paragraph}>
                    - The **throw** keyword is used to **explicitly throw an exception**.  
                    - The **throws** keyword is used to **declare exceptions** in method signatures.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
{`class Test {
    static void checkAge(int age) throws IllegalArgumentException {
        if (age < 18) {
            throw new IllegalArgumentException("Not eligible to vote");
        } else {
            System.out.println("Eligible to vote");
        }
    }

    public static void main(String[] args) {
        checkAge(17);
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>5. Custom Exceptions</h2>
                <p style={styles.paragraph}>
                    Java allows us to create our own **custom exceptions** by extending the <code>Exception</code> class.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
{`class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

public class CustomExceptionExample {
    public static void main(String[] args) {
        try {
            throw new MyException("Custom Exception Thrown");
        } catch (MyException e) {
            System.out.println(e.getMessage());
        }
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>6. Checked vs Unchecked Exceptions</h2>
                <ul style={styles.list}>
                    <li><strong>Checked Exceptions:</strong> Must be handled using try-catch or declared using throws (e.g., IOException, SQLException).</li>
                    <li><strong>Unchecked Exceptions:</strong> Do not need to be explicitly handled (e.g., NullPointerException, ArithmeticException).</li>
                </ul>

                <div style={styles.codeBlock}>
                    <pre>
{`// Checked Exception (IOException)
import java.io.*;

class FileExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("file.txt"); // FileNotFoundException
        } catch (IOException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}

// Unchecked Exception (NullPointerException)
class UncheckedExample {
    public static void main(String[] args) {
        String str = null;
        System.out.println(str.length()); // NullPointerException
    }
}`}
                    </pre>
                </div>
            </section>
        </div>
    );
};

export default ExceptionHandling;
