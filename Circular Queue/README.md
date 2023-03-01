# Circular Queue 


In computer science, a circular buffer, circular queue, cyclic buffer or ring buffer is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end. This structure lends itself easily to buffering data streams.

<ul>
    <li> The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.</li>
    <li> Also referred to as circular buffer or ring buffer and follows (FIFO) principle.</li>
    <li> A circular queue will reuse the empty block created during the dequeue operation.</li>
    <li> When working with queues of fixed maximum size, a circular queue is a great implementation choice.</li>
    <li>
     The cicular queue data structure supports two main operations.
     <ol>
        <li> Enqueue, Which adds an element to the rear/tail of the collection </li>
        <li> Dequeue, Which removes an element from the front/head of the collection </li>
    </ol>
    </li>
</ul>



<img src = "https://media.geeksforgeeks.org/wp-content/uploads/Circular-queue_1.png">



## Circular Queue Usage

<ul>
    <li> Click </li>
    <li> Streamin data </li>
    <li> Traffic lights </li>
</ul>


##  Circular Queue Implementation


<ul>
    <li> Enqueue(element) -> add an element to the queue </li>
    <li> Dequeue() -> remove the oldest element from the queue</li>
    <li> Peek() -> get the value of the element at the front of the queue without removing it</li>
    <li> isEmpty() -> check if the queue is empty </li>
    <li> isFull() -> check if the queue is full </li>
    <li> size() -> get the number of elements in the queue</li>
    <li> print() -> visualize the elements in the queue</li>
</ul>



### Enqueue 

```text
    Enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is Full");
            return;
        }
        this.rear = ++this.rear % this.capacity;
        this.items[this.rear] = item;
        this.currentLength++;
    }
```

### Dequeue 

```text
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
```

### isEmpty 

```text
    isEmpty() {
        return this.currentLength === 0;
    }
```


### isFull 

```text
    isFull() {
        return this.capacity === this.currentLength;
    }
```


### peek 

```text
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        console.log("Queue is Empty");
        return;
    }
```


### size 

```text
    size() {
        return this.currentLength;
    }
```


### print 

```text
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
```



## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Circular_buffer)
-   [YouTube](https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy)
