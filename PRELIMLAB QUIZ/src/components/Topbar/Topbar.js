import React from 'react'; 
import './Topbar.css';
import Me from '../Images/itsme.png';

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="topbar-left">
        <img src={Me} alt="Me" className="topbar-logo" />
       
      </div>
      <div className="topbar-right">
        <a href="#home" className="topbar-item">Home</a>
        <a href="#about" className="topbar-item">About</a>
        <a href="#portfolio" className="topbar-item">Portfolio</a>
        <a href="#skills" className="topbar-item">Skills</a>
        <a href="#contact" className="topbar-item">Contact</a>
      </div>
    </nav>
  );
};

export default Topbar;
