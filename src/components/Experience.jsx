import React from "react";
import TheSocialGlue from "../assets/TheSocialGlue.png";
import VoyageXai from "../assets/VoyageXai.png";

const experiences = [
  {
    name: "The Social Glue",
    location: "Software Developer-(Remote)",
    duration: "Dec 2025 - Present",
    logo: TheSocialGlue,
  },
  {
    name: "VoyageX Ai",
    location: "Flutter Developer-(Gurugram)",
    duration: "Dec 2024 - Dec 2025",
    logo: VoyageXai,
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="Experriencesection">
      <h1 className="Experrience">Experience</h1>

      <div className="Experriencecontainer">
        {experiences.map((experience, index) => (
          <div className="Experrienceitem" key={index}>
            {/* Left side */}
            <div className="Experrienceleft">
              <img
                src={experience.logo}
                alt={`${experience.name} logo`}
                className="Experriencelogo"
              />

              <div className="Experriencecompany">
                <h4>{experience.name}</h4>
                <p>{experience.location}</p>
              </div>
            </div>

            {/* Right side */}
            <div className="Experrienceright">
              <span>{experience.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
