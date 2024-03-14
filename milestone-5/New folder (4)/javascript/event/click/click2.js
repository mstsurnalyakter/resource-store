
let heading = document.querySelector("h1");
console.log(heading);

heading.addEventListener('mouseenter',()=>{
    heading.classList.add("heading");
})

heading.addEventListener('mouseout',()=>{
    heading.classList.remove("heading");
})