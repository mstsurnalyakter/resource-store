const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    border:"1px solid red",
    width:"200px",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"30px",
    marginBottom:"40px",
    padding:"25px"
  },
};

const TodoList2 = () => {
  return (
    <div style={person.theme}>
      <h1>{person.name} Todos</h1>
      {/* <img
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        alt={person.name}
      /> */}
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
};

export default TodoList2;
