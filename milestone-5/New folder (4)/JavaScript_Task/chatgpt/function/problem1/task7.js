/***
 * Write a function that calculates the average of elements in an array.
 */

const avg = numbers =>{
    let sum = 0;
    if (Array.isArray(numbers)) {
        for (const number of numbers) {
            sum += number;
        }
    }

    return sum / numbers.length;
}

console.log(avg([3, 4, 2]));