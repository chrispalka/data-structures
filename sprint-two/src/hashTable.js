var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleList = {};
  this._tupleList.tupleHead = null;
  this._tupleList.tupleTail = null;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.retrieve(index)) {
    this._tupleList.tupleHead.next = this._storage.set(index, v);
  } else {
    this._storage.set(index, v);
  }
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
var LinkedList = function() {
  var list = {};
  list.head = null; // should be first value
  list.tail = null; // should be node where next is null

  // n1 = {data: 100}

  // n2 = {data: 200}

  // n1.next = n2
  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head.next = newNode;
    }
    // {'item' : 'link' -> }
    // {value: 3, next: {value: 7, next: {value: 2, next: null}}}
  };

  list.removeHead = function() {
    var deletedNode = this.head;
    this.head = this.head.next;
    return deletedNode.value;
  };

  list.contains = function(target) {
    if (this.head.value === target || this.tail.value === target) {
      return true;
    } else {
      for (var key in this.next) {
        if (this.next.value === target) {
          return true;
        }
      }
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
*/