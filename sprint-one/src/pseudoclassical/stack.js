var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.storage;
};

Stack.prototype.pop = function() {
  var deletedItem, deletedKey;
  for (var k in this.storage) {
    deletedKey = k;
  }
  deletedItem = this.storage[deletedKey];
  delete this.storage[deletedKey];
  this.count--;
  return deletedItem;
};

Stack.prototype.size = function() {
  var len = 0;
  for (var k in this.storage) {
    len++;
  }
  return len;
};

var stack = new Stack();


