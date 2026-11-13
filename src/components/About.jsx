import React from "react";
import "./pages.css";
import universe from "../assets/universe.png";
import lightuniverse from "../assets/lightuniverse.png";

const About = () => {
  return (
    <div>
      <p className="AboutP">
        I am a passionate and enthusiastic Software Developer who enjoys
        learning, exploring, and working with emerging technologies. I
        specialize in building user-friendly applications and solving real-world
        problems using Flutter, ReactJS, Dart, and JavaScript. Alongside
        software development, I am actively expanding my expertise in AI/ML,
        Large Language Models (LLMs), Generative AI, and frameworks like
        LangChain and LangGraph, while building practical AI-powered projects.
        I am eager to explore opportunities in both Software Development and
        AI/ML engineering, where I can apply my skills, contribute to impactful
        products, and continue growing as a developer. I am always open to
        exciting opportunities and collaborations. Connect with me!{"  "}
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
