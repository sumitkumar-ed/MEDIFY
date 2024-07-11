import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import brandImage from "../../assets/app/brand.png";
import { Button } from "@mui/material";
import "./Navbar.css";
import Hero from "../Hero/Hero";
import Filter from "../Filter/Filter";

const NavBar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const location = useLocation();

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const navClass = location.pathname === "/" ? "nav bg-gradient" : "nav bg-white";
  const isHome = location.pathname === "/" ? true : false;

  return (
    <div>
      <header className="nav-top-text">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </header>
      <nav className={`navbar-container ${navClass}`}>
        <div className="brand-container">
          <Link to="/">
            <img src={brandImage} alt="Brand Logo" />
          </Link>
        </div>
        <div className="nav-options-container">
          <div className="nav-options">
            <Link
              to="/detail"
              className={`nav-link ${
                activeNavItem === "find-doctors" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("find-doctors")}
            >
              Find Doctors
            </Link>
            <Link
              to="#hospitals"
              className={`nav-link ${
                activeNavItem === "hospitals" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("hospitals")}
            >
              Hospitals
            </Link>
            <Link
              to="#medicines"
              className={`nav-link ${
                activeNavItem === "medicines" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("medicines")}
            >
              Medicines
            </Link>
            <Link
              to="#surgeries"
              className={`nav-link ${
                activeNavItem === "surgeries" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("surgeries")}
            >
              Surgeries
            </Link>
            <Link
              to="#software"
              className={`nav-link ${
                activeNavItem === "software" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("software")}
            >
              Software for Provider
            </Link>
            <Link
              to="#facilities"
              className={`nav-link ${
                activeNavItem === "facilities" ? "active" : ""
              }`}
              onClick={() => handleNavItemClick("facilities")}
            >
              Facilities
            </Link>
          </div>
          <Button variant="contained" color="primary" className="nav-button">
            My Bookings
          </Button>
        </div>
      </nav>
      {activeNavItem && (
        <div
          className="nav-indicator"
          style={{
            left: `calc(${calculateLeftPosition(activeNavItem)} * 16.6%)`,
          }}
        ></div>
      )}
      <Hero />
      {/* {isHome ? <Hero /> : <Filter />} */}
    </div>
  );
};

// Function to calculate left position of indicator
const calculateLeftPosition = (activeNavItem) => {
  switch (activeNavItem) {
    case "find-doctors":
      return 0;
    case "hospitals":
      return 1;
    case "medicines":
      return 2;
    case "surgeries":
      return 3;
    case "software":
      return 4;
    case "facilities":
      return 5;
    default:
      return 0;
  }
};

export default NavBar;
