/***

if you get more then 80 then inside your friend score.
    If your friend get more than 80. then go for a lunch.
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note:
use nested if-else-if-else
*/

const friendMark = parseInt(prompt(`Enter your mark`));
const myMark = parseInt(prompt(`Enter my mark`));

if (myMark >= 80) {
  if (friendMark >= 80) {
    console.log(`We go a lunch`);
  } else {
    if (friendMark < 80 && friendMark >= 60) {
      console.log(`Tell friend good luck`);
    } else {
      if (friendMark < 60 && friendMark >= 40) {
        console.log(`Ignore friend message`);
      } else {
        if (friendMark < 40) {
          console.log(`Block friend`);
        }
      }
    }
  }
} else {
  console.log(`Go home and sleep and act sad`);
}
