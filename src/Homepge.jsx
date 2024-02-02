
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; 
import picture1 from '../src/pictures/picture1.jpeg';
import picture3 from '../src/pictures/picture3.jpeg';
import TopNav from './topNav';
import Popup from './popup';
import './css/Homepge.css'



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
    <div style={{ width: '100%',overflowX: 'hidden' }}>
      <div className="App">
      <TopNav/>

      </div>

      <Slider {...sliderSettings} style={{ width: '100%'}}>
        {images.map((image, index) => (
          <div key={index}  className="slider-image-container">
            <img src={image} className="slider-image" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
          <Popup/>
    
    
    </div>
  );
}

export default App;
