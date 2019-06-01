function reverseWords(message) {
    reverseHelper(message, 0, message.length);
    const arr = spaces(message);
    let i = 0;
    while (i < arr.length) {
        reverseHelper(message, arr[i], arr[i + 1]);
        i += 2;
    }
    return message;
}

function spaces(message) {
    const spaces = [0];
    message.forEach((ele, idx) => {
        if (ele === ' ') {
            spaces.push(idx);
            spaces.push(idx + 1);
        }
    })
    spaces.push(message.length);
    return spaces;
}

function reverseHelper(message, start, end) {
    const evenBool = (end - start) % 2 === 0;
    const mid = Math.floor((start + end) / 2);
    if (evenBool) {
        var left = mid - 1;
        var right = mid;
    } else {
        var left = mid - 1;
        var right = mid + 1;
    }
    while (left >= start) {
        [message[left], message[right]] = [message[right], message[left]];
        left--;
        right++;
    }
}