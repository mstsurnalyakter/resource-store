const findElementById = id =>{
    return document.getElementById(id);
}

findElementById("commentBtn").addEventListener("click",()=>{
    const value = findElementById("textarea").value;
    const commentContainer = findElementById("comment-container");
    const p = document.createElement("p");
    p.innerText = value;
    commentContainer.appendChild(p);
    findElementById("textarea").value = "";
});