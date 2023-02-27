# Stack

<ul>
    <li> The stack data structure is a sequential collection of elements that follows the principle of last in first out (LIFO) </li>
    <li> The last element inserted into the stack is first element to be removed </li>
    <li> A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack </li>
    <li> Stack is an abstract data type. It is defined by its behavior rather than being a mathematical mode </li>
    <li>
     The stack data structure supports two main operation 
     <ol>  
        <li> Push, Which adds an element to the collection </li>
        <li> Pop, Which removes the most recently added element from the collection </li>
     </ol>
    </li> 
</ul>


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
        this.items.push(item);
    }
```




