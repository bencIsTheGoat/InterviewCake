function mergeRanges(meetings) {

    meetings.sort((a, b) => {
        return a.startTime - b.startTime
    })
    // combine if next index start time is < curr end time and set endtime to largest
    let output = [meetings[0]];
    for (let i = 1; i < meetings.length; i++) {
        const last = output[output.length - 1];
        const curr = meetings[i];
        if (curr.startTime <= last.endTime) {
            last.endTime = Math.max(curr.endTime, last.endTime);
        } else {
            output.push(curr);
        }
    }
    return output
}
