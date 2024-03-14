/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

const statement = "I am a hard working person";

const outPut = statement.split(" ").reverse().join(" ");

console.log(outPut);