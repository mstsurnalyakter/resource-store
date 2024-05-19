import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,phone} = user;
    const navigate = useNavigate()
    const handleShowDetail = ()=>{
      navigate(`/user/${id}`);
    }
    const userStyle = {
        border:'2px solid red',
        padding:"20px",
        margin:"20px",
        borderRadius:"20px",

    }

  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <h2>Email:{email}</h2>
      <h2>Phone:{phone}</h2>
      <Link to={`/user/${id}`} className="text-purple-600">
        Show Details
      </Link>
      <Link to={`/user/${id}`}>
        <button className="btn">Click Me</button>
      </Link>
      <button className='btn' onClick={handleShowDetail}>Show Details</button>
    </div>
  );
}

export default User