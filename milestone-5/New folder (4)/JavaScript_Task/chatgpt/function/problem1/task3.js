/**
 * Write a function that calculates the factorial of a given number.
 */

const calculateFactorial = number =>{
    if (number < 0) {
        return `Factorial is not defined for negative number.`
    }else if (number === 0 || number === 1) {
        return 1;
    }else{
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;

        }
        return factorial;
    }
}

console.log(`Factorial ${calculateFactorial(5)}`);