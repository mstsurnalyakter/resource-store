/**
 * 4. Checking if it's an Array
 *
 * Create different variables, each containing either an array or a non-array value.
 * Now use isArray to check if each variable is an array.
 * Print a message to the console indicating whether each variable is an array or not.
 */

const name = "Mst Surnaly Akter";
const num = 33;
const arr = [8,6,5,9,3,55];
const bool = true;

if (Array.isArray(name)) {
    console.log(`variable 'name' is a array`);
} else {
    console.log(`variable 'name' is not a array`);
}

if (Array.isArray(num)) {
    console.log(`variable 'num' is a array`);
} else {
    console.log(`variable 'num' is not a array`);
}

if (Array.isArray(arr)) {
    console.log(`variable 'arr' is a array`);
} else {
    console.log(`variable 'arr' is not a array`);
}

if (Array.isArray(bool)) {
    console.log(`variable 'bool' is a array`);
} else {
    console.log(`variable 'bool' is not a array`);
}
