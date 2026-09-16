import React from "react";

const projectData = [
  {
    name: "Customer App",
    description:
      "Developed and maintained the Hello Chotu Customer App at Social Glue using Flutter, Dart, BLoC, REST APIs, and Firebase. Built responsive UI, integrated APIs, implemented key features, resolved production issues, and optimized performance. A customer-focused platform for discovering local services, placing orders, tracking deliveries, and managing purchases.",
      skills: ["Dart", "Flutter", "Firebase", "Postman", "REST APIs", "Figma"],
    Time: "March 2026",
  },
  {
    name: "Vessel Performave System",
    description:
      "Developed a Flutter-based Maritime Vessel Performance System that enables enterprise operators to monitor vessel performance, fuel consumption, route efficiency, and operational KPIs through real-time dashboards and management modules",
    skills: ["Dart", "Flutter", "Firebase", "Postman", "REST APIs"],
    Time: "Fev 2025",
  },
  {
    name: "Movie Search Website",
    description:
      "Developed Film Frame Finder, a React.js movie discovery application that allows users to search and explore movies using the TMDB API, with responsive layouts and optimized search performance for a smooth browsing experience.",
    skills: ["ReactJS", "JavaScript", "REST API", "CSS", "HTML"],
    Time: "April 2024",
  },
  {
    name: "Restaurant App",
    description:
      "Developed and maintained the Hello Chotu Restaurant App at Social Glue using Flutter, Dart, BLoC, REST APIs, and Firebase. Built responsive interfaces, integrated APIs, implemented restaurant management features, fixed production issues, and optimized performance. A restaurant management platform for managing menus, orders, customers, offers, and daily restaurant operations.",
    skills: ["Dart", "Flutter", "Firebase", "Postman", "REST APIs", "Figma"],
    Time: "July 2026",
  },
   {
    name: "Plagiarism Detection System",
    description:
      "Developed a Plagiarism Detection System using Python and Machine Learning to compare documents, identify similar or duplicate content, and generate similarity results through an automated document processing pipeline.",
    skills: ["Python", "Machine Learning",],
    Time: "Feb 2023",
  },
];

const Projects = () => {
  return (
    <section className="projectsSection">
      <h1 id="Projects" className="projects">
        Projects
      </h1>

      <div className="projectsContainer">
        {projectData.map((project, index) => (
          <div className="projectCard" key={index}>
            <div className="projectCardTop">
              <span className="projectNumber">0{index + 1}</span>

              {/* <span className="projectArrow">↗</span> */}
            </div>

            <h2>{project.name}</h2>

            <p className="projectDescription">{project.description}</p>

            <div className="projectSkills">
              {project.skills.map((skill, skillIndex) => (
                <span className="skillTag" key={skillIndex}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="projectFooter">
              <span>⏱ {project.Time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
