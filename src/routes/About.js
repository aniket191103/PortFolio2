// About.js

import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import './About.css'; // Import CSS file for About component styles

function About() {
  return (
    <div>
      <Nav />
      <Hero2
        heading="ABOUT"
        text="I am a front-end developer passionate about creating beautiful and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive and interactive websites."
      />
      <div className="about-content">
        <h2>My Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Java</li>
        </ul>
        <h2>My Experience</h2>
        <p>While I haven't had formal work experience yet, I have been actively involved in personal projects and self-learning initiatives. I have developed various web applications and experimented with different technologies to enhance my skills.</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
