import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram /> <FaTwitter /> <FaFacebookF /> <FaLinkedin />
      </div>
      <a href="https://pizzamohsen.netlify.app">
        &copy; 2022 pizzaMohsen.netlify.app
      </a>
    </div>
  );
}

export default Footer;
