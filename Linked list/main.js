class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Linkedlist {
    constructor() {
        this.head = null;
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

    // Remove Value
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

    // Add Item in Start Linked list
    prepend(value) {
        let node = new Node(value);
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    // Add Item in end Linked list
    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
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





let linkedlist = new Linkedlist();

linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.append(40);
linkedlist.insert(35, 3);
linkedlist.removeValue(40);
linkedlist.print();

console.log(linkedlist.searchValue(10));