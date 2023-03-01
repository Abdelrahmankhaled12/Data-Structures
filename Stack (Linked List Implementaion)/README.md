# Stack (Linked List Implementaion)


<img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png">


## Stack Usage

<ul>
    <li> Browser history tracking </li>
    <li> Undo operation when typing </li>
    <li> Expression conversions </li>
    <li> Call stack in javaScript runtime </li>
</ul>


## Stack Implementation


<ul>
    <li> Push(element) -> Add an element to the top of the stack </li>
    <li> Pop() -> Remove the top most element from the stack</li>
    <li> Peek() -> Get the value of the top element without removing it</li>
    <li> isEmpty() -> Check if the stack is empty</li>
    <li> Size() -> Get the number of elements is the stack</li>
    <li> Print() -> Visualize the elements in the stack</li>
</ul>


### push 

```text
    push(item) {
        let node = new Node(item);
        node.next = this.head;
        this.head = node;
        this.sizeStack++;
    }
```


### pop 

```text
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
```

### isEmpty 

```text
    isEmpty() {
        return this.sizeStack === 0;
    }
```

### peek 

```text
    peek() {
        if(!this.isEmpty()) {
            return this.head.value;
        }
        return null
    }
```

### size 

```text
    size() {
        return this.sizeStack;
    }
```

### print 

```text
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
```


*Stack (Linked List Implementaion) Animation [Stack (Linked List Implementaion)](https://www.cs.usfca.edu/~galles/visualization/StackLL.html)*


## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
-   [YouTube](https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy)
-   [GeeksForGeeks](https://www.geeksforgeeks.org/implementation-stack-javascript/)
