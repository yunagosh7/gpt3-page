import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="footer-heading">
        <h4 className="gradient-text">
          Do you want to step in to the future before others
        </h4>
        <a href="#getstarted">Request Early Access</a>
      </div>
      <div className="footer-content">
        <div className="footer-content-image">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-container-links">
          <div className="footer-content-links">
            <b>Links</b>
            <a href="#overons">Overons</a>
            <a href="#socialmedia">Social Media</a>
            <a href="#counters">Counters</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-content-company">
            <b>Company</b>
            <a href="#terms">Terms & Conditions</a>
            <a href="#privatypolicy">Privaty Policy</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-content-getInTouch">
            <b>Get in touch</b>
            <a href="#street">Crechterwoord K12 182 DK Alknjkcb</a>
            <a href="#phone">085-132567</a>
            <a href="#mailto">info@payme.net</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
