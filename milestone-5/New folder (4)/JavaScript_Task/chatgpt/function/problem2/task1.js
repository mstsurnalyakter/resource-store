const generateFibonacci = n =>{
    const fibonacciSequence = [0,1];
    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i -1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    return fibonacciSequence
}

const result = generateFibonacci(8);
console.log("First 8 numbers in the Fibonacci sequence:", result);