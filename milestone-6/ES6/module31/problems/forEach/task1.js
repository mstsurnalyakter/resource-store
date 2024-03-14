// Use forEach() to filter out even numbers from an array and create a new array containing only odd numbers.

let originalArray = [1, 2, 3, 43, 5, 6, 7, 8, 9, 10];

let oddNumbers = [];

originalArray.forEach(num =>{
    if (num % 2 === 1) {
        oddNumbers.push(num)
    }
})

//Use forEach() to find the maximum value in an array of numbers.

let maxNumberOriginal = originalArray[0];
originalArray.forEach(
  (num) =>
    (maxNumberOriginal = maxNumberOriginal < num ? num : maxNumberOriginal)
);

let maxNumberOdd = oddNumbers[0];
oddNumbers.forEach(num =>{
    if (num > maxNumberOdd) {
        maxNumberOdd = num
    }
})

//Use forEach() to count the number of occurrences of a specific element in an array.


let array = [1, 2, 3, 4, 2, 2, 5, 2];
let targetElement = 2;
let count = 0;

array.forEach(num => count = targetElement === num ? count + 1: count);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let sentence = ' ';

days.forEach(word => sentence += word + ' ');
console.log(sentence);
