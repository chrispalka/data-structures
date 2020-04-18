

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  this.storage[node]['edge'] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgeToDelete = this.storage[node].edge;
  if (this.storage[edgeToDelete[0]] !== undefined) {
    for (var edge in this.storage[node].edge) {
      this.removeEdge(node, edgeToDelete[0]);
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].edge.includes(toNode)) {
    if (this.storage[toNode].edge.includes(fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.storage[fromNode].edge.indexOf(toNode);
  this.storage[fromNode].edge.splice(index, 1);
  index = this.storage[toNode].edge.indexOf(fromNode);
  this.storage[toNode].edge.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var allNodes = Object.keys(this.storage);
  allNodes.forEach(element => cb(parseInt(element)));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 addNode = O(1)
 contains = O(1)
 removeNode = O(n)
 hasEdge = O(1)
 addEdge = O(1)
 removeEdge = O(1)
 forEachNode = O(n)
 */
