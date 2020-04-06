var Queue = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
    return storage;
  };

  someInstance.dequeue = function() {
    var lastItem = 0;
    for (var k in storage) {
      lastItem++;
    }
    count--;
    return delete storage[lastItem - 1];
  };

  someInstance.size = function() {
    var len = 0;
    for (var k in storage) {
      len++;
    }
    return len;
  };

  return someInstance;
};
