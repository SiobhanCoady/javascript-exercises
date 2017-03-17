// Question 2: Stacks & Queues
// Implement a Stack and a Queue data structure in Javascript.
//
// Explain the difference between a stack and a queue.
// Write a Javascript constructor called Stack and another Javascript class called Queue.
// Each should have a prototype method, add, that adds an element to the stack or queue and returns it.
// Each should have a prototype method, remove, that removes an element from the stack or queue and returns it.
// Make sure that each constructor/class behaves properly as per definitions of stacks and queues.


// When elements are placed in a stack, the last in is the first out.
// When elements are place in a queue, the first in is the first out.

class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
    return this.stack;
  }
  remove() {
    this.stack.pop();
    return this.stack;
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }
  add(element) {
    this.queue.push(element);
    return this.queue;
  }
  remove() {
    this.queue.shift();
    return this.queue;
  }
}

let s = new Stack();
console.log(s.add(2));
console.log(s.add("tree"));
console.log(s.add("ball"));
console.log(s.remove());
console.log(s.remove());
console.log(s.remove());

let q = new Queue();
console.log(q.add(2));
console.log(q.add("tree"));
console.log(q.add("ball"));
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
