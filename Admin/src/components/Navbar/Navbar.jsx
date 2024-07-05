import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  const handleProfileMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleProfileMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <div className="account">
        <div
          className="profile-wrapper"
          onMouseEnter={handleProfileMouseEnter}
          onMouseLeave={handleProfileMouseLeave}
        >
          <img className="profile" src={assets.profile_image} alt="" />
          {isDropdownOpen && (
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li className="dropdown-item">My Profile</li>
                <li className="dropdown-item">Settings</li>
                <li className="dropdown-item" onClick={handleLogoutClick}>
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
