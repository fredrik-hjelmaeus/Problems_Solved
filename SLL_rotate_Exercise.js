class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
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
  pop() {
    if (!this.head) return undefined;
    let n = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      n = n.next;
      if (!n.next.next) {
        const removeNode = n.next;
        n.next = null;
        this.tail = n;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return removeNode;
      }
    }
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0 || this.length < 0) {
      this.tail = null;
      this.length = 0;
    }
    return oldHead.val;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const pre = this.get(index - 1);
    const newNode = new Node(val);
    const temp = pre.next;
    pre.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const pre = this.get(index - 1);
    const node = pre.next;
    pre.next = node.next;
    this.length--;
    return node.val;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  rotate(num) {
    let index = 0;
    let removed;
    let oldTail;
    let oldHead;
    if (num > 0) {
      while (num !== index) {
        removed = this.shift();
        this.push(removed);
        index++;
      }
    } else {
      while (num !== index) {
        removed = this.pop();
        oldHead = this.head;
        this.head = removed;
        this.head.next = oldHead;
        index--;
      }
    }

    return;
  }
}
// 1 - 2 - 3 - 4 - 5
// 3 - 4 - 5 - 1 - 2
// 5 - 1 - 2 - 3 - 4
/* var list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
console.log(list.head.val); //5
console.log(list.tail.val); //25
list.rotate(3);
console.log(list.head.val); //20
console.log(list.head.next.val); //25
console.log(list.head.next.next.val); //5
console.log(list.head.next.next.next.val); //10
console.log(list.head.next.next.next.next.val); //15
console.log(list.tail.val); //15
console.log(list.tail.next); // null */

var negativelist = new SinglyLinkedList();
negativelist.push(5);
negativelist.push(10);
negativelist.push(15);
negativelist.push(20);
negativelist.push(25);

//negativelist.print();
console.log(negativelist.head.val); //5
console.log(negativelist.tail.val); //25
negativelist.rotate(-1);
console.log(negativelist.head.val); //25
console.log(negativelist.head.next.val); // 5
console.log(negativelist.head.next.next.val); // 10
console.log(negativelist.head.next.next.next.val); // 15
console.log(negativelist.head.next.next.next.next.val); // 20
console.log(negativelist.tail.val); // 20
console.log(negativelist.tail.next); // null

//negativelist.print();
