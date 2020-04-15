var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var currentChild = this.children[i];
    if (currentChild.contains(target)) {
      return true;
    }
    // this.contains(currentChild);
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// treeMethods.addChild = O(1)
// treeMethods.contains = O(n^2)