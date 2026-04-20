import { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/image.jpg";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about" id="about">

      {/* LEFT IMAGE */}
      <div className="about-left" data-aos="fade-right">
        <div className="image-box">
          <img src={profile} alt="profile" />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="about-right" data-aos="fade-left">
        <h2>ABOUT ME</h2>

        <p>
          I am a passionate Full Stack Developer skilled in building modern web
          applications using React, Node.js, and MongoDB. I love creating clean
          UI and solving real-world problems.
        </p>

        <div className="about-buttons">
          
          {/* CONTACT SCROLL */}
          <a href="#contact">
            <button className="hire">HIRE ME</button>
          </a>

          {/* DOWNLOAD RESUME */}
          <a href="/resume.pdf" download>
            <button className="resume">RESUME</button>
          </a>

        </div>
      </div>

    </div>
  );
};

export default About;