import React from 'react'
import { useLoaderData, useNavigate} from 'react-router'
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const navigation = useNavigate();
    console.log(user);
    const {name,email,catchPhrase,id} = user;
    const handleGoHome = () =>{
      navigation('/')
    }
  return (
    <div className="card w-1/2 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        <p>{catchPhrase}</p>
        <Link to={`/`} className='bg-purple-600 text-white rounded-full p-4'>Go Home</Link>
        <button className='btn bg-purple-600' onClick={handleGoHome}>Go Home</button>
      </div>
    </div>
  );

}

export default UserDetails