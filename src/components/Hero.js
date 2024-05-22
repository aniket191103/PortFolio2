import React from 'react';
import IntoImage from "../assets/intro-bg.jpg";
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntoImage} alt="Aniket Srivastava working on a computer" />
      </div>
      <div className='content'>
        <p>Hi, I'm  Aniket Srivastava,  a  freelancer</p>
        <h1>Full Stack Developer</h1>
        <div className="buttons">
          <Link to="/project" className='btn'>Projects</Link>
          <Link to="/contact" className='btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
