function changePossibilities(amount, arr) {
    const amountArr = new Array(amount + 1).fill(0);
    if (amount === 0 && arr.length > 0) return 1
    for (const coin of arr) {
        if (coin > amount) continue;
        amountArr[coin] += 1;
        for (let i = coin; i < amountArr.length; i++) {
            const diff = i - coin;
            amountArr[i] += amountArr[diff];
        }
    }
    return amountArr[amountArr.length - 1]
}

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