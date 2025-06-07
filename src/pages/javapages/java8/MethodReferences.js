import React from 'react';

const FunctionalInterfaces = () => {
    return (
        <div style={{ padding: '10px 20px', fontFamily: 'Poppins, sans-serif' }}>
            <h1>Functional Interfaces in Java 8</h1>
            <p>A functional interface is an interface with exactly one abstract method. They can be implemented using lambda expressions.</p>
            <pre style={{ background: '#212121', color: '#ffffff', padding: '10px', borderRadius: '5px' }}>
                {`// Example of a Functional Interface
@FunctionalInterface
interface Greeting {
    void sayHello();
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        Greeting greeting = () -> System.out.println("Hello, World!");
        greeting.sayHello();
    }
}`}
            </pre>
        </div>
    );
};

export default FunctionalInterfaces;