function getProductsOfAllIntsExceptAtIndex(intArray) {
    if (intArray.length <= 1) {
        throw new Error('Please nah')
    }
    const first = [1];
    for (let i = 1; i < intArray.length; i++) {
        const val = first[first.length - 1] * intArray[i - 1]
        first.push(val);
    }
    let prod = 1;
    for (let i = intArray.length - 2; i >= 0; i--) {
        prod = prod * intArray[i + 1];
        first[i] = first[i] * prod;
    }
    return first;
}