class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // Adds a single node to the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // Adds an array of nodes to the graph
  addVertices(vertexArray) {
    vertexArray.forEach(vertex => this.nodes.add(vertex));
  }

  // Adds an edge between two nodes by adding each node to the other's adjacent list
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // Removes an edge between two nodes by removing each node from the other's adjacent list
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // Removes a node from the graph and also removes all edges that involve this node
  removeVertex(vertex) {
    this.nodes.forEach(node => node.adjacent.delete(vertex));
    this.nodes.delete(vertex);
  }

  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function traverse(vertex) {
      // base case
      if (!vertex) {
        return null;
      }
      // visit node
      visited.add(vertex);
      result.push(vertex.value);

      // visit neighbors
      vertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          return traverse(neighbor);
        }
      });
    }

    traverse(start);

    return result;
  }
  

  // Breadth-First Search (BFS) - Traverses the graph level by level starting from a node
  breadthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const queue = [start];

    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);

        node.adjacent.forEach(neighbor => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        });
      }
    }

    return result;
  }
}

module.exports = {Graph, Node}