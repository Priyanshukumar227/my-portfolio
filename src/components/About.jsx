import React from "react";
import "./pages.css";
import universe from "../assets/universe.png";
import lightuniverse from "../assets/lightuniverse.png";

const About = () => {
  return (
    <div>
      <p className="AboutP">
        I'm driven by a passion for software development and continuous
        learning. Connect with me on {" "}
        <a className="Aboutlinkedin" href="https://www.linkedin.com/in/priyanshu-kumar-560166215/" target="_blank" rel="noopener noreferrer">LinkedIn </a>
        to know more
      </p>
      <img className="universeImage" src={universe} alt="Universe background" />
      {/* <img className="universeImage" src={lightuniverse} alt="Universe background" /> */}
    </div>
  );
};

export default About;
