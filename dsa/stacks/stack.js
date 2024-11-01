/**
 * @link https://www.notion.so/Stacks-11c7abd5e2f78024a8c7c263dd939802
 */
class MyStack {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.length;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
}

// LIFO
const myStack = new MyStack();
myStack.push(100);
myStack.push(200);
myStack.push(300);
myStack.pop();

console.log(myStack);
