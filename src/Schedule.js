import React, { useState, useEffect } from 'react';
import './css/schedule.css';
import TopNav from './topNav';
import Popup from './popup';

const AppointmentScheduler = () => {
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
    purpose: ''
  });
  const [savedAppointments, setSavedAppointments] = useState([]);

  // Load saved appointments from local storage on component mount
  useEffect(() => {
    const savedAppointmentsData = localStorage.getItem('savedAppointments');
    if (savedAppointmentsData) {
      setSavedAppointments(JSON.parse(savedAppointmentsData));
    }
  }, []);

  // Save appointments to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('savedAppointments', JSON.stringify(savedAppointments));
  }, [savedAppointments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (appointment.date && appointment.time && appointment.purpose) {
      const newAppointment = `${appointment.date} at ${appointment.time}: ${appointment.purpose}`;
      setSavedAppointments([...savedAppointments, newAppointment]);
      setAppointment({
        date: '',
        time: '',
        purpose: ''
      });
    }
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
        <button type="submit">
          Schedule Appointment
        </button>
      </form>
    </div>
    <div>
      <h3>Saved Appointments</h3>
      <ul>
        {savedAppointments.map((appointment, index) => (
          <li key={index}>{appointment}</li>
        ))}
      </ul>
    </div>
    <Popup/>
    </div>
  );
};

export default AppointmentScheduler;
