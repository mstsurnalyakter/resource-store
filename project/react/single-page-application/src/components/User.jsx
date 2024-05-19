import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {name,email,catchPhrase,id} = user;
    const navigation = useNavigate();
    const handleShowDetails = () =>{
      navigation(`/user/${id}`);
    }
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        <p>{catchPhrase}</p>
        <Link to={`/user/${id}`} className='bg-purple-600 text-white rounded-full p-4'>Show Details</Link>
        <button onClick={handleShowDetails} className='btn bg-purple-600'>Show Details</button>
      </div>
    </div>
  );
}

export default User