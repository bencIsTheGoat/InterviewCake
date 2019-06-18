function findDuplicate(numbers) {
    let fast = numbers[numbers.length - 1];
    fast = numbers[fast - 1];
    fast = numbers[fast - 1];
    let slow = numbers[numbers.length - 1];
    while (slow !== fast) {
        slow = numbers[slow - 1];
        fast = numbers[fast - 1];
        fast = numbers[fast - 1];
    }
    fast = numbers[fast - 1];
    let count = 1;
    while (fast !== slow) {
        fast = numbers[fast - 1];
        count++;
    }
    slow = numbers[numbers.length - 1];
    fast = numbers[numbers.length - 1];
    let i = 0;
    while (i < count) {
        fast = numbers[fast - 1];
        i++
    }
    while (fast !== slow) {
        fast = numbers[fast - 1];
        slow = numbers[slow - 1];
    }
    return fast
}

console.log(findDuplicate([1, 13, 3, 4, 12, 6, 5, 10, 9, 8, 12, 12, 13, 2].reverse()))