import React from "react";

const HibernateOverview = () => {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      lineHeight: "1.6",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    headerTitle: {
      color: "#4CAF50",
      fontSize: "2.5em",
    },
    section: {
      marginBottom: "20px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    sectionTitle: {
      color: "#4CAF50",
      fontSize: "1.5em",
      marginBottom: "10px",
    },
    codeBlock: {
      backgroundColor: "#272822",
      color: "#f8f8f2",
      padding: "10px",
      borderRadius: "5px",
      overflowX: "auto",
      fontFamily: "Courier New, Courier, monospace",
    },
    list: {
      listStyle: "disc",
      paddingLeft: "20px",
    },
    listItem: {
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Hibernate</h1>
        <p>
          Hibernate is an open-source ORM tool that automates the mapping between Java classes and
          database tables. It abstracts away the complexities of JDBC (Java Database Connectivity)
          and SQL (Structured Query Language), allowing developers to work with objects and
          collections in Java without worrying about underlying database interactions.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Hibernate in Different Project Types</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            **Simple Java Project:** You need to manually add Hibernate JAR files to your project.
          </li>
          <li style={styles.listItem}>
            **Maven Project:** Just add the Hibernate dependency in the `pom.xml` file. No need to
            manage individual JAR files.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Adding Hibernate Dependency</h2>
        <p>To include Hibernate in a Maven project, add the following dependency to your `pom.xml`:</p>
        <pre style={styles.codeBlock}>
          {`<!-- https://mvnrepository.com/artifact/org.hibernate.orm/hibernate-core -->
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>7.0.0.Alpha2</version>
</dependency>`}
        </pre>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Creating the Hibernate Configuration File</h2>
        <p>
          In a Hibernate project, you need to create a file named <code>hibernate.cfg.xml</code> with
          the following content:
        </p>
        <pre style={styles.codeBlock}>
          {`<!DOCTYPE hibernate-configuration PUBLIC
    "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
    "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory>
        <!-- Database connection settings -->
        <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>
        <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/vshibernate</property>
        <property name="hibernate.connection.username">root</property>
        <property name="hibernate.connection.password">Tushar@1745</property>

        <!-- JDBC connection pool settings -->
        <property name="hibernate.connection.pool_size">5</property>

        <!-- SQL dialect for MySQL -->
        <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>

        <!-- Enable Hibernate's automatic session context management -->
        <property name="hibernate.current_session_context_class">thread</property>

        <!-- Echo all executed SQL to stdout for debugging -->
        <property name="hibernate.show_sql">true</property>

        <!-- Drop and re-create the database schema on startup -->
        <property name="hibernate.hbm2ddl.auto">create</property>

        <!-- Mapping classes -->
        <mapping class="com.hibernate.Student"/>
        <mapping class="com.hibernate.Address"/>
    </session-factory>
</hibernate-configuration>`}
        </pre>
      </section>
    </div>
  );
};

export default HibernateOverview;
