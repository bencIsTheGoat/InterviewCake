function findRepeat(numbers) {
    let start = 0;
    let end = numbers.length;
    while (start < end - 1) {
        const mid = Math.floor((start + end) / 2);
        const firstStart = start;
        const firstEnd = mid - 1;
        const secondStart = mid;
        const secondEnd = end;
        let count = 0;
        for (let num of numbers) {
            if (num >= firstStart && num <= firstEnd) {
                count++;
            }
        }
        if (count > (firstEnd - firstStart + 1)) {
            start = firstStart;
            end = firstEnd;
        } else {
            start = secondStart;
            end = secondEnd;
        }
    }
    return start;
}