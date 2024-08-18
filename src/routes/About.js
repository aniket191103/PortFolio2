import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import './About.css'; // Import CSS file for About component styles
import profileImage from '../assets/profile.jpg'; // Import your profile image


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
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Java</li>
          <li>Git & GitHub</li>
          <li>Containerization</li>
          <li>Docker</li>
        </ul>
        <br/>
        <br/>

        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>

        <h2 className='My-exp'>My Experience</h2>
        <p className='Exp-para'>
          I am a full-stack developer with expertise in Java, JavaScript, HTML, CSS, React, Node.js, Express.js, MongoDB, MySQL, Docker, Git, and GitHub. My skill set includes both front-end and back-end technologies, and I excel in containerization.
        </p>
        <p className='Exp-para'>
          I take pride in my ability to work effectively within a team, leveraging my technical skills and collaborative approach to deliver high-quality solutions. My commitment to continuous learning and staying updated with the latest trends ensures that I can tackle new challenges and contribute to innovative projects.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
