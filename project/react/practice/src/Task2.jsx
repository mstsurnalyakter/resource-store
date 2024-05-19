const Task2 = ({name,isDone}) =>{
    if (isDone) {
        return null
    }
    return <li>{name}</li>
}

export default Task2;