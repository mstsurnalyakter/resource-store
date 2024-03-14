//Create a function that reverses a given string.

const reverseString = str =>{
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello World'));