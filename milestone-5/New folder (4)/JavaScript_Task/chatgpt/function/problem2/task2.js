/**
 * Write a function that finds and returns the factors of a given number.
 */

const findFactors = num =>{
    if (num <= 0) {
        return "Factors are not defined for non-positive numbers."
    }

    const factors = [];

    for (let i = 1; i < Math.sqrt(num); i++) {
       if (num % i === 0) {
        factors.push(i);
        console.log(1,i);
        if (i !== num/i) {
            factors.push(num/i);
            console.log(2,num/i);
        }
       }

    }

    return factors.sort((a,b)=>a - b);
}

console.log(findFactors(12));