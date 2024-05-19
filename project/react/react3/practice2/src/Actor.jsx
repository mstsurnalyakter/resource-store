import React from 'react'

const Actor = () => {
    const actors = ["alex",'jim','john','dou']
  return (
    <div>
        {
            actors.map((actor,index)=> <li key={index}>{actor}</li>)
        }
    </div>
  )
}

export default Actor