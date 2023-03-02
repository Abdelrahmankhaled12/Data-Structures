class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.head = null;
        this.rear = 0;
        this.sizeQueue = 0;
    }
    // Add Item
    Enqueue(item) {
        let node = new Node(item);
        if(this.isEmpty()){
            this.head = node;
            this.rear = node;
        }else {
            this.rear.next = node;
            this.rear = node;
        }
        this.sizeQueue++;
    }
    // Remove first Item
    Dequeue() {
        if (!this.isEmpty()) {
            let value = this.head.value;
            this.head = this.head.next;
            this.sizeQueue--;
            return value;
        }
        console.log("Queue is Empty");
        return;
    }
    // Check Queue is Empty or Not
    isEmpty() {
        return this.sizeQueue === 0;
    }
    // Return Last item (Not Remove)
    peek() {
        if (!this.isEmpty()) {
            return this.head.value;
        }
        return "Queue is Empty";
    }
    // Size Queue
    size() {
        return this.sizeQueue;
    }
    // Print All Values In Queue
    print() {
        if(this.isEmpty()) {
            console.log("Queue is Empty");
        }else {
            let str = "";
            let current = this.head;
            while(current) {
                str+=current.value + " ";
                current = current.next
            }
            console.log(str);
        }
        return;
    }
}

// create a queue
let queue = new Queue();

console.log(queue.isEmpty()); // true
console.log(queue.peek()); // "Queue is Empty"
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
queue.print(); //  20 , 30 , 40 , 50 , 60
