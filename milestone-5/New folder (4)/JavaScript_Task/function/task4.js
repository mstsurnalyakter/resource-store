/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */


const count_zero = (str) =>{
    const arr = str.split("");
    let count = 0;
    for (const item of arr) {
        if (item === '0') {
            count++;
        }
    }

    return count;
}

const str = "01010000000000001100";
console.log(count_zero(str));
