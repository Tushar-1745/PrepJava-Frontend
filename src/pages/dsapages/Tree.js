import React from "react";

const Tree = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tree Data Structure</h1>
      <p className="mb-4">
        A <strong>Tree</strong> is a hierarchical data structure that consists of nodes,
        with a designated root node and multiple child nodes. It is widely used in
        applications like databases, file systems, and artificial intelligence.
      </p>
      
      <h2 className="text-2xl font-semibold mt-4">Types of Trees</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Binary Tree</li>
        <li>Binary Search Tree (BST)</li>
        <li>AVL Tree</li>
        <li>B-Tree</li>
        <li>Red-Black Tree</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">Basic Tree Terminologies</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Root:</strong> The topmost node of the tree.</li>
        <li><strong>Parent & Child:</strong> Nodes connected by an edge, where the upper node is the parent and the lower node is the child.</li>
        <li><strong>Leaf:</strong> A node without children.</li>
        <li><strong>Depth:</strong> The level of a node from the root.</li>
        <li><strong>Height:</strong> The longest path from a node to a leaf.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">Binary Tree Example</h2>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
        {`class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
}
        `}
      </pre>
      
      <h2 className="text-2xl font-semibold mt-4">Tree Traversal</h2>
      <p className="mb-2">There are three common types of tree traversal:</p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Inorder (Left, Root, Right)</strong></li>
        <li><strong>Preorder (Root, Left, Right)</strong></li>
        <li><strong>Postorder (Left, Right, Root)</strong></li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">Applications of Trees</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Database indexing (B-Trees, AVL Trees)</li>
        <li>Compiler syntax trees</li>
        <li>Artificial Intelligence (Minimax Trees)</li>
        <li>Hierarchical Data Representation</li>
      </ul>
    </div>
  );
};

export default Tree;
