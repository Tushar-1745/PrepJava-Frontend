import React, { useState } from 'react';

function ChallengeList({ onSelectChallenge }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");

    const challenges = [
        {
            id: 1,
            name: "Two Sum",
            problem: "Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.",
            category: "Array",
            difficulty: "Easy",
            testCases: [
                { input: "[2, 7, 11, 15], target = 9", output: "[0, 1]" },
            ],
        },
        {
            id: 2,
            name: "Longest Substring Without Repeating Characters",
            problem: "Given a string s, find the length of the longest substring without repeating characters.",
            category: "String",
            difficulty: "Medium",
            company: "Google",
            testCases: [
                { input: "'abcabcbb'", output: "3" },
            ],
        },
        {
            id: 3,
            name: "Median of Two Sorted Arrays",
            category: "Array",
            difficulty: "Hard",
            company: "Facebook",
            testCases: [
                { input: "[1, 3], [2]", output: "2.0" },
            ],
        },
        {
            id: 4,
            name: "Valid Parentheses",
            category: "String",
            difficulty: "Easy",
            testCases: [
                { input: "'()'", output: "true" },
                { input: "'([)]'", output: "false" }
            ]
        },
        {
            id: 5,
            name: "Merge Two Sorted Lists",
            category: "Linked List",
            difficulty: "Easy",
            testCases: [
                { input: "[1, 2, 4], [1, 3, 4]", output: "[1, 1, 2, 3, 4, 4]" }
            ]
        },
        {
            id: 6,
            name: "Container With Most Water",
            category: "Array",
            difficulty: "Medium",
            company: "Amazon",
            testCases: [
                { input: "[1,8,6,2,5,4,8,3,7]", output: "49" }
            ]
        },
        {
            id: 7,
            name: "Find Minimum in Rotated Sorted Array",
            problem: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Find the minimum element in the array.",
            category: "Array",
            difficulty: "Medium",
            company: "Microsoft",
            testCases: [
                { input: "[3, 4, 5, 1, 2]", output: "1" }
            ]
        },
        {
            id: 8,
            name: "Word Search",
            problem: "Given a 2D board and a word, find if the word exists in the grid.",
            category: "Matrix",
            difficulty: "Medium",
            company: "Google",
            testCases: [
                { input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'", output: "true" }
            ]
        },
        {
            id: 9,
            name: "Merge Intervals",
            problem: "Given an array of intervals, merge all overlapping intervals.",
            category: "Array",
            difficulty: "Medium",
            company: "Microsoft",
            testCases: [
                { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }
            ]
        },
        {
            id: 10,
            name: "Largest Rectangle in Histogram",
            problem: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
            category: "Stack",
            difficulty: "Hard",
            company: "Amazon",
            testCases: [
                { input: "[2,1,5,6,2,3]", output: "10" }
            ]
        },
        {
            id: 11,
            name: "Kth Largest Element in an Array",
            problem: "Find the kth largest element in an unsorted array.",
            category: "Heap",
            difficulty: "Medium",
            company: "Facebook",
            testCases: [
                { input: "[3,2,1,5,6,4], k = 2", output: "5" }
            ]
        },
        {
            id: 12,
            name: "Reverse Nodes in k-Group",
            problem: "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.",
            category: "Linked List",
            difficulty: "Hard",
            company: "Google",
            testCases: [
                { input: "head = [1,2,3,4,5], k = 2", output: "[2,1,4,3,5]" }
            ]
        },
        {
            id: 13,
            name: "Unique Paths",
            problem: "A robot is located at the top-left corner of a m x n grid. Find the number of unique paths to reach the bottom-right corner.",
            category: "Dynamic Programming",
            difficulty: "Medium",
            company: "Microsoft",
            testCases: [
                { input: "m = 3, n = 7", output: "28" }
            ]
        }
        
        // More challenges...
    ];

    const categories = ["All", "Array", "String", "Hashing", "Dynamic Programming"];
    const difficulties = ["All", "Easy", "Medium", "Hard"];

    const filteredChallenges = challenges.filter(challenge => {
        return (
            (selectedCategory === "All" || challenge.category === selectedCategory) &&
            (selectedDifficulty === "All" || challenge.difficulty === selectedDifficulty)
        );
    });

    return (
        <div className="challenge-list">
            <h2>Select a Challenge</h2>

            <div className="filters">
                <div className="filter">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter">
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select
                        id="difficulty"
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        {difficulties.map((difficulty) => (
                            <option key={difficulty} value={difficulty}>
                                {difficulty}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <ul>
                {filteredChallenges.map((challenge) => (
                    <li key={challenge.id} onClick={() => onSelectChallenge(challenge)}>
                        <div className="challenge-info">
                            <span className="name">{challenge.name}</span>
                            <div className="badges">
                                <span className="badge category">{challenge.category}</span>
                                <span className="badge difficulty">{challenge.difficulty}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .challenge-list {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }

                .filters {
                    margin-bottom: 20px;
                    display: flex;
                    gap: 20px;
                }

                .filter label {
                    margin-right: 8px;
                }

                .filter select {
                    padding: 5px;
                    font-size: 14px;
                }

                .challenge-list ul {
                    list-style: none;
                    padding: 0;
                }

                .challenge-list li {
                    background: white;
                    padding: 15px;
                    margin: 10px 0;
                    border-radius: 5px;
                    cursor: pointer;
                    border: 1px solid #ccc;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .challenge-list li:hover {
                    background: #f0f0f0;
                }

                .challenge-info {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .challenge-info .name {
                    font-size: 16px;
                    font-weight: bold;
                }

                .badges {
                    margin-top: 10px;
                    display: flex;
                    gap: 10px;
                }

                .badge {
                    background-color: #f0f0f0;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 12px;
                    text-transform: uppercase;
                }

                .category {
                    background-color: #4CAF50;
                    color: white;
                }

                .difficulty {
                    background-color: #FF9800;
                    color: white;
                }

                .company {
                    background-color: #2196F3;
                    color: white;
                }
            `}</style>
        </div>
    );
}

export default ChallengeList;
