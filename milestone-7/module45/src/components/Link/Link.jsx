import React from 'react'

const Link = ({route}) => {
  return (
    <li className=" mr-10 hover:bg-purple-600 md:hover:bg-transparent w-full p-3 md:p-0">
      <a href={route.path} target="_blank">
        {route.name}
      </a>
    </li>
  );
}

export default Link