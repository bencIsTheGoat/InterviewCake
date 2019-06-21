function isBalanced(root) {
    const min = getHeight(root, true);
    const max = getHeight(root, false);
    return max - min <= 1
}

function getHeight(root, isMin) {
    if (!root) return 0;
    let maxMin = isMin ? Infinity : 0;
    const stack = [[root, 1]];
    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        const bool = isMin ? depth < maxMin : depth > maxMin
        if (!node.left && !node.right && bool) {
            maxMin = depth;
        }
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
    }
    return maxMin;
}