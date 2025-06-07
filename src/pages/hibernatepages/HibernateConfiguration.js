import React from "react";

const HibernateConfiguration = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Hibernate Configuration</h1>
        <p style={subtitleStyle}>
          A step-by-step guide to configuring Hibernate in your projects.
        </p>
      </header>
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Core Configuration</h2>
        <p style={paragraphStyle}>
          Hibernate requires a configuration file (`hibernate.cfg.xml`) that
          specifies database connection details and Hibernate properties.
        </p>
        <pre style={codeStyle}>
          {`<hibernate-configuration>
    <session-factory>
        <property name="hibernate.connection.url">
          jdbc:mysql://localhost:3306/mydb
        </property>
        <property name="hibernate.connection.username">root</property>
        <property name="hibernate.connection.password">password</property>
        <property name="hibernate.dialect">
          org.hibernate.dialect.MySQLDialect
        </property>
    </session-factory>
</hibernate-configuration>`}
        </pre>
        <h2 style={sectionTitleStyle}>Annotation-Based Configuration</h2>
        <p style={paragraphStyle}>
          You can also use annotations in your Java classes for configuration.
        </p>
        <pre style={codeStyle}>
          {`@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
}`}
        </pre>
      </section>
    </div>
  );
};

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  margin: "20px auto",
  maxWidth: "80%",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  color: "#333",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
};

const titleStyle = {
  fontSize: "2.5rem",
  color: "#333",
};

const subtitleStyle = {
  fontSize: "1.2rem",
  color: "#666",
};

const sectionStyle = {
  padding: "10px",
};

const sectionTitleStyle = {
  fontSize: "1.5rem",
  marginBottom: "10px",
  color: "#333",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  marginBottom: "20px",
};

const codeStyle = {
  backgroundColor: "#1e1e1e",
  color: "#d4d4d4",
  padding: "10px",
  borderRadius: "5px",
  overflowX: "auto",
  fontSize: "0.9rem",
  fontFamily: "Courier, monospace",
};

export default HibernateConfiguration;
