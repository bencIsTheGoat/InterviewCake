function mergeArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    const output = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }
    return output.concat(arr1.slice(i)).concat(arr2.slice(j));
}