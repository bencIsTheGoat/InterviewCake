function getPermutations(string) {
    if (string.length <= 1) return new Set([string]);

    const first = string[0];
    const rest = string.slice(1);

    const restPerms = getPermutations(rest);
    const perms = new Set();

    restPerms.forEach(subWord => {

        for (let i = 0; i <= rest.length; i++) {
            const firstHalf = subWord.slice(0, i);
            const lastHalf = subWord.slice(i);
            const newWord = firstHalf + first + lastHalf;
            perms.add(newWord);
        }
    })
    return perms
}