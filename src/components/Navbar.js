import React, { useState } from 'react';
import "../styles/Navbar.css";

function Navbar({ onCategorySelect }) {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <h1>Global News</h1>

      <div className={`bar ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
        <i className="fas fa-bars open"></i>
        <i className="fas fa-times close"></i>
      </div>

      <ul className={menuActive ? "activeMenu" : ""}>
        <li><button onClick={() => onCategorySelect("general")}>Home</button></li>
        <li><button onClick={() => onCategorySelect("technology")}>Technology</button></li>
        <li><button onClick={() => onCategorySelect("politics")}>Politics</button></li>
        <li><button onClick={() => onCategorySelect("business")}>Business</button></li>
        <li><button onClick={() => onCategorySelect("sports")}>Sports</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
