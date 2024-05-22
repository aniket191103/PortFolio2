import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
// import Card from '../components/Card';
import Work from '../components/Work';

function Project() {
  return (
    <div>
      <Nav />
      <Hero2 
      heading="Projects"
      text ="Some of my most recent works"/>
      <Work/>
      <Footer />
    </div>
  );
}

export default Project;
