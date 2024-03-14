/**
 * Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */

const names = ["Tom", "Tim", "Tin", "Tik"];

let namesConcat = '';

for (const item of names) {
    namesConcat += item
}

console.log(namesConcat);
