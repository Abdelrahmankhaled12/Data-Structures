class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return  this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
    
    print() {
        return this.items.toString();
    }

}


let x = new Stack();

console.log(x.isEmpty())

x.push(1);
x.push(2);
x.push(3);
x.pop()
x.push(4);
x.push(5);

console.log(x.print());
console.log(x.print());
console.log(x.isEmpty())