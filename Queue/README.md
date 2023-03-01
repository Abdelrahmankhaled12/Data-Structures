# Queue

In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services.

<ul>
    <li> The queue data structure is a sequential collection of elements that follows the principle of first in first out (FIFO). </li>
    <li> The first element inserted into the queue is first element to be removed. </li>
    <li> A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).</li>
    <li> Queue is an abstract data type. It is defined by its behavior rather than being a mathematical mode</li>
    <li>
     The Queue data structure supports two main operations 
     <ol>
        <li> Enqueue, Which adds an element to the rear/tail of the collection </li>
        <li> Dequeue, Which removes an element from the front/head of the collection </li>
     </li>
    
</ul>



<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png">



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
        this.items[this.rear++] = item;
    }
```

### Dequeue 

```text
    Dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front];
            delete this.items[this.front++];
            return item;
        }
        return "Queue is Empty";
    }
```

### isEmpty 

```text
    isEmpty() {
        return this.rear === 0;
    }
```

### peek 

```text
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return "Queue is Empty";
    }
```

### size 

```text
   size() {
        return this.rear - this.front;
    }
```

### push 

```print
    print() {
        console.log(Object.values(this.items).toString());
    }
```



*Queue Animation [Queue](https://www.cs.usfca.edu/~galles/visualization/QueueArray.html)*


## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
-   [YouTube](https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy)
-   [GeeksForGeeks](https://www.geeksforgeeks.org/implementation-queue-javascript/)

