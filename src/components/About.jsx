import React from "react";
import "./pages.css";
import universe from "../assets/universe.png";
import lightuniverse from "../assets/lightuniverse.png";

const About = () => {
  return (
    <div>
      <p className="AboutP">
        I am a professional and enthusiastic Software developer who loves learning and
        exploring new technologies. I am passionate about problem-solving and
        designing user-friendly applications. My core skills include Flutter,
        ReactJS, Dart, and JavaScript, and I enjoy turning ideas into
        impactful digital experiences. I am always open to opportunities that
        match my skills and interests.. Connect with me on  {"  "}
        <a
          className="Aboutlinkedin"
          href="https://www.linkedin.com/in/priyanshu-kumar-560166215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn{"  "}
        </a>
        to know more
      </p>
      <img className="universeImage" src={universe} alt="Universe background" />
      {/* <img className="universeImage" src={lightuniverse} alt="Universe background" /> */}
    </div>
  );
};

export default About;
