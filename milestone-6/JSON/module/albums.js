

const albumsLoad = () =>{
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then(albums => displayAlbums(albums));
}


const displayAlbums = albums =>{
    const ul = document.getElementById("albums");
    albums.forEach(album => {
        const li = document.createElement("li");
        li.innerText = album.title;
        ul.appendChild(li);
    });
}