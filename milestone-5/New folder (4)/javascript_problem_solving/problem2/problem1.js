/**
 * Check two numbers and return true if one of the number is 100 or if the sum of the two number is 100;
 */

const num = (num1, num2) => {
  if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
    return true;
  } else {
    return false;
  }
};

const isEqualTo100 = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;


console.log(num(10, 20));
console.log(isEqualTo100(100, 0));
