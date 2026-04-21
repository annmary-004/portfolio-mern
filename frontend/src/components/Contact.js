import React, { useEffect, useState } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      _subject: "New Contact from Portfolio!"
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/annmarygeorgy775@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMsg("Message sent successfully! ");
        e.target.reset();
      } else {
        // If they haven't activated yet, Formsubmit throws an error for AJAX.
        setStatusMsg("Check your Gmail inbox and click 'Activate' first!");
      }
    } catch (err) {
      setStatusMsg("Check your Gmail inbox and click 'Activate' first!");
    }

    setLoading(false);
  };

  return (
    <div className="contact-section" id="contact">

      <h2 className="contact-title" data-aos="fade-up">
        CONTACT
      </h2>

      <div className="contact-box">

        {/* LEFT */}
        <div className="contact-left" data-aos="fade-right">
          <h3>Drop Me a Message</h3>

          <p>
            I’m open to freelance work, internships, and full stack developer
            opportunities. Feel free to contact me anytime.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <span>+91 8078035932</span>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <span>annmarygeorgy775@gmail.com</span>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <span>Kerala, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right" data-aos="fade-left">
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
            />

            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
            />

            <textarea 
              name="message" 
              placeholder="Message" 
              rows="5" 
              required 
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            
            {statusMsg && (
              <p style={{ marginTop: "15px", fontWeight: "bold", color: statusMsg.includes("") ? "#00f2fe" : "#ff4d4d" }}>
                {statusMsg}
              </p>
            )}

          </form>
        </div>

        {/* BACKGROUND */}
        <div className="circle circle-left"></div>
        <div className="circle circle-right"></div>

      </div>

      {/* FOOTER */}
      <div className="contact-footer">

        <div className="footer-logo">AG</div>

        <p>2026 - Ann Portfolio. All rights reserved</p>

        <div className="social-icons">
          <a href="https://github.com/annmary-004"><FaGithub /></a>
          <a href="https://www.instagram.com/annmary.georgy_04"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/annmary-georgy-67080132a">
            <FaLinkedinIn />
          </a>
        </div>

      </div>

    </div>
  );
};

export default Contact;