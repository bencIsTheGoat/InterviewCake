function mergeArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    const output = [];
    while (i < arr1.length || j < arr2.length) {
        const ele1 = arr1[i] === undefined ? Infinity : arr1[i];
        const ele2 = arr2[j] === undefined ? Infinity : arr2[j];
        if (ele2 < ele1) {
            output.push(ele2)
            j++;
        } else if (ele1 < ele2) {
            output.push(ele1);
            i++;
        } else {
            i++;
            j++;
        }
    }
    return output;
}