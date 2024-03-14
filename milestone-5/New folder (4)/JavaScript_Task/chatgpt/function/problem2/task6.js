const countCharacters = str =>{
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

const str = 'Hello World';
const result = countCharacters(str);

console.log('Character occurrences', result);