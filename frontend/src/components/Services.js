import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaMobileAlt, FaDesktop, FaCode, FaServer } from "react-icons/fa";

const Services = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="services" id="services">

      <h2 className="services-title" data-aos="fade-up">
        SERVICES
      </h2>

      <div className="services-container">

        {/* CARD 1 */}
        <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
          <FaCode className="icon" />
          <h3>FULL STACK DEVELOPMENT</h3>
          <p>
            Building complete web applications using React, Node.js, Express, and MongoDB.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
          <FaMobileAlt className="icon" />
          <h3>RESPONSIVE WEB DESIGN</h3>
          <p>
            Creating modern, mobile-friendly UI with clean and user-friendly design.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
          <FaDesktop className="icon" />
          <h3>WEB APPLICATIONS</h3>
          <p>
            Developing scalable and high-performance web apps with best practices.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
          <FaServer className="icon" />
          <h3>BACKEND DEVELOPMENT</h3>
          <p>
            Building REST APIs, authentication, and database systems using Node.js.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Services;