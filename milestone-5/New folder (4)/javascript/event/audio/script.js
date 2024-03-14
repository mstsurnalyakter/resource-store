// const buttons = document.querySelectorAll(".btn");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click",(event)=> {
//     let text = event.currentTarget.innerHTML;

//     audioPlay(text);
//     playAnimation(text);
//   });
// }

// document.addEventListener('keypress',(e)=>{
//     let text = e.key;
//     audioPlay(text);
//     playAnimation(text);
// })


// const audioPlay = (text) =>{
//         switch (text) {
//           case "a":
//             let audio = new Audio("./audio1.mp3");
//             audio.play();
//             break;
//           case "b":
//            let audio1 = new Audio("./audio2.mp3");
//             audio1.play();
//             break;
//           case "c":
//            let audio2 = new Audio("./audio1.mp3");
//             audio2.play();
//             break;

//           default:
//             break;
//         }
// }

// const playAnimation = (text) =>{
//     let myText = "." + text;
//     let selectBtn = document.querySelector(myText);
//     selectBtn.classList.add('anim');
//     setTimeout(() => {
//         selectBtn.classList.remove('anim');
//     }, 1000);
// }

let count = 0;
document.querySelector("textarea").addEventListener('keypress',(e)=>{
    count++
    let text = e.key;
    document.querySelector('p').innerHTML = `You have pressed ${count}`
})