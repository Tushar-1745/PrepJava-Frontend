const universalDsaProblems = [
    {
        no: 1,
        name: "print Hello World ",
        category: ['String'],
        description: 'printing hello world',
        examples: [
            { input: 'Hello World', output: 'Hello World' }
        ],
        topCompanies: ["Google", "Facebook"],
        suitableDataStructure: "String",
        difficulty: "Easy",
    },
    {
        no: 2,
        name: "Reverse String",
        category: ['String'],
        description: "Given a string, reverse it",
        examples: [{ input: "prepjava", output: "avajperp" }, { input: "sits", output: "stis" }],
        testCases: [{ input: 'tushar', output: 'rahsut' }, { input: 'madane', output: 'enadam' }, { input: "shubhangi", output: "ignahbuhs" }, { input: "teli", output: "ilet" }],
        topCompanies: ["Google", "Facebook"],
        suitableDataStructure: ["String", "StringBuilder", "Array"],
        difficulty: "Medium",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine(); // Provided input
        String ans = reverseString(input);
        System.out.println(ans);
    }

    public static String reverseString(String str) {
        // User has to write code here
    }
}
`
        }
    },
    {
        no: 3,
        name: "Valid Parentheses",
        category: ['Stack'],
        description: 'Given a string, you have to tell if parentheses are valid',
        examples: [{ input: '{()}', output: 'true' }, { input: "(())(", output: "false" }],
        testCases: [{ input: '{()}', output: 'true' }, { input: "(())(", output: "false" }, { input: "((}}}", output: 'false' }, { input: "(())", output: "true" }, { input: "{{", output: "false" }],
        topCompanies: ["Google", "Facebook"],
        suitableDataStructure: ["String", "StringBuilder", "Array", "Stack"],
        difficulty: "Medium",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine(); // Provided input
        boolean ans = validParanteses(input);
        System.out.println(ans);
    }

    public static boolean validParanteses(String str) {
        // User has to write code here
    }
}
`
        },
    },

    {
        no: 4,
        name: "Frequency of Character in a String",
        category: ['HashMap', 'String'],
        description: "Given a string, calculate the frequency of each character and return it in a specified format.",
        examples: [
            {
                input: '"aabbcc"',
                output: '{"a": 2, "b": 2, "c": 2}'
            },
            {
                input: '"abcabc"',
                output: '{"a": 2, "b": 2, "c": 2}'
            },
            {
                input: '"abcd"',
                output: '{"a": 1, "b": 1, "c": 1, "d": 1}'
            }
        ],
        topCompanies: ["Amazon", "Microsoft", "Google"],
        suitableDataStructure: ["String", "HashMap", "Array", "Frequency Array"],
        difficulty: "Medium",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine(); // Provided input as comma-separated values
        Character ch = 'a';
        String result = characterFrequency(input, ch);
        System.out.println(result);
    }

    public static int characterFrequency(String str, char ch) {
        // Create a HashMap to store the frequency of each character
        HashMap<Character, Integer> hm = new HashMap<>();
    
        // Loop through each character in the string
        for (char c : str.toCharArray()) {
            // Increment the count of each character in the map
            hm.put(c, hm.getOrDefault(c, 0) + 1);
        }
    
        // Return the frequency of the character passed as an argument
        return hm.getOrDefault(ch, 0);  // If the character is not found, return 0
    }
    
}`
        }
    },

    {
        no: 5,
        name: "Find the Missing Number",
        category: ['Array'],

        description: "Given an array containing n distinct numbers taken from 0 to n, find the missing number.",
        examples: [
            { input: "[3, 0, 1]", output: "2" },
            { input: "[0, 1, 2, 4, 5]", output: "3" }
        ],
        testCases: [
            { input: "[3, 0, 1]", output: "2" },
            { input: "[0, 1, 2, 4, 5]", output: "3" },
            { input: "[1, 2, 3, 4, 6]", output: "5" },
            { input: "[0, 2]", output: "1" },
            { input: "[5, 3, 1, 0, 2]", output: "4" }
        ],
        topCompanies: ["Amazon", "Microsoft"],
        suitableDataStructure: ["Array", "Set", "Bit Manipulation"],
        difficulty: "Easy",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            String input = scanner.nextLine(); // Provided input as comma-separated values
            int[] nums = parseInput(input); // Convert input string to integer array
            int result = findMissingNumber(nums);
            System.out.println(result);
        }
    
        public static int findMissingNumber(int[] nums) {
            // User has to write code here
        }
    
        public static int[] parseInput(String input) {
            // Convert comma-separated string to array
            String[] parts = input.replace("[", "").replace("]", "").split(",");
            int[] arr = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                arr[i] = Integer.parseInt(parts[i].trim());
            }
            return arr;
        }
    }`
        }
    },
    {
        no: 6,
        name: "Digit Frequency",
        category: ['Array', 'HashMap'],
        description: "Count the frequency of a given digit in a number",
        examples: [
            { input: "123456\n3", output: "1" },
            { input: "555555\n5", output: "6" }
        ],
        testCases: [
            { input: "789123789\n7", output: "2" },
            { input: "14454\n4", output: "3" },
            { input: "123456789\n9", output: "1" },
            { input: "222222\n2", output: "6" }
        ],
        topCompanies: ["Google", "Amazon"],
        suitableDataStructure: ["Array"],
        difficulty: "Easy",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scn = new Scanner(System.in);
            int n = scn.nextInt();
            int data = scn.nextInt();
            int count = digitFrequency(n, data);
            System.out.println(count);
        }
    
        public static int digitFrequency(int n, int data) {
            // User has to write code here
            
        }
    }`
        }
    },
    {
        no: 7,
        name: "Bubble Sort",
        category: ['Array'],
        description: "Sort an array using the Bubble Sort algorithm.",
        examples: [
            { input: "5\n5 2 9 1 5", output: "1 2 5 5 9" },
            { input: "4\n4 3 2 1", output: "1 2 3 4" }
        ],
        testCases: [
            { input: "6\n64 34 25 12 22 11", output: "11 12 22 25 34 64" },
            { input: "5\n5 1 4 2 8", output: "1 2 4 5 8" },
            { input: "3\n3 2 1", output: "1 2 3" },
            { input: "1\n10", output: "10" }
        ],
        topCompanies: ["Google", "Facebook"],
        suitableDataStructure: ["Array"],
        difficulty: "Hard",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;
    
public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }
        bubbleSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}`
        }
    },

    {
        no: 8,
        name: "Matrix Multiplication",
        category: ['Array'],
        description: "Given two matrices, compute their product. The number of columns in the first matrix must equal the number of rows in the second matrix. If this condition is not met, return an error message: 'Error: Number of columns in Matrix A must equal number of rows in Matrix B.'",
        examples: [
            {
                input: "[[1, 2], [3, 4]]; [[2, 0], [1, 2]]",
                output: "[[4, 4], [10, 8]]"
            },
            {
                input: "[[1, 0, 2], [-1, 3, 1]]; [[3, 1], [2, 1], [1, 0]]",
                output: "[[5, 1], [4, 2]]"
            }
        ],
        testCases: [
            {
                input: "[[1, 2], [3, 4]]; [[2, 0], [1, 2]]",
                output: "[[4, 4], [10, 8]]"
            },
            {
                "input": "[[1, 0, 2], [-1, 3, 1]]; [[3, 1], [2, 1], [1, 0]]",
                "output": "[[5, 1], [4, 2]]"
            },
            {
                "input": "[[2, 3, 4], [1, 0, 1]]; [[1, 2], [0, 1], [4, 0]]",
                "output": "[[18, 10], [5, 2]]"
            },
            {
                "input": "[[1, 2]]; [[3], [4]]",
                "output": "[[11]]"
            },
            {
                "input": "[[1, 1], [1, 1]]; [[2, 2], [2, 2]]",
                "output": "[[4, 4], [4, 4]]"
            },
            {
                "input": "[[1, 2, 3]]; [[1, 2]]",
                "output": "Error: Number of columns in Matrix A must equal number of rows in Matrix B."
            }
        ],
        "topCompanies": ["Google", "Facebook"],
        "suitableDataStructure": ["2D Array"],
        "difficulty": "Medium",
        "defaultCode": {
            "language": "Java",
            "code": `
    import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int[][] matrixA = parseInput(scanner.nextLine());
            int[][] matrixB = parseInput(scanner.nextLine());
            
            // Validate dimensions before attempting multiplication
            if (matrixA[0].length != matrixB.length) {
                System.out.println("Error: Number of columns in Matrix A must equal number of rows in Matrix B.");
            } else {
                int[][] result = multiplyMatrices(matrixA, matrixB);
                printMatrix(result);
            }
        }
    
        // This method is for the user to implement
        public static int[][] multiplyMatrices(int[][] matrixA, int[][] matrixB) {
            
            // user has to write code here
        }
    
        public static int[][] parseInput(String input) {
            String[] rows = input.split(";");
            int[][] matrix = new int[rows.length][];
            for (int i = 0; i < rows.length; i++) {
                String[] values = rows[i].replace("[", "").replace("]", "").split(",");
                matrix[i] = new int[values.length];
                for (int j = 0; j < values.length; j++) {
                    matrix[i][j] = Integer.parseInt(values[j].trim());
                }
            }
            return matrix;
        }
    
        public static void printMatrix(int[][] matrix) {
            System.out.print("[");
            for (int i = 0; i < matrix.length; i++) {
                System.out.print("[");
                for (int j = 0; j < matrix[i].length; j++) {
                    System.out.print(matrix[i][j]);
                    if (j < matrix[i].length - 1) System.out.print(", ");
                }
                System.out.print("]");
                if (i < matrix.length - 1) System.out.print(", ");
            }
            System.out.println("]");
        }
    }
            `
        }
    },

    {
        "no": 9,
        "name": "Prime Number Check",
        category: ['Array'],
        "description": "Determine if a given number is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself.",
        "examples": [
            {
                "input": "5",
                "output": "true"
            },
            {
                "input": "10",
                "output": "false"
            }
        ],
        "testCases": [
            {
                "input": "2",
                "output": "true"
            },
            {
                "input": "17",
                "output": "true"
            },
            {
                "input": "4",
                "output": "false"
            },
            {
                "input": "1",
                "output": "false"
            },
            {
                "input": "19",
                "output": "true"
            }
        ],
        "topCompanies": ["Google", "Amazon"],
        "suitableDataStructure": ["Number"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int number = scanner.nextInt();
            boolean isPrime = isPrimeNumber(number);
            System.out.println("Is the number prime? " + isPrime);
        }
    
        public static boolean isPrimeNumber(int number) {
            if (number <= 1) {
                return false; // 0 and 1 are not prime numbers
            }
            for (int i = 2; i <= Math.sqrt(number); i++) {
                if (number % i == 0) {
                    return false; // Divisible by a number other than 1 and itself
                }
            }
            return true;
        }
    }`
        }
    },
    {
        no: 10,
        name: "Toggle Case of a String",
        category: ['String'],
        description: "Given a string, toggle the case of each character. Convert uppercase letters to lowercase and vice versa.",
        examples: [
            { "input": "\"Hello World\"", "output": "\"hELLO wORLD\"" },
            { "input": "\"Java Programming\"", "output": "\"jAVA pROGRAMMING\"" },
        ],
        "testCases": [
            { "input": "\"Hello World\"", "output": "\"hELLO wORLD\"" },
            { "input": "\"Java Programming\"", "output": "\"jAVA pROGRAMMING\"" },
            { "input": "\"aBcDeF\"", "output": "\"AbCdEf\"" },
        ],
        "topCompanies": ["Amazon", "Microsoft", "Facebook"],
        "suitableDataStructure": ["String", "Character"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;
    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            String input = scanner.nextLine();
            String result = toggleCase(input);
            System.out.println(result);
        }
    
        public static String toggleCase(String str) {
            StringBuilder result = new StringBuilder();
            for (char c : str.toCharArray()) {
                if (Character.isLowerCase(c)) {
                    result.append(Character.toUpperCase(c));
                } else if (Character.isUpperCase(c)) {
                    result.append(Character.toLowerCase(c));
                } else {
                    result.append(c);
                }
            }
            return result.toString();
        }
    }`
        }
    },
    {
        "no": 11,
        "name": "Rotate a Number",
        category: ['Array'],
        "description": "Given a number, rotate its digits by a specified number of places to the left or right. Negative rotation means left rotation, and positive rotation means right rotation.",
        "examples": [
            { "input": "n = 12345, k = 2", "output": "45123" },
            { "input": "n = 12345, k = -2", "output": "34512" }
        ],
        "testCases": [
            { "input": "n = 12345, k = 3", "output": "34512" },
            { "input": "n = 12345, k = -3", "output": "45123" },
            { "input": "n = 98765, k = 1", "output": "59876" },
            { "input": "n = 98765, k = -1", "output": "87659" },
            { "input": "n = 54321, k = 5", "output": "54321" }
        ],
        "topCompanies": ["Adobe", "Amazon"],
        "suitableDataStructure": ["String", "Array"],
        "difficulty": "Medium",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int n = scanner.nextInt(); // Input number
            int k = scanner.nextInt(); // Number of rotations
            int rotated = rotateNumber(n, k);
            System.out.println(rotated);
        }
    
        public static int rotateNumber(int n, int k) {
            // User has to write code here
        }
    }`
        }
    },
    {
        no: 12,
        name: "Remove Vowels from String",
        category: ['String'],
        description: "Given a string, remove all vowels ('a', 'e', 'i', 'o', 'u') from it. The string may contain both uppercase and lowercase letters.",
        examples: [
            { input: "Hello World", output: "Hll Wrld" },
            { input: "Java Programming", output: "Jv Prgrmmng" }
        ],
        testCases: [
            { input: "Vowel Removal", output: "Vwl Rml" },
            { input: "This is a test", output: "Ths s  tst" },
            { input: "AEIOU", output: "" },
            { input: "abcde", output: "bcd" },
            { input: "XYZ", output: "XYZ" }
        ],
        topCompanies: ["Google", "Microsoft", "Apple"],
        suitableDataStructure: ["String"],
        difficulty: "Easy",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine(); // Input string
        String result = removeVowels(str);
        System.out.println(result);
    }

    public static String removeVowels(String str) {
        // User has to write code here
    }
}`
        }
    },

    {
        no: 13,
        name: "Square Number",
        category: ['Array'],
        description: "Given a number, check if it is a perfect square (i.e., the square of an integer).",
        examples: [
            { input: 16, output: 'true' },
            { input: 20, output: 'false' }
        ],
        testCases: [
            { input: 25, output: 'true' },
            { input: 50, output: 'false' },
            { input: 100, output: 'true' },
            { input: 121, output: 'true' },
            { input: 10, output: 'false' }
        ],
        topCompanies: ["Google", "Amazon", "Microsoft"],
        suitableDataStructure: ["Integer"],
        difficulty: "Easy",
        defaultCode: {
            language: "Java",
            code:
                `import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            int n = scanner.nextInt(); // Input number
            boolean isSquare = isSquareNumber(n);
            System.out.println(isSquare);
        }
    
        public static boolean isSquareNumber(int n) {
            // User has to write code here
        }
    }`
        }
    },
    {
        "no": 14,
        "name": "Reverse Array",
        category: ['Array'],
        "description": "Reverse the elements of an array.",
        "examples": [
            { "input": "5\n1 2 3 4 5", "output": "5 4 3 2 1" },
            { "input": "4\n10 20 30 40", "output": "40 30 20 10" }
        ],
        "testCases": [
            { "input": "6\n1 2 3 4 5 6", "output": "6 5 4 3 2 1" },
            { "input": "5\n9 8 7 6 5", "output": "5 6 7 8 9" },
            { "input": "3\n100 200 300", "output": "300 200 100" },
            { "input": "1\n42", "output": "42" }
        ],
        "topCompanies": ["Amazon", "Microsoft"],
        "suitableDataStructure": ["Array"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scn = new Scanner(System.in);
            int n = scn.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = scn.nextInt();
            }
            reverseArray(arr);
            for (int num : arr) {
                System.out.print(num + " ");
            }
        }
    
        public static void reverseArray(int[] arr) {
            int start = 0, end = arr.length - 1;
            while (start < end) {
                // Swap arr[start] and arr[end]
                int temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
        }
    }`
        }
    },
    {
        no: 15,
        name: "Two Sum",
        category: ['Array', 'HashMap'],
        "description": "Find two numbers in an array that add up to a given target.",
        "examples": [
            { "input": "4\n2 7 11 15\n9", "output": "0 1" },
            { "input": "5\n1 2 3 4 5\n6", "output": "1 3" }
        ],
        "testCases": [
            { "input": "6\n3 2 4 6 7 11\n9", "output": "1 4" },
            { "input": "4\n10 20 30 40\n50", "output": "0 3" },
            { "input": "5\n5 1 9 3 2\n10", "output": "1 2" },
            { "input": "2\n1 2\n3", "output": "0 1" }
        ],
        "topCompanies": ["Google", "Amazon", "Facebook"],
        "suitableDataStructure": ["Array", "HashMap"],
        "difficulty": "Medium",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.HashMap;
    import java.util.Scanner;
    
    public class Main {
        public static void main(String[] args) {
            Scanner scn = new Scanner(System.in);
            int n = scn.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = scn.nextInt();
            }
            int target = scn.nextInt();
            int[] result = twoSum(arr, target);
            if (result.length == 2) {
                System.out.println(result[0] + " " + result[1]);
            } else {
                System.out.println("No solution found");
            }
        }
    
        public static int[] twoSum(int[] nums, int target) {
            HashMap<Integer, Integer> map = new HashMap<>();
            for (int i = 0; i < nums.length; i++) {
                int complement = target - nums[i];
                if (map.containsKey(complement)) {
                    return new int[] { map.get(complement), i };
                }
                map.put(nums[i], i);
            }
            return new int[] {}; // No solution found
        }
    }`
        }
    },
    {
        "no": 16,
        "name": "Add at First Position",
        "category": ["LinkedList"],
        "description": "Add an element at the first position of a linked list.",
        "examples": [
            { "input": "Initial: 1 -> 2 -> 3, Element: 0", "output": "0 -> 1 -> 2 -> 3" },
            { "input": "Initial: , Element: 5", "output": "5" }
        ],
        "testCases": [
            { "input": "Initial: 10 -> 20, Element: 5", "output": "5 -> 10 -> 20" },
            { "input": "Initial: , Element: 100", "output": "100" }
        ],
        "topCompanies": ["Google", "Microsoft"],
        "suitableDataStructure": ["LinkedList"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        addAtFirst(list, 5); // Example input
        System.out.println(list);
    }

    public static void addAtFirst(LinkedList<Integer> list, int element) {
        list.addFirst(element);
    }
}`
        }
    },
    {
        "no": 17,
        "name": "Add at Last Position",
        "category": ["LinkedList"],
        "description": "Add an element at the last position of a linked list.",
        "examples": [
            { "input": "Initial: 1 -> 2 -> 3, Element: 4", "output": "1 -> 2 -> 3 -> 4" },
            { "input": "Initial: , Element: 10", "output": "10" }
        ],
        "testCases": [
            { "input": "Initial: 20 -> 30, Element: 40", "output": "20 -> 30 -> 40" },
            { "input": "Initial: , Element: 7", "output": "7" }
        ],
        "topCompanies": ["Amazon", "Facebook"],
        "suitableDataStructure": ["LinkedList"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        addAtLast(list, 10); // Example input
        System.out.println(list);
    }

    public static void addAtLast(LinkedList<Integer> list, int element) {
        list.addLast(element);
    }
}`
        }
    },
    {
        "no": 18,
        "name": "Add at Specific Index",
        "category": ["LinkedList"],
        "description": "Add an element at a specific index in a linked list.",
        "examples": [
            { "input": "Initial: 1 -> 3, Index: 1, Element: 2", "output": "1 -> 2 -> 3" },
            { "input": "Initial: , Index: 0, Element: 5", "output": "5" }
        ],
        "testCases": [
            { "input": "Initial: 10 -> 20 -> 40, Index: 2, Element: 30", "output": "10 -> 20 -> 30 -> 40" },
            { "input": "Initial: , Index: 0, Element: 15", "output": "15" }
        ],
        "topCompanies": ["Amazon", "Apple"],
        "suitableDataStructure": ["LinkedList"],
        "difficulty": "Medium",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(0); // Initialize with an element
        addAtIndex(list, 1, 5); // Example input
        System.out.println(list);
    }

    public static void addAtIndex(LinkedList<Integer> list, int index, int element) {
        if (index < 0 || index > list.size()) {
            System.out.println("Invalid index");
            return;
        }
        list.add(index, element);
    }
}`
        }
    },
    {
        "no": 19,
        "name": "Find Minimum and Maximum in an Array",
        "category": ["Array"],
        "description": "Find the smallest and largest elements in an array.",
        "examples": [{ "input": "[3, 5, 1, 9, 2]", "output": "(1, 9)" }, { "input": "[10, 20, 30, 5, 25]", "output": "(5, 30)" }],
        "testCases": [{ "input": "[7, 8, 3, 1, 6]", "output": "(1, 8)" }, { "input": "[15, 23, 4, 42, 19]", "output": "(4, 42)" }],
        "topCompanies": ["Amazon", "Microsoft"],
        "suitableDataStructure": ["Array"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();
        int[] result = findMinMax(arr);
        System.out.println("(" + result[0] + ", " + result[1] + ")");
    }

    public static int[] findMinMax(int[] arr) {
        // User has to write code here
    }
}`
        }
    },
    {
        "no": 20,
        "name": "Find Second Largest and Second Smallest",
        "category": ["Array"],
        "description": "Find the second largest and second smallest elements in an array.",
        "examples": [{ "input": "[3, 5, 1, 9, 2]", "output": "(2, 5)" }, { "input": "[10, 20, 30, 5, 25]", "output": "(10, 25)" }],
        "testCases": [{ "input": "[7, 8, 3, 1, 6]", "output": "(3, 7)" }, { "input": "[15, 23, 4, 42, 19]", "output": "(15, 23)" }],
        "topCompanies": ["Google", "Facebook"],
        "suitableDataStructure": ["Array"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();
        int[] result = findSecondMinMax(arr);
        System.out.println("(" + result[0] + ", " + result[1] + ")");
    }

    public static int[] findSecondMinMax(int[] arr) {
        // User has to write code here
    }
}`
        }
    },
    {
        "no": 21,
        "name": "Check if Array is Sorted",
        "category": ["Array"],
        "description": "Check whether a given array is sorted in ascending order.",
        "examples": [{ "input": "[1, 2, 3, 4, 5]", "output": "true" }, { "input": "[5, 3, 1, 2]", "output": "false" }],
        "testCases": [{ "input": "[2, 4, 6, 8, 10]", "output": "true" }, { "input": "[10, 9, 8, 7]", "output": "false" }],
        "topCompanies": ["Amazon", "Google"],
        "suitableDataStructure": ["Array"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();
        System.out.println(isSorted(arr));
    }

    public static boolean isSorted(int[] arr) {
        // User has to write code here
    }
}`
        }
    },
    {
        "no": 22,
        "name": "Remove Duplicates from Sorted Array",
        "category": ["Array"],
        "description": "Remove duplicates from a sorted array in-place and return the new length.",
        "examples": [{ "input": "[1, 1, 2, 3, 3, 4]", "output": "[1, 2, 3, 4]" }, { "input": "[0, 0, 1, 1, 2, 3, 3]", "output": "[0, 1, 2, 3]" }],
        "testCases": [{ "input": "[2, 2, 3, 4, 4, 5]", "output": "[2, 3, 4, 5]" }, { "input": "[1, 1, 1, 2, 3, 3]", "output": "[1, 2, 3]" }],
        "topCompanies": ["Microsoft", "Amazon"],
        "suitableDataStructure": ["Array"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();
        int newLength = removeDuplicates(arr);
        for (int i = 0; i < newLength; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static int removeDuplicates(int[] arr) {
        // User has to write code here
    }
}`
        }
    },
    {
        "no": 23,
        "name": "Move Zeros to End",
        "category": ["Array"],
        "description": "Move all zeros in an array to the end while maintaining the relative order of non-zero elements.",
        "examples": [
            { "input": "5\n0 1 0 3 12", "output": "1 3 12 0 0" },
            { "input": "6\n1 2 0 0 4 5", "output": "1 2 4 5 0 0" }
        ],
        "testCases": [
            { "input": "7\n0 0 1 2 3 0 4", "output": "1 2 3 4 0 0 0" },
            { "input": "5\n10 20 0 30 0", "output": "10 20 30 0 0" },
            { "input": "4\n0 0 0 1", "output": "1 0 0 0" },
            { "input": "3\n5 6 7", "output": "5 6 7" }
        ],
        "topCompanies": ["Google", "Facebook"],
        "suitableDataStructure": ["Array"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                "import java.util.Scanner;\n\n" +
                "public class Main {\n" +
                "    public static void main(String[] args) {\n" +
                "        Scanner scn = new Scanner(System.in);\n" +
                "        int n = scn.nextInt();\n" +
                "        int[] arr = new int[n];\n" +
                "        for (int i = 0; i < n; i++) {\n" +
                "            arr[i] = scn.nextInt();\n" +
                "        }\n" +
                "        moveZeroes(arr);\n" +
                "        for (int num : arr) {\n" +
                "            System.out.print(num + \" \");\n" +
                "        }\n" +
                "    }\n\n" +
                "    public static void moveZeroes(int[] arr) {\n" +
                "        int nonZeroIndex = 0;\n\n" +
                "        for (int i = 0; i < arr.length; i++) {\n" +
                "            if (arr[i] != 0) {\n" +
                "                arr[nonZeroIndex++] = arr[i];\n" +
                "            }\n" +
                "        }\n\n" +
                "        while (nonZeroIndex < arr.length) {\n" +
                "            arr[nonZeroIndex++] = 0;\n" +
                "        }\n" +
                "    }\n" +
                "}"
        }
    },

    {
        "no": 24,
        "name": "Check if Array is Sorted",
        "category": ["Array"],
        "description": "Determine whether a given array is sorted in non-decreasing order.",
        "examples": [
            { "input": "5\n1 2 3 4 5", "output": "true" },
            { "input": "4\n10 20 30 40", "output": "true" },
            { "input": "6\n1 3 2 4 5 6", "output": "false" }
        ],
        "testCases": [
            { "input": "6\n1 2 3 4 5 6", "output": "true" },
            { "input": "5\n5 4 3 2 1", "output": "false" },
            { "input": "3\n100 200 300", "output": "true" },
            { "input": "1\n42", "output": "true" },
            { "input": "7\n1 1 2 2 3 3 3", "output": "true" }
        ],
        "topCompanies": ["Google", "Amazon"],
        "suitableDataStructure": ["Array"],
        "difficulty": "Easy",
        "defaultCode": {
            "language": "Java",
            "code":
                "import java.util.Scanner;\n\n" +
                "public class Main {\n" +
                "    public static void main(String[] args) {\n" +
                "        Scanner scn = new Scanner(System.in);\n" +
                "        int n = scn.nextInt();\n" +
                "        int[] arr = new int[n];\n" +
                "        for (int i = 0; i < n; i++) {\n" +
                "            arr[i] = scn.nextInt();\n" +
                "        }\n" +
                "        System.out.println(isSorted(arr));\n" +
                "    }\n\n" +
                "    public static boolean isSorted(int[] arr) {\n" +
                "        for (int i = 1; i < arr.length; i++) {\n" +
                "            if (arr[i] < arr[i - 1]) {\n" +
                "                return false;\n" +
                "            }\n" +
                "        }\n" +
                "        return true;\n" +
                "    }\n" +
                "}"
        }
    },   
];

export default universalDsaProblems;