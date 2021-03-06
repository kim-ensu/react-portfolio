import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 800) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="section__container">
        <div className="header-wrp">
          <a href="#" className="logo">
            {/* <img src={logo} alt="logo" /> */}
            <SiMusicbrainz size={40} />
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav__items">
              <a href="#Home">Home</a>
            </li>
            <li className="nav__items">
              <a href="#About">About</a>
            </li>
            <li className="nav__items">
              <a href="#Projects">Projects</a>
            </li>
            <li className="nav__items">
              <a href="#Certificates">Certificates</a>
            </li>
            <li className="nav__items">
              <a href="#Skills">Skills</a>
            </li>
            <li className="nav__items">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} className="hamburger-color" />
            ) : (
              <FaBars size={20} className="hamburger-color" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
