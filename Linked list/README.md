# Linked List

In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists.


<img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept.png">


## Linked List Usage

<ul>
    <li>All applications of both stacks and queues are applications of linked lists</li>
    <li>Image viewer</li>
    <li>Music Player</li>
    <li>GPS navigation systems</li>
    <li>Simulation of Physical Systems</li>
    <li>File Systems</li>
</ul>


## Linked List Implementation


<ul>
    <li> append(value) -> It adds an element at the end of the list.</li>
    <li> insert(value,index) -> It inserts an element at the given index in a list.</li>
    <li> removeFrom(index) –> It removes and returns an element from the list from the specified index  </li>
    <li> removeValue(Value) –> This method removes element from the list. It returns the removed element, or if it’s not found it returns null. </li>
    <li> isEmpty() – it returns true if the list is empty.  </li>
    <li> prepend(value) -> It adds an element at the start of the list.</li>
    <li> getSize() -> return size linked list.</li>
    <li> Print() -> Visualize the elements in the linked list.</li>
    <li> removeFromFront() -> It remove an element at the start of the list.</li>
    <li> removeFromEnd() -> It remove an element at the end of the list.</li>
</ul>



### insert 

```text
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

```

### removeFrom 

```text
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
```

### removeValue 

```text
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
```


### searchValue 

```text
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
```


### reverse 

```text
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
```


### prepend 

```text
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
```


### append 

```text
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
```

### removeFromFront 

```text
    removeFromFront() {
        if(this.isEmpty()) {
            return;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
```

### removeFromEnd 

```text
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
```

### isEmpty 

```text
    isEmpty() {
        return this.size === 0;
    }
```

### getSize 

```text
    getSize() {
        return this.size;
    }
```

### print 

```text
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
```

*Linked list Animation [Linked list](https://yongdanielliang.github.io/animation/web/LinkedList.html)*


## Differences between the Array and Linked list


<img src="./images/differences between the array and linked list.png">


## Time Complexities between the Array and Linked list

<img src="https://slideplayer.com/slide/1607255/5/images/20/Time+Complexity%3A+Singly-linked+lists+vs.+1D-arrays.jpg">

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
-   [YouTube](https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy)
-   [GeeksForGeeks](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/)



