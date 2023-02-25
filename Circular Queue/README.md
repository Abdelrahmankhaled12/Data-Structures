# Circular Queue 

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
