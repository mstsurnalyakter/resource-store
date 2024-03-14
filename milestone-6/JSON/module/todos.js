const todoApp = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(todo =>displayTodo(todo))
}

const displayTodo = (todo) =>{
    const ul = document.getElementById("todo-container");
    for (const item of todo) {
        const li = document.createElement("li");
        li.innerText = item.title;
        ul.appendChild(li);
    }
}