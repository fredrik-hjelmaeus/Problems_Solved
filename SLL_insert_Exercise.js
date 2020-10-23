/* 
SLL - push Exercise
Implement the following on the SinglyLinkedList class:
push
This function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.
Examples
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.length  // 1
singlyLinkedList.head.val // 5
singlyLinkedList.tail.val; // 5

 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  insert(index, val) {
    if (index === this.length) this.push(val);
    if (index > this.length || index < 0) return false;
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    const newNode = new Node(val);

    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return true;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current.next !== null) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
    return true;
  }
}
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.push(10); // singlyLinkedList
singlyLinkedList.push(15); // singlyLinkedList
singlyLinkedList.push(20); // singlyLinkedList
singlyLinkedList.insert(2, 12);
singlyLinkedList.insert(100, 12);
singlyLinkedList.print();
singlyLinkedList.insert(5, 25);

singlyLinkedList.print();
