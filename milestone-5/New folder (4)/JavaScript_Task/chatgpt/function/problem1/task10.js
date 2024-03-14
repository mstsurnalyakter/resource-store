/**
 * Write a function that checks if a given number is a prime number.
 */

function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If the number is divisible by any number between 2 and sqrt(number), it's not prime
    }
  }

  return true; // If no divisors were found, the number is prime
}


console.log(isPrime(4));
console.log(isPrime(5));