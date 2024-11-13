import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a href="#facebook">Facebook</a>
          <a href="#Email">Email</a>
          <a href="#Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
