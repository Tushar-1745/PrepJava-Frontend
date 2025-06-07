import React from "react";

const LinkedListCode = () => {

    
  const javaCode = `
  class Node {
      int data;
      Node next;
  
      public Node(int data) {
          this.data = data;
          this.next = null;
      }
  }
  
  class CustomLinkedList {
      private Node head;
  
      public void add(int data) {
          Node newNode = new Node(data);
          if (head == null) {
              head = newNode;
              return;
          }
          Node temp = head;
          while (temp.next != null) {
              temp = temp.next;
          }
          temp.next = newNode;
      }
  
      public void removeFirst() {
          if (head == null) return;
          head = head.next;
      }
  
      public void display() {
          Node temp = head;
          while (temp != null) {
              System.out.print(temp.data + " -> ");
              temp = temp.next;
          }
          System.out.println("null");
      }
  }`;

  return (
    <section>
      <h3>Java Implementation of LinkedList</h3>
      <pre style={{ backgroundColor: "black", color: "#ecf0f1", padding: "10px", borderRadius: "5px", overflowX: "auto" }}>
        <code>{javaCode}</code>
      </pre>
    </section>
  );
};

export default LinkedListCode;
