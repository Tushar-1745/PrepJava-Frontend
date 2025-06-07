import React, { useState } from "react";

const SpringBootAnnotations = () => {
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
            backgroundColor: "white",
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
        table: {
            width: "100%",
            borderCollapse: "collapse",
            margin: "20px 0",
        },
        th: {
            backgroundColor: "#4A90E2",
            color: "white",
            padding: "10px",
            textAlign: "left",
        },
        td: {
            padding: "10px",
            borderBottom: "1px solid #ddd",
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Spring Boot Annotations</h1>

            <section>
                <h2 style={styles.sectionHeader}>What are Annotations?</h2>
                <p style={styles.paragraph}>
                    Annotations in Spring Boot are special markers used to provide metadata
                    about the code. hey reduce boilerplate code, enable automatic configurations, and help in defining beans, configurations, and dependencies.
                </p>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Why Use Annotations?</h2>
                <ul style={styles.list}>
                    <li><strong>Simplifies configuration:</strong> No need for XML-based configuration.</li>
                    <li><strong>Reduces boilerplate code:</strong> Annotations replace lengthy code.</li>
                    <li><strong>Improves readability:</strong> Easier to understand application flow.</li>
                    <li><strong>Enables dependency injection:</strong> Automatically manages dependencies.</li>
                </ul>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Types of Spring Boot Annotations</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Category</th>
                            <th style={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={styles.td}>Core Annotations</td><td style={styles.td}>@SpringBootApplication, @Component, @Bean</td></tr>
                        <tr><td style={styles.td}>Dependency Injection</td><td style={styles.td}>@Autowired, @Qualifier, @Primary</td></tr>
                        <tr><td style={styles.td}>Spring MVC Annotations</td><td style={styles.td}>@RestController, @RequestMapping, @GetMapping, @PostMapping</td></tr>
                        <tr><td style={styles.td}>Spring Data JPA Annotations</td><td style={styles.td}>@Entity, @Table, @Id, @GeneratedValue, @Column</td></tr>
                        <tr><td style={styles.td}>Spring Security Annotations</td><td style={styles.td}>@Secured, @PreAuthorize, @EnableWebSecurity</td></tr>
                        <tr><td style={styles.td}>Transactional Annotations</td><td style={styles.td}>@Transactional, @Rollback</td></tr>
                        <tr><td style={styles.td}>Lombok Annotations</td><td style={styles.td}>@Getter, @Setter, @NoArgsConstructor, @AllArgsConstructor</td></tr>
                    </tbody>
                </table>
            </section>

            {/* @SpringBootApplication */}
            <annotation>
                <h2 style={styles.sectionHeader}>@SpringBootApplication</h2>
                <p style={styles.paragraph}>
                    <strong>Definition:</strong> This annotation marks the main class of a Spring Boot application. It is a combination of:
                    <ul style={styles.list}>
                        <li>@Configuration - Indicates that the class declares one or more @Bean methods.</li>
                        <li>@EnableAutoConfiguration - Enables Spring Boot's auto-configuration mechanism.</li>
                        <li>@ComponentScan - Enables component scanning in the package.</li>
                    </ul>
                </p>
                <div style={styles.codeBlock}>
                    <button style={styles.copyButton} onClick={() => handleCopy("@SpringBootApplication\npublic class MyApp {\n  public static void main(String[] args) {\n    SpringApplication.run(MyApp.class, args);\n  }\n}")}> {copied ? "Copied!" : "Copy"} </button>
                    <pre>
                        @SpringBootApplication{`
public class MyApp {
  public static void main(String[] args) {
    SpringApplication.run(MyApp.class, args);
  }
}`}
                    </pre>
                </div>
            </annotation>

            <annotation>
    <h2 style={styles.sectionHeader}>@Controller</h2>
    <p style={styles.paragraph}>
        <strong>Definition:</strong> Marks a class as a Spring MVC controller, responsible for handling web requests.
    </p>
    <ul style={styles.list}>
        <li>@Controller is used for traditional web applications that return views (like JSP or Thymeleaf).</li>
    </ul>
    <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy("@Controller\npublic class HomeController {\n  @GetMapping(\"/\")\n  public String home() {\n    return \"index\"; \n  }\n}")}> {copied ? "Copied!" : "Copy"} </button>
        <pre>
            @Controller{`
public class HomeController {
  @GetMapping("/")
  public String home() {
    return "index"; // Returns the name of the view template
  }
}`}
        </pre>
    </div>
</annotation>


            {/* @RestController */}
            <annotation>
                <h2 style={styles.sectionHeader}>@RestController</h2>
                <p style={styles.paragraph}>
                    <strong>Definition:</strong> This annotation is used to create RESTful web services. It is a
                    combination of:
                    <ul style={styles.list}>
                        <li>@Controller - Marks the class as a Spring MVC controller.</li>
                        <li>@ResponseBody - Ensures that the returned value is converted into JSON or XML.</li>
                    </ul>
                </p>
                <div style={styles.codeBlock}>
                    <button style={styles.copyButton} onClick={() => handleCopy("@RestController\npublic class HelloController {\n  @GetMapping(\"/hello\")\n  public String sayHello() {\n    return \"Hello, Spring Boot!\";\n  }\n}")}> {copied ? "Copied!" : "Copy"} </button>
                    <pre>
                        @RestController{`
public class HelloController {
  @GetMapping("/hello")
  public String sayHello() {
    return "Hello, Spring Boot!";
  }
}`}
                    </pre>
                </div>
            </annotation>

            {/* @Autowired */}
            <section>
                <h2 style={styles.sectionHeader}>@Autowired</h2>
                <p style={styles.paragraph}>
                    <strong>Definition:</strong> This annotation is used for dependency injection in Spring Boot. It
                    automatically injects the required dependencies.
                    <ul style={styles.list}>
                        <li>It can be applied on fields, constructors, and setter methods.</li>
                        <li>Spring automatically resolves and injects beans where it finds this annotation.</li>
                    </ul>
                </p>
                <div style={styles.codeBlock}>
                    <button
                        style={styles.copyButton}
                        onClick={() => handleCopy("public class MyService {\n  @Autowired\n  private MyRepository repository;\n}")}>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                    <pre>{`
public class MyService {
  @Autowired
  private MyRepository repository;
}`}
                    </pre>
                </div>

            </section>

            <annotation>
    <h2 style={styles.sectionHeader}>@Component</h2>
    <p style={styles.paragraph}>
        <strong>Definition:</strong> Marks a class as a Spring-managed component. It is a generic stereotype annotation for Spring components.
    </p>
    <ul style={styles.list}>
        <li>@Component allows Spring to autodetect and register beans in the application context.</li>
    </ul>
    <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy("@Component\npublic class MyComponent {\n  public void doSomething() {\n    System.out.println(\"Component method called!\");\n  }\n}")}> {copied ? "Copied!" : "Copy"} </button>
        <pre>
            @Component{`
public class MyComponent {
  public void doSomething() {
    System.out.println("Component method called!");
  }
}`}
        </pre>
    </div>
</annotation>
<annotation>
    <h2 style={styles.sectionHeader}>@Bean</h2>
    <p style={styles.paragraph}>
        <strong>Definition:</strong> Used to explicitly declare a Spring bean inside a configuration class.
    </p>
    <ul style={styles.list}>
        <li>@Bean is usually used inside @Configuration classes to define beans that Spring should manage.</li>
    </ul>
    <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy("@Configuration\npublic class AppConfig {\n  @Bean\n  public MyService myService() {\n    return new MyService();\n  }\n}")}> {copied ? "Copied!" : "Copy"} </button>
        <pre>
            @Configuration{`
public class AppConfig {
  @Bean
  public MyService myService() {
    return new MyService();
  }
}`}
        </pre>
    </div>
