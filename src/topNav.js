import React from 'react';
import './css/topNav.css';
import { useNavigate} from 'react-router-dom';

function TopNav() {
    const navigate = useNavigate();

    const goToHome = () =>{
        navigate('/homepage');  
    }

    const goToSchedule =()=>{
        navigate('/schedule')
    }

    const goToReminder = () =>{
        navigate('/reminder')
    }

  return (
    <div className="top-nav">
      <div className="logo">Medik</div>
      <div className="nav-links">
        <button className="nav-link" onClick={goToHome}>Home</button>
        <button className="nav-link" onClick={goToSchedule}>Appointment</button>
        <button className="nav-link" onClick={goToReminder}>Reminder</button>
      </div>
      <button className="medik-bot-btn">Medik Bot</button>
      <div className="profile-circle"></div>
    </div>
  );
}

export default TopNav;
