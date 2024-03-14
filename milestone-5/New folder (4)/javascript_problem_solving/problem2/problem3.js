/**
 * Write a JavScript program to replace every character in a given string with the character following it in the alphabet
 */

const moveCharsForward = (str) => str.split("").reverse().join("");

console.log(moveCharsForward("abcd"));
