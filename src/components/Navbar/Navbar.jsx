import React, { useState } from "react";
import brandImage from "../../assets/app/brand.png";
import { Button } from "@mui/material"; // Import Button from Material-UI
import "./Navbar.css";

const NavBar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    // Additional logic if needed, such as navigating to the clicked item
  };

  return (
    <div className="nav">
      <header className="nav-top-text">
        The health and well-being of our patients and their health care team will
        always be our priority, so we follow the best practices for cleanliness.
      </header>
      <nav className="navbar-container">
        <div className="brand-container">
          <img src={brandImage} alt="Brand Logo" />
        </div>
        <div className="nav-options-container">
          <div className="nav-options">
            <a
              href="#find-doctors"
              className={`nav-link ${activeNavItem === "find-doctors" ? "active" : ""}`}
              onClick={() => handleNavItemClick("find-doctors")}
            >
              Find Doctors
            </a>
            <a
              href="#hospitals"
              className={`nav-link ${activeNavItem === "hospitals" ? "active" : ""}`}
              onClick={() => handleNavItemClick("hospitals")}
            >
              Hospitals
            </a>
            <a
              href="#medicines"
              className={`nav-link ${activeNavItem === "medicines" ? "active" : ""}`}
              onClick={() => handleNavItemClick("medicines")}
            >
              Medicines
            </a>
            <a
              href="#surgeries"
              className={`nav-link ${activeNavItem === "surgeries" ? "active" : ""}`}
              onClick={() => handleNavItemClick("surgeries")}
            >
              Surgeries
            </a>
            <a
              href="#software"
              className={`nav-link ${activeNavItem === "software" ? "active" : ""}`}
              onClick={() => handleNavItemClick("software")}
            >
              Software for Provider
            </a>
            <a
              href="#facilities"
              className={`nav-link ${activeNavItem === "facilities" ? "active" : ""}`}
              onClick={() => handleNavItemClick("facilities")}
            >
              Facilities
            </a>
          </div>
          <Button variant="contained" color="primary" className="nav-button">
            My Bookings
          </Button>
        </div>
      </nav>
      {activeNavItem && (
        <div className="nav-indicator" style={{ left: `calc(${calculateLeftPosition(activeNavItem)} * 16.6%)` }}></div>
      )}
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
