import React from 'react';

const HTTPStatusCodes = () => {
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
    };

    const renderCodeExample = (code) => (
        <div style={styles.codeBox}>
            <pre>{code}</pre>
        </div>
    );

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>HTTP Status Codes in Spring Boot</h1>

            <p style={styles.paragraph}>
                Since Spring Boot is primarily used for backend development, every developer should have a solid understanding of HTTP status codes. These codes are crucial for API communication, debugging, and handling responses effectively.
            </p>

            <h2 style={styles.sectionHeader}>1xx: Informational</h2>
            <p style={styles.paragraph}><strong>100 Continue:</strong> Indicates that the initial request is received and the client should continue with the request.</p>
            {renderCodeExample("@GetMapping(\"/continue\")\npublic ResponseEntity<String> continueRequest() {\n    return ResponseEntity.status(HttpStatus.CONTINUE).body(\"Continue processing\");\n}")}

            <h2 style={styles.sectionHeader}>2xx: Success</h2>
            <p style={styles.paragraph}><strong>200 OK:</strong> The request was successful, and the response contains the requested data.</p>
            {renderCodeExample("@GetMapping(\"/success\")\npublic ResponseEntity<String> successResponse() {\n    return ResponseEntity.ok(\"Request was successful\");\n}")}

            <p style={styles.paragraph}><strong>201 Created:</strong> The request was successful, and a new resource was created.</p>
            {renderCodeExample("@PostMapping(\"/create\")\npublic ResponseEntity<String> createResource() {\n    return ResponseEntity.status(HttpStatus.CREATED).body(\"Resource created successfully\");\n}")}

            <h2 style={styles.sectionHeader}>3xx: Redirection</h2>
            <p style={styles.paragraph}><strong>302 Found:</strong> The requested resource is temporarily moved to a different URL.</p>
            {renderCodeExample("@GetMapping(\"/redirect\")\npublic ResponseEntity<Void> redirectExample() {\n    return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(\"/new-location\")).build();\n}")}

            <h2 style={styles.sectionHeader}>4xx: Client Errors</h2>
            <p style={styles.paragraph}><strong>400 Bad Request:</strong> The request is malformed or contains invalid data.</p>
            {renderCodeExample("@PostMapping(\"/badrequest\")\npublic ResponseEntity<String> badRequestExample() {\n    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(\"Invalid request data\");\n}")}

            <p style={styles.paragraph}><strong>401 Unauthorized:</strong> The request requires authentication.</p>
            {renderCodeExample("@GetMapping(\"/unauthorized\")\npublic ResponseEntity<String> unauthorizedExample() {\n    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(\"Unauthorized access\");\n}")}

            <p style={styles.paragraph}><strong>404 Not Found:</strong> The requested resource was not found.</p>
            {renderCodeExample("@GetMapping(\"/notfound\")\npublic ResponseEntity<String> notFoundExample() {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(\"Resource not found\");\n}")}

            <h2 style={styles.sectionHeader}>5xx: Server Errors</h2>
            <p style={styles.paragraph}><strong>500 Internal Server Error:</strong> A generic server error occurred.</p>
            {renderCodeExample("@GetMapping(\"/servererror\")\npublic ResponseEntity<String> serverErrorExample() {\n    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(\"An error occurred on the server\");\n}")}
        </div>
    );
};

export default HTTPStatusCodes;
