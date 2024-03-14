

const loadUserPhoto = () =>{
    fetch("https://jsonplaceholder.typicode.com/photos/5")
    .then(res => res.json())
    .then(photo => displayUserPhoto(photo))
}

const displayUserPhoto = (photo) =>{
    document.getElementById("h1").innerText = photo.title;
    document.querySelector("img").src = photo.thumbnailUrl;
}

const loadUserPhoto2 = () =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data =>displayUserPhoto2(data))
}

const displayUserPhoto2 = (data) =>{
    const ul = document.getElementById("users");

    for (const item of data) {
        const li = document.createElement("li");
         li.innerText = item.title;
         ul.appendChild(li)
    }

}