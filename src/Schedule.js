import React, { useState } from 'react';
import './css/schedule.css';

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
    // Logic to handle the scheduled appointment (e.g., send data to server, etc.)
    handleFormSubmit({
      preventDefault: () => {}
    });
  };

  return (
    <div>
      <h1>Schedule an Appointment</h1>
      <form onSubmit={handleFormSubmit}>
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
        <br />
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
        <br />
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
        <br />
        <button type="button" onClick={handleClick}>
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentScheduler;
