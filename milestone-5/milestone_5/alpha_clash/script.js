// common function here
const findElementById = id =>{
    return document.getElementById(id);
}

const getInnerText  = id =>{
    findElementById(id).innerText;
}

const updatedInnerText = (id,value) =>{
    findElementById(id).innerText = value;
}


const addClass = (id, className) => {
  findElementById(id).classList.add(className);
};

const removeClass = (id, className) => {
  findElementById(id).classList.remove(className);
};

const audio = new Audio();

// home section hidden and play ground section show
findElementById("playBtn").addEventListener("click",()=>{
    addClass("home-section","hidden");
    removeClass("play-ground-section", "hidden");
});

const generateAlphabet = () =>{
    const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabetStr.split("");
    // const index = Math.round(Math.random()*25)
    const randomAlphabet = alphabetArr[Math.round(Math.random() * 25)];
  return  updatedInnerText("currentLetter",randomAlphabet);

}



document.addEventListener('keyup', e =>{
    const pressedKey = e.key.toLowerCase();
    const expectedKey = generateAlphabet();

    const p = document.createElement("p");

    // console.log('pressedKey',pressedKey);
    // console.log('expectedKey',expectedKey);
})