// conditional rendering option 4: &&

export default function Todo4({task,isDone}){
    return(
        <li>{task} {isDone && `: Done`}</li>
    )
}