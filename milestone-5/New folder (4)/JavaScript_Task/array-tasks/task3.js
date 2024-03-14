/**
 * 3. Checking Array Membership with ‘includes’
 *
 *Create an array of books containing different book.
 *Use the includes method to check if the array contains a javascript book.
 *Print a message to the console indicating whether the element is present in the array or not.
 *
 */

const arr = ['HTML','CSS','JavaScript','ReactJs'];

const hasJavScript = arr.includes('JavaScript');

if (hasJavScript) {
    console.log(`The array contains a JavaScript Book.`);
} else {
    console.log(`The array does not contains a JavaScript book`);
}