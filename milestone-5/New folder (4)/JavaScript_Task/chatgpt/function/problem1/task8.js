/**
 * Implement a function that calculates the sum of elements in an array.
 */


const arrSum = numbers =>{
    let sum = 0;
    if (Array.isArray(numbers)) {
        for (const number of numbers) {
            sum += number;
        }
    }

    return sum;
}


const numbers = [8, 3, 2,9, 3, 2];
console.log(arrSum(numbers));