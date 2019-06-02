function sortScores(unorderedScores, highestPossibleScore) {
    const arr = new Array(highestPossibleScore).fill(undefined);
    const out = [];
    for (let score of unorderedScores) {
        if (arr[score]) {
            arr[score].push(score)
        } else {
            arr[score] = [score]
        }

    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) {
            out.push(...arr[i]);
        }
    }
    return out;
}