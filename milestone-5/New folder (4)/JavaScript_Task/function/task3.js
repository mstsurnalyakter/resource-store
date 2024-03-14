/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

const make_avg = (arr ,len) =>{
    if (Array.isArray(arr) && len === arr.length) {
        let sum = 0;
            for (const item of arr) {
                sum += item;
            }
            const average = parseFloat((sum / len).toFixed(3));
            return average;
    }
}
const arr = [3, 8, 9, 1, 3,8];
const len = arr.length;
console.log(make_avg(arr, len));