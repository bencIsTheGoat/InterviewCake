function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(theArray) {

    for (let i = 0; i < theArray.length; i++) {
        const randIdx = getRandom(i, theArray.length - 1);
        [theArray[i], theArray[randIdx]] = [theArray[randIdx], theArray[i]]
    }
    return theArray;
}