
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mb-20 mt-10 w-40 mx-auto space-x-3">
      <Link className="btn bg-purple-300" to={"/"}>
        Home
      </Link>
      <Link className="btn bg-purple-300" to={"/login"}>
        Login
      </Link>
    </div>
  );
}

Header.propTypes = {}

export default Header