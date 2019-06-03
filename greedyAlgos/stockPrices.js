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

function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
        throw new Error('Nah fool')
    }
    let totalProfit = -Infinity;
    let runProfit = 0;
    for (let i = 0; i < stockPrices.length - 1; i++) {
        runProfit += stockPrices[i + 1] - stockPrices[i];
        if (runProfit > totalProfit) totalProfit = runProfit;
        if (runProfit < 0) runProfit = 0;
    }
    return totalProfit;
}