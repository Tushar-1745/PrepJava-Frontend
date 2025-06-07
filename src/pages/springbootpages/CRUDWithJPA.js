import React from "react";

const CRUDWithJPA = () => {
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
            <h1 style={styles.header}>CRUD Operations with JPA Repository</h1>
            <p>Use `JpaRepository` to perform CRUD operations easily.</p>

            <div style={styles.codeBox}>
                <pre>{`@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        updatedUser.setId(id);
        return userRepository.save(updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}`}</pre>
            </div>
        </div>
    );
};

export default CRUDWithJPA;
