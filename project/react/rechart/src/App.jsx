import React from 'react'
import { LChart } from './components/Rechart/LChart'
import SLineChart from './components/Rechart/SLineChart'
import TLineChart from './components/Rechart/TLineChart'
// import PureComponent from './components/Rechart/PureComponent'

const App = () => {
  return (
    <div>
      <LChart/>
      <SLineChart/>
      <TLineChart/>
    </div>
  )
}

export default App
