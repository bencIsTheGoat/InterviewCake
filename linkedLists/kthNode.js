function kthToLastNode(k, head) {
    if (k === 0) throw new Error
    let firstPointer = head;
    let i = 0;
    while (i < k - 1) {
        if (!firstPointer) throw new Error('not long');
        firstPointer = firstPointer.next;
        i++;
    }
    let secondPointer = head;
    while (firstPointer.next) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }
    return secondPointer
}