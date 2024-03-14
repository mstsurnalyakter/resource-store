/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */

const vowelsCount = str =>{
    const lowerCaseStr = str.toLowerCase();
    const splitStr = lowerCaseStr.split("");
    let count = 0;
    for (const item of splitStr) {
        if (
          item === "a" ||
          item === "e" ||
          item === "i" ||
          item === "o" ||
          item === "u"
        ) {
            count++;
        }
    }

    return count;
}

const str = 'I am Mst Surnaly Akter';
console.log(vowelsCount(str));