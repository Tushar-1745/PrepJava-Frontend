import React from 'react';

const SpringbootIntroduction = () => {
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
            marginTop: '20px',
        },
        paragraph: {
            fontSize: '1.1rem',
            margin: '10px 0',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '15px',
        },
        th: {
            backgroundColor: '#212121',
            color: 'white',
            padding: '10px',
            textAlign: 'left',
        },
        td: {
            padding: '10px',
            borderBottom: '1px solid #ccc',
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
            <h1 style={styles.header}>Spring Boot</h1>

            <h2 style={styles.sectionHeader}>What is Spring?</h2>
            <p style={styles.paragraph}>
                Spring is a powerful framework for building Java-based enterprise applications. 
                It provides comprehensive infrastructure support for developing applications, allowing developers to focus on business logic rather than configuration.
                Spring is modular and offers various features such as dependency injection, aspect-oriented programming, and transaction management.
            </p>

            <h2 style={styles.sectionHeader}>What is Spring Boot?</h2>
            <p style={styles.paragraph}>
                Spring Boot is a framework built on top of Spring that simplifies the development of Spring applications.
                It eliminates boilerplate code and XML configuration by providing auto-configuration, an embedded server, and production-ready features.
                It allows developers to create stand-alone, production-ready applications with minimal effort.
            </p>

            <h2 style={styles.sectionHeader}>Difference Between Spring and Spring Boot</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Spring</th>
                        <th style={styles.th}>Spring Boot</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>Requires manual configuration</td>
                        <td style={styles.td}>Provides auto-configuration</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Needs an external server like Tomcat</td>
                        <td style={styles.td}>Comes with an embedded server</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>More flexible but requires more setup</td>
                        <td style={styles.td}>Less configuration, quick to start</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>No built-in production-ready features</td>
                        <td style={styles.td}>Provides production-ready features like health checks and monitoring</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Needs separate dependencies for Spring modules</td>
                        <td style={styles.td}>Uses Spring Boot Starter dependencies to simplify dependency management</td>
                    </tr>
                </tbody>
        </table>

            <h2 style={styles.sectionHeader}>Key Features of Spring Boot</h2>
            <ul>
                <li style={styles.paragraph}><strong>Auto-Configuration:</strong> Reduces the need for explicit configuration.</li>
                <li style={styles.paragraph}><strong>Embedded Servers:</strong> Comes with built-in servers like Tomcat, Jetty, and Undertow.</li>
                <li style={styles.paragraph}><strong>Spring Boot Starters:</strong> Pre-configured dependencies for common use cases.</li>
                <li style={styles.paragraph}><strong>Spring Boot CLI:</strong> Command-line interface for running Spring applications.</li>
                <li style={styles.paragraph}><strong>Production Ready:</strong> Offers health checks, metrics, and logging support.</li>
            </ul>

            <h2 style={styles.sectionHeader}>How to Get Started with Spring Boot</h2>
            <p style={styles.paragraph}>
                You can start a new Spring Boot project using the official 
                <a href="https://start.spring.io" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}> Spring Initializr</a>. 
                Choose the dependencies you need, download the project, and import it into your IDE.
            </p>

            <h2 style={styles.sectionHeader}>Basic Spring Boot Application Example</h2>
            {renderCodeExample(
                `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}`
            )}


            <h2 style={styles.sectionHeader}>Conclusion</h2>
            <p style={styles.paragraph}>
                Spring Boot simplifies Java application development by reducing configuration overhead and offering powerful features out-of-the-box.
                Its auto-configuration, embedded servers, and production-ready capabilities make it the go-to choice for modern Java developers.
            </p>
        </div>
    );
};

export default SpringbootIntroduction;
