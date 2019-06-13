// import file system module from node so I can read file and get array
var fs = require('fs')
var text = fs.readFileSync("Input.txt").toString('utf-8');
// use Regex to clean up file and get values I need
const arr = text.split(/\W/);
// slice the first 32 chars so I can look at direction insructions array
const newArr = arr.slice(32);

/* 
this is the main method that iterates over direction array...
- keeps track of x and y values that represent coordinate position
- checks the distance from starting point (0, 0) to see if theres new max
- uses numbers 0 thru 3 to represent direction -> 0 = north, 1 = east, 2 = south
and 3 = west
- adjusts direction according to current value in direction instructions
- edits x and y values by calling move() helper function
- returns maximum distance encountered
*/
function maxDist(newArr) {
    let x = 0;
    let y = 0;
    let wayIdx = 0;
    let max = 0;
    const set = obstacleToSet();
    for (let ele of newArr) {
        const newDist = getDist(x, y);
        if (newDist > max) max = newDist;
        if (ele === 'L') {
            wayIdx = wayIdx === 0 ? 3 : wayIdx - 1; 
        } else if (ele === 'R') {
            wayIdx = wayIdx === 3 ? 0 : wayIdx + 1;
        } else if (ele === 'M') {
            continue;
        } else {
            [x, y] = move(ele, wayIdx, x, y, set) 
        }
    }
    return max;
}

/*
this function edits the x and y values, representing the position...
- when a number is encountered in direction instruction array, I convert it to number
and increment either x or y position according to wayIdx which represents the current
direction
- while I am moving, I am checking whether or not I have encountered an obstacle,
and if I have encounter obstacle, I move back one position and move onto next instruction
- return the new x and y values representing the new position
*/
function move (ele, wayIdx, x, y, set) {
    const val = parseInt(ele);
    let i = 1;
    const increment = wayIdx <= 1 ? 1 : -1;
    while (i <= val) {
        if (wayIdx % 2 === 0) {
            y += increment;
        } else {
            x += increment;
        }
        if (checker(set, [x, y])) {
            if (wayIdx % 2 === 0) {
                y -= increment;
            } else {
                x -= increment;
            }
            break;
        }
        i++;
    }
    return [x, y]
}

/*
this function checks whether or not the current position is on an obstacle
*/
function checker (obstacleSet, arr) {
    return obstacleSet.has(String(arr));
}

/*
this function converts the 2D array of obstacles into set to allow for faster
checking of position on obstacle instead of iterating through entire 2D array
each time
*/
function obstacleToSet() {
    const obstacle =
        [[-190, 213],
        [-32, 233],
        [-4, 0],
        [38, 72],
        [47, 36],
        [81, 10],
        [99, 174],
        [128, 113],
        [137, -101],
        [201, -126]]
    const set = new Set();
    for (let ele of obstacle) {
        set.add(String(ele));
    }
    return set
}

// this function calculates the euclidean minimum distance from starting point
function getDist(x, y) {
    return Math.sqrt((x ** 2) + (y ** 2));
}

console.log(maxDist(newArr));


