import React from "react";
import IIIT_logo from "../assets/IIIT_logo.gif";
import Taps_logo from "../assets/Taps_logo.png";

const educations = [
  {
    name: "Indian Institute of Information Technology Allahabad (IIIT-A)",
    grade: "7.9 CGPA",
    degree:"B-Tech",
    duration: "2020 - 2024",
    logo: IIIT_logo,
  },
  {
    name: "The Avenue Public School",
    grade: "89.9%",
    degree:"12th",
    duration: "2019 - 2020",
    logo: Taps_logo,
  },
  {
    name: "The Avenue Public School",
    grade: "84.9%",
    degree:"10th",
    duration: "2017 - 2018",
    logo: Taps_logo,
  },
];

const Educations = () => {
  return (
    <section id="Education" className="Educationssection">
      <h1 className="Educations">Educations</h1>

      <div className="Educationscontainer">
        {educations.map((educations, index) => (
          <div className="Educationsitem" key={index}>
            
            {/* Left side */}
            <div className="Educationsleft">
              <img
                src={educations.logo}
                alt={`${educations.name} logo`}
                className="Educationslogo"
              />

              <div className="Educationscompany">
                <h4>{educations.name}</h4>
                <h4>{educations.degree}</h4>
                <h5>{educations.grade}</h5>
              </div>
            </div>

            {/* Right side */}
            <div className="Educationsright">
              <span>{educations.duration}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
