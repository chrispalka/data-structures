var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.storage;
};

stackMethods.pop = function() {
  var deletedItem, deletedKey;
  for (var k in this.storage) {
    deletedKey = k;
  }
  deletedItem = this.storage[deletedKey];
  delete this.storage[deletedKey];
  this.count--;
  return deletedItem;
};

stackMethods.size = function() {
  var len = 0;
  for (var k in this.storage) {
    len++;
  }
  return len;
};

var stack = Stack();


