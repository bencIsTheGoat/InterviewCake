function maxDuffelBagValue(cakes, weight) {
    const cakeArr = new Array(weight + 1).fill(0);
    for (const cake of cakes) {
        for (let i = cake.weight; i < cakeArr.length; i++) {
            const diff = i - cake.weight;
            if (cakeArr[diff] + cake.value > cakeArr[i]) {
                cakeArr[i] = cakeArr[diff] + cake.value;
            }
        }
    }
    return cakeArr[cakeArr.length - 1];
}