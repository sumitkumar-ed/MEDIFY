import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import brandImage from "../../assets/app/brand.png";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-first-column">
        <Link to="/">
          <img src={brandImage} alt="Brand Logo" className="footer-logo" />
        </Link>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="blank">
            <FaFacebook />
          </a>
          <a href="https://x.com" target="blank">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="blank">
            <FaYoutube />
          </a>
          <a href="https://pinterest.com" target="blank">
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Our Pricing</a>
          </li>
          <li>
            <a href="#OurGallery">Our Gallery</a>
          </li>
          <li>
            <a href="#contact">Appointment</a>
          </li>
          <li>
            <a href="#PrivacyPolicy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li>
            <a href="#Orthology">Orthology</a>
          </li>
          <li>
            <a href="#Neurology">Neurology</a>
          </li>
          <li>
            <a href="#DentalCare">Dental Care</a>
          </li>
          <li>
            <a href="#Opthalmology">Opthalmology</a>
          </li>
          <li>
            <a href="#Cardiology">Cardiology</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Our Pricing</a>
          </li>
          <li>
            <a href="#OurGallery">Our Gallery</a>
          </li>
          <li>
            <a href="#contact">Appointment</a>
          </li>
          <li>
            <a href="#PrivacyPolicy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
  </footer>
);

export default Footer;
