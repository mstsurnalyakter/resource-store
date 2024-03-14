/**
 * write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character.
 * 1. create a function
 * 2. check give string it contain specified character.
 */

const countChars = (str,char) =>{
    return str.split('').filter(ch => ch === char).length;
}

const contain2To4 = (str,char) =>{
    return countChars(str,char) >= 2 && countChars(str,char) <= 4;
}

console.log(contain2To4("oooooh","o"));
console.log(contain2To4("oooh","o"));
console.log(contain2To4("ooh","o"));