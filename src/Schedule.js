import React, { useState } from 'react';
import './css/schedule.css';
import TopNav from './topNav';
import Popup from './popup';

const AppointmentScheduler = () => {
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
    purpose: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Scheduled:', appointment);
    setAppointment({
      date: '',
      time: '',
      purpose: ''
    });
  };

  const handleClick = () => {
    handleFormSubmit({
      preventDefault: () => {}
    });
  };

  return (
    <div>
       <TopNav/>
    <div className="scheduler-container">
  
      <h1>Schedule an Appointment</h1>
      <form className="scheduler-form" onSubmit={handleFormSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Purpose:
          <input
            type="text"
            name="purpose"
            value={appointment.purpose}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="button" onClick={handleClick}>
          Schedule Appointment
        </button>
      </form>
    </div>
    <Popup/>
    </div>
  );
};

export default AppointmentScheduler;
