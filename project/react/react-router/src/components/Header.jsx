import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between mb-5 space-x-6'>
        <span className='text-purple-600 font-bold text-3xl'>WebSite</span>
        <Link className={`text-blue-700 text-xl`} to="/">Home</Link>
        <Link className={`text-blue-700 text-xl`} to="/about">About</Link>
        <Link className={`text-blue-700 text-xl`} to="/contact">Contact Us</Link>
    </div>
  )
}

export default Header