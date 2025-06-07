import React from "react";

const HibernateAnnotations = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>Hibernate Annotations</h1>
        <p style={headerSubtitleStyle}>
          Learn how to use annotations to simplify ORM mappings in Hibernate.
        </p>
      </header>

      <section style={sectionStyle}>
        <div style={annotationCardStyle}>
          <img
            src="/icons/entity-icon.png"
            alt="@Entity Icon"
            style={iconStyle}
          />
          <h2 style={annotationTitleStyle}>@Entity</h2>
          <p style={annotationTextStyle}>
            Marks a class as a persistent entity. This maps the class to a
            database table.
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
        </div>

        <div style={annotationCardStyle}>
          <img
            src="/icons/column-icon.png"
            alt="@Column Icon"
            style={iconStyle}
          />
          <h2 style={annotationTitleStyle}>@Column</h2>
          <p style={annotationTextStyle}>
            Maps a field to a specific column in the database table. You can
            specify attributes like `name`, `length`, and `nullable`.
          </p>
          <pre style={codeStyle}>
            {`@Column(name = "email", length = 50, nullable = false)
private String email;`}
          </pre>
        </div>

        <div style={annotationCardStyle}>
          <img
            src="/icons/id-icon.png"
            alt="@Id Icon"
            style={iconStyle}
          />
          <h2 style={annotationTitleStyle}>@Id</h2>
          <p style={annotationTextStyle}>
            Identifies the primary key of the entity. Use it with @GeneratedValue
            for auto-generated IDs.
          </p>
          <pre style={codeStyle}>
            {`@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;`}
          </pre>
        </div>

        <div style={annotationCardStyle}>
          <img
            src="/icons/onetomany-icon.png"
            alt="@OneToMany Icon"
            style={iconStyle}
          />
          <h2 style={annotationTitleStyle}>@OneToMany</h2>
          <p style={annotationTextStyle}>
            Establishes a one-to-many relationship between entities.
          </p>
          <pre style={codeStyle}>
            {`@OneToMany(mappedBy = "user")
private List<Post> posts;`}
          </pre>
        </div>

        <div style={annotationCardStyle}>
          <img
            src="/icons/manytomany-icon.png"
            alt="@ManyToMany Icon"
            style={iconStyle}
          />
          <h2 style={annotationTitleStyle}>@ManyToMany</h2>
          <p style={annotationTextStyle}>
            Maps a many-to-many relationship. Use a join table to handle the
            relationship.
          </p>
          <pre style={codeStyle}>
            {`@ManyToMany
@JoinTable(
    name = "student_course",
    joinColumns = @JoinColumn(name = "student_id"),
    inverseJoinColumns = @JoinColumn(name = "course_id")
)
private List<Course> courses;`}
          </pre>
        </div>
      </section>

      <footer style={footerStyle}>
        <p style={footerTextStyle}>
          Keep learning Hibernate with these powerful annotations! 🚀
        </p>
      </footer>
    </div>
  );
};

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  margin: "0 auto",
  maxWidth: "100%",
  padding: "20px",
  backgroundColor: "#fefefe",
  color: "#333",
  lineHeight: "1.6",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
  padding: "20px",
  background: "#f7f7f7",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerTitleStyle = {
  fontSize: "2.5rem",
  margin: "0",
  color: "#333",
};

const headerSubtitleStyle = {
  fontSize: "1.2rem",
  color: "#555",
};

const sectionStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

const annotationCardStyle = {
  flex: "1 1 calc(33.33% - 20px)",
  minWidth: "300px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  textAlign: "center",
  cursor: "pointer",
};

const iconStyle = {
  width: "40px",
  height: "40px",
  marginBottom: "10px",
};

const annotationTitleStyle = {
  fontSize: "1.5rem",
  margin: "10px 0",
  color: "#333",
};

const annotationTextStyle = {
  fontSize: "1rem",
  marginBottom: "10px",
  color: "#555",
};

const codeStyle = {
  backgroundColor: "#1e1e1e",
  color: "#d4d4d4",
  padding: "10px",
  borderRadius: "5px",
  overflowX: "auto",
  fontSize: "14px",
  textAlign: "left",
  fontFamily: "Courier, monospace",
};

const footerStyle = {
  marginTop: "30px",
  padding: "20px",
  backgroundColor: "#f7f7f7",
  borderRadius: "10px",
  textAlign: "center",
};

const footerTextStyle = {
  fontSize: "1rem",
  color: "#333",
};

export default HibernateAnnotations;
