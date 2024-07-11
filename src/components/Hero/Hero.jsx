import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Doctor from "../../assets/filter/doctor.svg";
import Hospital from "../../assets/filter/hospital.svg";
import Capsule from "../../assets/filter/capsule.svg";
import Ambulance from "../../assets/filter/ambulance.svg";
import Lab from "../../assets/filter/lab.svg";

import "./Hero.css";

const Hero = () => {
  const location = useLocation();

  const heroClass = location.pathname === "/" ? "hero-home" : "hero-other";
  const filterClass =
    location.pathname === "/" ? "filter-home" : "filter-other";
  const isHome = location.pathname === "/" ? true : false;

  return (
    <div className={heroClass}>
      <div className={`filter ${filterClass}`}>
        <div className="filter-top">
          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input type="text" placeholder="State" className="input-field" />
          </div>
          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input type="text" placeholder="City" className="input-field" />
          </div>
          <button className="search-button">
            <FaSearch className="search-icon" />
            Search
          </button>
        </div>
        {isHome && (
          <>
            <div className="filter-text">
              <p>You may be looking for</p>
            </div>
            <div className="card-container">
              <div className="card">
                <img src={Doctor} alt="Doctor" className="card-icon" />
                <p>Doctors</p>
              </div>
              <div className="card">
                <img src={Lab} alt="Lab" className="card-icon" />
                <p>Labs</p>
              </div>
              <div className="card">
                <img src={Hospital} alt="Hospital" className="card-icon" />
                <p>Hospital</p>
              </div>
              <div className="card">
                <img src={Capsule} alt="Capsule" className="card-icon" />
                <p>Medical Store</p>
              </div>
              <div className="card">
                <img src={Ambulance} alt="Ambulance" className="card-icon" />
                <p>Ambulance</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
