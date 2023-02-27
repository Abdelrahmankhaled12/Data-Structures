# Stack


In computer science, a stack is an abstract data type that serves as a collection of elements, with two main operations:
<ul>
    <li>Push, which adds an element to the collection.</li>
    <li>Pop, which removes the most recently added element that was not yet removed.</li>
</ul>

Additionally, a peek operation can, without modifying the stack, return the value of the last element added. Calling this structure a stack is by analogy to a set of physical items stacked one atop another, such as a stack of plates.

The order in which an element added to or removed from a stack is described as last in, first out, referred to by the acronym LIFO.[nb 1] As with a stack of physical objects, this structure makes it easy to take an item off the top of the stack, but accessing a datum deeper in the stack may require taking off multiple other items first.

Considered as a linear data structure, or more abstractly a sequential collection, the push and pop operations occur only at one end of the structure, referred to as the top of the stack. This data structure makes it possible to implement a stack as a singly linked list and as a pointer to the top element. A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to accept another element, the stack is in a state of stack overflow.




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


### pop 

```text
    pop() {
        return this.items.pop();
    }
```

### isEmpty 

```text
    isEmpty() {
        return this.items.length === 0;
    }
```

### peek 

```text
     if(!this.isEmpty()) {
            return  this.items[this.items.length - 1];
    }
    return null
    }
```

### size 

```text
    size() {
        return this.items.length;
    }
```

### print 

```text
    print() {
        console.log(this.items.toString());
    }
```


*Stack Animation [Stack](https://yongdanielliang.github.io/animation/web/Stack.html)*


## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
-   [YouTube](https://youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy)
-   [GeeksForGeeks](https://www.geeksforgeeks.org/implementation-stack-javascript/)
