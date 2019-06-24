function containsCycle(firstNode) {
    if (!firstNode) return false;
    let oneSpeed = firstNode;
    let twoSpeed = firstNode.next ? firstNode.next : firstNode
    while (twoSpeed.next !== null) {
        if (twoSpeed === oneSpeed) return true;
        oneSpeed = oneSpeed.next;
        twoSpeed = twoSpeed.next.next;
    }
    return false;
}