var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;


  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.storage;
};
stackMethods.pop = function() {
  var deletedKey, deletedItem;
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


