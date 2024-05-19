import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between'>
      <span>My Website</span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to={`/users`}>Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Header