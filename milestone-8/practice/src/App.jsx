import './App.css'
import Countries from './Components/Countries/Countries'
// import Card from './Card'
// import Card2 from './Card2'
// import Gallery from './Gallery'
// import Task from './Task'
// import Todo from './Todo'


function App() {

  return (
    <>

    <Countries/>

      {/* <h1>Vite + React</h1>
      <hr /> */}

{/*

      <h2>Todo</h2>
      <Task></Task>
      <hr />



      <h2>Gallery</h2>
      <Gallery></Gallery>
      <hr />

      <h2>Card</h2>
      <Card></Card>
      <hr />

      <h2>Card2</h2>
      <Card2></Card2>
      <hr />

      <h2>Todo App</h2>
      <Todo task="Learning JavaScript" isDone={true}></Todo>

      <hr />
      <h2>Device</h2>
      <Device name="Mobile" price="3000" ></Device>

      <hr />
      <h2>Students</h2>
      <Students name="Alex" age="22" id="101"></Students>
      <hr />

      <h2>Person</h2>
      <Person></Person>
      <hr /> */}
    </>
  )
}

const Device = (props) =>{
  return(
    <div style={{
      border:'2px solid pink',
      padding:'20px',
      margin:'20px'
    }}>
      <h4>Name: {props.name}</h4>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

const Students = ({name,age,id}) =>{
  const studentStyle = {
    border:'2px solid red',
    padding:'20px',
    margin:'20px'
  }
  return(
    <div style={studentStyle}>
      <h3>Name:{name}</h3>
      <h3>age:{age}</h3>
      <h3>Id:{id}</h3>
    </div>
  )
}

const Person = () =>{
  const person = {
    name:"John",
    hobby:"Reading Books"
  }
  return(
    <div>
      <h3>Name: {person.name}</h3>
      <h3>Hobby: {person.hobby}</h3>
    </div>
  )
}

export default App
