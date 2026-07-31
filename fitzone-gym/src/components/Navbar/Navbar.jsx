import "./Navbar.css";
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <FaDumbbell className="logo-icon" />
        <h2>FitZone</h2>
      </div>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">Trainers</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>

        <button className="join-btn">Join Now</button>
      </ul>

      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;