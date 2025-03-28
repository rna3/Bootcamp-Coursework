class Stack {
    constructor() {
        this.items = [];
    }


    push(item) {
        this.item.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Can't pop because stack is empty")
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}