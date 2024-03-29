import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
const Header = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>
            57<span style={{ color: "rgb(137,219,123)" }}>D</span>entcare
          </h1>
        </div>
        <div className="booksmarks-container">
          <nav className="nav" ref={navRef}>
            <a href="#1">
              <li>
                <span>Home</span>
              </li>
            </a>

            <a href="#2">
              <li>
                <span>Services</span>
              </li>
            </a>

            <a href="#3">
              <li>
                <span>About Us</span>
              </li>
            </a>

            <a href="#4"></a>
            <li>
              <span>Why Choose Us</span>
            </li>

            <a href="#5">
              <li>Testimonials</li>
            </a>

            <button onClick={showNav} className="nav-btn nav-close-btn">
              <FaTimes />
            </button>
          </nav>
        </div>
        
        <div className="header-button-container">
        <button className="nav-btn" onClick={showNav}>
          Home
          <FaBars />{" "}
        </button>
          <button className="contact-btn">
            Contact Us{" "}
            <img className="header-button-icon" src="Vector.png" alt="vector" />
          </button>
        </div>
       
      </div>
    </header>
  );
};

export default Header;
