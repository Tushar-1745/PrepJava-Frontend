const universalSQLProblems = [
    {
        no: 1,
        name: "Find Employees with Salary Greater than Specific Salary",
        category: ["Filter Clause"],
        description: "Retrieve all employees from the 'employee' table whose salary is greater than a specified amount.",
        inputQuery: `
            CREATE TABLE employee (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                age INT CHECK (age > 0),
                salary DECIMAL(10,2) CHECK (salary >= 0)
            );

            INSERT INTO employee (id, name, age, salary) VALUES 
                (1, 'Alice', 25, 50000),
                (2, 'Bob', 30, 55000),
                (3, 'Charlie', 28, 60000),
                (4, 'David', 32, 62000),
                (5, 'Eve', 26, 48000);
        `,
        inputTable: {
            employee: [
                { id: 1, name: "Alice", age: 25, salary: 50000 },
                { id: 2, name: "Bob", age: 30, salary: 55000 },
                { id: 3, name: "Charlie", age: 28, salary: 60000 },
                { id: 4, name: "David", age: 32, salary: 62000 },
                { id: 5, name: "Eve", age: 26, salary: 48000 }
            ]
        },
        expectedOutput: [
            { id: 2, name: "Bob", age: 30, salary: 55000 },
            { id: 3, name: "Charlie", age: 28, salary: 60000 },
            { id: 4, name: "David", age: 32, salary: 62000 }
        ],
        difficulty: "Easy",
        headers: ["id", "name", "age", "salary"]
    },
    {
        no: 2,
        name: "Find Employee with the Highest Salary",
        category: ["Aggregate Functions"],
        description: "Retrieve the employee with the highest salary from the 'employee' table.",
        inputQuery: `
        CREATE TABLE employee (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT CHECK (age > 0),
            salary DECIMAL(10,2) CHECK (salary >= 0)
        );

        INSERT INTO employee (id, name, age, salary) VALUES 
            (1, 'Alice', 25, 50000),
            (2, 'Bob', 30, 55000),
            (3, 'Charlie', 28, 60000),
            (4, 'David', 32, 62000),
            (5, 'Eve', 26, 48000);
        `,
        inputTable: {
            employee: [
                { id: 1, name: "Alice", age: 25, salary: 50000 },
                { id: 2, name: "Bob", age: 30, salary: 55000 },
                { id: 3, name: "Charlie", age: 28, salary: 60000 },
                { id: 4, name: "David", age: 32, salary: 62000 },
                { id: 5, name: "Eve", age: 26, salary: 48000 }
            ]
        },
        expectedOutput: [
            { id: 4, name: "David", age: 32, salary: 62000 }
        ],
        difficulty: "Easy",
        headers: ["id", "name", "age", "salary"]
    },
    {
        no: 3,
        name: "Find Employee with the Second Highest Salary",
        category: ["Aggregate Functions"],
        description: "Retrieve the employee with the second highest salary from the 'employee' table.",
        inputQuery: `
        CREATE TABLE employee (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT CHECK (age > 0),
            salary DECIMAL(10,2) CHECK (salary >= 0)
        );

        INSERT INTO employee (id, name, age, salary) VALUES 
            (1, 'Alice', 25, 50000),
            (2, 'Bob', 30, 55000),
            (3, 'Charlie', 28, 60000),
            (4, 'David', 32, 62000),
            (5, 'Eve', 26, 48000);
        `,
        inputTable: {
            employee: [
                { id: 1, name: "Alice", age: 25, salary: 50000 },
                { id: 2, name: "Bob", age: 30, salary: 55000 },
                { id: 3, name: "Charlie", age: 28, salary: 60000 },
                { id: 4, name: "David", age: 32, salary: 62000 },
                { id: 5, name: "Eve", age: 26, salary: 48000 }
            ]
        },
        expectedOutput: [
            { id: 3, name: "Charlie", age: 28, salary: 60000 }
        ],
        difficulty: "Medium",
        headers: ["id", "name", "age", "salary"]
    },
    {
        no: 4,
        name: "Find Employee with the Nth Highest Salary",
        category: ["Aggregate Functions"],
        description: "Retrieve the employee with the Nth highest salary from the 'employee' table.",
        inputQuery: `
        CREATE TABLE employee (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT CHECK (age > 0),
            salary DECIMAL(10,2) CHECK (salary >= 0)
        );

        INSERT INTO employee (id, name, age, salary) VALUES 
            (1, 'Alice', 25, 50000),
            (2, 'Bob', 30, 55000),
            (3, 'Charlie', 28, 60000),
            (4, 'David', 32, 62000),
            (5, 'Eve', 26, 48000);
        `,
        inputTable: {
            employee: [
                { id: 1, name: "Alice", age: 25, salary: 50000 },
                { id: 2, name: "Bob", age: 30, salary: 55000 },
                { id: 3, name: "Charlie", age: 28, salary: 60000 },
                { id: 4, name: "David", age: 32, salary: 62000 },
                { id: 5, name: "Eve", age: 26, salary: 48000 }
            ]
        },
        expectedOutput: [], // N is variable, no fixed output
        difficulty: "Medium",
        headers: ["id", "name", "age", "salary"]
    },
    {
        no: 5,
        name: "Find Employee with the Minimum Salary",
        category: ["Aggregate Functions"],
        description: "Retrieve the employee with the minimum salary from the 'employee' table.",
        inputQuery: `
        CREATE TABLE employee (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT CHECK (age > 0),
            salary DECIMAL(10,2) CHECK (salary >= 0)
        );

        INSERT INTO employee (id, name, age, salary) VALUES 
            (1, 'Alice', 25, 50000),
            (2, 'Bob', 30, 55000),
            (3, 'Charlie', 28, 60000),
            (4, 'David', 32, 62000),
            (5, 'Eve', 26, 48000);
        `,
        inputTable: {
            employee: [
                { id: 1, name: "Alice", age: 25, salary: 50000 },
                { id: 2, name: "Bob", age: 30, salary: 55000 },
                { id: 3, name: "Charlie", age: 28, salary: 60000 },
                { id: 4, name: "David", age: 32, salary: 62000 },
                { id: 5, name: "Eve", age: 26, salary: 48000 }
            ]
        },
        expectedOutput: [
            { id: 5, name: "Eve", age: 26, salary: 48000 }
        ],
        difficulty: "Easy",
        headers: ["id", "name", "age", "salary"]
    },
    {
        no: 6,
        name: "Find Employee with the Nth Minimum Salary",
        category: ["Aggregate Functions"],
        description: "Retrieve the employee with the Nth minimum salary from the 'employee' table.",
        inputQuery: `
        CREATE TABLE employee (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT CHECK (age > 0),
            salary DECIMAL(10,2) CHECK (salary >= 0)
        );

        INSERT INTO employee (id, name, age, salary) VALUES 
            (1, 'Alice', 25, 50000),
            (2, 'Bob', 30, 55000),
            (3, 'Charlie', 28, 60000),
            (4, 'David', 32, 62000),
            (5, 'Eve', 26, 48000);
        `,
        inputTable: {
            employee: [
                { id: 1, name: "Alice", age: 25, salary: 50000 },
                { id: 2, name: "Bob", age: 30, salary: 55000 },
                { id: 3, name: "Charlie", age: 28, salary: 60000 },
                { id: 4, name: "David", age: 32, salary: 62000 },
                { id: 5, name: "Eve", age: 26, salary: 48000 }
            ]
        },
        expectedOutput: [], // N is variable, no fixed output
        difficulty: "Medium",
        headers: ["id", "name", "age", "salary"]
    },
    {
        "no": 7,
        "name": "Find Department with Maximum Employees",
        "category": ["Joins", "Aggregate Functions"],
        "description": "Retrieve the department with the maximum number of employees using a join between 'employee' and 'department' tables.",
        "inputQuery": `
        CREATE TABLE department (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );
    
        CREATE TABLE employee (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT CHECK (age > 0),
            salary DECIMAL(10,2) CHECK (salary >= 0),
            department_id INT,
            FOREIGN KEY (department_id) REFERENCES department(id)
        );
    
        INSERT INTO department (id, name) VALUES 
            (1, 'HR'),
            (2, 'Engineering'),
            (3, 'Sales');
    
        INSERT INTO employee (id, name, age, salary, department_id) VALUES 
            (1, 'Alice', 25, 50000, 2),
            (2, 'Bob', 30, 55000, 2),
            (3, 'Charlie', 28, 60000, 3),
            (4, 'David', 32, 62000, 1),
            (5, 'Eve', 26, 48000, 2),
            (6, 'Frank', 27, 51000, 3);
        `,
        "inputTable": {
            "department": [
                { "id": 1, "name": "HR" },
                { "id": 2, "name": "Engineering" },
                { "id": 3, "name": "Sales" }
            ],
            "employee": [
                { "id": 1, "name": "Alice", "age": 25, "salary": 50000, "department_id": 2 },
                { "id": 2, "name": "Bob", "age": 30, "salary": 55000, "department_id": 2 },
                { "id": 3, "name": "Charlie", "age": 28, "salary": 60000, "department_id": 3 },
                { "id": 4, "name": "David", "age": 32, "salary": 62000, "department_id": 1 },
                { "id": 5, "name": "Eve", "age": 26, "salary": 48000, "department_id": 2 },
                { "id": 6, "name": "Frank", "age": 27, "salary": 51000, "department_id": 3 }
            ]
        },
        "expectedOutput": [
            { "department_id": 2, "department_name": "Engineering", "employee_count": 3 }
        ],
        "difficulty": "Medium",
        "headers": ["department_id", "department_name", "employee_count"]
    },
    {
        "no": 8,
        "name": "Find Second Highest Salary in Each Department",
        "category": ["Subquery", "Correlated Subquery", "Ranking Logic"],
        "description": "For each department, retrieve the employee with the second highest salary.",
        "inputQuery": `
            CREATE TABLE department (
                id INT PRIMARY KEY,
                name VARCHAR(100) NOT NULL
            );
    
            CREATE TABLE employee (
                id INT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                salary DECIMAL(10,2) CHECK (salary >= 0),
                dept_id INT,
                FOREIGN KEY (dept_id) REFERENCES department(id)
            );
    
            INSERT INTO department (id, name) VALUES 
                (1, 'Engineering'),
                (2, 'Sales'),
                (3, 'Marketing');
    
            INSERT INTO employee (id, name, salary, dept_id) VALUES 
                (1, 'Alice', 90000, 1),
                (2, 'Bob', 85000, 1),
                (3, 'Charlie', 60000, 1),
                (4, 'David', 75000, 2),
                (5, 'Eve', 72000, 2),
                (6, 'Frank', 50000, 2),
                (7, 'Grace', 65000, 3);
        `,
        "inputTable": {
            "department": [
                { "id": 1, "name": "Engineering" },
                { "id": 2, "name": "Sales" },
                { "id": 3, "name": "Marketing" }
            ],
            "employee": [
                { "id": 1, "name": "Alice", "salary": 90000, "dept_id": 1 },
                { "id": 2, "name": "Bob", "salary": 85000, "dept_id": 1 },
                { "id": 3, "name": "Charlie", "salary": 60000, "dept_id": 1 },
                { "id": 4, "name": "David", "salary": 75000, "dept_id": 2 },
                { "id": 5, "name": "Eve", "salary": 72000, "dept_id": 2 },
                { "id": 6, "name": "Frank", "salary": 50000, "dept_id": 2 },
                { "id": 7, "name": "Grace", "salary": 65000, "dept_id": 3 }
            ]
        },
        "expectedOutput": [
            { "department": "Engineering", "employee": "Bob", "salary": 85000.00 },
            { "department": "Sales", "employee": "Eve", "salary": 72000.00 }
        ],
        "difficulty": "Hard",
        "headers": ["department", "employee", "salary"]
    }
    
    
]


export default universalSQLProblems;