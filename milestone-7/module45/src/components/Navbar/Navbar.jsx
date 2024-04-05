import React, { useState } from 'react'
import Link from '../Link/Link';
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

  const [open,setOpen] = useState(false);
    const routes = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Contact', path: '/contact' },
  { id: 5, name: 'NotFound', path: '*' }
];


  return (
    <nav className="py-10 bg-purple-400 mb-5 text-white font-bold text-xl pl-5">
      <div
        onClick={() => setOpen(!open)}
        className="text-5xl md:hidden bg-purple-400"
      >
        {open ? <AiOutlineClose /> : <HiMenuAlt1 />}
      </div>
      <ul
        className={`md:flex duration-1000  bg-purple-400 absolute md:static ${
          open ? "top-20" : "-top-64"
        } `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar