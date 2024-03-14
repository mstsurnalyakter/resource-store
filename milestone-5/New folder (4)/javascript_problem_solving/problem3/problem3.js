/**
 * write a JavaScript program to concatenate two strings except their first character
 */

const concatTwoStr = (str1, str2) => str1.slice(1).concat(str2.slice(1));

console.log(concatTwoStr("Surnaly","Akter"));