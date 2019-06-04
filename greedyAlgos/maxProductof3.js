function highestProductOf3(arr) {
    if (arr.length < 3) {
        throw new Error('Nah')
    }
    const [max, maxIdx] = findPeak(arr, true);
    const [twoMax, twoMaxIdx] = findPeak(arr, true, [maxIdx]);
    const [threeMax, threeMaxIdx] = findPeak(arr, true, [maxIdx, twoMaxIdx]);
    const [min, minIdx] = findPeak(arr, false, [maxIdx, twoMaxIdx, threeMaxIdx]);
    const [twoMin, twoMinIdx] = findPeak(arr, false, [maxIdx, twoMaxIdx, threeMaxIdx, minIdx]);

    const negMax = twoMin < 0 && min < 0 && max > 0 ? twoMin * min * max : -Infinity;
    const posMax = max > 0 && twoMax > 0 && threeMax > 0 ? max * twoMax * threeMax : -Infinity;

    const out = Math.max(negMax, posMax);

    return out === -Infinity ? max * twoMax * threeMax : out;

}

function findPeak(arr, isMax, exclude) {
    let out = isMax ? -Infinity : Infinity;
    let outIdx;
    let set = new Set(exclude);
    for (let i = 0; i < arr.length; i++) {
        const maxCheck = arr[i] > out;
        const minCheck = arr[i] < out;
        check = isMax ? maxCheck : minCheck;
        if (!set.has(i) && check) {
            out = arr[i];
            outIdx = i;
        }
    }
    return [out, outIdx];
}