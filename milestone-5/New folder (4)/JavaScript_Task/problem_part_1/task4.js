/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

const longestWord = sentence =>{
    let longestLen = 0;
    let longestWord = "";
    let splitSentence = sentence.split(" ");
    for (const item of splitSentence) {
        if (item.length > longestLen) {
            longestWord = item;
        }
    }
    return longestWord;
}

const sentence = "I am learning Programming to become a programmer";

console.log(longestWord(sentence));