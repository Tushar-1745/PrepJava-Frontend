import React from 'react';

const DependencyInjection = () => {
    const styles = {
        container: {
            padding: '10px 20px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: 'white',
            color: '#333333',
            lineHeight: '1.6',
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
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Dependency Injection in Spring Boot</h1>

            <div>
                <h2 style={styles.sectionHeader}>What is Dependency in DI?</h2>
                <p style={styles.paragraph}>
                    A <strong>dependency</strong> is when a class requires an instance of another class to function properly.
                    Instead of creating these dependencies manually using <code>new</code>,
                    <strong>Spring Boot</strong> injects them automatically, making the application loosely coupled and testable.
                </p>

                <h3>Examples:</h3>
                <ul style={styles.list}>
                    <li>A <strong>Car</strong> needs an <strong>Engine</strong> → <code>Engine</code> is a dependency for <code>Car</code>.</li>
                    <li>A <strong>BankService</strong> needs a <strong>PaymentProcessor</strong> → <code>PaymentProcessor</code> is a dependency for <code>BankService</code>.</li>
                </ul>

            </div>
            <h1 style={styles.sectionHeader}>Dependency Injection</h1>
            <p style={styles.paragraph}>
                Dependency Injection (DI) is a design pattern used in Spring Boot to manage the dependencies between objects. Instead of creating objects manually inside a class, dependencies are injected into the class by the <strong>Spring IoC (Inversion of Control)</strong> container. <br></br>This promotes loose coupling and improves testability.
                <p>Instead of manually creating objects using new Class(), which tightly couples classes, Spring IoC (Inversion of Control) Container automatically provides the required objects (dependencies) whenever needed.
                    This makes the application loosely coupled, easier to maintain, and testable.
                </p>
            </p>

            <section>

                <h3 style={styles.sectionHeader}>Without Dependency Injection (Tightly Coupled 👎)</h3>
                <pre style={styles.codeBox}>
                    <code>
                        {`public class NotificationService {
    private EmailService emailService = new EmailService(); // Hardcoded dependency

    public void notifyUser() {
        emailService.sendEmail("Hello!");
    }
}`}
                    </code>
                </pre>

                <h3 style={styles.sectionHeader}>With Dependency Injection (Loosely Coupled 👍)</h3>
                <pre style={styles.codeBox}>
                    <code>
                        {`import org.springframework.stereotype.Component;

@Component
public class NotificationService {
    private final EmailService emailService;

    // Spring will automatically inject EmailService
    public NotificationService(EmailService emailService) {
        this.emailService = emailService;
    }

    public void notifyUser() {
        emailService.sendEmail("Hello!");
    }
}`}
                    </code>
                </pre>
                <p style={styles.paragraph}>Now, Spring manages the <code>EmailService</code> object and injects it where needed, <strong>without us manually creating it</strong> using <strong>new keyword</strong>. 🚀</p>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Advantages of Dependency Injection (DI)</h2>

                <ul style={{ ...styles.paragraph, lineHeight:"1.8" }}>
                    <li>
                        <strong>🔗 Loose Coupling (Better Maintainability):</strong>
                        Components are independent, making modifications and replacements easy.
                    </li>

                    <li>
                        <strong>🧪 Improved Testability:</strong>
                        Allows the use of mock dependencies for unit testing, making testing more efficient.
                    </li>

                    <li>
                        <strong>📈 Easier Code Management & Scalability:</strong>
                        Helps in managing large applications by injecting dependencies automatically.
                    </li>

                    <li>
                        <strong>🔄 Promotes Reusability:</strong>
                        The same service (e.g., <code>EmailService</code>) can be reused across different parts of the application.
                    </li>

                    <li>
                        <strong>⚙️ Supports Different Injection Types:</strong>
                        Offers Constructor Injection (Recommended), Setter Injection, and Field Injection for flexibility.
                    </li>

                    <li>
                        <strong>📉 Reduces Boilerplate Code:</strong>
                        Spring Boot handles dependency management, reducing manual instantiation.
                    </li>

                    <li>
                        <strong>📌 Better Separation of Concerns (SoC):</strong>
                        Keeps business logic and dependency management separate, leading to cleaner architecture.
                    </li>
                </ul>
            </section>

            <h2 style={styles.sectionHeader}>Types of Dependency Injection</h2>
            <ul style={styles.paragraph}>
                <li><strong>Constructor Injection:</strong> Recommended approach where dependencies are injected via the constructor.</li>
                <li><strong>Setter Injection:</strong> Dependencies are injected using setter methods.</li>
                <li><strong>Field Injection:</strong> Dependencies are injected directly into fields using annotations (not recommended).</li>
            </ul>

            <constructorinjection>
                <h2 style={styles.sectionHeader}>Constructor Injection</h2>
                <p style={styles.paragraph}>Constructor Injection is a technique in Spring Boot where dependencies are injected into a class via its constructor. Instead of manually creating objects using new, Spring automatically provides the required dependencies. </p>
                <p style={styles.paragraph}>It ensures loose coupling, immutability, and better testability, making it the recommended way to inject dependencies.</p>
                <h3>Step 1: Create a Dependency Class (Engine.java)</h3>
                {renderCodeExample(`import org.springframework.stereotype.Component;

@Component
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}`)}

                <h3>Step 2: Inject Engine into Car Using Constructor Injection (Car.java)</h3>
                {renderCodeExample(`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
    private final Engine engine;  // Dependency

    @Autowired  // Constructor Injection
    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        System.out.println("Car is driving...");
        engine.start();  // Calls Engine's method
    }
}`)}

                <h3>Step 3: Main Application (SpringDiExample.java)</h3>
                {renderCodeExample(`import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class SpringDiExample implements CommandLineRunner {

    private final Car car;

    @Autowired  // Constructor Injection in the main class
    public SpringDiExample(Car car) {
        this.car = car;
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringDiExample.class, args);
    }

    @Override
    public void run(String... args) {
        car.drive();
    }
}`)}

                <h2 style={styles.sectionHeader}>Output</h2>
                {renderCodeExample(`Car is driving...
Engine started...`)}

            </constructorinjection>

            <setterinjection>
                <h2 style={styles.sectionHeader}>Setter Injection</h2>
                <p style={styles.paragraph}>
                    Setter Injection is a technique in Spring Boot where dependencies are injected <strong>via setter methods.</strong>
                    Instead of passing dependencies through the constructor, Spring automatically assigns them using
                    setter methods.
                </p>
                <p style={styles.paragraph}>
                    It allows for optional dependencies and provides flexibility, but it is less preferred than
                    Constructor Injection due to the possibility of having an inconsistent state.
                </p>

                <h3>Step 1: Create a Dependency Class (Engine.java)</h3>
                {renderCodeExample(`import org.springframework.stereotype.Component;

@Component
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}`)}

                <h3>Step 2: Inject Engine into Car Using Setter Injection (Car.java)</h3>
                {renderCodeExample(`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
    private Engine engine;  // Dependency

    public Car() {
        // Default constructor
    }

    @Autowired  // Setter Injection
    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        System.out.println("Car is driving...");
        engine.start();  // Calls Engine's method
    }
}`)}

                <h3>Step 3: Main Application (SpringDiExample.java)</h3>
                {renderCodeExample(`import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class SpringDiExample implements CommandLineRunner {

    private Car car;

    @Autowired  // Setter Injection in the main class
    public void setCar(Car car) {
        this.car = car;
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringDiExample.class, args);
    }

    @Override
    public void run(String... args) {
        car.drive();
    }
}`)}

                <h2 style={styles.sectionHeader}>Output</h2>
                {renderCodeExample(`Car is driving...
Engine started...`)}
            </setterinjection>

            <fieldinjection>
                <h2 style={styles.sectionHeader}>Field Injection</h2>
                <p style={styles.paragraph}>
                    Field Injection is a technique in Spring Boot where dependencies are directly injected
                    into class fields using the <strong>@Autowired</strong> annotation.
                    This eliminates the need for explicit constructors or setter methods.
                </p>
                <p style={styles.paragraph}>
                    While it makes the code shorter, <strong>it is not recommended</strong> as it makes the class harder to test
                    and violates the principle of dependency injection by relying on reflection.
                </p>

                <h3>Step 1: Create a Dependency Class (Engine.java)</h3>
                {renderCodeExample(`import org.springframework.stereotype.Component;

@Component
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}`)}

                <h3>Step 2: Inject Engine into Car Using Field Injection (Car.java)</h3>
                {renderCodeExample(`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {

    @Autowired  // Field Injection
    private Engine engine;  // Dependency injected directly

    public void drive() {
        System.out.println("Car is driving...");
        engine.start();  // Calls Engine's method
    }
}`)}

                <h3>Step 3: Main Application (SpringDiExample.java)</h3>
                {renderCodeExample(`import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class SpringDiExample implements CommandLineRunner {

    @Autowired  // Field Injection in the main class
    private Car car;

    public static void main(String[] args) {
        SpringApplication.run(SpringDiExample.class, args);
    }

    @Override
    public void run(String... args) {
        car.drive();
    }
}`)}

                <h2 style={styles.sectionHeader}>Output</h2>
                {renderCodeExample(`Car is driving...
Engine started...`)}

            </fieldinjection>


            <h2 style={styles.sectionHeader}>Things to Remember</h2>
            <ul style={styles.paragraph}>
                <li>Spring automatically manages dependency injection using annotations like <code>@Autowired</code>.</li>
                <li>Constructor Injection is the best practice due to immutability and better testability.</li>
                <li>Field Injection should be avoided as it makes unit testing difficult.</li>
            </ul>
        </div>
    );
};

export default DependencyInjection;
