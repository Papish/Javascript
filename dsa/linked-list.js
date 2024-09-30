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
sll.push(1);
sll.push(1);

// time complexity = O(n)
//
function isPalindrome(list) {
  //
}

console.log(isPalindrome(sll.head));
