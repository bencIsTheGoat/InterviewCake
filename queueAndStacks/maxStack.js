class MaxStack {
    constructor() {
        this.stack = [];
        this.maxArr = [-Infinity];
    }

    push(item) {
        const max = this.getMax();
        if (item >= max) {
            this.maxArr.push(item);
        }
        this.stack.push(item);
    }

    pop() {
        const item = this.stack.pop();
        const max = this.getMax();
        if (item === max) {
            this.maxArr.pop();
        }
        return item;
    }

    getMax() {
        return this.maxArr[this.maxArr.length - 1];
    }
}