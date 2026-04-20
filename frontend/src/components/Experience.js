import React, { useEffect } from "react";
import "./Experience.css";
import AOS from "aos";
import "aos/dist/aos.css";

import aws from "../assets/aws.png";
import css from "../assets/css3.png";
import react from "../assets/react.jpg";
import html from "../assets/html.png";
import firebase from "../assets/firebase.png";
import js from "../assets/javascript.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";

const Experience = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { img: aws, name: "AWS" },
    { img: css, name: "CSS3" },
    { img: react, name: "ReactJS" },
    { img: html, name: "HTML" },
    { img: firebase, name: "Firebase" },
    { img: js, name: "JavaScript" },
    { img: node, name: "NodeJS" },
    { img: mongodb, name: "MongoDB" },
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
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Experience;