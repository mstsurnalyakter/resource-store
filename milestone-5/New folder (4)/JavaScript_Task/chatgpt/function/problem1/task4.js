/**
 * Create a function that checks if a given number is even or odd.
 */


const checkEvenOrOdd = num =>{
    if (num % 2 === 0) {
      return "Even";
    } else if (num % 2 === 1) {
      return "Odd";
    } else {
      return "Invalid";
    }
}

console.log(checkEvenOrOdd(-7));