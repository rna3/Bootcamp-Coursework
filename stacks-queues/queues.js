class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Cannot dequeue from an empty queue.");
      }
      return this.items.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  