
// 1 iteration
function hasPalindromePermutation(str) {
    const set = new Set();
    for (let char of str) {
        if (set.has(char)) {
            set.delete(char);
        } else {
            set.add(char)
        }
    }
    return set.size <= 1;
}

// 2 iterations
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
