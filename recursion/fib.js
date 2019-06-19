function fib(n) {
    if (n === 0) return 0;
    if (n < 0) throw new Error("can't be neg")
    let prev = 0;
    let next = 1;
    let out = 1;
    let i = 1;
    while (i < n) {
        out = prev + next;
        prev = next;
        next = out;
        i++;
    }
    return out;
}