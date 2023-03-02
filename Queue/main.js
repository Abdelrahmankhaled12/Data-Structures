
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    // Add Item
    Enqueue(item) {
        this.items[this.rear++] = item;
    }
    // Remove first Item
    Dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front];
            delete this.items[this.front++];
            return item;
        }
        return "Queue is Empty";
    }
    // Check Queue is Empty or Not
    isEmpty() {
        return this.rear === 0;
    }
    // Return Last item (Not Remove)
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return "Queue is Empty";
    }
    // Size Queue
    size() {
        return this.rear - this.front;
    }
    // Print All Values In Queue
    print() {
        console.log(Object.values(this.items).toString());
    }
}

// create a queue
let queue = new Queue();

console.log(queue.isEmpty()); // true
console.log(queue.peek()); // null
// add items
queue.Enqueue(10); // 10
console.log(queue.isEmpty()); // false
queue.Enqueue(20); // 10 , 20
queue.Enqueue(30); // 10 , 20 , 30
queue.Enqueue(40); // 10 , 20 , 30 , 40
queue.Enqueue(50); // 10 , 20 , 30 , 40 , 50
// remove item
queue.Dequeue(); // 20 , 30 , 40 , 50
// add item
queue.Enqueue(60); // 20 , 30 , 40 , 50 , 60

console.log(queue.peek()); // 20
console.log(queue.size()); // 5
console.log(queue.isEmpty()); // false
queue.print(); // 20 , 30 , 40 , 50 , 60
