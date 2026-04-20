import React, { useEffect } from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="hero" id="home">

      <p className="intro" data-aos="fade-up">
        I'm ANNMARY GEORGY,
      </p>

      <h1 data-aos="fade-up" data-aos-delay="200">
        <TypeAnimation
          sequence={["FULL STACK\nDEVELOPER"]}
          wrapper="span"
          speed={50}
          repeat={0}
        />
        <span className="dot">.</span>
      </h1>

      {/* SCROLL BUTTON */}
      <a href="#portfolio" data-aos="fade-up" data-aos-delay="400">
        <button className="btn">Previous Projects</button>
      </a>

    </div>
  );
};

export default Hero;