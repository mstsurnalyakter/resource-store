/**
 * Count how many times a string has the letter a
 */

let names = "Mst Surnaly Akter";
let convertArr = names.split("");
let findA = "a";
let count = 0;
for (let i = 0; i < names.length; i++) {
    if (findA === convertArr[i]) {
        count++
    }

}
console.log(`The number of a = ${count}`);
