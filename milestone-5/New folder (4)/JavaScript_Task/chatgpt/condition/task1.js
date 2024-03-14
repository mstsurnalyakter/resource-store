/**
 * if, else if, else related programs

positive / negative / zero program

Even / odd program

Vowel / consonant program

find large / small number program

digit spelling program

leap year program
 */

// positive / negative / zero program

function checkNum(num) {
    if (num%2===0) {
        return 'Even'
    }else if (num%2===1) {
        return 'Odd';
    }else{
        return 'Zero'
    }
}


//Vowel / consonant program

function findVowel(letter) {
    if (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'u'
        ) {
          return `Vowel`;
    }else{
       return 'Consonant';
    }
}

// find large / small number program

function findLargeNum(num1,num2) {
    if (num1 > num2) {
        return `Large number is ${num1}`
    }else if (num1 < num2) {
        return `Large number is ${num2}`
    }else{
        return `Equal number`
    }
}

// digit spelling program
const digitSpellings = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function digitSpelling(number) {
  if (number < 0 || number > 9) {
    return "Number out of range. Please provide a number between 0 and 9.";
  }

  return digitSpellings[number];
}

// Example usage:
const number = 7;
const spelling = digitSpelling(number);
console.log(`The spelling of ${number} is "${spelling}".`);


// leap year program

const findLeapYear = year =>{
    if ((year%4===0 && year%100 !== 0) || year % 400 === 0) {
        return true
    }
    return false;
}
