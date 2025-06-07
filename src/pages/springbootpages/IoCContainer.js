import React from 'react';

const IoCContainer = () => {
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
        image: {
            width: '100%',
            maxWidth: '600px',
            display: 'block',
            margin: '20px auto',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
        }
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>IoC Container in Spring Boot</h1>

            <p style={styles.paragraph}>
                In Spring Boot, the <strong>IoC (Inversion of Control) Container</strong> is responsible for managing the lifecycle and dependencies of Spring beans.
                It enables <strong>Dependency Injection (DI)</strong>, ensuring that objects are loosely coupled and easier to maintain.
            </p>

            <img src="https://www.javaguides.net/resources/tutorials/spring-framework/images/spring-ioc-container.png" 
                alt="Spring IoC Container" style={styles.image} />

            <h2 style={styles.sectionHeader}>Types of IoC Containers</h2>
            <p style={styles.paragraph}>Spring provides two types of IoC containers:</p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li><strong>BeanFactory</strong> – A lightweight container that provides basic dependency injection.</li>
                <li><strong>ApplicationContext</strong> – A more feature-rich container with advanced capabilities like event propagation and AOP.</li>
            </ul>

            <h2 style={styles.sectionHeader}>Bean Configuration in IoC</h2>
            <p style={styles.paragraph}>Beans can be configured in Spring using XML, Java-based configuration, or annotations.</p>

            <h3 style={styles.sectionHeader}>1. XML Configuration</h3>
            {renderCodeExample(`<bean id="myBean" class="com.example.MyBean"/>`)}

            <h3 style={styles.sectionHeader}>2. Java-Based Configuration</h3>
            {renderCodeExample(`@Configuration
public class AppConfig {
    @Bean
    public MyBean myBean() {
        return new MyBean();
    }
}`)}

            <h3 style={styles.sectionHeader}>3. Annotation-Based Configuration</h3>
            {renderCodeExample(`@Component
public class MyBean {
    // Bean logic
}`)}

            <h2 style={styles.sectionHeader}>Dependency Injection in IoC</h2>
            <p style={styles.paragraph}>Spring IoC Container manages dependencies using different injection types:</p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li><strong>Constructor Injection</strong> – Dependencies are injected via a constructor.</li>
                <li><strong>Setter Injection</strong> – Dependencies are injected via setter methods.</li>
                <li><strong>Field Injection</strong> – Dependencies are injected directly into fields using <code>@Autowired</code>.</li>
            </ul>

            <h3 style={styles.sectionHeader}>Example of Dependency Injection</h3>
            {renderCodeExample(`@Component
class Engine {
    public void start() {
        System.out.println("Engine started!");
    }
}

@Component
class Car {
    private final Engine engine;

    @Autowired
    public Car(Engine engine) {
        this.engine = engine;
    }
    
    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}`)}

            <h2 style={styles.sectionHeader}>Lifecycle of a Bean in IoC Container</h2>
            <p style={styles.paragraph}>Spring beans go through several lifecycle stages:</p>
            <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
                <li><strong>Instantiation</strong> – The container creates the bean instance.</li>
                <li><strong>Dependency Injection</strong> – Dependencies are injected.</li>
                <li><strong>Initialization</strong> – The <code>@PostConstruct</code> method (if any) is executed.</li>
                <li><strong>Destruction</strong> – The <code>@PreDestroy</code> method (if any) is executed before removal.</li>
            </ul>
            
            <h3 style={styles.sectionHeader}>Example of Bean Lifecycle Methods</h3>
            {renderCodeExample(`@Component
class ExampleBean {
    @PostConstruct
    public void init() {
        System.out.println("Bean is initialized");
    }
    
    @PreDestroy
    public void destroy() {
        System.out.println("Bean is about to be destroyed");
    }
}`)}
        </div>
    );
};

export default IoCContainer;
