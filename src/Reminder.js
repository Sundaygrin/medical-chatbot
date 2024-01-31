import React, { useState } from 'react';
import './css/Reminder.css'

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, newReminder]);
      setNewReminder('');
    }
  };

  const removeReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  return (
    <div>
      <h1>Reminders</h1>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
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
        />
        <button onClick={addReminder}>Add Reminder</button>
      </div>
    </div>
  );
};

export default Reminder;
