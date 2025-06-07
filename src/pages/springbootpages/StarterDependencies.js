import React from "react";

const StarterDependencies = () => {
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
        },
        paragraph: {
            fontSize: "1.1rem",
            margin: "10px 0",
        },
        codeBox: {
            backgroundColor: "#212121",
            color: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            fontFamily: "'Source Code Pro', monospace",
            fontSize: "1rem",
            overflowX: "auto",
            position: "relative",
            marginBottom: "20px",
        },
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Spring Boot Starter Dependencies</h1>

            <p style={styles.paragraph}>
                Spring Boot provides a set of pre-configured dependencies, known as "Starter Dependencies," to simplify project setup.
            </p>

            <h2 style={styles.sectionHeader}>1. What are Starter Dependencies?</h2>
            <p style={styles.paragraph}>
                Starter dependencies are a collection of dependencies grouped into one, making it easier to include commonly used libraries in a Spring Boot project.
            </p>

            <h2 style={styles.sectionHeader}>2. Common Spring Boot Starters</h2>
            <ul>
                <li><strong>spring-boot-starter-web:</strong> For building web applications with Spring MVC.</li>
                <li><strong>spring-boot-starter-data-jpa:</strong> For integrating Spring Data JPA and Hibernate.</li>
                <li><strong>spring-boot-starter-security:</strong> For adding Spring Security to an application.</li>
                <li><strong>spring-boot-starter-thymeleaf:</strong> For using Thymeleaf as a templating engine.</li>
                <li><strong>spring-boot-starter-test:</strong> For testing Spring Boot applications.</li>
            </ul>

            <h2 style={styles.sectionHeader}>3. Example: Adding a Starter Dependency</h2>
            <p style={styles.paragraph}>To include a starter dependency in a Spring Boot project, add it to the `pom.xml` file.</p>
            {renderCodeExample(`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>`)}

            <h2 style={styles.sectionHeader}>4. Auto-Configuration with Starters</h2>
            <p style={styles.paragraph}>Spring Boot starters come with auto-configuration, reducing the need for manual setup.</p>
            {renderCodeExample(`@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`)}

            <h2 style={styles.sectionHeader}>5. Custom Starters</h2>
            <p style={styles.paragraph}>Developers can also create their own custom starter dependencies by defining required dependencies and configurations in a module.</p>
            {renderCodeExample(`public class MyCustomStarter {
    public void initialize() {
        System.out.println("Custom Starter Initialized");
    }
}`)}

            <h2 style={styles.sectionHeader}>Conclusion</h2>
            <p style={styles.paragraph}>
                Spring Boot starter dependencies simplify dependency management and setup, making development faster and more efficient.
            </p>
        </div>
    );
};

export default StarterDependencies;