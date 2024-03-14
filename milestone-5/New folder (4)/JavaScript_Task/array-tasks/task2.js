/**
 * 2. Add or remove elements
 * Declare an array of 3 tourist destinations
 * Add a new tourist destination to your tourist array
 * Add two more to your array
 * Remove the last tourist destination you have added
 * display the final array as output
 */

const touristDestinations = ["Paris", "Tokyo", "New York City"];
touristDestinations.push("Rio de Janeiro");


touristDestinations.splice(touristDestinations.length ,0 , "Barcelona", "Sydney")

touristDestinations.pop();
console.log(touristDestinations);