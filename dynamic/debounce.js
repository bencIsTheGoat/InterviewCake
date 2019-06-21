

function eventListenerCallback (cb, delay) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => cb.apply(context, args), delay);
    }
}