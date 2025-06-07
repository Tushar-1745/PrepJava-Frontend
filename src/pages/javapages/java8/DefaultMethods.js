import React from 'react';

const DefaultMethods = () => {
    return (
        <div style={{ padding: '10px 20px', fontFamily: 'Poppins, sans-serif' }}>
            <h1>Default Methods in Java 8</h1>
            <p>Default methods in interfaces allow us to add new functionality without breaking existing implementations.</p>
            <pre style={{ background: '#212121', color: '#ffffff', padding: '10px', borderRadius: '5px' }}>
                {`// Example of Default Method in Interface
interface Vehicle {
    default void start() {
        System.out.println("Starting vehicle...");
    }
}

class Car implements Vehicle {
    public void drive() {
        System.out.println("Driving car...");
    }
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        Car car = new Car();
        car.start(); // Calls default method
        car.drive();
    }
}`}
            </pre>
        </div>
    );
};

export default DefaultMethods;
