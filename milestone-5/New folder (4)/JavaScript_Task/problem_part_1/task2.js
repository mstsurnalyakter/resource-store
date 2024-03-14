/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

const countNum = numbers =>{
    let count = 0;
    if (Array.isArray(numbers)) {
        for (const item of numbers) {
            if (item === 5) {
                count++;
            }
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5];

console.log(countNum(numbers));