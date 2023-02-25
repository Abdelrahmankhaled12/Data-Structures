class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = 0;
    }

    // Add item 
    Enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is Full");
            return;
        }
        this.rear = ++this.rear % this.capacity;
        this.items[this.rear] = item;
        this.currentLength++;
    }

    // Remove first Item
    Dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front];
            delete this.items[this.front];
            this.front = ++this.front % this.capacity;
            this.currentLength--;
            return item;
        }
        console.log("Queue is Empty");
    }

    // Check Queue is Empty or Not
    isEmpty() {
        return this.currentLength === 0;
    }

    // Check Queue is Full or Not
    isFull() {
        return this.capacity === this.currentLength;
    }

    // Return Last item (Not Remove)
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        console.log("Queue is Empty");
        return;
    }

    // Size Queue
    size() {
        return this.currentLength;
    }

    // Print All Values In Queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
        } else {
            let str = "";
            for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " ";
            }
            str += this.items[this.rear];
            console.log(str);
        }
    }
}


// Create is Circular Queue
let cirQueue = new circularQueue(5);

// Check cirQueue is full
console.log(cirQueue.isFull()); // False
// Check cirQueue is Emoty
console.log(cirQueue.isEmpty()); // True

// Add items

cirQueue.Enqueue(10); // 10
cirQueue.Enqueue(20); // 10 , 20 
cirQueue.Enqueue(30); // 10 , 20 , 30 
cirQueue.Enqueue(40); // 10 , 20 , 30 , 40 
cirQueue.Enqueue(50); // 10 , 20 , 30 , 40 , 50 
cirQueue.Enqueue(60); // Queue is Full
// Remove item
cirQueue.Dequeue(); // 20 , 30 , 40 , 50 
// add item
cirQueue.Enqueue(60); // 20 , 30 , 40 , 50 , 60

// Print Values
cirQueue.print(); // 20 , 30 , 40 , 50 , 60
// Check cirQueue is full
console.log(cirQueue.isFull()); // True
// Check cirQueue is Emoty
console.log(cirQueue.isEmpty()); // False






