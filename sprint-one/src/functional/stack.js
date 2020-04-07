var Stack = function() {
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
    return storage;
  };

  someInstance.pop = function() {
    var deletedKey, deletedItem;
    for (var k in storage) {
      deletedKey = k;
    }
    deletedItem = storage[deletedKey];
    delete storage[deletedKey];
    return deletedItem;
  };

  someInstance.size = function() {
    var length = 0;
    for (var k in storage) {
      length++;
    }
    return length;
  };

  return someInstance;
};
