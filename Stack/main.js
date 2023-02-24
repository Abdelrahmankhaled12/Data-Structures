class Stack {
    constructor() {
        this.items = [];
    }
    // Add Item
    push(item) {
        this.items.push(item);
    }
    // Remove last Item
    pop() {
        return this.items.pop();
    }
    // Check Stack is Empty or Not
    isEmpty() {
        return this.items.length === 0;
    }
    // Return Last item (Not Remove)
    peek() {
        if(!this.isEmpty()) {
            return  this.items[this.items.length - 1];
        }
        return null
    }
    // Size Stack
    size() {
        return this.items.length;
    }
    // Print All Values In Stack
    print() {
        console.log(this.items.toString());
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
stackVar.pop()  // 1 , 2
stackVar.push(4);  // 1 , 2 , 4 
stackVar.push(5);  // 1 , 2 , 4 , 5

stackVar.print();  // 1 , 2 , 4 , 5
console.log(stackVar.isEmpty()) // False
console.log(stackVar.peek()); // 5
console.log(stackVar.size()); // 4