/**
 * write a JavaScript program to find the number of even digits in a an array of integers
 */

const findEven = (arr) => {
  for (const item of arr) {
    if (item % 2 === 0) {
       console.log(item);;
    }
  }
};

const arr = [3, 5, 2, 5, 6];
findEven(arr);
