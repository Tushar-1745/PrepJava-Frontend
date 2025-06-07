import React, { useState } from "react";

const Backtracking = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const styles = {
        container: {
            padding: "20px",
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: "#f9f9f9",
            color: "#333",
            lineHeight: "1.5",
        },
        header: {
            fontSize: "2.5rem",
            textAlign: "center",
            color: "#222",
            marginBottom: "20px",
        },
        sectionHeader: {
            fontSize: "1.5rem",
            color: "black",
            borderBottom: "2px solid black",
            display: "inline-block",
            marginBottom: "10px",
        },
        paragraph: {
            fontSize: "1.1rem",
            margin: "10px 0",
        },
        codeBlock: {
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1rem",
            marginBottom: "20px",
        },
        copyButton: {
            backgroundColor: "#4A90E2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
            fontSize: "0.8rem",
            marginBottom: "5px",
        },
        list: {
            marginLeft: "20px",
        },
        listItem: {
            marginBottom: "5px",
        },
    };

    const permutationCode = `
import java.util.ArrayList;
import java.util.List;

public class Permutations {
    public static void permute(char[] s, int l, int r, List<String> result) {
        if (l == r) {
            result.add(new String(s));
        } else {
            for (int i = l; i <= r; i++) {
                swap(s, l, i);
                permute(s, l + 1, r, result);
                swap(s, l, i); // Backtrack
            }
        }
    }

    public static List<String> getPermutations(String str) {
        List<String> result = new ArrayList<>();
        char[] s = str.toCharArray();
        permute(s, 0, s.length - 1, result);
        return result;
    }

    public static void swap(char[] s, int i, int j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    public static void main(String[] args) {
        String input = "ABC";
        List<String> permutations = getPermutations(input);
        System.out.println(permutations);
    }
}
`;

    const nQueensCode = `
public class NQueens {
    public static boolean solveNQueens(int[][] board, int col) {
        if (col >= board.length) {
            return true;
        }

        for (int i = 0; i < board.length; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 1;

                if (solveNQueens(board, col + 1)) {
                    return true;
                }

                board[i][col] = 0; // Backtrack
            }
        }
        return false;
    }

    public static boolean isSafe(int[][] board, int row, int col) {
        // ... (Implementation of isSafe method) ...
        return true; // Placeholder
    }

    public static void main(String[] args) {
        int N = 4;
        int[][] board = new int[N][N];
        if (solveNQueens(board, 0)) {
            // Print the solution
        } else {
            System.out.println("Solution does not exist");
        }
    }
}
`;

    const sudokuCode = `
public class SudokuSolver {
    public static boolean solveSudoku(int[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == 0) {
                    for (int number = 1; number <= 9; number++) {
                        if (isSafe(board, row, col, number)) {
                            board[row][col] = number;

                            if (solveSudoku(board)) {
                                return true;
                            } else {
                                board[row][col] = 0; // Backtrack
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    public static boolean isSafe(int[][] board, int row, int col, int number) {
        // ... (Implementation of isSafe method) ...
        return true; // Placeholder
    }

    public static void main(String[] args) {
        int[][] board = new int[9][9];
        // ... (Initialize Sudoku board) ...
        if (solveSudoku(board)) {
            // Print the solution
        } else {
            System.out.println("No solution");
        }
    }
}
`;

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Backtracking</h1>

            <h2 style={styles.sectionHeader}>What is Backtracking?</h2>
            <p style={styles.paragraph}>
                Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, we mean the time elapsed till reaching any stage of the solution search rather than the actual clock time).
            </p>

            <h2 style={styles.sectionHeader}>Key Concepts</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <strong>Choice:</strong> At each step, we have multiple options to choose from.
                </li>
                <li style={styles.listItem}>
                    <strong>Constraints:</strong> Rules that define what is a valid solution.
                </li>
                <li style={styles.listItem}>
                    <strong>Goal:</strong> The desired outcome or solution.
                </li>
                <li style={styles.listItem}>
                    <strong>Backtracking:</strong> If a choice leads to a dead end, we revert to the previous choice and try another path.
                </li>
            </ul>

            <h2 style={styles.sectionHeader}>How Backtracking Works</h2>
            <p style={styles.paragraph}>
                Backtracking uses a depth-first search approach. It explores a solution space by trying different options. If a current option leads to a dead end (violates constraints), it "backtracks" to the previous decision point and tries a different option. This process continues until a solution is found or all possibilities have been exhausted.
            </p>

            <h2 style={styles.sectionHeader}>Example 1: Generating Permutations</h2>
            <p style={styles.paragraph}>
                Generating all possible permutations of a given string is a classic backtracking problem.
            </p>
            <div style={styles.codeBlock}>
                <button style={styles.copyButton} onClick={() => handleCopy(permutationCode)}>
                    {copied ? "Copied!" : "Copy"}
                </button>
                <pre>{permutationCode}</pre>
            </div>

            <h2 style={styles.sectionHeader}>Example 2: N-Queens Problem</h2>
            <p style={styles.paragraph}>
                The N-Queens problem involves placing N queens on an N×N chessboard so that no two queens threaten each other.
            </p>
            <div style={styles.codeBlock}>
                <button style={styles.copyButton} onClick={() => handleCopy(nQueensCode)}>
                    {copied ? "Copied!" : "Copy"}
                </button>
                <pre>{nQueensCode}</pre>
            </div>

            <h2 style={styles.sectionHeader}>Example 3: Sudoku Solver</h2>
        </div>
    );
};

export default Backtracking;