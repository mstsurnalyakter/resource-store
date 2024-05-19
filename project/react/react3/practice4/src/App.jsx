
import { useEffect, useState } from 'react'
import './App.css'
import Sunglass from './Components/Sunglass/Sunglass'
import Watch from './Components/Watch/Watch'

function App() {

const [watches,setWatches] = useState([])
useEffect(()=>{
  const loadWatches = async ()=>{
    const res = await fetch(
      "https://raw.githubusercontent.com/mstsurnalyakter/watches-data/main/watches.json"
    );
    const data = await res.json();
    setWatches(data);
  }
  loadWatches();
},[])
// useEffect(()=>{
//   const loadWatches = async ()=>{
//     const res = await fetch('watch.json');
//     const data = await res.json();
//     setWatches(data);
//   }
//   loadWatches();
// },[])

  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map((watch)=><Watch key={watch.id} watch={watch} />)
      }
    </>
  )
}

export default App
