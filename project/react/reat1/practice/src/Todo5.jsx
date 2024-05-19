//conditional rendering option 5: ||
export default function Todo5({task,isDone}){
    return(
        <li>{task} {isDone || ': Do it'}</li>
    )
}