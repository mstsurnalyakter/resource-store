
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='flex items-center font-bold text-2xl text-purple-400 justify-between'>
        <span className='text-pink-600'>Website</span>
       <Link to="/">Home</Link>
       <Link to="/users">Users</Link>
       <Link to="/posts">Posts</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header