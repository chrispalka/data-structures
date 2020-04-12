class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.storage[this.count];
  }

  dequeue() {
    var deletedItem, deletedKey;
    for (var k in this.storage) {
      deletedKey = k;
      break;
    }
    deletedItem = this.storage[deletedKey];
    delete this.storage[deletedKey];
    return deletedItem;
  }

  size() {
    var len = 0;
    for (var k in this.storage) {
      len++;
    }
    return len;
  }
}

var queue = new Queue();
