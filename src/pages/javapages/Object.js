import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getScoreByModule } from '../../api/api.js';

const ObjectInJava = () => {
  const navigate = useNavigate();
  const { loggedInUserId } = useContext(AuthContext);
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const fetchScore = async () => {
      if (!loggedInUserId) return;
      try {
        const score = await getScoreByModule(loggedInUserId, 'ObjectInJava');
        setScoreData(score);
      } catch (err) {
        console.error('Failed to fetch score:', err);
      }
    };
    fetchScore();
  }, [loggedInUserId]);

  const scoredMarks = scoreData?.score ?? null;
  const totalMarks = scoreData?.total ?? null;

  const getScoreColor = (scored) => {
    if (scored >= 9) return '#6fdc8c';
    if (scored >= 6) return '#f4a742';
    return '#e57373';
  };

  const styles = {
    container: {
      padding: '10px 20px',
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: 'white',
      color: '#333333',
      lineHeight: '1.6',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    header: {
      fontSize: '2.5rem',
      color: 'black',
    },
    badge: {
      width: '26px',
      height: '26px',
      marginLeft: '10px',
      marginTop: '-10px',
      borderRadius: '50%',
      border: `2px solid ${getScoreColor(scoredMarks)}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: getScoreColor(scoredMarks),
      fontWeight: 'bold',
      fontSize: '0.9rem',
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
    takeTestButton: {
      backgroundColor: '#0066ff',
      color: 'white',
      padding: '12px 24px',
      fontSize: '1.1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
  };

  const handleTakeTest = () => {
    navigate('/object-test');
  };

  const renderCodeExample = (code) => (
    <div style={styles.codeBox}>
      <pre>{code}</pre>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Object in Java</h1>
        {scoredMarks !== null && totalMarks !== null && (
          <div style={styles.badge} title={`Test taken. Score: ${scoredMarks}/${totalMarks}`}>
            ✓
          </div>
        )}
      </div>

      <p style={styles.paragraph}>
        An <strong>object</strong> in Java is an instance of a class. It represents a real-world entity with state and behavior.
      </p>

      <h2 style={styles.sectionHeader}>Key Characteristics of an Object</h2>
      <ul style={{ fontSize: '1.1rem', marginLeft: '20px' }}>
        <li><strong>State (Attributes):</strong> Defined by fields (variables).</li>
        <li><strong>Behavior (Methods):</strong> Defined by functions in the class.</li>
        <li><strong>Identity:</strong> Each object has a unique memory reference.</li>
      </ul>

      <h2 style={styles.sectionHeader}>Creating an Object</h2>
      <p style={styles.paragraph}>An object is created using the <code>new</code> keyword.</p>
      {renderCodeExample(`class Car {
    String brand;
    int speed;

    void displayInfo() {
        System.out.println("Brand: " + brand + ", Speed: " + speed + " km/h");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Object creation
        myCar.brand = "Tesla";
        myCar.speed = 120;
        myCar.displayInfo();
    }
}`)}

      <h2 style={styles.sectionHeader}>Ways to Create an Object</h2>
      <p style={styles.paragraph}>There are multiple ways to create objects in Java:</p>
      {renderCodeExample(`// Using new keyword
Car myCar = new Car();

// Using Class.forName()
Car myCar = (Car) Class.forName("Car").newInstance();

// Using clone method
Car car1 = new Car();
Car car2 = (Car) car1.clone();

// Using deserialization
ObjectInputStream in = new ObjectInputStream(new FileInputStream("file.ser"));
Car myCar = (Car) in.readObject();`)}

      <h2 style={styles.sectionHeader}>Accessing Object Members</h2>
      {renderCodeExample(`Car myCar = new Car();
myCar.brand = "BMW";
myCar.speed = 150;
myCar.displayInfo();`)}

      <h2 style={styles.sectionHeader}>Anonymous Objects</h2>
      {renderCodeExample(`new Car().displayInfo();`)}

      <h2 style={styles.sectionHeader}>Passing Objects to Methods</h2>
      {renderCodeExample(`class Car {
    String brand;
    void display() {
        System.out.println("Car Brand: " + brand);
    }
}

public class Main {
    static void printCar(Car c) {
        c.display();
    }

    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.brand = "Audi";
        printCar(myCar);
    }
}`)}

      <button
        style={styles.takeTestButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#004ecb')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0066ff')}
        onClick={handleTakeTest}
      >
        🎯 Take Test on Object in Java
      </button>
    </div>
  );
};

export default ObjectInJava;
