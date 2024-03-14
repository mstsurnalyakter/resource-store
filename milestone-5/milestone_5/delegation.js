const ul = document.querySelector("ul");

ul.addEventListener("click", e =>{
    // console.log(e.target.parentElement);
    e.target.parentElement.removeChild(e.target);
})

const findElementById = id =>{
    return document.getElementById(id);
}


findElementById("btn").addEventListener('click',e=>{
    const  text = findElementById("input").value;
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
    findElementById("input").value = "";
})