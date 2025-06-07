import React from "react";

const HibernateWithSpringBoot = () => {
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
            <h1 style={styles.header}>Using Hibernate with Spring Boot</h1>
            <p>Spring Boot uses Hibernate as the default JPA implementation.</p>

            <div style={styles.codeBox}>
                <pre>{`spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto = update`}</pre>
            </div>

            <p>These settings configure Hibernate to work with MySQL and update the database schema automatically.</p>
        </div>
    );
};

export default HibernateWithSpringBoot;