</annotation>
<annotation>
    <h2 style={styles.sectionHeader}>@Service</h2>
    <p style={styles.paragraph}>
        <strong>Definition:</strong> Marks a class as a service, which is used to hold business logic.
    </p>
    <ul style={styles.list}>
        <li>@Service is a specialization of @Component and is used for defining service layer components.</li>
    </ul>
    <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy("@Service\npublic class MyService {\n  public String process() {\n    return \"Processing data...\";\n  }\n}")}> {copied ? "Copied!" : "Copy"} </button>
        <pre>
            @Service{`
public class MyService {
  public String process() {
    return "Processing data...";
  }
}`}
        </pre>
    </div>
</annotation>
<annotation>
    <h2 style={styles.sectionHeader}>@Repository</h2>
    <p style={styles.paragraph}>
        <strong>Definition:</strong> Indicates that a class is responsible for data persistence.
    </p>
    <ul style={styles.list}>
        <li>@Repository is a specialization of @Component and provides exception translation for database operations.</li>
    </ul>
    <div style={styles.codeBlock}>
        <button style={styles.copyButton} onClick={() => handleCopy("@Repository\npublic class MyRepository {\n  public String fetchData() {\n    return \"Fetching data...\";\n  }\n}")}> {copied ? "Copied!" : "Copy"} </button>
        <pre>
            @Repository{`
public class MyRepository {
  public String fetchData() {
    return "Fetching data...";
  }
}`}
        </pre>
    </div>
</annotation>

        </div>
    );
};

export default SpringBootAnnotations;
