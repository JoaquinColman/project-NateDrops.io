import React from 'react';
import './Hero.css';
import './Animation.css';  
import gif from '../../assets/images/Hero.gif'; 

const Hero = ({  }) => {
  return (
    <div className="hero fade-in-slide-up">
      <img src={gif} alt="Hero GIF" className="hero-gif" />
    </div>
  );
};

export default Hero;


  