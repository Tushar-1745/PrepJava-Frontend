import React from 'react';

const CollectorClass = () => {
    return (
        <div style={{ padding: '10px 20px', fontFamily: 'Poppins, sans-serif' }}>
            <h1>Collectors Class in Java 8</h1>
            <p>The Collectors class provides utility functions for collecting elements of a stream into various data structures.</p>
            <pre style={{ background: '#212121', color: '#ffffff', padding: '10px', borderRadius: '5px' }}>
                {`// Example of Collectors Class
import java.util.List;
import java.util.stream.Collectors;
import java.util.Arrays;

public class CollectorsExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        List<String> filteredNames = names.stream()
                                          .filter(name -> name.startsWith("A"))
                                          .collect(Collectors.toList());
        
        System.out.println(filteredNames); // Output: [Alice]
    }
}`}
            </pre>
        </div>
    );
};

export default CollectorClass;
