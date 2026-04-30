import React, { useEffect } from "react";
import "./Experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAws, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { Icon: FaAws, name: "AWS", tone: "aws" },
    { Icon: FaCss3, name: "CSS3", tone: "css" },
    { Icon: FaReact, name: "ReactJS", tone: "react" },
    { Icon: FaHtml5, name: "HTML", tone: "html" },
    { Icon: SiFirebase, name: "Firebase", tone: "firebase" },
    { Icon: FaJs, name: "JavaScript", tone: "javascript" },
    { Icon: FaNodeJs, name: "NodeJS", tone: "node" },
    { Icon: SiMongodb, name: "MongoDB", tone: "mongodb" },
  ];

  return (
    <div className="experience" id="experience">
      <h2 className="exp-title" data-aos="fade-up">
        EXPERIENCE
      </h2>

      <div className="exp-grid">
        {skills.map((item, index) => (
          <div
            className="exp-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className={`exp-icon exp-icon-${item.tone}`}>
              <item.Icon />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
