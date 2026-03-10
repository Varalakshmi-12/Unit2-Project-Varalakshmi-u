//import React from react;
import {Link , useNavigate} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const handleLogout = () => { localStorage.removeItem('isAdmin');
      navigate('/admin-login');
    };

    return (
        <nav className="navbar">

      <div className="logo">
        Store Toolkit
      </div>

      <ul className="nav-links">

        {/*li>
          <Link to="/products">Products</Link>
        </li>*/}

        {isAdmin && (
          <li>
            <Link to="/admin-products">Admin</Link>
          </li>
        )}

        {!isAdmin ? (
          <li>
            <Link to="/admin-login">Login</Link>
          </li>
        ) : (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;