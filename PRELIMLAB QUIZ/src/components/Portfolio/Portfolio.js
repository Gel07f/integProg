import React from 'react';
import MultiCarousel from '../MultiCarousel/MultiCarousel';
import './Portfolio.css';
import Project1 from '../Images/Portfolio_midterm.png';
import Project2 from '../Images/prenter.PNG';
import Project3 from '../Images/web.PNG';
import Project4 from '../Images/PSD-HTML.PNG';
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Work</h2>
      <MultiCarousel />
      <div className="portfolio-items">
        <div className="portfolio-item">
          <img src={Project1} alt="Portfolio_midterm.png" />
          <h3>Project 1</h3>
          <p>Inro.Multimedia.</p>
          <a href="file:///C:/Users/Angelica/Documents/midexam/index.html" target="_blank" rel="noopener noreferrer">View More</a>
        </div>
        <div className="portfolio-item">
          <img src={Project2} alt="prenter.PNG" />
          <h3>Project 2</h3>
          <p>UI &UX.</p>
          <a href="file:///C:/Users/Angelica/Documents/midexam/index.html" target="_blank" rel="noopener noreferrer">View More</a>
        </div>
        <div className="portfolio-item">
          <img src={Project3} alt="web.PNG" />
          <h3>Project 3</h3>
          <p>Web Devlopment</p>
          <a href="file:///C:/Users/Angelica/Documents/midexam/index.html" target="_blank" rel="noopener noreferrer">View More</a>
        </div>
        <div className="portfolio-item">
          <img src={Project4} alt="PSD-HTML.PNG" />
          <h3>Project 4</h3>
          <p>Programming</p>
          <a href="file:///C:/Users/Angelica/Documents/midexam/index.html" target="_blank" rel="noopener noreferrer">View More</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
