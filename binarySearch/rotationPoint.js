function findRotationPoint(arr) {
    if (arr.length === 0) throw new Error('nah');
    let start = 0;
    let end = arr.length;
    while (start < end - 1) {
        const middle = Math.floor((start + end) / 2);
        if (arr[middle] > arr[start]) {
            start = middle + 1;
        } else if (arr[middle] < arr[start]) {
            end = middle;
        }
    }
    return end;
}