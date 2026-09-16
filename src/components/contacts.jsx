import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = () => {
  const email = "kumar123priyanshu123p@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/priyanshu-kumar-560166215/";
  const githubUrl = "https://github.com/Priyanshukumar227";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <section id="Contacts" className="Contactssection">
      <h1 className="Experrience">Contacts</h1>

      <div className="contacticons">

        {/* Email */}
        <button
          className="contacticon"
          onClick={copyEmail}
          title="Copy email"
        >
          <FaEnvelope />
        </button>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contacticon"
          title="Open LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contacticon"
          title="Open GitHub"
        >
          <FaGithub />
        </a>

      </div>
    </section>
  );
};

export default Contacts;