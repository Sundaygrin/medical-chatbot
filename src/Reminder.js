import React, { useState, useEffect } from 'react';
import './css/Reminder.css';
import TopNav from './topNav';
import Popup from './popup';

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  useEffect(() => {
    // Load reminders from local storage when component mounts
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders) {
      setReminders(JSON.parse(storedReminders));
    }
  }, []); // Empty dependency array to run once when component mounts

  const addReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, newReminder]);
      setNewReminder('');
      saveReminder([...reminders, newReminder]); // Call saveReminder when adding a new reminder
    }
  };

  const removeReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
    saveReminder(updatedReminders); // Call saveReminder when removing a reminder
  };

  const saveReminder = (remindersArray) => {
    // Save reminders array to local storage
    localStorage.setItem('reminders', JSON.stringify(remindersArray));
  };

  return (
    <div className="">
      <TopNav />
      <div className="reminder-container">
        <h1>Reminders</h1>
        <ul className="reminder-list">
          {reminders.map((reminder, index) => (
            <li key={index} className="reminder-item">
              {reminder}
              <button onClick={() => removeReminder(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newReminder}
            onChange={(e) => setNewReminder(e.target.value)}
            className="reminder-input"
          />
          <button onClick={addReminder} className="add-reminder-btn">
            Add Reminder
          </button>
        </div>
      </div>
      <Popup />
    </div>
  );
};

export default Reminder;
