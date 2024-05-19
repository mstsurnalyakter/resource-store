// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name='Laptop' price='55000'></Device>
      <Device name='Mobile' price='20000'></Device>
      <Device name='Watch' price='3000'></Device>
      <Students name='Mst Surnaly Akter' id='101' subject='Chemistry'></Students>
      <Students name='Rita Akter' id='102' subject='Biology'></Students>
      <Person></Person>
      <Developer></Developer>
      <Hobby></Hobby>
    </>
  );
}

function Students({name,id,subject}){
  const studentStyle = {
    border:'3px solid red',
    padding:'20px',
    margin:'20px',
    borderRadius:'10px'

  }
  return (
    <div style={studentStyle}>
      <h3>Name: {name} </h3>
      <h3>Id: {id}</h3>
      <h3>Subject: {subject}</h3>
    </div>
  )
}

function Device(props){
    // console.log(props);
    const deviceStyle = {
      border: "3px solid red",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px",
    };
  return (
    <div style={deviceStyle}>
      <h3>This Device: {props.name} price: {props.price} </h3>
    </div>
  )
}

function Person() {
  const person = {
    name: "Mst Surnaly Akter",
    age: 21,
    hobby: "Reading Books",
  };
  return (
    <div className="person">
      <h3>name: {person.name}</h3>
      <h3>age: {person.age}</h3>
      <h3>Hobby: {person.hobby}</h3>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    border: "2px solid tomato",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle }>
      <h4>Developer</h4>
      <p>Coding:</p>
    </div>
  );
}

function Hobby() {
  return (
    <div style={{
      border:'2px solid red',
      padding:'20px',
      margin:'20px',
      borderRadius:'10px'
    }}>
      <h1>Hobby: Reading Books</h1>
      <h2>FavoriteBook: The 7 Habits of Highly Effective Person</h2>
    </div>
  )
}

export default App;
