/* 
SLL - pop Exercise
Implement the following on the SinglyLinkedList class:
push
This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.
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
  pop() {
    if (this.length <= 0) return undefined;
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    const removed = this.tail;
    current.next = null;
    this.tail = current;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return removed;
  }
}
var singlyLinkedList = new SinglyLinkedList();
const tsest = singlyLinkedList.push(15); // singlyLinkedList
const test = singlyLinkedList.push(5); // singlyLinkedList
console.log(test);
