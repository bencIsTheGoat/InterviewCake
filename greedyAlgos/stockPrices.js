function getMaxProfit(prices) {
    if (prices.length < 2) {
        throw new Error("nah")
    }
    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currProfit = prices[i] - minPrice
        maxProfit = Math.max(currProfit, maxProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}