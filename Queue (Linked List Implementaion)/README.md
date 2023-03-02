# Queue (Linked List Implementaion)


<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Linked_List_Representation_of_Queue.png">



## Queue Usage 

<ul>
    <li> Printers </li>
    <li> CPU task scheduling </li>
    <li> Callback queue in javaScript runtime </li>
</ul>



## Queue Implementation


<ul>
    <li> Enqueue(element) -> add an element to the queue </li>
    <li> Dequeue() -> remove the oldest element from the queue</li>
    <li> Peek() -> get the value of the element at the front of the queue without removing it</li>
    <li> isEmpty() -> check if the queue is empty </li>
    <li> size() -> get the number of elements in the queue</li>
    <li> print() -> visualize the elements in the queue</li>
</ul>



### Enqueue 

```text
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
```

### Dequeue 

```text
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
```

### isEmpty 

```text
    isEmpty() {
        return this.sizeQueue === 0;
    }
```

### peek 

```text
    peek() {
        if (!this.isEmpty()) {
            return this.head.value;
        }
        return "Queue is Empty";
    }
```

### size 

```text
    size() {
        return this.sizeQueue;
    }
```

### push 

```print
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
```



*Queue (Linked List Implementaion) Animation [Queue (Linked List Implementaion)](https://www.cs.usfca.edu/~galles/visualization/QueueLL.html)*


## References

-   [YouTube](https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy)
-   [GeeksForGeeks](https://www.geeksforgeeks.org/queue-linked-list-implementation/)

