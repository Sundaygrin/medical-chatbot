import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSend = async () => {
    if (userInput.trim() !== '') {
      const newMessage = { sender: 'User', message: userInput };
      setChatMessages([...chatMessages, newMessage]);
  
      // Save to localStorage
      const updatedChatMessages = [...chatMessages, newMessage];
      localStorage.setItem('chatMessages', JSON.stringify(updatedChatMessages));
  
      try {
        const response = await fetch('https://chatgpt-api8.p.rapidapi.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'b0443196c2mshdf2a5bda0081da2p106081jsn3f5fe808f248',
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
          },
          body: JSON.stringify([{ content: userInput, role: 'user' }])
        });
  
        const result = await response.json();
  
        if (result.text) {
          const botMessage = { sender: 'Chatbot', message: result.text };
          setChatMessages([...updatedChatMessages, botMessage]);
          // Save to localStorage
          localStorage.setItem('chatMessages', JSON.stringify([...updatedChatMessages, botMessage]));
        } else {
          setChatMessages([...updatedChatMessages, { sender: 'Chatbot', message: 'Error: Invalid bot response.' }]);
          // Save to localStorage
          localStorage.setItem('chatMessages', JSON.stringify([...updatedChatMessages, { sender: 'Chatbot', message: 'Error: Invalid bot response.' }]));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setChatMessages([...updatedChatMessages, { sender: 'AI', message: 'Error fetching data. Please try again later.' }]);
        // Save to localStorage
        localStorage.setItem('chatMessages', JSON.stringify([...updatedChatMessages, { sender: 'AI', message: 'Error fetching data. Please try again later.' }]));
      }
  
      setUserInput('');
    }
  };
  
  return (
    <div>
      <button  className= "bot-main-Button"onClick={openPopup}>Open Chat</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-header">
              <span className="popup-title">Chatbot</span>
              <span className="close-btn" onClick={closePopup}>&times;</span>
            </div>
            <div className="popup-body">
              <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={msg.sender.toLowerCase() === 'user' ? 'user-message' : 'ai-message'}>
                    <strong>{msg.sender}:</strong> {msg.message}
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={handleSend} className="send">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;