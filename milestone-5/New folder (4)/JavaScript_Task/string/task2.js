/**
 * Count how many times a string has the letter a or A
 */

const str = "I am Mst Surnaly Akter. I Am a web developer."

const toLowerCaseStr = str.toLowerCase();
const splitStr = toLowerCaseStr.split("");
let count = 0;
let aChar = "a"

for (let i = 0; i < splitStr.length; i++) {
    if (aChar === splitStr[i]) {
        count++;
    }
}


const countLetterA = str =>{
    const count = str.toLowerCase().split("").filter(char => char === "a").length;
    return count;
}

console.log(`The number of a is ${count}`);
console.log(`The number of a is ${countLetterA(str)}`);
