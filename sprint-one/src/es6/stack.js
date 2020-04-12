class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.storage[this.count];
  }

  pop() {
    var deletedItem, deletedKey;
    for (var k in this.storage) {
      deletedKey = k;
    }
    deletedItem = this.storage[deletedKey];
    delete this.storage[deletedKey];
    this.count--;
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

var stack = new Stack();