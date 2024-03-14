// JavaScript BOM
// JavaScript Timing events methods
// setTimeout(), setInterval()
// setTimeout() --> when we need some functionally do or stop after some time one time then we used setTimeout() || when we need one function call one time after some time then we use setTimeout() ||  when we need after some time some functionally stop then we use setTimeout() method

// setInterval() --> when we need some functionally again and again do then we use setInterval() method || when we need some functionally occur after some again and again



// setTimeout(()=>{
// console.log('hi');
// },2000)

// const display = () => {
//   console.log("Display");
// };


// setTimeout(display,2000);

const btn = document.querySelector(".btn");
const message = document.querySelector(".mess");

btn.addEventListener("click",saveUser);

function saveUser(){
    message.textContent = 'User Registration successfully';
    setTimeout(()=>{
         message.textContent = "";
    },2000)
}


const displayCount = () =>{
    let count = 1;
    message.textContent = count;
    setInterval(()=>{
        count++;
        message.textContent = count
    },1000)
}

btn.addEventListener("click",displayCount)