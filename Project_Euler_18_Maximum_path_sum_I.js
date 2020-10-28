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

      if (node.priority <= parent.priority) break;
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
    const max = this.queue[0];
    const end = this.queue.pop();

    if (this.queue.length > 0) {
      this.queue[0] = end;
      this.sinkDown();
    }

    return max;
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
        if (currentNode.priority < leftChild.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];

        if ((swap === null && rightChild.priority > currentNode.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
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
    console.log(v1, v2, weight);
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
        distances[v] = 0;
        PQ.enqueue(v, 0);
      }
      previous[v] = null;
    }
    console.log(distances);
    console.log(list);
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
          if (candidate > distances[nextNeighbor]) {
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
// need to take proper steps in add edges phase, rewrite
const G = new Graph();
/*G.addVertex('A0');
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

const test = G.dijkstraLP('A0', 'D0');
const test2 = G.dijkstraLP('A0', 'D1');
const test3 = G.dijkstraLP('A0', 'D2');
const test4 = G.dijkstraLP('A0', 'D3');*/
//console.log(test, test2, test3, test4);
//console.log(test);
// console.log(G.adjacencyList[test[0]].map((n) => n.weight));

const triangle = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

const testTriangle = `3
7 4
2 4 6
8 5 9 3`;
//console.log(triangle.length);
let c = 0;
const arr = [];

const strTriangle = testTriangle.split('\n');
//console.log(strTriangle.length);

const splitTriangleByRow = [];
for (let r = 0; r < strTriangle.length; r++) {
  splitTriangleByRow.push(strTriangle[r].split(' '));
}
// console.log(splitTriangleByRow.map((row) => row));
let id = 0;
for (let r = 0; r < splitTriangleByRow.length; r++) {
  for (let c = 0; c < splitTriangleByRow[r].length; c++) {
    const newVertex = id.toString() + splitTriangleByRow[r][c];
    G.addVertex(newVertex);
    id++;
    //  console.log(newVertex);
  }
}
otherid = 0;
id = 0;
for (let r = 0; r < splitTriangleByRow.length - 1; r++) {
  for (let c = 0; c < splitTriangleByRow[r].length; c++) {
    const newVertex = otherid.toString() + splitTriangleByRow[r][c];
    otherid++;
    const newVertexNextRow = id.toString() + splitTriangleByRow[r + 1][c];
    id++;
    const newNextVertexNextRow = id.toString() + splitTriangleByRow[r + 1][c + 1];
    id++;
    //console.log(splitTriangleByRow[r + 1][c], splitTriangleByRow[r + 1][c + 1]);
    //console.log(newVertex, newVertexNextRow, newNextVertexNextRow);
    G.addEdge(newVertex, newVertexNextRow, parseInt(splitTriangleByRow[r + 1][c]));
    G.addEdge(newVertex, newNextVertexNextRow, parseInt(splitTriangleByRow[r + 1][c + 1]));
    // console.log('addEdge ' + splitTriangleByRow[r][c] + ',' + splitTriangleByRow[r + 1][c]);
    // console.log('addEdge ' + splitTriangleByRow[r][c] + ',' + splitTriangleByRow[r + 1][c + 1]);
    // console.log(splitTriangleByRow[r][c]);
  }
}
//console.log('object');
LPaths = [];
for (let k in G.adjacencyList) {
  if (G.adjacencyList[k].length === 0) {
    //console.log(k);
    //  LPaths.push(G.dijkstraLP('03', k.toString()));
  }
}
//console.log(LPaths);
//console.log(G.adjacencyList);
const test = G.dijkstraLP('03', '68');
//const test2 = G.dijkstraLP('A0', 'D1');
//const test3 = G.dijkstraLP('A0', 'D2');
//const test4 = G.dijkstraLP('A0', 'D3');
//console.log(test, test2, test3, test4);
