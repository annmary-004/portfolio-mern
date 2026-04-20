import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";

import project1 from "../assets/image.png";
import project2 from "../assets/image2.jpg";
import project3 from "../assets/image3.png";
import project4 from "../assets/image4.png";
import project5 from "../assets/images5.jpg";


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="portfolio" id="portfolio">

      <h2 className="portfolio-title" data-aos="fade-up">
        PORTFOLIO
      </h2>

      {/* TABS */}
      <div className="portfolio-tabs" data-aos="fade-up">
        <span
          className={activeTab === "mobile" ? "active" : ""}
          onClick={() => {
            setActiveTab("mobile");
            setShowAll(false);
          }}
        >
          Mobile App
        </span>

        <span
          className={activeTab === "website" ? "active" : ""}
          onClick={() => {
            setActiveTab("website");
            setShowAll(false);
          }}
        >
          Website
        </span>

        <span
          className={activeTab === "desktop" ? "active" : ""}
          onClick={() => {
            setActiveTab("desktop");
            setShowAll(false);
          }}
        >
          Desktop
        </span>

        <span
          className={activeTab === "other" ? "active" : ""}
          onClick={() => {
            setActiveTab("other");
            setShowAll(false);
          }}
        >
          Other Projects
        </span>
      </div>

      {/* ================= MOBILE ================= */}
      {(activeTab === "mobile" || showAll) && (
        <>
          <div className="project" data-aos="fade-right">
            <div className="project-left">
              <h4>PROJECT 1</h4>
              <h2>Dating Mobile App Design</h2>
              <p>Modern dating app UI with swipe, match, and chat features.</p>

              <div className="project-buttons">
                {/* <a href="#">GitHub</a> */}
                {/* <a href="#">Live Demo</a> */}
              </div>
            </div>

            <div className="project-right">
              <div className="project-image-box">
                <img src={project1} alt="project1" />
              </div>
            </div>
          </div>

          <div className="project reverse" data-aos="fade-left">
            <div className="project-left">
              <h4>PROJECT 2</h4>
              <h2>E-Commerce Mobile App</h2>
              <p>Shopping app UI with product listing and cart features.</p>

              <div className="project-buttons">
                {/* <a href="#">GitHub</a> */}
                {/* <a href="#">Live Demo</a> */}
              </div>
            </div>

            <div className="project-right">
              <div className="project-image-box">
                <img src={project2} alt="project2" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* ================= WEBSITE ================= */}
      {(activeTab === "website" || showAll) && (
        <div className="project" data-aos="fade-right">
          <div className="project-left">
            <h4>PROJECT 3</h4>
            <h2>Portfolio Website</h2>
            <p>Responsive portfolio built using React + CSS.</p>

            <div className="project-buttons">
              {/* <a href="#">GitHub</a> */}
              {/* <a href="#">Live Demo</a> */}
            </div>
          </div>

          <div className="project-right">
            <div className="project-image-box">
              <img src={project3} alt="website" />
            </div>
          </div>
        </div>
      )}

      {/* ================= DESKTOP ================= */}
      {(activeTab === "desktop" || showAll) && (
        <div className="project" data-aos="fade-right">
          <div className="project-left">
            <h4>PROJECT 4</h4>
            <h2>Desktop App</h2>
            <p>Electron-based desktop application.</p>

            <div className="project-buttons">
              {/* <a href="#">GitHub</a> */}
              {/* <a href="#">Live Demo</a> */}
            </div>
          </div>

          <div className="project-right">
            <div className="project-image-box">
              <img src={project4} alt="desktop" />
            </div>
          </div>
        </div>
      )}

      {/* ================= OTHER ================= */}
      {(activeTab === "other" || showAll) && (
        <div className="project" data-aos="fade-right">
          <div className="project-left">
            <h4>PROJECT 5</h4>
            <h2>UI Experiments</h2>
            <p>Creative frontend UI designs and animations.</p>

            <div className="project-buttons">
              {/* <a href="#">GitHub</a> */}
              {/* <a href="#">Live Demo</a> */}
            </div>
          </div>

          <div className="project-right">
            <div className="project-image-box">
              <img src={project5} alt="other" />
            </div>
          </div>
        </div>
      )}

      {/* VIEW ALL BUTTON */}
      <div className="view-all-container" data-aos="fade-up">
        <button
          className="view-all"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

    </div>
  );
};

export default Portfolio;