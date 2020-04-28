class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  //myNode = new Node('hello')
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      let newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      }
      else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    getAt(index) {
      if (this.head !== null  && index>=0) {
        let current = this.head;
        let counter = 0;
  
        while (counter < index) {
          if (current.next === null)
            return null;
          current = current.next;
          counter++;
        }
        return current.data;
      }
      return null;
    }
  
    removeFirstNode() {
      if (this.head !== null) {
        this.head = this.head.next;
      }
    }
  
    removeLastNode() {
      if (this.head !== null) {
        let prevNode = null;
        let node = this.head;
  
        while (node.next !== null) {
          prevNode = node;
          node = node.next;
        }
        if(prevNode !== null)
          prevNode.next = null;
        else{
          this.head = null;
        }
  
      }
    }
  
    clearLinkedList() {
      this.head = null;
    }
  
    removeAt(index) {
      if (this.head !== null) {
         if(index === 0) {
          this.removeFirstNode();
         }
        else{
          let nodeToRemove = this.getNodeAt(index);
          if(nodeToRemove === null)
            return;
  
          let prevNode = this.getNodeAt(index-1);
          prevNode.next = nodeToRemove.next;
        }
      }
    }
  
    insertAt(data, index){
      let prevNode = this.getNodeAt(index - 1);
      let newNode = new Node(data);
      if(index === 0){
        newNode.next = this.head;
        this.head = newNode;
      }
      else{
        if(prevNode === null) return; 
        newNode.next = prevNode.next;
        prevNode.next = newNode
      }
    }
  
    getNodeAt(index) {
      if (this.head !== null   && index>=0) {
        let current = this.head;
        let counter = 0;
  
        while (counter < index) {
          if (current.next === null)
            return null;
          current = current.next;
          counter++;
        }
        return current;
      }
      return null;
    }
  
    printLinkedList(){
      console.log("linked list:")
      if (this.head !== null) {
        let node = this.head;
  
        
        while (node !== null) {
          console.log(node.data);
          node = node.next;
        }
      }
      else{
        console.log("empty")
      }
    }
  }
  
  let myLinkedList = new LinkedList();
  
  myLinkedList.add("first node");
  myLinkedList.add("second node");
  myLinkedList.add("third node");
  myLinkedList.add("fourth node");
  
  myLinkedList.printLinkedList();
  
  //removeFirstNode tests
  // myLinkedList.removeFirstNode();
  // myLinkedList.removeFirstNode();
  // myLinkedList.removeFirstNode();
  // myLinkedList.removeFirstNode();
  // myLinkedList.removeFirstNode();
  // myLinkedList.printLinkedList();
  
  //removeLastNode tests
  // myLinkedList.removeLastNode();
  // myLinkedList.removeLastNode();
  // myLinkedList.removeLastNode();
  // myLinkedList.removeLastNode();
  // myLinkedList.removeLastNode();
  // myLinkedList.printLinkedList();
  
  //removeAt tests
  // myLinkedList.removeAt(-1);
  // myLinkedList.removeAt(0);
  // myLinkedList.removeAt(1);
  // myLinkedList.removeAt(1);
  // myLinkedList.removeAt(6);
  // myLinkedList.printLinkedList();
  
  //insertAt tests
  myLinkedList.insertAt("-10 node", -10);
  myLinkedList.insertAt("oob node", 5);
  myLinkedList.insertAt("one before last node", 3);
  myLinkedList.insertAt("middle node", 1);
  myLinkedList.insertAt("head node", 0);
  myLinkedList.printLinkedList();
  
  