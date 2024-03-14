const names = ['Ashraful','Sakib', 'Mushfiq','Mahmudullah','Mashrafee'];

for (let i = 0; i < names.length; i++) {
    console.log(`${i}: ${names[i]}`);

}

/**
 * Task - 8 --> Create a function called hightScore that will be
 * Receive a 1d array called score
 * return the highest score
 * This required
 * variable
 * if-else
 * loop
 * function
 * array
 */

const score = [773,9, 44, 988,6, 5,33, 87, 455]

const hightScore = (score) =>{
       let max = 0;
    for (let i = 0; i < score.length; i++) {
        if (max < score[i]) {
            max = score[i];
        }
    }
    return max;

}

console.log(hightScore(score));