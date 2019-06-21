function maxDuffelBagValue(cakes, weight) {
    const cakeArr = new Array(weight + 1).fill(0);
    for (const cake of cakes) {
        if (cake.weight === 0 && cake.value > 0) return Infinity;
        for (let i = cake.weight; i < cakeArr.length; i++) {
            const diff = i - cake.weight;
            cakeArr[i] = Math.max(cakeArr[i], cakeArr[diff] + cake.value)
        }
    }
    return cakeArr[cakeArr.length - 1];
}