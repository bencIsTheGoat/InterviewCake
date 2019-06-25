function reverse(head) {
    let newNext = null;
    let current = head;
    while (current && current.next) {
        let tempNext = current.next;
        current.next = newNext;
        newNext = current;
        current = tempNext;
    }
    return current
}