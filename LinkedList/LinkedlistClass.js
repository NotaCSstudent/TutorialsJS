/*

Algorithims are basically pointers and moving pointers to a certain area, When doing algorithims, pointers are the main focus and the bread and butter

so when you're moving data
you're basically moving pointers
do not worry much about the elements
elements should be worried if the boss tells you about it
right now when using algorithims, to manipulate the algorithim you must focus on pointers
this would be the essence of Computer Science and doing complex Algorithims


-----------------------Definitions,
Head === the head node, first element on the list
Size === Size of the Array
node == Index of the list
data == the element thats represented
next == Pointer that will move the index



The way linked list works is like a line, its first come first serve. LinkedList will come in handy for problems like sorting and priortizing elements in a list.

https://www.geeksforgeeks.org/implementation-linkedlist-javascript/       <=== This is a perfect source to learn Linked List as it shows everything with real life problems.


https://www.interviewbit.com/courses/programming/topics/linked-lists/ <=== This will be perfect for interview problems. :)





*/



//Null will be the last Element for the Linked list


class Node {
    constructor(data/*Element*/, next/*Pointer*/ = null){
      this.data = data;
      this.next = next;
    }
  }
  
  const n1 = new Node(100);

  
  class LinkedList{
    constructor(){
      this.head = null;//Empty List
      this.size=0; //Base Case
    }
  
  
  
  //insert first node 
  
  insertFirst(data){
    this.head = new Node(data,this.head);
    //THIS WILL BE THE FIRST NODE
    this.size++
  }
  
  
  
  //insert last node
  
  insertLast(data){
  let node = new Node(data);
  let current;
  
  //if empty,make head
  if(!this.head){
    this.head =node;
  }
  else{
    current = this.head;
    while(current.next){
      current = current.next;
  
    }
    current.next = node;
  }
  this.size++;
  }
  
  //insert at index
  insertAt(data,index){
    //if index is out of range
  if(index >0 && index > this.size){
    return;
  }
  
  ///if first index
  if(index===0){
  this.head = new Node(data,this.head);
  return;
  }
  const node = new Node(data);
  let current,previous;
  
  //Set current to first 
  current = this.head
  
  let count = 0;
  while(count < index){
    previous = current;//Node before index
    count++;
    current = current.next;//Node After index
  
  
  }
  
  
  node.next = current;
  previous.next =node;
  
  this.size++
  
  }
  
  //get at index
  
  getAt(index){
    let current = this.head;
    let count = 0;
    while(current){
      if(count == index){
        console.log(current.data)
      }
      count++;
      current = current.next;
       
    }
    
  }
  
  //Remove at index
  removeAt(index){
    if(index > 0 && index>this.size){
      return;
    }
  
    let current = this.head;
    let previous;
    let count =0;
    ///Remove first
    if(index===0){
      this.head = current.next;
  
    }else{
      while(count<index){
        count++;
        previous = current;
        current = current.next;
  
      
    }
    previous.next = current.next;
  }
  this.size--;
  }
  //Clear list
  clearList(){
    this.head = null;
    this.size = 0;
  }
  
  
  
  
  //print list data
  
  
  printListData(){
    let current = this.head;
  
  
  while(current){
    console.log(current.data);
    current = current.next;
  }
  }
  
  
  
  }
  
  const linklist = new LinkedList
  
  linklist.insertFirst(100);
  linklist.insertFirst(200);
  linklist.insertFirst(300);
  linklist.insertLast(400);
  linklist.insertAt(500,1);
  linklist.clearList();
  linklist.removeAt(2);
  linklist.removeAt(3)
  linklist.printListData();


  
  
  //linklist.getAt(0)