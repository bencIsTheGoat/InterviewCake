function deleteNode(nodeToDelete) {
    const next = nodeToDelete.next;
    nodeToDelete.value = next.value;
    nodeToDelete.next = next.next;
}