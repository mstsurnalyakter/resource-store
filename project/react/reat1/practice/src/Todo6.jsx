// conditional rendering options 6:
export default function Todo6({task,isDone}){
   let listItem;
   if (isDone) {
        listItem = <li>Finish : {task}</li>
   }else{

       listItem = <li>Work on: {task}</li>
   }

   return listItem;

}