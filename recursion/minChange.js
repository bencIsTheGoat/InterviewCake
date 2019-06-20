function changePossibilities(amount, arr) {
    if (String(amount) in memo) return memo[amount];
    if (amount === 0) {
        return 1;
    }
    if (amount < 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let mult = 1;
        while ((mult * arr[i]) <= amount) {
            sum += changePossibilities(amount - (mult * arr[i]), arr.slice(i + 1))
            mult++;
        }
    }
    memo[amount] = sum;
    return memo[amount]
}

console.log(changePossibilities(3, [1, 2]))