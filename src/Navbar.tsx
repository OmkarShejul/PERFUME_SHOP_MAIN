// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-brand-link">
          Perfume Shop
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/allproducts" className="navbar-link">
            Collections
          </NavLink>
        </li>
        <li>
          <NavLink to="/offers" className="navbar-link">
            Special Offers
          </NavLink>
        </li>
        <li>
          {/* <a href="" className="navbar-link">
             Contact
          </a> */}
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
