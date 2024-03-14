/**
 * generate random number 1 to 6
 */

const getRndInteger = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRndInteger(1,6));