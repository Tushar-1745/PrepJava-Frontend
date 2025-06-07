import React from "react";

const HibernateMappings = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Hibernate Mappings Tutorial</h1>
        <p>Master the art of connecting Java objects with relational databases.</p>
      </header>

      <section style={sectionStyle}>
        <h2>1. Introduction to Hibernate Mappings</h2>
        <p style={textStyle}>
          Hibernate mappings are used to define how Java objects (entities) are
          mapped to database tables. It allows us to model relationships like
          one-to-one, one-to-many, many-to-one, and many-to-many.
        </p>
      </section>

      <hr style={dividerStyle} />

      <section style={sectionStyle}>
        <h2>2. Types of Mappings</h2>

        <div style={mappingContainerStyle}>
          <h3>@OneToOne Mapping</h3>
          <p style={textStyle}>
            One-to-one mapping represents a relationship where one entity is
            associated with one other entity.
          </p>
          <pre style={codeStyle}>
            {`@Entity
public class User {
    @Id
    private int id;
    
    @OneToOne
    private Profile profile;
}

@Entity
public class Profile {
    @Id
    private int id;
    private String bio;
}`}
          </pre>
        </div>

        <div style={mappingContainerStyle}>
          <h3>@OneToMany Mapping</h3>
          <p style={textStyle}>
            One-to-many mapping represents a relationship where one entity is
            associated with multiple entities.
          </p>
          <pre style={codeStyle}>
            {`@Entity
public class Department {
    @Id
    private int id;

    @OneToMany(mappedBy = "department")
    private List<Employee> employees;
}

@Entity
public class Employee {
    @Id
    private int id;
    
    @ManyToOne
    private Department department;
}`}
          </pre>
        </div>

        <div style={mappingContainerStyle}>
          <h3>@ManyToMany Mapping</h3>
          <p style={textStyle}>
            Many-to-many mapping represents a relationship where multiple
            entities are associated with multiple entities.
          </p>
          <pre style={codeStyle}>
            {`@Entity
public class Student {
    @Id
    private int id;

    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;
}

@Entity
public class Course {
    @Id
    private int id;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students;
}`}
          </pre>
        </div>
      </section>

      <hr style={dividerStyle} />

      <footer style={footerStyle}>
        <p>Happy Learning! 🚀</p>
      </footer>
    </div>
  );
};

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  margin: "20px auto",
  maxWidth: "900px",
  padding: "20px",
  backgroundColor: "#fefefe",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  color: "#333",
  lineHeight: "1.6",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "20px",
  paddingBottom: "20px",
  borderBottom: "1px solid #ddd",
};

const sectionStyle = {
  marginBottom: "30px",
};

const textStyle = {
  fontSize: "16px",
  marginBottom: "15px",
};

const mappingContainerStyle = {
  marginBottom: "20px",
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const codeStyle = {
  backgroundColor: "#1e1e1e",
  color: "#d4d4d4",
  padding: "10px",
  borderRadius: "5px",
  overflowX: "auto",
  fontSize: "14px",
  fontFamily: "Courier, monospace",
};

const dividerStyle = {
  margin: "20px 0",
  border: "none",
  borderTop: "1px solid #ddd",
};

const footerStyle = {
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#f1f1f1",
  borderRadius: "10px",
  marginTop: "20px",
};

export default HibernateMappings;
