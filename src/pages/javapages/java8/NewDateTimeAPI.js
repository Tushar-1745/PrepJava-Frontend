import React from 'react';

const NewDateTimeAPI = () => {
    return (
        <div style={{ padding: '10px 20px', fontFamily: 'Poppins, sans-serif' }}>
            <h1>New Date-Time API in Java 8</h1>
            <p>Java 8 introduced a new Date-Time API under the package <code>java.time</code> to handle date and time more efficiently.</p>
            <pre style={{ background: '#212121', color: '#ffffff', padding: '10px', borderRadius: '5px' }}>
                {`// Example of Java 8 Date-Time API
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

public class DateTimeExample {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        LocalDateTime dateTime = LocalDateTime.now();
        
        System.out.println("Date: " + date);
        System.out.println("Time: " + time);
        System.out.println("Date-Time: " + dateTime);
    }
}`}
            </pre>
        </div>
    );
};

export default NewDateTimeAPI;
