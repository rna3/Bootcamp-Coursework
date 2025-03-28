/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function findMinDepth(node) {
      if (!node) return Infinity;
      if (!node.left && !node.right) return 1;

      return 1 + Math.min(findMinDepth(node.left), findMinDepth(node.right));
    }

    return findMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function findMaxDepth(node) {
      if (!node) return 0;

      return 1 + Math.max(findMaxDepth(node.left), findMaxDepth(node.right));
    }

    return findMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = -Infinity;

    function findMaxPathSum(node) {
      if (!node) return 0;

      const leftMax = Math.max(findMaxPathSum(node.left), 0);
      const rightMax = Math.max(findMaxPathSum(node.right), 0);

      maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

      return node.val + Math.max(leftMax, rightMax);
    }

    findMaxPathSum(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let closest = null;

    function findNextLarger(node) {
      if (!node) return;

      if (node.val > lowerBound && (closest === null || node.val < closest)) {
        closest = node.val;
      }

      findNextLarger(node.left);
      findNextLarger(node.right);
    }

    findNextLarger(this.root);
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
