import React from "react";

const SpringbootConfiguration = () => {
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
            <h1 style={styles.header}>Spring Boot Configuration</h1>

            <p style={styles.paragraph}>
                Spring Boot provides various configuration options to manage application settings efficiently.
                Below are the key configuration methods used in Spring Boot.
            </p>

            <h2 style={styles.sectionHeader}>1. application.properties / application.yml</h2>
            <p style={styles.paragraph}>
                The simplest way to configure a Spring Boot application is by using `application.properties` or `application.yml` files.
            </p>
            {renderCodeExample(`server.port=8081
spring.application.name=MySpringApp`)}

            <h2 style={styles.sectionHeader}>2. Java-Based Configuration</h2>
            <p style={styles.paragraph}>
                Spring Boot allows configuration using Java-based classes annotated with <code>@Configuration</code>.
            </p>
            {renderCodeExample(`@Configuration
public class AppConfig {

    @Bean
    public MyService myService() {
        return new MyService();
    }
}`)}

            <h2 style={styles.sectionHeader}>3. Externalized Configuration</h2>
            <p style={styles.paragraph}>
                Spring Boot supports externalized configuration using environment variables or command-line arguments.
            </p>
            {renderCodeExample(`java -jar myapp.jar --server.port=9090`)}

            <h2 style={styles.sectionHeader}>4. YAML Configuration Example</h2>
            {renderCodeExample(`server:
  port: 8082
spring:
  application:
    name: MySpringBootApp`)}

            <h2 style={styles.sectionHeader}>5. Profile-Specific Configuration</h2>
            <p style={styles.paragraph}>
                Spring Boot allows defining environment-specific configurations using profile-based property files.
            </p>
            {renderCodeExample(`application-dev.properties:
server.port=8082`)}

            <h2 style={styles.sectionHeader}>6. @Value Annotation</h2>
            <p style={styles.paragraph}>
                The <code>@Value</code> annotation is used to inject values from configuration files into Java classes.
            </p>
            {renderCodeExample(`@Component
public class ConfigExample {

    @Value("\${server.port}")
    private String serverPort;

    public void printPort() {
        System.out.println("Server Port: " + serverPort);
    }
}`)}

            <h2 style={styles.sectionHeader}>Conclusion</h2>
            <p style={styles.paragraph}>
                Spring Boot provides multiple ways to configure applications, making it highly flexible and easy to maintain.
            </p>
        </div>
    );
};

export default SpringbootConfiguration;
