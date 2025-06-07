import React from "react";

const Multithreading = () => {
    const styles = {
        container: {
            padding: "10px 20px",
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: "#f9f9f9",
            color: "#333333",
            lineHeight: "1.5",
        },
        header: {
            fontSize: "2.5rem",
            textAlign: "left",
            color: "black",
        },
        sectionHeader: {
            fontSize: "1.5rem",
            color: "black",
            borderBottom: "1px solid black",
            display: "inline-block",
            marginBottom: "10px",
        },
        paragraph: {
            fontSize: "1.1rem",
            margin: "10px 0",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
            backgroundColor: "#fff",
        },
        th: {
            backgroundColor: "#4A90E2",
            color: "white",
            padding: "10px",
            border: "1px solid black",
            textAlign: "left",
            fontSize: "1.1rem",
        },
        td: {
            padding: "10px",
            border: "1px solid black",
            fontSize: "1rem",
        },
        list: {
            marginLeft: "20px",
            fontSize: "1rem",
        },
        codeBlock: {
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1rem",
            marginBottom: "20px",
            overflow: "auto",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Multithreading</h1>

            {/* Introduction Section */}
            <section>
                <p style={styles.paragraph}>
                    Multithreading is a programming technique that allows multiple tasks to run concurrently within a single program, improving performance and resource utilization. Each thread operates independently but shares the same memory space, making communication efficient.
                    <br /><br />
                    <strong>Real-time Example:</strong>
                    <br />
                    In a web browser, multiple tabs can load different websites simultaneously without blocking each other. Each tab runs in a separate thread, ensuring a smooth browsing experience while downloading files or streaming videos in the background.
                </p>
            </section>

            {/* Difference Between Process and Thread */}
            <section>
                <h2 style={styles.sectionHeader}>Difference Between Process and Thread</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Aspect</th>
                            <th style={styles.th}>Process</th>
                            <th style={styles.th}>Thread</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.td}><strong>Definition</strong></td>
                            <td style={styles.td}>An independent program in execution.</td>
                            <td style={styles.td}>A lightweight unit of execution within a process.</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Memory Sharing</strong></td>
                            <td style={styles.td}>Has its own separate memory space.</td>
                            <td style={styles.td}>Shares memory with other threads in the same process.</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Creation Time</strong></td>
                            <td style={styles.td}>Takes more time to create.</td>
                            <td style={styles.td}>Faster creation compared to a process.</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Communication</strong></td>
                            <td style={styles.td}>Uses inter-process communication (IPC), which is slower.</td>
                            <td style={styles.td}>Can communicate easily with other threads of the same process.</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Resource Consumption</strong></td>
                            <td style={styles.td}>Consumes more resources.</td>
                            <td style={styles.td}>Consumes fewer resources.</td>
                        </tr>
                        <tr>
                            <td style={styles.td}><strong>Context Switching</strong></td>
                            <td style={styles.td}>Slower due to separate memory allocation.</td>
                            <td style={styles.td}>Faster as threads share the same memory.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Benefits of Multithreading */}
            <section>
                <h2 style={styles.sectionHeader}>Benefits of Multithreading</h2>
                <ul style={styles.list}>
                    <li><strong>Improved Performance:</strong> Threads run concurrently, speeding up execution.</li>
                    <li><strong>Better Resource Utilization:</strong> CPU is used more efficiently by running multiple tasks in parallel.</li>
                    <li><strong>Enhanced Responsiveness:</strong> Applications remain responsive even when performing heavy computations.</li>
                    <li><strong>Parallel Processing:</strong> Multiple tasks can be handled simultaneously, reducing overall execution time.</li>
                    <li><strong>Efficient Memory Sharing:</strong> Threads share the same memory space, reducing memory overhead.</li>
                </ul>
            </section>

            <h2 style={styles.sectionHeader}>Java Threads Basics</h2>
            <p style={styles.paragraph}>
                In Java, threads are the smallest units of execution that run independently. Java provides built-in support for multithreading through the <code>Thread</code> class and the <code>Runnable</code> interface.
            </p>

            <h2 style={styles.sectionHeader}>Creating Threads using Thread Class</h2>
            <p style={styles.paragraph}>
                The <code>Thread</code> class provides a way to create and manage threads in Java. To create a thread using this class, you need to extend <code>Thread</code> and override its <code>run()</code> method.
            </p>
            <pre style={styles.codeBlock}>{`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();  // Starts the thread
    }
}`}</pre>

            <h2 style={styles.sectionHeader}>Creating Threads using Runnable Interface</h2>
            <p style={styles.paragraph}>
                The <code>Runnable</code> interface provides an alternative way to create threads without extending the <code>Thread</code> class. Instead, you define the logic inside the <code>run()</code> method and pass an instance of <code>Runnable</code> to a <code>Thread</code> object.
            </p>
            <pre style={styles.codeBlock}>{`class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();  // Starts the thread
    }
}`}</pre>
            <h2 style={styles.sectionHeader}>Difference Between Thread and Runnable</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Feature</th>
                        <th style={styles.th}>Thread Class</th>
                        <th style={styles.th}>Runnable Interface</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>Inheritance</td>
                        <td style={styles.td}>Extends Thread (cannot extend another class)</td>
                        <td style={styles.td}>Implements Runnable, allowing multiple inheritance</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Code Reusability</td>
                        <td style={styles.td}>Less reusable</td>
                        <td style={styles.td}>More reusable</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Resource Utilization</td>
                        <td style={styles.td}>Uses more memory</td>
                        <td style={styles.td}>Uses less memory</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Recommended for</td>
                        <td style={styles.td}>Simple thread creation</td>
                        <td style={styles.td}>Better resource management</td>
                    </tr>
                </tbody>
            </table>

            <h2 style={styles.sectionHeader}>Starting a Thread Using .start() vs .run()</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Method</th>
                        <th style={styles.th}>Behavior</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>start()</td>
                        <td style={styles.td}>Creates a new thread and runs <code>run()</code> in a separate execution context.</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>run()</td>
                        <td style={styles.td}>Executes <code>run()</code> like a normal method call in the same thread (no multithreading).</td>
                    </tr>
                </tbody>
            </table>
            <pre style={styles.codeBlock}>{`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        
        thread.start(); // Runs in a new thread
        thread.run();   // Runs in the main thread (not multithreading)
    }
}`}</pre>

            <section>
                <h2 style={styles.sectionHeader}>Thread Lifecycle & States</h2>
                <p style={styles.paragraph}>
                    A thread in Java goes through multiple states during its lifecycle. These states are defined in the <code>Thread.State</code> enum.
                </p>

                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#ddd", textAlign: "left" }}>
                            <th style={{ padding: "10px", border: "1px solid #000" }}>State</th>
                            <th style={{ padding: "10px", border: "1px solid #000" }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><strong>New</strong></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Thread is created but not yet started.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><strong>Runnable</strong></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Thread is ready to run and waiting for CPU time.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><strong>Blocked</strong></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Thread is waiting for a lock to be released.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><strong>Waiting</strong></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Thread is waiting indefinitely for another thread's signal.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><strong>Timed Waiting</strong></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Thread is waiting for a specific period of time.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><strong>Terminated</strong></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Thread has completed execution.</td>
                        </tr>
                    </tbody>
                </table>

                <h3 style={styles.sectionHeader}>Thread State Transitions</h3>
                <p style={styles.paragraph}>
                    We can track the current state of a thread using the <code>getState()</code> method of the <code>Thread</code> class.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
                        {`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class ThreadStateExample {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        System.out.println("Before start(): " + t1.getState());

        t1.start();
        System.out.println("After start(): " + t1.getState());

        try {
            t1.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("After completion: " + t1.getState());
    }
}`}
                    </pre>
                </div>

                <p style={styles.paragraph}>
                    This program demonstrates how a thread transitions from the <strong>NEW</strong> state to <strong>RUNNABLE</strong> and finally to <strong>TERMINATED</strong>.
                </p>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Thread Methods</h2>
                <p style={styles.paragraph}>
                    Java provides various methods to control and manage threads. Here are some commonly used methods:
                </p>

                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#ddd", textAlign: "left" }}>
                            <th style={{ padding: "10px", border: "1px solid #000" }}>Method</th>
                            <th style={{ padding: "10px", border: "1px solid #000" }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><code>sleep(ms)</code></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Pauses execution of the thread for the specified time.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><code>join()</code></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Waits for the thread to finish before continuing.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><code>yield()</code></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Hints to the scheduler to give other threads a chance to execute.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><code>setName(name)</code></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Sets the name of the thread.</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #000" }}><code>getName()</code></td>
                            <td style={{ padding: "10px", border: "1px solid #000" }}>Retrieves the name of the thread.</td>
                        </tr>
                    </tbody>
                </table>

                <div style={styles.codeBlock}>
                    <pre>
                        {`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread started: " + Thread.currentThread().getName());
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Thread finished: " + Thread.currentThread().getName());
    }
}

public class ThreadMethodsExample {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();

        t1.setName("Thread-One");
        t2.setName("Thread-Two");

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("All threads finished.");
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Daemon vs User Threads</h2>
                <p style={styles.paragraph}>
                    Java threads can be classified into <strong>User Threads</strong> and <strong>Daemon Threads</strong>.
                    <br /><br />
                    A daemon thread is a low-priority background thread that runs for support tasks, such as garbage collection.
                    JVM exits once all user threads finish execution, even if daemon threads are still running.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
                        {`class DaemonThreadExample extends Thread {
    public void run() {
        if (Thread.currentThread().isDaemon()) {
            System.out.println("Daemon thread running...");
        } else {
            System.out.println("User thread running...");
        }
    }

    public static void main(String[] args) {
        DaemonThreadExample t1 = new DaemonThreadExample();
        DaemonThreadExample t2 = new DaemonThreadExample();

        t1.setDaemon(true);
        t1.start();
        t2.start();
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Thread Priority</h2>
                <p style={styles.paragraph}>
                    Java allows setting the priority of a thread using <code>setPriority()</code>. The priority ranges from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY).
                    However, thread scheduling is OS-dependent, so priority changes might not always guarantee execution order.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
                        {`class PriorityExample extends Thread {
    public void run() {
        System.out.println(Thread.currentThread().getName() + " priority: " + Thread.currentThread().getPriority());
    }

    public static void main(String[] args) {
        PriorityExample t1 = new PriorityExample();
        PriorityExample t2 = new PriorityExample();
        PriorityExample t3 = new PriorityExample();

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.NORM_PRIORITY);
        t3.setPriority(Thread.MAX_PRIORITY);

        t1.start();
        t2.start();
        t3.start();
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Synchronization & Race Conditions</h2>
                <p style={styles.paragraph}>
                    In multithreading, multiple threads access shared resources simultaneously. If not handled properly, this can lead to <strong>race conditions</strong> and <strong>data inconsistency</strong>.
                    <br /><br />
                    <strong>Race Condition:</strong> When multiple threads modify shared data at the same time, the final result may be unpredictable.
                    <br />
                    <strong>Example:</strong> Suppose two threads try to update a shared bank account balance at the same time. Without synchronization, the final balance may be incorrect.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
                        {`class BankAccount {
    private int balance = 100;

    public void withdraw(int amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " is withdrawing...");
            balance -= amount;
            System.out.println("Remaining balance: " + balance);
        } else {
            System.out.println("Not enough balance!");
        }
    }
}

class RaceConditionExample implements Runnable {
    BankAccount account = new BankAccount();

    public void run() {
        account.withdraw(80);
    }

    public static void main(String[] args) {
        RaceConditionExample obj = new RaceConditionExample();
        Thread t1 = new Thread(obj);
        Thread t2 = new Thread(obj);
        t1.start();
        t2.start();
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Synchronized Methods & Blocks</h2>
                <p style={styles.paragraph}>
                    To prevent race conditions, Java provides the <code>synchronized</code> keyword. It ensures that only one thread can execute the method/block at a time.
                </p>

                <h3 style={styles.subHeader}>Synchronized Method</h3>
                <div style={styles.codeBlock}>
                    <pre>
                        {`class BankAccount {
    private int balance = 100;

    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " is withdrawing...");
            balance -= amount;
            System.out.println("Remaining balance: " + balance);
        } else {
            System.out.println("Not enough balance!");
        }
    }
}`}
                    </pre>
                </div>

                <h3 style={styles.subHeader}>Synchronized Block</h3>
                <div style={styles.codeBlock}>
                    <pre>
                        {`class BankAccount {
    private int balance = 100;

    public void withdraw(int amount) {
        synchronized (this) {
            if (balance >= amount) {
                System.out.println(Thread.currentThread().getName() + " is withdrawing...");
                balance -= amount;
                System.out.println("Remaining balance: " + balance);
            } else {
                System.out.println("Not enough balance!");
            }
        }
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Intrinsic Locks & Object-Level Locking</h2>
                <p style={styles.paragraph}>
                    Every object in Java has an **intrinsic lock (monitor lock)**. When a thread enters a synchronized method or block, it acquires the lock and releases it once execution is completed.
                    <br /><br />
                    **Object-level locking** ensures that a particular instance of an object is locked.
                </p>

                <div style={styles.codeBlock}>
                    <pre>
                        {`class SharedResource {
    public synchronized void display() {
        System.out.println(Thread.currentThread().getName() + " is executing display()");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + " finished execution");
    }
}

public class ObjectLockingExample {
    public static void main(String[] args) {
        SharedResource obj = new SharedResource();

        Thread t1 = new Thread(() -> obj.display(), "Thread-1");
        Thread t2 = new Thread(() -> obj.display(), "Thread-2");

        t1.start();
        t2.start();
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Deadlocks (Causes & Prevention)</h2>
                <p style={styles.paragraph}>
                    A **deadlock** occurs when two or more threads are waiting for each other's locks, resulting in an infinite wait.
                </p>

                <h3 style={styles.subHeader}>Deadlock Example</h3>
                <div style={styles.codeBlock}>
                    <pre>
                        {`class Resource {
    void methodA(Resource r) {
        synchronized (this) {
            System.out.println(Thread.currentThread().getName() + " locked Resource 1");
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            synchronized (r) {
                System.out.println(Thread.currentThread().getName() + " locked Resource 2");
            }
        }
    }
}

public class DeadlockExample {
    public static void main(String[] args) {
        Resource r1 = new Resource();
        Resource r2 = new Resource();

        Thread t1 = new Thread(() -> r1.methodA(r2), "Thread-1");
        Thread t2 = new Thread(() -> r2.methodA(r1), "Thread-2");

        t1.start();
        t2.start();
    }
}`}
                    </pre>
                </div>

                <h3 style={styles.subHeader}>How to Prevent Deadlocks?</h3>
                <ul style={styles.list}>
                    <li>Avoid nested locks (acquiring multiple locks in different order).</li>
                    <li>Use **lock ordering** (always acquire locks in a fixed sequence).</li>
                    <li>Use **tryLock()** from <code>ReentrantLock</code> (prevents waiting indefinitely).</li>
                </ul>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Inter-thread Communication</h2>
                <p style={styles.paragraph}>
                    In Java, multiple threads communicate with each other using **wait(), notify(), and notifyAll()** methods. These methods are defined in the <code>Object</code> class and must be used inside **synchronized** blocks or methods.
                </p>

                <h3 style={styles.subHeader}>wait(), notify(), and notifyAll()</h3>
                <ul style={styles.list}>
                    <li><code>wait()</code> – Makes the current thread wait until another thread notifies it.</li>
                    <li><code>notify()</code> – Wakes up a single thread that is waiting on the object's monitor.</li>
                    <li><code>notifyAll()</code> – Wakes up all threads that are waiting on the object's monitor.</li>
                </ul>

                <div style={styles.codeBlock}>
                    <pre>
                        {`class SharedResource {
    synchronized void produce() {
        System.out.println("Producer: Producing item...");
        try {
            wait(); // Release the lock and wait for notification
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Producer: Resumed after notification!");
    }

    synchronized void consume() {
        System.out.println("Consumer: Consuming item...");
        notify(); // Notify the waiting producer thread
    }
}

public class WaitNotifyExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        Thread producer = new Thread(() -> resource.produce());
        Thread consumer = new Thread(() -> resource.consume());

        producer.start();
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        consumer.start();
    }
}`}
                    </pre>
                </div>
            </section>

            <section>
                <h2 style={styles.sectionHeader}>Producer-Consumer Problem</h2>
                <p style={styles.paragraph}>
                    The **Producer-Consumer problem** is a classic example of **Inter-thread Communication** where:
                    - The **Producer** generates items and adds them to a shared buffer.
                    - The **Consumer** removes items from the buffer.
                    - Synchronization is needed to prevent **race conditions** and **data inconsistency**.
                </p>

                <h3 style={styles.subHeader}>Producer-Consumer Example</h3>
                <div style={styles.codeBlock}>
                    <pre>
                        {`import java.util.LinkedList;

class Buffer {
    private LinkedList<Integer> queue = new LinkedList<>();
    private int capacity = 5;

    public synchronized void produce(int value) {
        while (queue.size() == capacity) {
            try {
                wait(); // Wait if buffer is full
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        queue.add(value);
        System.out.println("Produced: " + value);
        notify(); // Notify consumer
    }

    public synchronized void consume() {
        while (queue.isEmpty()) {
            try {
                wait(); // Wait if buffer is empty
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        int value = queue.removeFirst();
        System.out.println("Consumed: " + value);
        notify(); // Notify producer
    }
}

public class ProducerConsumer {
    public static void main(String[] args) {
        Buffer buffer = new Buffer();

        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 10; i++) {
                buffer.produce(i);
                try { Thread.sleep(500); } catch (InterruptedException e) {}
            }
        });

        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 10; i++) {
                buffer.consume();
                try { Thread.sleep(1000); } catch (InterruptedException e) {}
            }
        });

        producer.start();
        consumer.start();
    }
}`}
                    </pre>
                </div>

                <h3 style={styles.subHeader}>How It Works?</h3>
                <ul style={styles.list}>
                    <li>The **producer** adds elements to the shared buffer until it reaches full capacity.</li>
                    <li>If the buffer is full, the producer **waits** until the consumer removes an item.</li>
                    <li>The **consumer** removes elements from the buffer and **notifies** the producer to resume.</li>
                </ul>
            </section>



        </div>
    );
};

export default Multithreading;
