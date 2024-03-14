/**
 * Task-5:
Capitalize Every first Letter of each word in a String
 */

function capitalizeEveryFirstLetter(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back into a single string
  const result = capitalizedWords.join(" ");

  return result;
}

// Example usage:
const inputString1 = "this is an example string.";
const inputString2 = "I am Mst Surnaly Akter. I am a web developer."
const capitalizedString1 = capitalizeEveryFirstLetter(inputString1);
const capitalizedString2 = capitalizeEveryFirstLetter(inputString2);

console.log("Original String:", inputString1);
console.log("Modified String:", capitalizedString1);
console.log("Original String:", inputString2);
console.log("Modified String:", capitalizedString2);