class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (data) {
      const node = new Node(data);
      this.head = node;
      this.length++;
    }
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
console.dir(linkedList);
