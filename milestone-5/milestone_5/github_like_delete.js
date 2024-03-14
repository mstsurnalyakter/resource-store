

const findElementById = id =>{
    return document.getElementById(id);
}

findElementById("input").addEventListener("keyup",e =>{
    const text = e.target.value;
    if (text.toLowerCase() === 'delete') {
        findElementById("btn").removeAttribute("disabled");

    }else
    findElementById("btn").setAttribute("disabled",true);

})


findElementById("btn").addEventListener("click",()=>{
    findElementById("secret").style.display = "none";
    findElementById("input").value = ""
})


