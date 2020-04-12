var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.storage;
};

queueMethods.dequeue = function() {
  var deletedItem, deletedKey;
  for (var k in this.storage) {
    deletedKey = k;
    break;
  }
  deletedItem = this.storage[deletedKey];
  delete this.storage[deletedKey];
  return deletedItem;
};

queueMethods.size = function() {
  var len = 0;
  for (var k in this.storage) {
    len++;
  }
  return len;
};

var queue = Queue();




