/**
 * Given two value, write a JavaScript program to find out which one is nearest to 100;
 */

const nearestTo100 = (n1, n2) =>{
   return n1 - 100 > n2 - 100 ? `${n1} is nearest to 100` : `${n2} is nearest to 100`;
}


console.log(nearestTo100(2,4));

const closerTo100 = (a,b) => (100 - a) < (100 - b) ? a: b;

console.log(closerTo100(2,4));
