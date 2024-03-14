const numbers = [74, 44, 23, 74,33];
const result = numbers.find((n) => n < 6);
const even = numbers.find((n) => n % 2 !== 0);
console.log(even);
console.log(result);


/**
 * 1.map -> return a new arrow base on functionality
 * 2. forEach --> access arrow elements
 * 3. filter --> return a new array base on condition
 * 4. find --> return first match element
 */