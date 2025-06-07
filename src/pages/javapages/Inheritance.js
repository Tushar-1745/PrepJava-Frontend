import React from 'react';

const Inheritance = () => {
    const styles = {
        container: {
            padding: '10px 20px',
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: 'white',
            color: '#333333',
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
            <h1 style={styles.header}>Inheritance in Java</h1>

            <p style={styles.paragraph}>
                Inheritance is a mechanism in Java that allows one class to acquire the properties and methods of another class.
                The class that inherits is called the <strong>subclass</strong>, and the class from which it inherits is the <strong>superclass</strong>.
            </p>

            <h2 style={styles.sectionHeader}>Syntax</h2>
            {renderCodeExample(`class Parent {
    // fields and methods
}

class Child extends Parent {
    // additional fields and methods
}`)}

            <h2 style={styles.sectionHeader}>Types of Inheritance</h2>
            <ul>
                <li><strong>Single Inheritance:</strong> A subclass inherits from one superclass.</li>
                <li><strong>Multilevel Inheritance:</strong> A subclass inherits from a class that itself inherits from another class.</li>
                <li><strong>Hierarchical Inheritance:</strong> Multiple subclasses inherit from one superclass.</li>
            </ul>
            <p>Note: Java does not support multiple inheritance with classes to avoid ambiguity but allows multiple inheritance using interfaces.</p>

            <h2 style={styles.sectionHeader}>Example: Single Inheritance</h2>
            {renderCodeExample(`class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("This dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // inherited from Animal
        dog.bark();
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`This animal eats food.
This dog barks.`)}

            <h2 style={styles.sectionHeader}>Example: Multilevel Inheritance</h2>
            {renderCodeExample(`class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Mammal extends Animal {
    void breathe() {
        System.out.println("This mammal breathes air.");
    }
}

class Human extends Mammal {
    void speak() {
        System.out.println("This human can speak.");
    }
}

public class Main {
    public static void main(String[] args) {
        Human human = new Human();
        human.eat(); // from Animal
        human.breathe(); // from Mammal
        human.speak(); // from Human
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`This animal eats food.
This mammal breathes air.
This human can speak.`)}

            <h2 style={styles.sectionHeader}>Example: Hierarchical Inheritance</h2>
            {renderCodeExample(`class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("This dog barks.");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("This cat meows.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();

        Cat cat = new Cat();
        cat.eat();
        cat.meow();
    }
}`)}
            <h3>Output:</h3>
            {renderCodeExample(`This animal eats food.
This dog barks.
This animal eats food.
This cat meows.`)}

            <h2 style={styles.sectionHeader}>Benefits of Inheritance</h2>
            <ul>
                <li><strong>Code Reusability:</strong> Common code can be placed in a superclass and reused in subclasses.</li>
                <li><strong>Polymorphism:</strong> Subclasses can override methods of the superclass.</li>
                <li><strong>Extensibility:</strong> New features can be added easily by extending existing classes.</li>
            </ul>

            <h2 style={styles.sectionHeader}>Things to Remember</h2>
            <ul>
                <li>Constructors are not inherited by subclasses.</li>
                <li>The <code>super</code> keyword is used to refer to the parent class.</li>
                <li>Private members of a superclass are not directly accessible in the subclass.</li>
            </ul>
        </div>
    );
};

export default Inheritance;
