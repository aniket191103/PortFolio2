import React from 'react';
import "./Footer.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color:"#fff", marginRight:"2rem" }} />
            <div> 
              <p>179,Indrapuram GMS Road</p>
              <p>Dehradun,Uttarakhand</p>
            </div>
          </div>
          <div className='email'>
            <div>
            <FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }} />
              <span>aniketsrivastava1911@gmail.com</span>
              <br/>
              <br/>
              <br/>
            <FaPhoneAlt size={"15px"}/> <span className='phn-no'>     7060126933</span>
             
            </div>
          </div>
        </div>
        <div className='right'>
          <h4>About Myself</h4>
          <p>Hello! I'm Aniket Srivastava, a dedicated and enthusiastic student currently pursuing a Bachelor of Technology in Computer Science and Engineering at DIT University, Dehradun, India. With a strong foundation in computer science principles and a passion for technology</p>
          <div className='social'>


            <br/>
            {/* Add links to LinkedIn and GitHub */}
            <a href="https://www.linkedin.com/in/aniket-srivastava-167011269/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} style={{ color:"#fff", marginRight:"2rem" }} />
            </a>
            <a href="https://github.com/aniket191103" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} style={{ color:"#fff", marginRight:"2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
