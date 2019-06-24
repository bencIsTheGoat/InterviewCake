function isValid(code) {
    const obj = { '(': ')', '[': ']', '{': '}' };
    let stack = [];
    for (const char of code) {
        if (char in obj) {
            stack.push(obj[char]);
        } else if (char === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}