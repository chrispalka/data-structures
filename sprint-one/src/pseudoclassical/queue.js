var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.storage[this.count];
};

Queue.prototype.dequeue = function() {
  var deletedItem, deletedKey;
  for (var k in this.storage) {
    deletedKey = k;
    break;
  }
  deletedItem = this.storage[deletedKey];
  delete this.storage[deletedKey];
  return deletedItem;
};

Queue.prototype.size = function() {
  var len = 0;
  for (var k in this.storage) {
    len++;
  }
  return len;
};

var queue = new Queue();


