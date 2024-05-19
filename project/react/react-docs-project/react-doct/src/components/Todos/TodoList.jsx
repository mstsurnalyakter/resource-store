
const TodoList = () => {
    const person = {
      name: "Gregorio Y. Zara",
      image:"https://i.imgur.com/7vQD0fPs.jpg",
      theme:{
       color:"green",
       border:"1px solid red",
       width:"200px",
       margin:"auto",
       padding:"20px 40px"
      }
    };
  return (
    <div style={person.theme}>
        <h2>{person.name}</h2>
      <img
        className="rounded-full my-5 mx-auto border-red-500 border-2"
        src={person.image}
        alt={person.name}
      />
       <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default TodoList