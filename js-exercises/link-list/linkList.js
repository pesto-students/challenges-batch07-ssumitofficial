import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new LinkListNode(value, this.head);
    this.head = newNode;
  }

  append(value) {
    const newNode = new LinkListNode(value);
    if (this.head) {
      let node = this.head;

      while (node) {
        if (!node.next) {
          node.next = newNode;
          return;
        }

        node = node.next;
      }
    }

    this.head = newNode;
  }

  delete(value) {
    if (this.head.value == value) {
      this.head = this.head.next;
      return true;
    }

    let node = this.head;

    while (node) {
      if (node.next && node.next.value == value) {
        node.next = node.next.next;
        return true;
      }
      node = node.next;
    }

    return false;
  }

  traverse() {
    let node = this.head;
    while (node) {
      node = node.next;
    }
  }

  contains(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  length() {
    let length = 0;
    let node = this.head;

    while (node) {
      length++;
      node = node.next;
    }

    return length;
  }
}
