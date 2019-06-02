function isSingleRiffle(half1, half2, shuffledDeck) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (k < shuffledDeck.length) {
        if (half1[i] === shuffledDeck[k]) {
            i++;
        } else if (half2[j] === shuffledDeck[k]) {
            j++;
        } else {
            return false;
        }
        k++;
    }
    return true;
}