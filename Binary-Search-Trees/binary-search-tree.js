class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (val< current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const insertNode = (node, val) => {
      if (!node) return new Node(val);
      if (val < node.val) {
        node.left = insertNode(node.left, val);
      } else {
        node.right = insertNode(node.right, val);
      }
      return node;
    };
    if (!this.root) {
      this.root = new Node(val);
    } else {
      insertNode(this.root, val);
    }
    return this;
  }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined; 
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findNode = (node, val) => {
      if (!node) return undefined;
      if (val === node.val) return node;
      return val < node.val ? findNode(node.left, val) : findNode(node.right, val);
    };
    return findNode(this.root, val);
  }
  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];
    const traverse = (node) => {
      if (node) {
        result.push(node.val); 
        traverse(node.left);    
        traverse(node.right);   
      }
    };
    traverse(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left); 
        result.push(node.val); 
        traverse(node.right); 
      }
    };
    traverse(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right); 
        result.push(node.val); 
      }
    };
    traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (current) {
        result.push(current.val);
        queue.push(current.left);
        queue.push(current.right);
      }
    }
    return result;
  }
  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
