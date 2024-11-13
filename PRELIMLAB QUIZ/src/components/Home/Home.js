import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './Home.css';
import Mypic from '../Images/mypic3.png';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text-section">
          <h1>Hello, I'm Fuentebella, Angelica</h1>
          <p>Third Year BSIT Student</p>
          <p>Showcasing my work, skills, and journey as a BSIT Student</p>
          <a href="...." className="home-btn" download>More</a>
        </div>
        <div className="image-section">
          <img src={Mypic} alt="Angelica" className="profile-image" />
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100076740417358" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
