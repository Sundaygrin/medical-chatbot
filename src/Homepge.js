// App.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Import the CSS file
import picture1 from '../src/pictures/picture1.jpeg';

import picture3 from '../src/pictures/picture3.jpeg';


function App() {
  const [showChatPopup, setShowChatPopup] = useState(false);

  const toggleChatPopup = () => {
    setShowChatPopup(!showChatPopup);
  };

  const images = [picture1,  picture3, ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Medical AI Chat</h1>
          
        </header>
        
      </div>

      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <div className={`ChatPopup ${showChatPopup ? 'show' : ''}`}>
        <div className="ChatIcon" onClick={toggleChatPopup}>
          <img src="path/to/chat-icon.png" alt="Chat Icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
