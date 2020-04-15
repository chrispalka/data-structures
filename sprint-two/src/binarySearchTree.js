var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, treeMeth);
  return newTree;
};

var treeMeth = {};

treeMeth.insert = function(value) {
  var newLevel = BinarySearchTree(value);
  if (this.value > value) {
    if (this.left === null) {
      this.left = newLevel;
    } else {
      this.left.insert(value);
    }
  }
  if (this.value < value) {
    if (this.right === null) {
      this.right = newLevel;
    } else {
      this.right.insert(value);
    }
  }
};

treeMeth.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.value > target) {
    if (this.left !== null) {
      return this.left.contains(target);
    }
  } else if (this.value < target) {
    if (this.right !== null) {
      return this.right.contains(target);
    }
  }
  return false;
};

treeMeth.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

// all 3 functions are = O(n)
