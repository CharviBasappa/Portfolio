import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>Fremont, California, 94536</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                (123)-456-7890
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                charvi.isu24@gmail.com
              </h4>
            </div>
          </div>

          <div className="right">
            <h4>About Me</h4>
            <p>
              This is me Charvi Basappa. Full Stack Web Developer with over 3
              years of experience. I enjoy building new projects and design
              challenges.
            </p>
            <div className="social">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
        &copy; 2024 Charvi Basappa. All rights reserved.
      </div> */}
    </>
  );
};

export default Footer;
