

function isBalanced(treeRoot) {
    const min = getHeight(treeRoot, true);
    const max = getHeight(treeRoot, false);
    return Math.abs(min - max) <= 1;
}

function getHeight(root, isMin) {
    if (root === null) return 0;
    if (isMin) {
        return 1 + Math.min(getHeight(root.right, isMin), getHeight(root.left, isMin))
    } else {
        return 1 + Math.max(getHeight(root.right, isMin), getHeight(root.left, isMin));
    }
}