import React from 'react';

const OptionalClass = () => {
    return (
        <div style={{ padding: '10px 20px', fontFamily: 'Poppins, sans-serif' }}>
            <h1>Optional Class in Java 8</h1>
            <p>The Optional class is used to avoid <code>NullPointerException</code> and handle null values more gracefully.</p>
            <pre style={{ background: '#212121', color: '#ffffff', padding: '10px', borderRadius: '5px' }}>
                {`// Example of Optional Class
import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        Optional<String> optionalValue = Optional.ofNullable(null);
        System.out.println(optionalValue.orElse("Default Value")); // Output: Default Value
    }
}`}
            </pre>
        </div>
    );
};

export default OptionalClass;
