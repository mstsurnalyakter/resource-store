//  find element with help of id
const findElementById = id =>{
   return document.getElementById(id);
}

//  add class
const addClass = (id, className) =>{
   findElementById(id).classList.add(className);
}


//  remove class
const removeClass = (id, className) =>{
 findElementById(id).classList.remove(className);
}


// get current score
const getScore = id =>{
    return parseInt(findElementById(id).innerHTML);
}


// updated score
const updatedScore = (id, updatedScore) =>{
    findElementById(id).innerText = updatedScore;
}

const getARandomAlphabet = () =>{
      const alphabetString = "abcdefghijklmnopqrstuvwxyz";
      const alphabetArr = alphabetString.split("");

      return alphabetArr[Math.round(Math.random() * 25)];
}

document.addEventListener("keyup", (e) => {
  const playPressedKey = e.key.toLowerCase();

  const expectedKey = findElementById("current-alphabet").innerText.toLowerCase();

  let gameLife = getScore("game-life");
  let score = getScore("initial-score");

  if (playPressedKey === expectedKey) {
    score++;
    updatedScore("initial-score",score);

    removeClass(expectedKey, "bg-orange-400");
    continueGame();
  } else {
    gameLife--;
    updatedScore("game-life",gameLife);

    removeClass(expectedKey, "bg-orange-400");
    continueGame();

    if (gameLife === 0) {
        gameOver(score);
    }
  }

//   stop the game if pressed 'Esc'
if (playPressedKey === 'escape') {
    gameOver(score);
}
});


const continueGame = () =>{
    // generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generate alphabet
    const para = findElementById("current-alphabet");
    para.innerText = alphabet;

    // add background color
    addClass(alphabet, "bg-orange-400");
}


//play game
findElementById("play-btn").addEventListener("click",()=>{
    removeClass("play-ground-section","hidden");
    addClass("home-section","hidden");
    continueGame();
});


const gameOver = (score) =>{
    addClass("play-ground-section", "hidden");
    removeClass("final-score-section","hidden");
    updatedScore("achieve-score", score);
    playAgain();
}

const playAgain = () =>{
    findElementById("play-again").addEventListener("click",()=>{
         removeClass("play-ground-section", "hidden");
         addClass("final-score-section", "hidden");
         updatedScore("initial-score",0);
         updatedScore("game-life",5);
    });
}