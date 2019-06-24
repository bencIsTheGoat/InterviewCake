function getClosingParen(sentence, idx) {
    let count = 1;
    let i = idx + 1;
    while (i < sentence.length) {
        if (count === 0) return i - 1;
        if (sentence[i] === ')') {
            count--;
        } else if (sentence[i] === '(') {
            count++;
        }
        i++;
    }
    throw new Error('no close')
}
