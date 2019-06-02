function hasPalindromePermutation(str) {
    const obj = getCharFreq(str);
    let oddCheck = false;
    for (let key in obj) {
        if (obj[key] % 2 === 1) {
            if (oddCheck) {
                return false;
            } else {
                oddCheck = true;
            }
        }
    }
    return true;
}

function getCharFreq(str) {
    const freqObj = {};
    for (let char of str) {
        freqObj[char] = freqObj[char] ? freqObj[char] + 1 : 1;
    }
    return freqObj;
}
