class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  pop(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current !== null && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
    }

    this.length--;
  }
}

const sll = new SingleLinkedList();
sll.push(1);
sll.push(2);
sll.push(5);

const sll1 = new SingleLinkedList();
sll1.push(1);
sll1.push(3);
sll1.push(5);

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let tempNext = current.next;
    current.next = prev;
    prev = current;
    current = tempNext;
  }

  return prev;
}

// console.log(JSON.stringify(reverseLinkedList(sll.head), 0, 2))

function mergedSortedList(list1, list2) {
  const node = new Node(0);
  current = node;

  while(list1 !== null && list2 !== null) {
    if (list1.data < list2.data) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next
    }
    current = current.next;
  }

  console.log(JSON.stringify(node.next, 0, 2));
}

console.log(JSON.stringify(mergedSortedList(sll.head, sll1.head), 0, 2));
