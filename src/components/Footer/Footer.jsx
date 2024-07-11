import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import brandImage from "../../assets/app/brand.png";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-first-column">
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
          <li><a href="#services">Our Pricing</a></li>
          <li><a href="#OurGallery">Our Gallery</a></li>
          <li><a href="#contact">Appointment</a></li>
          <li><a href="#PrivacyPolicy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li><a href="#Orthology">Orthology</a></li>
          <li><a href="#Neurology">Neurology</a></li>
          <li><a href="#DentalCare">Dental Care</a></li>
          <li><a href="#Opthalmology">Opthalmology</a></li>
          <li><a href="#Cardiology">Cardiology</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
        <li><a href="#about">About Us</a></li>
          <li><a href="#services">Our Pricing</a></li>
          <li><a href="#OurGallery">Our Gallery</a></li>
          <li><a href="#contact">Appointment</a></li>
          <li><a href="#PrivacyPolicy">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
  </footer>
);

export default Footer;
