/**
 * IIFEs --> Immediately Invokeable Function Expression
 */
(function sum(num1, num2){
    console.log(`Sum: ${num1 + num2}`);
})(7,9)

/**
 * Function Expression
 */

let sum = (num1, num2) => {
    console.log(`Sum: ${num1 + num2}`);
}
sum(7, 9);

let sub = (num1, num2) => {
    console.log(`Sub: ${num1 - num2}`);
}
sub(7, 9);


/**
 * (),
 * {},
 * [],
 * <>
 * Task 7: create an IIFE that print sum of 2 numbers
 *
 */

(function sum(num1,num2){
    console.log(num1 + num2);
})(7, 9);