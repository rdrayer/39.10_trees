/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) {
      return 0;
    }
    // we're adding here, so initialize the total
    let totalSum = 0;
    // initialize the queue with the root
    let queue = [this.root];
    // while there's something in it
    while (queue.length > 0) {
      // remove the first node from the queue
      let currentNode = queue.shift();

      // add the node's value to the sum
      totalSum += currentNode.val;

      // enqueue all children of the current node
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }
    return totalSum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // this should be pretty similar to sumValues,
    // but totalSum needs to only add values divisible by 2
    if (this.root === null) {
      return 0;
    }
    // we're adding here, so initialize the total
    let totalCount = 0;
    // initialize the queue with the root
    let queue = [this.root];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.val % 2 === 0) {
        totalCount ++;
      }
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }
    return totalCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) {
      return 0;
    }
    let totalCount = 0;
    let queue = [this.root];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.val > lowerBound) {
        totalCount ++;
      }
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }
    return totalCount;
  }
}

module.exports = { Tree, TreeNode };
