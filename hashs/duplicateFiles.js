const fs = require('fs')
const crypto = require('crypto')

function myFunction(arg) {
    const stack = [arg];
    const dups = [];
    const obj = {};
    while (stack.length > 0) {
        const ele = stack.pop();
        const statEle = fs.statSync(ele);
        if (statEle.isDirectory()) {
            const pathArr = fs.readdirSync(ele);
            for (let dir of pathArr) {
                stack.push(`/${ele}/${dir}`);
            }
        } else {
            const content = sampleHashing(path);
            if (content in obj) {
                if (obj[content].time < statEle.mTime) {
                    dups.push([obj[content].path, ele]);
                } else {
                    dups.push([ele, obj[content].path]);
                }
            } else {
                obj[content] = { time: statEle.mTime, path: ele }
            }
        }
    }
    return dups
}

function sampleHashing(path) {
    const file = fs.statSync(path);
    const hash = crypto.hash('sha512');
    if (file.size < 4000 * 3) {
        const content = fs.readFileSync(path);
        hash.update(content);
    } else {
        const offsetSize = (file.size - (4000 * 3)) / 2;
        const buffer = Buffer.alloc(file.size);
        for (let i = 0; i < 2; i++) {
            const fileInt = fs.openSync(path);
            const position = (4000 * i) + offsetSize;
            const buffSet = 4000 * i;
            fs.readSync(fileInt, buffer, buffSet, 4000, position);
        }
        hash.update(buffer);
    }
    return hash.digest();
}