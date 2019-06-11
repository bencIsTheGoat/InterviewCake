// correct O(N) iterative solution
function isBalanced(root) {
    if (!root) return true;
    const stack = [[root, 0]];
    const depths = [];
    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        if (!node.right && !node.left) {
            if (depths.indexOf(depth) < 0) {
                depths.push(depth);
                const magnitudeCheck = Math.abs(depths[0] - depths[1]) > 1;
                const lenCheck = depths.length > 2;
                if (lenCheck || magnitudeCheck) return false;
            }
        } else {
            if (node.right) stack.push([node.right, depth + 1]);
            if (node.left) stack.push([node.left, depth + 1]);
        }
    }
    return true;
}


// recursive solution that doesnt work for LL edge case
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