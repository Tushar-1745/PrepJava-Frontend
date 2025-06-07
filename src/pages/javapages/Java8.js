import React from 'react';

const java8PageStyle = {
    backgroundColor: '#f0f0f5',  // Light grey background for the page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',        // Center items horizontally
    gap: '10px',
    minHeight: '100vh',
    // padding: '20px',             // Add padding to the page
};

const java8FeatureBoxStyle = {
    backgroundColor: 'white',  // Light yellow background for feature boxes
    minHeight: '10vh',
    width: '90%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Shadow for depth
    margin: '5px auto',
    padding: '15px',             // Padding inside each box for better readability
    borderRadius: '8px',         // Rounded corners
    textAlign: 'left',           // Align text to the 
    fontSize: '20px',
    fontFamily: 'Times New Roman',
    lineHeight: '1.8',  // Increase the line height (adjust as needed)
};

const java8ImageStyle = {
    width: '100%',              // Image takes full width of the box
    height: 'auto',
    borderRadius: '5px',        // Rounded corners for the image
    marginTop: '10px'
};

const codeBlockStyle = {
    backgroundColor: '#f4f4f4', // Light background for the code block
    border: '1px solid #ccc',    // Subtle border
    borderRadius: '5px',         // Rounded corners
    padding: '10px',             // Padding inside the code block
    marginTop: '10px',           // Space above the code block
    overflowX: 'auto',           // Enable horizontal scrolling if necessary
    fontFamily: 'Times New Roman',     // Monospace font for the code
    lineHeight:'1.4'
};


const Java8 = () => {
    return (
        <div style={java8PageStyle}>
            <div style={java8FeatureBoxStyle}>
                <h2 style={{marginTop:'2px', marginBottom:'-25px'}}>Java 8 Features</h2>
                <p>Java 8 introduced significant enhancements, including functional programming capabilities, streams, and new API methods.</p>
                <img src={'images/java8FeaturesImage.png'} alt="Java 8 Features Overview" style={java8ImageStyle} />
            </div>

            <div style={java8FeatureBoxStyle}>
                <h3>1. Lambda Expressions</h3>
                <p>Lambdas allow you to treat functionality as a method argument or store it in a variable, enabling functional programming.</p>
                <pre style={codeBlockStyle}>
                    <code>
                        {`// Example of a lambda expression
Runnable runnable = () -> System.out.println("Running in a thread");
new Thread(runnable).start();
            `}
                    </code>
                </pre>
            </div>


            <div style={java8FeatureBoxStyle}>
                <h3>2. Stream API</h3>
                <p>The Stream API enables functional-style operations on streams of elements, allowing for efficient data manipulation.</p>
                <pre style={codeBlockStyle}>
                    <code>
                        {`// Example of using Stream API to filter and print even numbers
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
numbers.stream()
       .filter(n -> n % 2 == 0)
       .forEach(System.out::println);`}
                    </code>
                </pre>
            </div>


            <div style={java8FeatureBoxStyle}>
                <h3>3. Default Methods</h3>
                <p>Default methods allow you to add new methods to interfaces without breaking the existing implementation of classes that implement those interfaces.</p>
                <pre style={codeBlockStyle}>
                    <code>
                        {`// Example of a default method in an interface
interface MyInterface {
    default void myDefaultMethod() {
        System.out.println("This is a default method.");
    }
}

class MyClass implements MyInterface {}

MyClass obj = new MyClass();
obj.myDefaultMethod();`}
                    </code>
                </pre>
            </div>

            <div style={java8FeatureBoxStyle}>
                <h3>4. Method References</h3>
                <p>Method references provide a way to refer to a method without invoking it. They are compact and can be used to make code cleaner.</p>
                <pre style={codeBlockStyle}>
                    <code>
                        {`// Example of method reference
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(System.out::println);`}
                    </code>
                </pre>
            </div>

            <div style={java8FeatureBoxStyle}>
                <h3>5. Optional Class</h3>
                <p>The Optional class is a container that may or may not hold a non-null value, helping to avoid NullPointerExceptions.</p>
                <pre style={codeBlockStyle}>
                    <code>
                        {`// Example of using Optional
Optional<String> optionalName = Optional.ofNullable(getName());
optionalName.ifPresent(name -> System.out.println(name));`}
                    </code>
                </pre>
            </div>

            <div style={java8FeatureBoxStyle}>
                <h3>6. New Date and Time API</h3>
                <p>The new Date and Time API offers a more comprehensive and flexible approach to handling dates and times.</p>
                <pre style={codeBlockStyle}>
                    <code>
                        {`// Example of LocalDate and LocalTime
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
System.out.println("Today: " + today);
System.out.println("Current Time: " + now);`}
                    </code>
                </pre>
            </div>

            <div style={java8FeatureBoxStyle}>
                <h3>7. CompletableFuture</h3>
                <p>CompletableFuture provides a way to write asynchronous, non-blocking code, simplifying multi-threading in Java.</p>
                <pre style={codeBlockStyle}>
                    <code>
                        {`// Example of CompletableFuture
CompletableFuture.supplyAsync(() -> {
    return "Result from asynchronous task";
}).thenAccept(result -> System.out.println(result));`}
                    </code>
                </pre>
            </div>

            

        </div>
    );
};

export default Java8;

// const features = [
//   {
//     title: "Lambda Expressions",
//     description: "Lambda expressions enable you to treat functionality as a method argument or to create a concise way to express instances of single-method interfaces (functional interfaces).",
//     code: `// Example of a lambda expression
// Runnable runnable = () -> System.out.println("Running in a thread");
// new Thread(runnable).start();`,
//     diagram: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GQYxED7-hzLFLk29lHzVhA.png", // Lambda Expressions Diagram
//   },
//   {
//     title: "Stream API",
//     description: "The Stream API allows you to process sequences of elements (like collections) in a functional style. It supports operations like map, filter, and reduce.",
//     code: `List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
// names.stream()
//     .filter(name -> name.startsWith("A"))
//     .forEach(System.out::println);`,
//     diagram: "https://www.baeldung.com/wp-content/uploads/2019/01/stream-api-flow.png", // Stream API Diagram
//   },
//   {
//     title: "Default Methods",
//     description: "Java 8 allows you to define default methods in interfaces. This means you can add new methods to interfaces without breaking existing implementations.",
//     code: `interface MyInterface {
//   default void defaultMethod() {
//     System.out.println("Default implementation");
//   }
// }`,
//     diagram: "https://www.baeldung.com/wp-content/uploads/2021/02/default-methods-in-interfaces-in-java-8-1.png", // Default Methods Diagram
//   },
//   {
//     title: "Optional Class",
//     description: "The Optional class is a container object which may or may not contain a non-null value. It helps to avoid NullPointerExceptions.",
//     code: `Optional<String> optionalName = Optional.ofNullable(getName());
// optionalName.ifPresent(name -> System.out.println("Name: " + name));`,
//     diagram: "https://miro.medium.com/max/1400/1*o9HIDb5zVsjPtDPPqC9DbQ.png", // Optional Class Diagram
//   },
//   {
//     title: "New Date and Time API",
//     description: "Java 8 introduced a new Date and Time API that is more comprehensive and user-friendly compared to the old Date and Calendar classes.",
//     code: `LocalDate today = LocalDate.now();
// System.out.println("Today's date: " + today);`,
//     diagram: "https://www.baeldung.com/wp-content/uploads/2019/01/java-8-date-time-1-768x576.png", // New Date and Time API Diagram
//   },
// ];

// export default Java8;

// export default Java8;

