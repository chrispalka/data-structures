var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.storage;
};

queueMethods.dequeue = function() {
  var deletedKey, deletedItem;
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


