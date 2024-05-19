import { useEffect, useState } from 'react'
import './App.css'
import Profile from './Component/Profile';
import Fruit from './Component/Fruit';
import MyButton from './Component/MyButton';
import Button2 from './Component/Button';
import Gallery from './Gallery';


function App() {

  return (
    <>
      <h3>Mst Surnaly Akter</h3>
      <Gallery/>
      <Fruit/>
      <Profile/>
      <MyButton/>
      <Button2/>

    </>
  );
}

export default App
