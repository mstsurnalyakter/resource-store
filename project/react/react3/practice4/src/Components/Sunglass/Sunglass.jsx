import React from 'react'

import './Sunglass.css'
import { add, dividedTheFirstNumberByTheSecondNumber as division, multiply } from '../Utilitis/calculate'


const Sunglass = () => {



  const sum = add(4,5);
  const mul = multiply(4,4);
  const dd = division(4,4);
  return (
    <div>
    <h1>Hell</h1>
    </div>
  )
}

export default Sunglass