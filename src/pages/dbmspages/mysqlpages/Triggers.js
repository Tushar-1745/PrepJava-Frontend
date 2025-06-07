import React from 'react';

const Triggers = () => {
    const styles = {
        container: {
            padding: '10px 20px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: 'white',
            color: '#333',
            lineHeight: '1.5',
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
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '1.1rem',
            margin: '10px 0',
        },
        codeBlock: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '1rem',
            margin: '10px 0',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>SQL Triggers</h1>
            <p style={styles.paragraph}>
                SQL Triggers are special procedures that are automatically executed when specific events occur in a database.
            </p>
            
            <h2 style={styles.sectionHeader}>Types of Triggers</h2>
            
            <div>
                <h3>1. BEFORE Trigger</h3>
                <p style={styles.paragraph}><strong>Purpose: </strong>Executed before an INSERT, UPDATE, or DELETE operation occurs.</p>
                <strong>Example:</strong>
                <pre style={styles.codeBlock}>
                    CREATE TRIGGER before_employee_insert
                    BEFORE INSERT ON Employees
                    FOR EACH ROW
                    SET NEW.created_at = NOW();
                </pre>
            </div>

            <div>
                <h3>2. AFTER Trigger</h3>
                <p style={styles.paragraph}><strong>Purpose: </strong>Executed after an INSERT, UPDATE, or DELETE operation has occurred.</p>
                <strong>Example:</strong>
                <pre style={styles.codeBlock}>
                    CREATE TRIGGER after_employee_insert
                    AFTER INSERT ON Employees
                    FOR EACH ROW
                    INSERT INTO AuditLog (action, employee_id, timestamp)
                    VALUES ('INSERT', NEW.id, NOW());
                </pre>
            </div>

            <div>
                <h3>3. INSTEAD OF Trigger</h3>
                <p style={styles.paragraph}><strong>Purpose: </strong>Used on views to modify data manipulation behavior.</p>
                <strong>Example:</strong>
                <pre style={styles.codeBlock}>
                    CREATE TRIGGER instead_of_update
                    INSTEAD OF UPDATE ON EmployeeView
                    FOR EACH ROW
                    BEGIN
                        UPDATE Employees SET salary = NEW.salary WHERE id = OLD.id;
                    END;
                </pre>
            </div>
        </div>
    );
};

export default Triggers;
