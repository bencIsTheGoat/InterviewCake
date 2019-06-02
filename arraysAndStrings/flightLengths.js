function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const set = new Set();
    for (let len of movieLengths) {
        if (set.has(len)) {
            return true;
        }
        set.add(flightLength - len);
    }
    return false;
}