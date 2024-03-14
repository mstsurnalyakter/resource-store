/**
 * 2D Array
 *
 */

const playersInfo1 = [
    ['Ashraful', 95],
    ['Sakib',19],
    ['Mushfiq',3],
    ['Mahmullah',99],
    ['Mashrafee', 2]
]

for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 2; j++) {
        console.log(playersInfo[i][j]);

    }

}

/**
 * Task - 9 : Create a function called highestRunScorer that will
 * Receive a 2d array called playersInfo
 * Based on highest score, return the name of the player
 * Things required
 * variable
 * if-else
 * loop
 * function
 * array
 */

const playersInfo = [
  ["Ashraful", 95],
  ["Sakib", 19],
  ["Mushfiq", 3],
  ["Mahmullah", 99],
  ["Mashrafee", 2],
];
const highestRunScorer = playersInfo =>{
      let highestScore = 0;
      let highestScorer = "";
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        if (highestScore < playersInfo[i][1]) {
            highestScore = playersInfo[i][1];
            highestScorer = playersInfo[i][0];
        }
      }
    }
    return highestScorer
}

console.log(highestRunScorer(playersInfo));