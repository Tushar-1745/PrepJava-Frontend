// mockInterviewQuestions.js

const mockInterviewQuestions = [
    { id: 1, question: "What is Java?", answer: "Java is a high-level, class-based language.", category: "Core Java" },
    { id: 2, question: "Explain Array vs ArrayList.", answer: "Array is fixed-size, ArrayList is resizable.", category: "Data Structures" },
    { id: 3, question: "What is Java Stream API?", answer: "It provides functional-style operations on streams.", category: "Java 8 Features" },
    { id: 4, question: "What is Polymorphism in Java?", answer: "Polymorphism allows methods to perform different tasks based on their input.", category: "OOP Concepts" },
    { id: 5, question: "Explain the difference between HashMap and TreeMap.", answer: "HashMap is unordered; TreeMap maintains a sorted order.", category: "Collections Framework" },
    { id: 6, question: "What is the difference between == and equals()?", answer: "== compares references, equals() compares content.", category: "Core Java" },
    { id: 7, question: "What is a Singleton Class in Java?", answer: "A Singleton Class ensures only one instance is created.", category: "Design Patterns" },
    { id: 8, question: "What are Java Annotations?", answer: "Annotations provide metadata for code but have no direct impact on execution.", category: "Advanced Java" },
    { id: 9, question: "Explain the difference between Checked and Unchecked Exceptions.", answer: "Checked exceptions are checked at compile time, unchecked at runtime.", category: "Exception Handling" },
    { id: 10, question: "What is Spring Framework?", answer: "Spring is an application framework for Java with a focus on enterprise-level development.", category: "Spring Framework" },
    { id: 11, question: "What is the purpose of the @Override annotation?", answer: "It indicates a method is overridden from a superclass.", category: "Annotations" },
    { id: 12, question: "Explain the concept of Garbage Collection in Java.", answer: "Garbage Collection automatically reclaims memory by destroying unused objects.", category: "Core Java" },
    { id: 13, question: "What is the use of the final keyword in Java?", answer: "final can be used with variables (constant), methods (cannot be overridden), and classes (cannot be inherited).", category: "Core Java" },
    { id: 14, question: "Explain the difference between Comparable and Comparator.", answer: "Comparable provides natural ordering; Comparator allows custom ordering.", category: "Collections Framework" },
    { id: 15, question: "What are functional interfaces in Java?", answer: "Functional interfaces are interfaces with a single abstract method, e.g., Runnable.", category: "Java 8 Features" },

    // MySQL
    { id: 16, question: "What is normalization in MySQL?", answer: "Normalization is the process of organizing data to reduce redundancy and improve integrity.", category: "MySQL" },
    { id: 17, question: "What is the difference between INNER JOIN and LEFT JOIN?", answer: "INNER JOIN returns matching records from both tables, while LEFT JOIN returns all records from the left table and matching records from the right.", category: "MySQL" },
    { id: 18, question: "What are indexes in MySQL?", answer: "Indexes improve the speed of data retrieval operations on a database table.", category: "MySQL" },
    { id: 19, question: "What is ACID in MySQL?", answer: "ACID (Atomicity, Consistency, Isolation, Durability) ensures reliable database transactions.", category: "MySQL" },
    { id: 20, question: "What is a foreign key in MySQL?", answer: "A foreign key is a field that links to the primary key of another table, ensuring referential integrity.", category: "MySQL" },

    // Hibernate
    { id: 21, question: "What is Hibernate in Java?", answer: "Hibernate is an ORM framework for Java that simplifies database interactions using objects.", category: "Hibernate" },
    { id: 22, question: "What are the advantages of Hibernate over JDBC?", answer: "Hibernate provides automatic object mapping, caching, HQL (Hibernate Query Language), and reduces boilerplate code compared to JDBC.", category: "Hibernate" },
    { id: 23, question: "What are Hibernate annotations?", answer: "Hibernate annotations are metadata that map Java classes to database tables, replacing XML configuration.", category: "Hibernate" },
    { id: 24, question: "What is Hibernate caching?", answer: "Hibernate caching improves performance by reducing database queries using first-level and second-level caching.", category: "Hibernate" },
    { id: 25, question: "What is HQL in Hibernate?", answer: "HQL (Hibernate Query Language) is an object-oriented query language similar to SQL but operates on Hibernate entities.", category: "Hibernate" },

    // Spring Boot
    { id: 26, question: "What is Spring Boot?", answer: "Spring Boot is a project from Spring that helps developers create stand-alone, production-ready Spring applications with minimal configuration. It simplifies setup by providing auto-configuration, embedded servers, and starter dependencies.", category: "Springboot" },
    { id: 27, question: "What are Spring Boot starters?", answer: "Spring Boot starters are pre-configured dependencies that simplify application setup.", category: "Springboot" },
    { id: 28, question: "What is the purpose of application.properties in Spring Boot?", answer: "application.properties is used for configuring Spring Boot application settings like database, logging, and server properties.", category: "Springboot" },
    { id: 29, question: "What is Spring Boot Auto-Configuration?", answer: "Spring Boot Auto-Configuration automatically configures beans based on project dependencies.", category: "Springboot" },
    { id: 30, question: "How does Spring Boot handle dependency management?", answer: "Spring Boot uses Maven or Gradle for dependency management and provides default versions for dependencies via spring-boot-starter-parent.Spring Boot uses Maven or Gradle for dependency management and provides default versions for dependencies via spring-boot-starter-parent.", category: "Springboot" }
  ];
  
  export default mockInterviewQuestions;
  