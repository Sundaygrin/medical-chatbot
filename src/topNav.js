import React, { useState } from 'react';
import './css/topNav.css';
import { useNavigate } from 'react-router-dom';

function TopNav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToHome = () => {
    navigate('/homepage');
    closeMenu();
  };

  const goToSchedule = () => {
    navigate('/schedule');
    closeMenu();
  };

  const goToReminder = () => {
    navigate('/reminder');
    closeMenu();
  };

  return (
    <div className="top-nav">
      <div className="logo">Medik</div>
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-link" onClick={goToHome}>
          Home
        </button>
        <button className="nav-link" onClick={goToSchedule}>
          Appointment
        </button>
        <button className="nav-link" onClick={goToReminder}>
          Reminder
        </button>
      </div>
      <button className="medik-bot-btn">Medik Bot</button>
      <div className="profile-circle"></div>
    </div>
  );
}

export default TopNav;
