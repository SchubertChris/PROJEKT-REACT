import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import HomeImage from "./HomeImage";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>                            
      {/* Übergib `setMenuVisible` an `HomeImage.jsx` */}
      <HomeImage setMenuVisible={setMenuVisible} />
      <CiMenuFries onClick={showMenu} className="menu-icon" />
      <ul className={`links ${menuVisible ? "show" : ""}`}>
        <Link to="/" onClick={hideMenu}>
          <li>That's Me</li>
        </Link>
        <Link to="/about" onClick={hideMenu}>
          <li>Coding</li>
        </Link>
        <Link to="/Galerie" onClick={hideMenu}>
          <li>Anfrage</li>
        </Link>
        <Link to="/Kontakt" onClick={hideMenu}>
          <li>Kontakt</li>
        </Link>
      </ul>
    </>
  );
}
