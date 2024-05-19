import { useState } from "react"
import { useEffect } from "react"
import Todo from "./Todo"

const TodoList = () => {
    const [todoList,setTodoList] = useState([])
    useEffect(()=>{
        const loadData = async () =>{
            const res = await fetch(
              "https://jsonplaceholder.typicode.com/todos"
            )
            const data = await res.json();
            setTodoList(data.slice(0,5));
        }

        loadData();
    },[])
  return (
    <div>
      <h3>Todo Length: {todoList.length}</h3>
      {
        todoList.map((todo,index)=><Todo key={index} todo={todo}></Todo>)
      }
    </div>
  );
}

export default TodoList