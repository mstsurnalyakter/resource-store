/**
 * count vowels number
 */

const vowels = ['a','e','i','u','o','A','E','I','U','O'];

const countVowels = sentence =>{
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(value =>{
        if (vowels.includes(value)) {
            count++;
        }
    })
    return count;
}
const sentence = "My name is Mst Surnaly Akter";
console.log(countVowels(sentence));