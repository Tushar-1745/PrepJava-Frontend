import React from "react";

const HibernateHistory = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>History of Hibernate</h1>
        <p style={subtitleStyle}>
          Discover the evolution of Hibernate as the leading ORM framework.
        </p>
      </header>
      <section style={sectionStyle}>
        <p style={paragraphStyle}>
          Hibernate was first released in 2001 by Gavin King. It was created as
          an alternative to EJB to simplify database interactions and solve the
          problems of traditional persistence frameworks. Over time, Hibernate
          evolved to become a cornerstone of Java development.
        </p>
        <ul style={listStyle}>
          <li><strong>2001:</strong> Initial release by Gavin King.</li>
          <li><strong>2004:</strong> Support for JPA annotations introduced.</li>
          <li><strong>2010:</strong> Became integral to the Spring ecosystem.</li>
          <li><strong>Present:</strong> Widely adopted in modern Java applications.</li>
        </ul>
        <blockquote style={quoteStyle}>
          "Hibernate is the bridge between Java objects and relational databases."
        </blockquote>
      </section>
    </div>
  );
};

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  margin: "20px auto",
  maxWidth: "80%",
  padding: "20px",
  backgroundColor: "#f9f9f9",
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

const paragraphStyle = {
  fontSize: "1.2rem",
  marginBottom: "20px",
};

const listStyle = {
  paddingLeft: "20px",
  color: "#555",
  fontSize: "1.1rem",
};

const quoteStyle = {
  marginTop: "20px",
  fontStyle: "italic",
  fontSize: "1.2rem",
  color: "#555",
  textAlign: "center",
};

export default HibernateHistory;
