let numOfWon = 0;
let numOfLost = 0;

for (let i = 0; i < 5; i++) {
    const guessNumber = parseInt(prompt(`Enter a number between 1 to 5`));
    const randomNumber = Math.floor(Math.random() * 5 + 1);

    if (guessNumber === randomNumber) {
      console.log(`Your have won.`);
      numOfWon++;
    } else {
      console.log(`Your have lost. Random number was = ${randomNumber}`);
      numOfLost++;
    }

}

console.log(`Total number of won = ${numOfWon}`);
console.log(`Total number of lost = ${numOfLost}`);
