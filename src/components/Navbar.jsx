import React from "react";
import "./pages.css";

const Navbar = (props) => {
  return (
    <div>
      <h3 className="headingname">
        Hi, I'm <span className="myname">{props.name}</span> 👋
      </h3>

      <h1 className="role">Software Engineer</h1>
      <nav className="navbar">
        <a href="#home" className="logo">
          P
        </a>
        <div className="nav-links">
          <a href="#Projects" className="nav-link">
            Projects
          </a>
          <a href="#Skills" className="nav-link">
            Skills
          </a>
          <a href="#Experience" className="nav-link">
            Experience
          </a>
          <a href="#Education" className="nav-link">
            Education
          </a>
          <a href="#Contacts" className="nav-link">
            Contact
          </a>
        </div>
        <a
          href="https://github.com/Priyanshukumar227"
          target="_blank"
          rel="Noopener noreferrer"
          className="github-btn"
        >
          GutHub ↗
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
