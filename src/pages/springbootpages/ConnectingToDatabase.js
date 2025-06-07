import React from "react";

const ConnectingToDatabase = () => {
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
            color: "black",
        },
        codeBox: {
            backgroundColor: "#212121",
            color: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            fontFamily: "'Source Code Pro', monospace",
            fontSize: "1rem",
            overflowX: "auto",
            marginBottom: "20px",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Connecting to MySQL/PostgreSQL</h1>
            <p>To connect Spring Boot to a MySQL/PostgreSQL database, configure your `application.properties` file.</p>
            
            <div style={styles.codeBox}>
                <pre>{`# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver`}</pre>
            </div>

            <div style={styles.codeBox}>
                <pre>{`# PostgreSQL Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=secret
spring.datasource.driver-class-name=org.postgresql.Driver`}</pre>
            </div>
        </div>
    );
};

export default ConnectingToDatabase;
