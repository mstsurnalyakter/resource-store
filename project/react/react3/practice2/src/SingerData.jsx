import React from 'react'
import Singer from './Singer';
// import Singer from './Singer';

const SingerData = () => {
      const singers = [
        { name: "Dr. Mahfuzur Rahman", age: 68 },
        { name: "Eve Ranhman", age: 39 },
        { name: "Shuvro Dev", age: 58 },
        { name: "Pritom", age: 26 },
      ];
  return (
    <div>
        {
            singers.map((singer,index)=><Singer singer={singer}></Singer>)
        }
    </div>
  )
}

export default SingerData