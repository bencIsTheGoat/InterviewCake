function isBinarySearchTree(treeRoot) {

    if (!treeRoot) return true;
    const stack = [[treeRoot, Infinity, -Infinity]];
    while (stack.length > 0) {
        const [node, max, min] = stack.pop();
        if (node.value > max || node.value < min) return false;
        if (node.right) stack.push([node.right, max, node.value]);
        if (node.left) stack.push([node.left, node.value, min]);
    }
    return true;
}