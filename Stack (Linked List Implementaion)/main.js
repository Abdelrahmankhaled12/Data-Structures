class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = 0;
        this.sizeStack = 0;
    }
    // Add Item
    push(item) {
        let node = new Node(item);
        node.next = this.head;
        this.head = node;
        this.sizeStack++;
    }
    // Remove last Item
    pop() {
        if(this.isEmpty()) {
            console.log("Stack is Empty");
            return;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.sizeStack--;
        return value;
    }
    // Check Stack is Empty or Not
    isEmpty() {
        return this.sizeStack === 0;
    }
    // Return Last item (Not Remove)
    peek() {
        if(!this.isEmpty()) {
            return this.head.value;
        }
        return null
    }
    // Size Stack
    size() {
        return this.sizeStack;
    }
    // Print All Values In Stack
    print() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            let str = "";
            let current = this.head;
            while (current) {
                str += current.value + " ";
                current = current.next
            }
            console.log(str);
        }
    }
}



// Create Stack
let stackVar = new Stack();
// Check stackVar is Empty
console.log(stackVar.isEmpty()) // True
// Add items
stackVar.push(1); // 1
stackVar.push(2); // 1 , 2
stackVar.push(3); // 1 , 2 , 3
// remove last item
stackVar.pop() // 1 , 2
stackVar.push(4);  // 1 , 2 , 4
stackVar.push(5);  // 1 , 2 , 4 , 5

stackVar.print();  // 5 , 4 , 2 , 1
console.log(stackVar.isEmpty()) // False
console.log(stackVar.peek()); // 5
console.log(stackVar.size()); // 4




