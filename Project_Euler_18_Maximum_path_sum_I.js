/* By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

    3
   7 4
  2 4 6
 8 5 9 3


That is, 3 + 7 + 4 + 9 = 23.
Find the maximum total from top to bottom of the triangle below:


Dijkstra longest path?
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  bubbleUp() {
    let idx = this.queue.length - 1;
    const node = this.queue[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.queue[parentIdx];

      if (node.priority >= parent.priority) break;
      this.queue[parentIdx] = node;
      this.queue[idx] = parent;
      idx = parentIdx;
    }
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.queue.push(newNode);
    this.bubbleUp();

    return this.queue;
  }

  dequeue() {
    const min = this.queue[0];
    const end = this.queue.pop();

    if (this.queue.length > 0) {
      this.queue[0] = end;
      this.sinkDown();
    }

    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.queue.length;
    const currentNode = this.queue[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.queue[leftChildIdx];
        if (currentNode.priority > leftChild.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];

        if ((swap === null && rightChild.priority < currentNode.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;

      this.queue[idx] = this.queue[swap];
      this.queue[swap] = currentNode;
      idx = swap;
    }
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
  }
  dijkstraLP(start, end) {
    const previous = {};
    const distances = {};
    const PQ = new PriorityQueue();
    const list = this.adjacencyList;
    const path = [];
    let smallest;
    let node;
    let pathSum = [];
    // build initial state
    for (let v in list) {
      if (v === start) {
        distances[v] = 0;
        PQ.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        PQ.enqueue(v, Infinity);
      }
      previous[v] = null;
    }
    // cycle begins
    while (PQ.queue.length) {
      // fetch smallest value in queue,smallest weight in queue
      node = PQ.dequeue();

      smallest = node.val;

      if (smallest === end) {
        // we are done
        // build path to return
        while (previous[smallest]) {
          pathSum.push(node.priority);
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in list[smallest]) {
          //find neighbor node
          let nextNode = list[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          // if candidate is smaller , replace
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating prevois - how we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            PQ.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log(pathSum[0] + 3);
    return path.concat(smallest).reverse();
  }
  dijkstraSP(start, end) {
    const previous = {};
    const distances = {};
    const PQ = new PriorityQueue();
    const list = this.adjacencyList;
    const path = [];
    let smallest;
    let node;
    let pathSum = [];
    // build initial state
    for (let v in list) {
      if (v === start) {
        distances[v] = 0;
        PQ.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        PQ.enqueue(v, Infinity);
      }
      previous[v] = null;
    }
    // cycle begins
    while (PQ.queue.length) {
      // fetch smallest value in queue,smallest weight in queue
      node = PQ.dequeue();

      smallest = node.val;

      if (smallest === end) {
        // we are done
        // build path to return
        while (previous[smallest]) {
          pathSum.push(node.priority);
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in list[smallest]) {
          //find neighbor node
          let nextNode = list[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          // if candidate is smaller , replace
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating prevois - how we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            PQ.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    console.log(pathSum[0] + 3);
    return path.concat(smallest).reverse();
  }
}

const G = new Graph();
G.addVertex('A0');
G.addVertex('B0');
G.addVertex('B1');
G.addEdge('A0', 'B0', 7);
G.addEdge('A0', 'B1', 4);
G.addVertex('C0');
G.addVertex('C1');
G.addVertex('C2');
G.addEdge('B0', 'C0', 2);
G.addEdge('B0', 'C1', 4);
G.addEdge('B1', 'C1', 4);
G.addEdge('B1', 'C2', 6);
G.addVertex('D0');
G.addVertex('D1');
G.addVertex('D2');
G.addVertex('D3');
G.addEdge('C0', 'D0', 8);
G.addEdge('C0', 'D1', 5);
G.addEdge('C1', 'D1', 5);
G.addEdge('C1', 'D2', 9);
G.addEdge('C2', 'D2', 9);
G.addEdge('C2', 'D3', 3);

const test = G.dijkstraSP('A0', 'D0');
const test2 = G.dijkstraSP('A0', 'D1');
const test3 = G.dijkstraSP('A0', 'D2');
const test4 = G.dijkstraSP('A0', 'D3');
console.log(test, test2, test3, test4);
//console.log(test);
// console.log(G.adjacencyList[test[0]].map((n) => n.weight));
