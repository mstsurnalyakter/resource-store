// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));



const loadData = () =>{
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
    .then(response => response.json())
    .then(json=>console.log(json))
}
