const loadPostData = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>displayPost(posts))
    .catch(err => handleError(err))
}

const displayPost = posts =>{

    const div = document.getElementById("post-container");

    posts.forEach(post => {
        const section = document.createElement("section");

        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        h1.innerText = post.title;
        p.innerText = post.body;
        section.append(h1,p);
        div.appendChild(section)
    });
}

const handleError = err =>{
    alert(`Error Status: ${err.status} && Message: ${err.message} `)
}

const deletePost = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:'DELETE'
    });
}

const updatePost = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
}

const createAPost = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
}
