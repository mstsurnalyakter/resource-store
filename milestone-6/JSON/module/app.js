const loadData = () =>{
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
    .then(response => response.json())
    .then(data =>console.log(data))
}

const loadUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => displayUser(user));
}

const displayUser = (user) =>{
    console.log(user);
}

fetch("https://jsonplaceholder.typicode.com/photos/1")
.then(res => res.json())
.then(photos => console.log(photos))
