import React from 'react'
 

import './head.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#footer" className="footer__logo">
          Kah Jospen
        </a>

        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        

         
      </div>
    );
}

export default Footer
