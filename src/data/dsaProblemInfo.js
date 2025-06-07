const dsaProblemsInfo = [
    {
      problemName: "Find Maximum Subarray",
      description: "Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum.",
      examples: [
        { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
        { input: "[-1,-2,-3,-4]", output: "-1" }
      ],
      topCompanies: ["Amazon", "Microsoft", "Google"],
      suitableDataStructure: "Array"
    },
    {
      problemName: "Reverse a Linked List",
      description: "Reverse a singly linked list.",
      examples: [
        { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
        { input: "[1,2]", output: "[2,1]" }
      ],
      topCompanies: ["Facebook", "Google", "Amazon"],
      suitableDataStructure: "Linked List"
    },
    {
      problemName: "Evaluate Reverse Polish Notation",
      description: "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
      examples: [
        { input: "[2,1,+,3,*]", output: "9" },
        { input: "[4,13,5,/,+]", output: "6" }
      ],
      topCompanies: ["Amazon", "Google", "Facebook"],
      suitableDataStructure: "Stack"
    },
    {
      problemName: "Binary Tree Level Order Traversal",
      description: "Given a binary tree, return the level order traversal of its nodes' values.",
      examples: [
        { input: "[3,9,20,null,null,15,7]", output: "[3,9,20,15,7]" },
        { input: "[1]", output: "[1]" }
      ],
      topCompanies: ["Microsoft", "Facebook", "Amazon"],
      suitableDataStructure: "Binary Tree, Queue"
    },
    {
      problemName: "Shortest Path in Unweighted Graph",
      description: "Find the shortest path in an unweighted graph.",
      examples: [
        { input: "[[0,1], [1,2], [2,3], [3,4]]", output: "[0, 1, 2, 3, 4]" },
        { input: "[[0,2], [2,3], [3,4], [4,5]]", output: "[0, 2, 3, 4, 5]" }
      ],
      topCompanies: ["Google", "Microsoft", "Amazon"],
      suitableDataStructure: "Graph, BFS"
    },
    {
      problemName: "Two Sum",
      description: "Given an array of integers, return the indices of the two numbers such that they add up to a specific target.",
      examples: [
        { input: "[2, 7, 11, 15], target = 9", output: "[0, 1]" },
        { input: "[3, 2, 4], target = 6", output: "[1, 2]" }
      ],
      topCompanies: ["Google", "Microsoft", "Amazon", "Facebook", "Apple"],
      suitableDataStructure: "HashMap"
    },
    {
      problemName: "Container With Most Water",
      description: "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai), find two lines that together with the x-axis form a container.",
      examples: [
        { input: "[1,8,6,2,5,4,8,3,7]", output: "49" },
        { input: "[1,1]", output: "1" }
      ],
      topCompanies: ["Amazon", "Google", "Facebook"],
      suitableDataStructure: "Array"
    },
    {
      problemName: "Longest Substring Without Repeating Characters",
      description: "Given a string, find the length of the longest substring without repeating characters.",
      examples: [
        { input: "\"abcabcbb\"", output: "3" },
        { input: "\"bbbbb\"", output: "1" }
      ],
      topCompanies: ["Google", "Amazon", "Microsoft", "Apple"],
      suitableDataStructure: "Sliding Window, HashSet"
    },
    {
      problemName: "Valid Parentheses",
      description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      examples: [
        { input: "\"()\"", output: "true" },
        { input: "\"()[]{}\"", output: "true" }
      ],
      topCompanies: ["Google", "Facebook", "Microsoft"],
      suitableDataStructure: "Stack"
    },
    {
      problemName: "Merge Two Sorted Lists",
      description: "Merge two sorted linked lists into one sorted list.",
      examples: [
        { input: "[1,2,4], [1,3,4]", output: "[1,1,2,3,4,4]" },
        { input: "[5,6,7], [2,4,8]", output: "[2,4,5,6,7,8]" }
      ],
      topCompanies: ["Amazon", "Google", "Facebook"],
      suitableDataStructure: "Linked List"
    },
    {
      problemName: "Best Time to Buy and Sell Stock",
      description: "You are given an array where each element represents the price of a stock on a given day. Find the maximum profit you can make by buying and selling on different days.",
      examples: [
        { input: "[7,1,5,3,6,4]", output: "5" },
        { input: "[7,6,4,3,1]", output: "0" }
      ],
      topCompanies: ["Amazon", "Google", "Facebook"],
      suitableDataStructure: "Array"
    },
    // Add more problems from your list here in a similar structure
  ];
  
  export default dsaProblemsInfo;
  