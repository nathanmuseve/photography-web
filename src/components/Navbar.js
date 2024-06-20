import { Outlet, Link } from "react-router-dom";

import "./Navbar.css"
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const handleMenu =() => {
  //   }
  return (
    <div className="navbar">
      <nav>
        <img src={require('./../images1/professional-pht2.jpg')} alt="log" />
        <ul className={menuOpen ? "open": ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/photo">Photo</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">SignUp</Link>
          </li>
        </ul>
        <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}><i class="fa-solid fa-bars"></i></div>
      </nav>
      <Outlet />
    </div>
  )
}
export default Navbar;