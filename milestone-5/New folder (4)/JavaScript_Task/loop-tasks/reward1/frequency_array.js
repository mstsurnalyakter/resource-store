// Frequency Array
// FindOut maximum occurrence
const frequencyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(frequencyArray);
const sampleNumber ="9987655223040321456789";
for (let i = 0; i < sampleNumber.length; i++) {
   const currentDigit = sampleNumber[i];
   frequencyArray[currentDigit]++;

}

let maxiOccurrence = frequencyArray[0];
let maxiOccurrenceIndex = 0;
// for(let item of frequencyArray) {
//     if (item > maxiOccurrence) {
//         maxiOccurrence = item;
//     }
// }

for (let i = 0; i < frequencyArray.length; i++) {
     if (frequencyArray[i] > maxiOccurrence) {
       maxiOccurrence = frequencyArray[i];
       maxiOccurrenceIndex = i
     }

}
console.log(maxiOccurrence);
console.log(maxiOccurrenceIndex);
console.log(frequencyArray);
