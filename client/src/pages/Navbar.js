
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext';

function Navbar() {
  const {user, logout} = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex mx-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className="ml-auto">
            {user ? (
              <>
                <span className="me-3">Welcome, {user}</span>
                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link to='/login' className="btn btn-outline-primary me-2">Sign In</Link>
                <Link to='/signup' className="btn btn-primary">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
