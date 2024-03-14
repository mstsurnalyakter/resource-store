/**
 * Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 */

const str = "This is an example with X and x";

const replaceXWithY = str =>{
    const result = str.replace(/x/g,'y').replace(/X/g, 'Y');
    return result;
}

console.log(`Original String ${str}`);
console.log(`Modified String ${replaceXWithY(str)}`);