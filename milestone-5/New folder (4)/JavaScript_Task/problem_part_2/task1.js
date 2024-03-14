/**
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */


const heights2 = [167, 190, 120, 165, 137];

const findLowestNum = heights2 =>{
    let lowest = heights2[0];

    for (const item of heights2) {
        if (lowest > item) {
            lowest = item;
        }
    }

    return lowest;
}

console.log(findLowestNum(heights2));