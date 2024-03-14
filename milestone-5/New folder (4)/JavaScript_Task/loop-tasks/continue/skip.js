/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i = i + 2) {
   if (i % 5 === 0) {
    continue;
   }
   console.log(`Odd number = ${i}`);

}