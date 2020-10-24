class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.next = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let current = this.head;
    let count = 0;
    while (index !== count) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    if (index < 0 || index > this.length) return undefined;
    const newNode = new Node(val);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return true;
    }
    let current = this.head.next;
    let pre = this.head;
    let count = 1;
    while (index !== count) {
      pre = pre.next;
      current = current.next;
      count++;
    }
    newNode.next = current;
    pre.next = newNode;
    this.length++;
    return true;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
    return;
  }
}
const SLL = new SinglyLinkedList();
SLL.push(0);
SLL.push(1);
SLL.push(2);
SLL.push(3);
SLL.print();
const test = SLL.set(4, 9);
console.log(test);
SLL.print();
