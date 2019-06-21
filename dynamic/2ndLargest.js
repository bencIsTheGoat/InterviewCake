function findSecondLargest(root) {
    if (!root.left && !root.right) throw new Error('nah');
    const stack = [[root, null]];
    let allowLeft = true;
    while (stack.length > 0) {
        const [node, parent] = stack.pop();
        if (node.right) {
            stack.push([node.right, node]);
        } else {
            if (node.left && allowLeft) {
                stack.push([node.left, node]);
                allowLeft = false;
            } else {
                return allowLeft ? parent.value : node.value
            }
        }
    }
}