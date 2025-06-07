import React from "react";

const SpringDataJPA = () => {
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
            <h1 style={styles.header}>Introduction to Spring Data JPA</h1>
            <p>Spring Data JPA simplifies database interactions by eliminating boilerplate code.</p>

            <div style={styles.codeBox}>
                <pre>{`@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}`}</pre>
            </div>

            <div style={styles.codeBox}>
                <pre>{`public interface UserRepository extends JpaRepository<User, Long> {}`}</pre>
            </div>

            <p>Spring Boot automatically implements CRUD operations through the `JpaRepository` interface.</p>
        </div>
    );
};

export default SpringDataJPA;
