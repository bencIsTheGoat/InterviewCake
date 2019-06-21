class QueueTwoStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(item) {
        this.stack1.push(item);
        this.size++;
    }

    dequeue() {
        if (this.stack1.length === 0 && this.stack2.length === 0) throw new Error('empty');
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        } else {
            return this.stack2.pop();
        }
    }
}