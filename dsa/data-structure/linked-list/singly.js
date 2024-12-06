class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
    this.length = 0;

    if (data) {
      const node = new Node(data);
      this.head = node;
      this.length++;
    }
  }

  push(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    if (current) {
      current.next = node;
      this.length++;
    }
  }

  pop(data) {
    if (!data) {
      if (this.head === null) return undefined;

      if (!this.head.next) {
        this.head = null;
        return;
      }

      let current = this.head;

      while (current.next && current.next.next) {
        current = current.next;
      }

      current.next = null;

      this.length--;
      return;
    } else {
      if (!this.head) return undefined;

      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }

      let current = this.head;
      let prev = null;

      while (current.data !== data) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
console.log(JSON.stringify(linkedList, 0, 2));

const middle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
};

console.log(middle(linkedList.head));
