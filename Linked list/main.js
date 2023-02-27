class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = 0;
        this.size = 0;
    }

    // Inset Value
    insert(value, position) {
        if (position < 0 || position > this.size) {
            return;
        }
        if (position === 0) {
            this.prepend(value);
        } else {
            let node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < position - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    // Remove Value by index
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = prev.next.next;
        }
        this.size--;
        return removeNode;
    }

    // Remove Value by value
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        let removeNode;
        if (this.head.value === value) {
            let removeNode = this.head.value;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            while (prev.next.value !== value && prev.next) {
                prev = prev.next;
            }
            if (!prev.next) {
                return null;
            }
            removeNode = prev.next.value;
            prev.next = prev.next.next;
        }
        this.size--;
        return removeNode;
    }

    // Search Value
    searchValue(value) {
        if (this.isEmpty()) {
            return -1;
        }
        if (this.head.value === value) {
            return 1;
        } else {
            let prev = this.head;
            while (prev) {
                if (prev.value === value) {
                    return 1;
                }
                prev = prev.next;
            }
            return -1;
        }
    }

    // Reverse nodes
    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // Add Item in Start Linked list
    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // Add Item in end Linked list
    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }

    // Remove element in start linked list
    removeFromFront() {
        if(this.isEmpty()) {
            return;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    // Remove element in end linked list
    removeFromEnd() {
        if(this.isEmpty()) {
                return;
        }
        let value = this.tail.value;
        if(this.size === 1) {
            this.head = null;
            this.tail = null
        }else {
            let prev = this.head;
            while(prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }

    // Check Linkedlist Empty or not
    isEmpty() {
        return this.size === 0;
    }

    // Get Size
    getSize() {
        return this.size;
    }

    // Print Values in Linked List
    print() {
        if (this.isEmpty()) {
            console.log("Linked list is Empty");
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


// Create linked list
let linkedlist = new Linkedlist();

console.log(linkedlist.isEmpty()); // true
console.log(linkedlist.getSize()); // 0
// add items
linkedlist.append(10); // 10 , 20 , 30 , 40
linkedlist.append(20); // 10 , 20
linkedlist.append(30); // 10 , 20 , 30
linkedlist.append(40); // 10 , 20 , 30 , 40
// insert value
linkedlist.insert(35, 3); // 10 , 20 , 30 , 35 , 40
linkedlist.removeValue(40); // 10 , 20 , 30 , 35
linkedlist.print(); // 10 , 20 , 30 , 35

console.log(linkedlist.searchValue(10)); //  1

console.log(linkedlist.isEmpty()); // false
console.log(linkedlist.getSize()); // 4

linkedlist.reverse(); // 35 , 30 , 20 , 10

linkedlist.print(); // 35 , 30 , 20 , 10