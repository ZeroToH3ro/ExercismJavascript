class Node {
  constructor(val) {
    this.val = val;

    this.prev = null;

    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;

    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }

  pop() {
    const node = this.tail;

    this.tail = node.prev;

    if (!this.tail) {
      this.head = null;
    }

    return node.val;
  }

  shift() {
    const node = this.head;

    this.head = node.next;

    if (!this.head) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }

    return node.val;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;

      this.head.prev = node;
    }

    this.head = node;
  }

  count() {
    let count = 0,
      node = null;

    if (this.head) {
      count++;

      node = this.head;
    }

    while (node != this.tail) {
      count++;

      node = node.next;
    }

    return count;
  }

  delete(val) {
    let node = this.head;

    if (node.val === val) {
      if (node !== this.tail) {
        this.head = node.next;
      } else {
        this.head = this.tail = null;
      }

      return;
    }

    while (node !== null) {
      if (node.val === val) {
        if (node === this.tail) {
          this.tail = node.prev;

          this.tail.next = null;
        } else {
          node.prev.next = node.next;

          node.next.prev = node.prev;
        }

        break;
      }

      node = node.next;
    }
  }
}
