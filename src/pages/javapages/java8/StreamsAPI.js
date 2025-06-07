import React from 'react';

const StreamsAPI = () => {
    return (
        <div style={{ padding: '10px 20px', fontFamily: 'Poppins, sans-serif' }}>
            <h1>Streams API in Java 8</h1>
            <p>The Streams API provides a functional approach to processing collections of data.</p>
            <pre style={{ background: '#212121', color: '#ffffff', padding: '10px', borderRadius: '5px' }}>
                {`// Example of Streams API
import java.util.Arrays;
import java.util.List;

public class StreamsExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        names.stream()
             .filter(name -> name.startsWith("A"))
             .forEach(System.out::println); // Output: Alice
    }
}`}
            </pre>
        </div>
    );
};

export default StreamsAPI;
