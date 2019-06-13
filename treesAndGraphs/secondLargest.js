function findSecondLargest(root) {
    if (!root.right && !root.left) throw new Error("nah");
    const stack = [root];
    let parentVal = root.val;
    let leftCheck = true;
    while (stack.length > 0) {
        const node = stack.pop();
        if (node.right) {

            stack.push(node.right);
        } else {

            if (leftCheck) {

                if (node.left) {
                    stack.push(node.left);
                } else {
                    return parentVal;
                }

                leftCheck = false;
            } else {
                return node.value;
            }

        }
        parentVal = node.value
    }
    return parentVal
}