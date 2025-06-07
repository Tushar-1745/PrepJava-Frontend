import React from "react";

const HibernateArchitecture = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Hibernate Architecture</h1>
        <p style={subtitleStyle}>
          A comprehensive view of Hibernate's core components.
        </p>
      </header>
      <section style={sectionStyle}>
        <img
          src="/images/hibernate-architecture.png"
          alt="Hibernate Architecture"
          style={imageStyle}
        />
        <h2 style={sectionTitleStyle}>Core Components</h2>
        <ul style={listStyle}>
          <li>
            <strong>SessionFactory:</strong> Provides session objects and manages
            database connections.
          </li>
          <li>
            <strong>Session:</strong> Main interface for CRUD operations on
            persistent objects.
          </li>
          <li>
            <strong>Transaction:</strong> Controls transactional operations.
          </li>
          <li>
            <strong>Query:</strong> Facilitates HQL (Hibernate Query Language)
            operations.
          </li>
        </ul>
      </section>
    </div>
  );
};

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  margin: "20px auto",
  maxWidth: "80%",
  padding: "20px",
  backgroundColor: "#ffffff",
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

const listStyle = {
  paddingLeft: "20px",
  color: "#555",
  fontSize: "1.1rem",
};

const imageStyle = {
  width: "100%",
  maxWidth: "600px",
  marginBottom: "20px",
  borderRadius: "10px",
};

export default HibernateArchitecture;
