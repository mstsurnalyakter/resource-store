/**
 * Implement a function that checks if a given word is a palindrome.
 */

const isPalindrome = (word) => {
  const cleanWord = word.replace(/[^a-zA-Z0-]/g, "").toLowerCase();
  const reversedWord = cleanWord.split("").reverse().join("");

  return cleanWord === reversedWord;
};

console.log(`Is 'racecar' a palindrome?" ${isPalindrome("racecar")}`);
console.log(`Is 'hello' a palindrome?" ${isPalindrome("hello")}`);
