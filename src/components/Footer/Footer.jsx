import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import brandImage from "../../assets/app/brand.png";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-column footer-first-column">
        <img src={brandImage} alt="Brand Logo" className="footer-logo" />
        <div className="footer-social">
          <a href="#facebook"><FaFacebook /></a>
          <a href="#twitter"><FaTwitter /></a>
          <a href="#youtube"><FaYoutube /></a>
          <a href="#pinterest"><FaPinterest /></a>
        </div>
      </div>
      <div className="footer-column">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
  </footer>
);

export default Footer;
